// 云函数入口文件
const cloud = require('wx-server-sdk')
var env = 'hsf-blog-product-jqt54';  // 正式环境
// var env = 'cfxy-mall-pxwnv'; // 测试环境
cloud.init({
  env: env
})
const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
  var dbName = event.dbName; //集合
  try {
    return await db.collection(dbName).where({
      article_id: event.article_id,
      openid:event.openid
    }).update({
      data: {
        visit_time: event.visit_time
      }
    }).then(res => {
      return res;
    })
  } catch (e) {
    console.error(e)
  }
}