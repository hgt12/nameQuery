Page({
  data: {
    surname: '',
    origin: ''
  },
  onSurnameInput(e) {
    this.setData({ surname: e.detail.value });
  },
  onQuery() {
    // 调用第三方API查询姓氏起源
    const response = await wx.request({
      url: 'https://www.juhe.cn/docs/api/id/756', // 替换为真实的第三方接口
      data: { surname: this.data.surname }
    });
    if (response.statusCode === 200) {
      this.setData({ origin: response.data.origin });
    } else {
      wx.showToast({ title: '查询失败', icon: 'none' });
    }
  }
});
