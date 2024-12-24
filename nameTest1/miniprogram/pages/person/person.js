// pages/person/person.js
Page({
  data: {
    username: '',
    avatarUrl: '/images/default-avatar.png'
  },
  onLoad() {
    // 从云数据库或本地缓存中获取用户信息
  },
  onUploadAvatar() {
    wx.chooseImage({
      count: 1,
      success: async (res) => {
        const filePath = res.tempFilePaths;
        // 上传图片到云存储
        const result = await wx.cloud.uploadFile({
          cloudPath: `avatar/${Date.now()}.jpg`,
          filePath
        });
        const fileID = result.fileID;
        // 更新用户头像
        await wx.cloud.callFunction({
          name: 'updateAvatar',
          data: { fileID }
        });
        this.setData({ avatarUrl: result.tempFileURL });
      }
    });
  }
});
