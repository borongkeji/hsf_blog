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
  try {
    return await db.collection('browsing_volume').add({
      data: {
       // _id: event._id,
        visit_time: event.visit_time,
        article_id: event.article_id,
        openid: event.openid,
        nickName: event.nickName,
        class_img_url: event.class_img_url,
        title: event.title,
        create_time: event.create_time,
        update_time: event.update_time,
        summary: event.summary,
        // poll_count: event.poll_count,
        // comment_count: event.comment_count,
        // read_count: event.read_count,
        class_id: event.class_id,
        class_name: event.class_name,
        image_url: event.image_url,
      }
    }).then(res => {
      return res;
    })
  } catch (e) {
    console.error(e)
  }
}