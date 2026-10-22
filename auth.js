// 校验登录状态，没有登录就跳转到登录页 login.html
function checkAccess() {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
        location.href = "login.html";
        return null;
    }
    try {
        return JSON.parse(userStr);
    } catch (e) {
        localStorage.removeItem("user");
        location.href = "login.html";
        return null;
    }
}

// 退出登录：清除本地存储，跳转登录页
function logout() {
    localStorage.removeItem("user");
    location.href = "login.html";
}
