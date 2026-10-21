import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

// Importando o model
import Usuario from "../model/Usuario.js";

// Rota de LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  // Buscando o usuário no banco

  Usuario.findOne({ where: { email: email } }).then(usuario => {
    // SE O USUARIO EXISTIR
    if (usuario != undefined) {
        // VALIDANDO A SENHA
        const senhaCorreta = bcrypt.compareSync(password, usuario.password)
        // Se a senha for VÁLIDA
        if (senhaCorreta) {
            // Autoriza o login e cria uma sessão para o usuário
            req.session.user = {
              id: usuario.id,
              email: usuario.email,
            }

            // TESTANDO A SESSÃO:
            // res.send(`Usuário logado: <br> ID: ${req.session.user['id']} 
            //   <br> E-mail: ${req.session.user['email']}`);

            res.redirect("/");
        // Se a senha for INVÁLIDA
        } else {
            res.send(`Senha inválida! <br> Verifique os dados e tente novamente! <br>
                <a href="/login">Voltar</a>`)
        }
    // Caso o usuário não exista
    } else {
        res.send(`Usuário não existe! <br> Verifique os dados e tente novamente! <br>
                <a href="/login">Voltar</a>`)
    }
  })
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  // Limpa a sessão
  req.session.user = undefined;
  // Redireciona para a home
  res.redirect("/");
})

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
  });
});

router.post("/cadastro/novo", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  // Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // usuario não encontrado
    if (usuario == undefined) {
      // Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Enviando para o banco de dados
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(`Erro ao criar a conta. Erro: ${error}`);
        });
    }
    // USUÁRIO JÁ CADASTRADO
    else {
      res.send(`Usuário já cadastrado! <br> Verifique os dados e tente novamente. <br> 
            <a href="/login">Voltar</a>`);
    }
  });
});

export default router;
