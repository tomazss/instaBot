document.addEventListener('DOMContentLoaded', () => {

    Updatedados();
});

function Updatedados() {
    fetch("http://localhost:8080/api/all").then(res => {
        return res.json()
    }).then(json => {
        let usersElements = '';
        let users = JSON.parse(json);
        users.forEach((user) => {

            let userElement = `${user.email}
                                ${user.senha}
                                  ${user.url}`
            usersElements = userElement;


        });
        document.getElementById("users").inputMode = usersElements;


    })
}

function newUser(){

    let email = document.getElementById('userEmail').value;
    let senha = document.getElementById('userSenha').value;
    let url = document.getElementById('userUrl').value;

    let user = { email, senha, url };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(user)
    }
    fetch("http://localhost:8080/api/new", options).then(res => {
        console.log(JSON.stringify(res));

        Updatedados();
       
    


    });
    fetch("http://localhost:8080/api/puppeteer",options).then(res => {
        console.log(JSON.stringify(res));




    });
    document.getElementById('userEmail').value= "";
    document.getElementById('userSenha').value ="";
    document.getElementById('userUrl').value = "";
    Updatedados();
}