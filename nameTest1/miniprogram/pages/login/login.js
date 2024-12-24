Page({
  data: {
    acount: "",
    passsword: "",
  },
  onUsernameInput(e) {
    this.setData({ acount: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },
  ulogin(e) {
    const {acount, password } = this.data;
    if (acount === 'admin' && password === '123456') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      });
      wx.redirectTo({
        url: '/pages/home/home',
      });
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'error',
      });
    }
  },
  uregister(e) {
    console.log("e");
  },
})