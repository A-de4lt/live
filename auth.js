// 初始化数据库：如果没有数据，则创建默认管理员
function initSystem() {
    if (!localStorage.getItem('platform_users')) {
        const initialData = [
            {
                id: 1001,
                username: "admin",
                password: "123", // 默认密码
                role: "admin",
                createTime: new Date().toLocaleString()
            }
        ];
        localStorage.setItem('platform_users', JSON.stringify(initialData));
        console.log("系统初始化成功：管理员账号 admin 已创建");
    }
}

// 检查登录权限 (用于后台页面防止非法进入)
function checkAuth(requiredRole) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user || user.role !== requiredRole) {
        alert("未经授权，请先登录");
        window.location.href = 'index.html';
    }
    return user;
}

initSystem();
