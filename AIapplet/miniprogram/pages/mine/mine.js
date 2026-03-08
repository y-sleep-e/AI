const app = getApp()
Page({
  data: {
    userRole: 'parent',
    userInfo: {}
  },

  onLoad() {
    // 同步全局角色
    this.setData({
      userRole: app.globalData.userRole
    })
  },

  // 切换家长/教员角色
  switchRole() {
    const newRole = this.data.userRole === 'parent' ? 'teacher' : 'parent'
    this.setData({ userRole: newRole })
    app.globalData.userRole = newRole
    wx.showToast({ title: `已切换为${newRole === 'parent' ? '家长' : '教员'}角色`, icon: 'success' })
  },

  // 跳转会员页面
  goVip() {
    wx.showToast({ title: '会员功能开发中', icon: 'none' })
  },

  // 跳转教员注册
  goTeacherRegister() {
    wx.showToast({ title: '教员注册页面开发中', icon: 'none' })
  },

  // 跳转我的需求
  goDemand() {
    wx.showToast({ title: '我的需求页面开发中', icon: 'none' })
  },

  // 关于我们
  goAbout() {
    wx.showModal({
      title: '关于我们',
      content: '学途智配是AI赋能大学生家教精准匹配平台，专注为家长与大学生搭建高效、可信的家教对接桥梁，助力教育公平与大学生实践成长。',
      showCancel: false
    })
  },

  // 退出登录
  logout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已退出登录', icon: 'success' })
        }
      }
    })
  }
})