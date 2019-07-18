// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: "",
    addBuyersId: '',
    isShowClearIcon: false,
    loading: false, // 正在加载
    loadingHasData: true, //是否还有有数据
    tapUrl: '/wxapp/buyers/pageBuyersForAdmin',
    size: 10,
    page: 0,
    dataList: [],
    erronText: "",
    isShowAddPersonView: false,
    isShowErronText: false,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0, // tab切换
    topTapHeight: '',
    topSearchHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
 //   that.fetchSearchList("", true);
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    const query = wx.createSelectorQuery().in(this);
    query.select('.swiper-tab').boundingClientRect(function (res) {
      that.setData({
        topTapHeight: res.height,
      });
    })
    
    query.exec()
  },
  /**
    * 点击tab切换
    */
  swichNav: function (e) {
    // 0 ,1 , 2, 3
    var that = this;
    var tapId = e.target.dataset.current;
    if (this.data.currentTab === tapId) {
      return false;
    } else {
      this.setData({
        currentTab: tapId,
        page: 0,
        dataList: [],
      });
    }
  },
  /**
  * 滑动切换tab
  */
  swiperChange(e) {
    var that = this;
    var tapId = e.detail.current;
    if (this.data.currentTab === tapId) {
      return false;
    } else {
      that.setData({
        currentTab: tapId,
        page: 0,
        dataList: [],
      });
      if (tapId == 0) {
        that.setData({
          tapUrl: '/wxapp/buyers/pageBuyersForAdmin'
        })
      //  this.fetchSearchList("", true);
      } else if (tapId == 1) {
        that.setData({
          tapUrl: '/wxapp/member/pageBuyersOrExhibitoMember'
        })
     //   this.fetchSearchList("BUYERS", true);
      } else if (tapId == 2) {
        that.setData({
          tapUrl: '/wxapp/exhibitor/pageExhibitoForAdmin'
        })
       // this.fetchSearchList();
      } else if (tapId == 3) {
        that.setData({
          tapUrl: '/wxapp/member/pageBuyersOrExhibitoMember'
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})