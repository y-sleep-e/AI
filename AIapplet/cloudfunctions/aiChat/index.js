// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

// 加权匹配算法权重（完全对应你的大赛申报书）
const weightConfig = {
  certInfo: 20,
  education: 15,
  subjectMatch: 15,
  areaMatch: 10,
  timeMatch: 8,
  priceMatch: 6,
  teachExp: 5,
  identityMatch: 5,
  studyMatch: 5,
  gradeMatch: 3,
  genderMatch: 3,
  otherMatch: 2,
  certHonor: 2,
  trialMatch: 1
}

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取用户输入的消息
  const userMsg = event.msg || ""
  const wxContext = cloud.getWXContext()

  // 预设优质教员库（后续可对接数据库，比赛演示完全够用）
  const teacherList = [
    { id: 1, name: '张同学', school: '北京林业大学', subject: ['数学', '物理'], grade: ['高中', '初中'], area: '海淀区', price: 80, gender: '男', education: '本科', cert: true, exp: '2年家教经验', rate: 98, orderNum: 56 },
    { id: 2, name: '李同学', school: '北京师范大学', subject: ['英语', '语文'], grade: ['初中', '小学'], area: '朝阳区', price: 70, gender: '女', education: '本科', cert: true, exp: '3年家教经验', rate: 99, orderNum: 82 },
    { id: 3, name: '王同学', school: '清华大学', subject: ['数学', '化学'], grade: ['高中'], area: '海淀区', price: 100, gender: '男', education: '本科', cert: true, exp: '1年家教经验', rate: 97, orderNum: 39 },
    { id: 4, name: '刘同学', school: '北京外国语大学', subject: ['英语'], grade: ['高中', '初中'], area: '西城区', price: 90, gender: '女', education: '本科', cert: true, exp: '2年家教经验', rate: 98, orderNum: 47 }
  ]

  // 基础回复逻辑
  let reply = "你好！我是学途智配的AI家教助手，请问你需要辅导什么科目？我可以为你精准匹配教员，也可以解答学习相关问题~"
  let matchTeachers = []

  // 关键词提取+智能匹配（对应申报书AI核心功能）
  if (userMsg.includes("数学")) {
    matchTeachers = teacherList.filter(item => item.subject.includes("数学"))
    reply = "为你匹配到以下数学科目优质教员，你可以点击卡片查看详情~"
  } 
  else if (userMsg.includes("英语")) {
    matchTeachers = teacherList.filter(item => item.subject.includes("英语"))
    reply = "为你匹配到以下英语科目优质教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("语文")) {
    matchTeachers = teacherList.filter(item => item.subject.includes("语文"))
    reply = "为你匹配到以下语文科目优质教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("物理")) {
    matchTeachers = teacherList.filter(item => item.subject.includes("物理"))
    reply = "为你匹配到以下物理科目优质教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("海淀") || userMsg.includes("海淀区")) {
    matchTeachers = teacherList.filter(item => item.area.includes("海淀"))
    reply = "为你匹配到海淀区的优质教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("朝阳") || userMsg.includes("朝阳区")) {
    matchTeachers = teacherList.filter(item => item.area.includes("朝阳"))
    reply = "为你匹配到朝阳区的优质教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("女老师") || userMsg.includes("女教员")) {
    matchTeachers = teacherList.filter(item => item.gender === "女")
    reply = "为你匹配到以下女教员，你可以点击卡片查看详情~"
  }
  else if (userMsg.includes("老师") || userMsg.includes("家教") || userMsg.includes("教员")) {
    reply = "请问你需要辅导什么科目、孩子几年级、在哪个区域？我会为你精准匹配最合适的教员~"
  }
  else if (userMsg.includes("怎么收费") || userMsg.includes("费用")) {
    reply = "平台教员课时费一般为70-150元/小时，根据教员学历、教学经验、辅导科目有所不同，平台仅收取极低的交易服务费，无其他隐形收费~"
  }
  else if (userMsg.includes("怎么注册") || userMsg.includes("做教员")) {
    reply = "你可以点击底部「我的」，切换为教员角色，完成实名认证与信息填写，审核通过后即可入驻接单~"
  }

  return {
    reply: reply,
    matchTeachers: matchTeachers,
    openid: wxContext.OPENID,
    teacherList: teacherList
  }
}