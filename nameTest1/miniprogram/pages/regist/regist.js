Page({
  data: {
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    genders: ['男', '女'],
    genderIndex: 0,
    birthdate: '请选择出生日期'
  },
  onUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },
  onConfirmPasswordInput(e) {
    this.setData({ confirmPassword: e.detail.value });
  },
  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },
  onGenderChange(e) {
    this.setData({ genderIndex: e.detail.value });
  },
  onDateChange(e) {
    this.setData({ birthdate: e.detail.value });
  },
  onRegist() {
    // 收集表单数据
    // 调用云函数或API保存数据到云数据库
    // 显示注册成功或失败的提示
    if (this.data.password !== this.data.confirmPassword) {
      wx.showToast({ title: '两次密码不一致', icon: 'none' });
      return;
    }
    const db = wx.cloud.database();
    try {
      await db.collection('user').add({
        data: {
          username: this.data.username,
          password: this.data.password,
          phone: this.data.phone,
          gender: this.data.genders[this.data.genderIndex],
          birthdate: this.data.birthdate
        }
      });
      wx.showToast({ title: '注册成功', icon: 'success' });
      wx.navigateBack();
    } catch (e) {
      wx.showToast({ title: '注册失败', icon: 'none' });
    }
  }
});
