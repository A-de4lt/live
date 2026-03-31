// 初始化模拟数据库
const initDatabase = () => {
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            { id: 1, username: 'admin', password: '123', role: 'admin', createTime: '2023-01-01' },
            { id: 2, username: 'user1', password: '123', role: 'user', createTime: '2023-05-20' }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
};

// 获取当前登录用户
const getCurrentUser = () => JSON.parse(sessionStorage.getItem('currentUser'));

// 退出登录
const logout = () => {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
};

initDatabase();
