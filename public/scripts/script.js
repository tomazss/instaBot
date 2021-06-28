function newUser() {

    let email = document.getElementById('userEmail').value;
    let senha = document.getElementById('userSenha').value;
    let url = document.getElementById('userUrl').value;

    let user = { email, senha, url };
    console.log(user)

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),

    }
    fetch("http://localhost:8080/api/new", options).then(res => {
        console.log(res);
        document.getElementById('userEmail').value = "";
        document.getElementById('userSenha').value = "";
        document.getElementById('userUrl').value = "";
    });
    fetch("http://localhost:8080/api/puppeteer", options).then(res => {
        console.log(JSON.stringify(res));
    });

}