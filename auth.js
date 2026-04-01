document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单提交

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 简单的身份验证示例
    ifusername === 'admin' && password === 'admin123') {
        // 管理员登录
        window.location.href = 'admin_dashboard.html'; 跳转到管理员后台页面
    } else if (username === 'user' && password === 'user') {
        // 普通用户登录
        window.location.href = 'user_dashboard.html'; // 跳转到普通用户页面
    } else {
        //失败
        document.getElementById('errorMessage').innerText = '账号或密码错误，请重试。';
    }
});
