Page({
  data: {
    inputVal: "",
    chatList: [],
    lastId: "",
    isLoading: false
  },

  // 输入框内容监听
  onInput(e) {
    this.setData({ inputVal: e.detail.value })
  },

  // 快捷问题发送
  sendQuickMsg(e) {
    const msg = e.currentTarget.dataset.msg
    this.setData({ inputVal: msg }, () => {
      this.sendMsg()
    })
  },

  // 发送消息+调用AI云函数
  sendMsg() {
    const msg = this.data.inputVal.trim()
    if (!msg) return
    if (this.data.isLoading) return

    // 先把用户消息加入对话列表
    let chatList = this.data.chatList
    chatList.push({ role: 'user', content: msg })
    this.setData({
      chatList,
      inputVal: "",
      isLoading: true,
      lastId: `item-${chatList.length - 1}`
    })

    // 调用云函数获取AI回复
    wx.cloud.callFunction({
      name: 'aiChat',
      data: { msg: msg },
      success: (res) => {
        const reply = res.result.reply
        const teachers = res.result.matchTeachers || []
        // 把AI回复加入对话列表
        chatList.push({
          role: 'ai',
          content: reply,
          teachers: teachers
        })
        this.setData({
          chatList,
          lastId: `item-${chatList.length - 1}`
        })
      },
      fail: (err) => {
        console.error('AI调用失败', err)
        chatList.push({
          role: 'ai',
          content: '抱歉，网络异常，请稍后再试~'
        })
        this.setData({ chatList })
      },
      complete: () => {
        // 关闭加载状态
        this.setData({ isLoading: false })
      }
    })
  }
})