const app = getApp()
Page({
  data: {
    teacherList: []
  },

  onLoad() {
    // 加载全局教员数据
    this.setData({
      teacherList: app.globalData.teacherList
    })
  },

  // 跳转我要请家教
  goToParent() {
    wx.switchTab({ url: '/pages/teacherStudent/teacherStudent' })
  },

  // 跳转我要做教员
  goToTeacher() {
    wx.switchTab({ url: '/pages/teacherStudent/teacherStudent' })
  },

  // 跳转AI智学中枢
  goToAI() {
    wx.switchTab({ url: '/pages/aiCenter/aiCenter' })
  }
})