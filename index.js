// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const p1 = new Promise((resolve) => {
  wx.login({
    success: (res) => resolve(res.code),
  });
});

const code = await p1();

wx.getUserProfile({
  lang: 'zh_CN',
  desc: '用户登录',
  success: (res) => {
    console.log(res);
  },
});
