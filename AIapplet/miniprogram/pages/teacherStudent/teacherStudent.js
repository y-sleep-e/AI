const app = getApp()
Page({
  data: {
    currentTab: 'teacher',
    teacherList: [],
    parentList: [
      { id: 1, studentName: '三年级同学', grade: '小学三年级', publishTime: '3小时前', subject: '语文数学英语', area: '海淀区', desc: '基础薄弱，希望周末两天补课，需要有耐心的女老师', price: 80 },
      { id: 2, studentName: '初三同学', grade: '初中三年级', publishTime: '1天前', subject: '英语', area: '朝阳区', desc: '英语基础差，面临中考，需要有中考辅导经验的老师', price: 100 },
      { id: 3, studentName: '高一同学', grade: '高中一年级', publishTime: '2天前', subject: '数学', area: '西城区', desc: '数学基础差，需要每周六下午辅导，优先双一流院校老师', price: 120 }
    ]
  },

  onLoad() {
    // 加载全局教员数据
    this.setData({
      teacherList: app.globalData.teacherList
    })
  },

  // 切换学员/教员tab
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ currentTab: tab })
  },

  // 搜索功能
  onSearch(e) {
    const keyword = e.detail.value
    // 后续可扩展精准搜索逻辑
  },

  // 打开筛选
  openFilter() {
    wx.showToast({ title: '筛选功能开发中', icon: 'none' })
  },

  // 跳转私信
  goChat() {
    wx.switchTab({ url: '/pages/message/message' })
  },

  // 跳转发布页面
  goPublish() {
    wx.showToast({ title: '信息填写页面开发中', icon: 'none' })
  }
})