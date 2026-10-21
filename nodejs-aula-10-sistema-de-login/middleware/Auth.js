// Este middleware será invocado a cada requisição do usuário
// em rotas específicas

function Auth(req, res, next) {
    // Verificando se a sessão de usuário existe
    if (req.session.user != undefined) {
        // Prossiga
        next();
    
    // Se a sessão não existir...
    } else {
        // Chama a página de login
        res.render("login", {
            loggedOut: true,
        });
    }
}

export default Auth;