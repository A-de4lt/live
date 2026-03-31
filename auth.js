// 1. 初始化模拟数据库
if (!localStorage.getItem('sys_users')) {
    const defaultUsers = [
        { username: "admin", password: "123", role: "admin" },
        { username: "user1", password: "123", role: "user" }
    ];
    localStorage.setItem('sys_users', JSON.stringify(defaultUsers));
}

// 2. 登录函数
function login(u, p) {
    const users = JSON.parse(localStorage.getItem('sys_users'));
    const user = users.find(x => x.username === u && x.password === p);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    return null;
}

// 3. 权限检查
function checkAccess(role) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user || (role && user.role !== role)) {
        window.location.href = 'index.html';
    }
    return user;
}
