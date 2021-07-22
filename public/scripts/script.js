let comentar = []

function adicionar(){
    let comentario = document.getElementById('userComentar').value;
    
    
    
 comentar.push(comentario)
 
 document.getElementById("res").innerHTML = `${comentar}  `;
 document.getElementById('userComentar').value = "";
 
}
function excluir(){
    
    
    
    comentar.pop()
    document.getElementById("res").innerHTML = `${comentar}  `;
    
   }


function newUser() {

    let email = document.getElementById('userEmail').value;
    let senha = document.getElementById('userSenha').value;
    let url = document.getElementById('userUrl').value;
    let comentarios = document.getElementById('userPausa').value;
    let tempo = document.getElementById('userTempo').value;
    let pausa = document.getElementById('userPausaComent').value;
    


    let user = { email, senha, url, comentarios, tempo, pausa,comentar };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(user)
    }
    fetch("http://18.229.150.25/:3000/api/new", options).then(res => {
        console.log(JSON.stringify(res));
    });
    fetch("http://18.229.150.25/:3000/api/puppeteer", options).then(res => {
        console.log(JSON.stringify(res));
    });
    document.getElementById('userEmail').value = "";
    document.getElementById('userSenha').value = "";
    document.getElementById('userUrl').value = "";
    document.getElementById('userPausa').value = "";
    document.getElementById('userTempo').value = "";
    document.getElementById('userPausaComent').value = "";
    document.getElementById('res').value = "";

}
