App({
  onLaunch() {
    // 云开发环境初始化
    if (!wx.cloud) {
      wx.showModal({ title: '提示', content: '请使用2.2.3以上基础库使用云能力', showCancel: false })
    } else {
      wx.cloud.init({
        // 这里替换成你自己的云开发环境ID
        env: 'cloud1-4g506nvub5e23f25',
        traceUser: true
      })
    }

    // 全局存储用户角色、教员库数据
    this.globalData = {
      userRole: 'parent', // 默认家长角色，可切换为teacher教员
      userInfo: null,
      teacherList: [
        { id: 1, name: '张同学', school: '北京林业大学', subject: '高中数学', price: 80, rate: 98, orderNum: 56, area: '海淀区', grade: '高中/初中', exp: '2年家教经验', gender: '男', avatar: '' },
        { id: 2, name: '李同学', school: '北京师范大学', subject: '初中英语', price: 70, rate: 99, orderNum: 82, area: '朝阳区', grade: '初中/小学', exp: '3年家教经验', gender: '女', avatar: '' },
        { id: 3, name: '王同学', school: '清华大学', subject: '高中物理', price: 100, rate: 97, orderNum: 39, area: '海淀区', grade: '高中', exp: '1年家教经验', gender: '男', avatar: '' },
        { id: 4, name: '刘同学', school: '北京外国语大学', subject: '高中英语', price: 90, rate: 98, orderNum: 47, area: '西城区', grade: '高中/初中', exp: '2年家教经验', gender: '女', avatar: '' }
      ]
    }
  }
})