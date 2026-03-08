Page({
  data: {
    locationText: '正在定位...',
    locationTip: '',
    teachers: [
      {
        id: 1,
        name: '张老师',
        school: '清华大学',
        subject: '高数 / 物理',
        grade: '高二',
        experience: '教龄 6 年',
        tag: '明星教员',
        rating: '⭐⭐⭐⭐⭐',
        price: 188,
      },
      {
        id: 2,
        name: '李老师',
        school: '北京大学',
        subject: '英语 / 语文',
        grade: '初三',
        experience: '教龄 4 年',
        tag: '已接单 120 条',
        rating: '⭐⭐⭐⭐',
        price: 168,
      },
      {
        id: 3,
        name: '王老师',
        school: '浙江大学',
        subject: '化学 / 生物',
        grade: '高一',
        experience: '教龄 3 年',
        tag: '好评率 98%',
        rating: '⭐⭐⭐⭐⭐',
        price: 198,
      },
    ],
  },

  onLoad() {
    this.getLocation();
  },

  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        // 这里可接入真实的逆地理解析服务，获取城市名称。
        // 演示中默认显示北京。
        this.setData({
          locationText: '北京',
          locationTip: '',
        });
      },
      fail: () => {
        this.setData({
          locationText: '定位失败',
          locationTip: '请允许定位以获取更好服务',
        });
      },
    });
  },

  gotoTeacherStudent() {
    wx.switchTab({
      url: '/pages/teacherStudent/teacherStudent',
    });
  },

  gotoAICenter() {
    wx.switchTab({
      url: '/pages/aiCenter/aiCenter',
    });
  },

  bookTeacher(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: `已预约教员 ${id}`,
      icon: 'success',
      duration: 1200,
    });
  },
});
