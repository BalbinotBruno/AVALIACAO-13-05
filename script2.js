function entrar() {
    let emailCorreto = 'bruno@gmail.com'
    let senhaCorreta = 'banana123'
    let resDiv = document.getElementById('res')

    let email = document.getElementById('login').value
    let password = document.getElementById('senha').value
    let msg

    for (tentativas = 1; tentavas < 3; tentivas++) {
        if (tentativas >= 3) {
            msg = `Voce tentou logar muitas vezes, tente novamente mais tarde!`
            break
        }
        if (emailCorreto != email || senhaCorreta != password) {
            msg = 'Login ou senha incorreto!'

        } else {
            msg = 'Voce conseguiu Entrar com Sucesso.'
        }
        resDiv.innerHTML = msg
    }
}