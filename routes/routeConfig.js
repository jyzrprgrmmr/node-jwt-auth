const authRoutes = {
    'POST /user/login' : 'UserController.login',
};

const userRoutes = {
    'POST /user' : 'UserController.create',
};



module.exports = { auth: authRoutes, user: userRoutes};