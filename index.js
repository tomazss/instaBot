const PORT = 8080;
const express = require('express');
const puppeteer = require('puppeteer');
const users = require('./models/users')
const apiRoute = require('./router/api')
const app = express();
const path = require('path');

// craindo a rota api 

// usar pagina html com caminho da pastas paa acessar os arquivos path.join junta as partes de um caminho  v__dirname diretorio do projeto mais concatenado com a minha pasta public
app.use('/api',apiRoute)
app.use( express.static(path.join(__dirname, "public")));


app.use( '/api',apiRoute, async function logar() {
let email = JSON.stringify(users.users[0])
let senha = JSON.stringify(users.users[1])
let url = JSON.stringify(users.users[2])
const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');// vai para a pagina de login
  await page.waitForTimeout(4000)

  

  await page.type('[name="username"] ', email.replace('"', "").replace('email',"").replace('{', "").replace(':',"").replace('""',"").replace('}',"").replace('"',""));
  await page.type('[name="password"]', senha.replace('"', "").replace('password',"").replace('{', "").replace(':',"").replace('""',"").replace('}',"").replace('"',""));
  await page.waitForTimeout(4000);//tempo para ir para o proximo comando

  await page.click('.sqdOP.L3NKy.y3zKF');
  await page.waitForTimeout(4000);
  //vai para a postagem especifica
  await page.goto(url.replace('"', "").replace('url',"").replace('{', "").replace(':',"").replace('""',"").replace('}',"").replace('"',""));
  await page.waitForTimeout(3000);
  const arr = ['Eu quero',  'Já ganhei', 'Eu', 'dessa vez eu ganho 🙌🙌','Fé que vou ganhar', 'É meu', 'A', 'Fé', 'sorte', 'B', 'C','👏👏👏', '👏👏👏👏👏👏👏👏' ,'👏👏👏👏🙌🙌🙌','🙌🙌🙌🙌🙌🙌','😂😂😂😂😂😂😂','🔥🔥🔥🔥🔥🔥','😮😮😮😮😮😮','😊😊😊😊🙌🙌🙌','😍😍😍😍😍😍😍😍','😮😮😮🙌🙌🙌🙌🙌', 'Rsrsrs']

  for (let x = 1; x < 400; x++) {
    //sorteia o array random
    const item = arr[Math.floor(Math.random() * arr.length)];

    // comenta o array selecionadp
    await page.type('.Ypffh', item);
    await page.waitForTimeout(3000);

    //clica no botão
    await page.click('[type="submit"]')

    console.log(x)
    await page.waitForTimeout(38000);
    

  }

  await page.waitForNavigation();




   




  //fecha o browser
  // await browser.close();
});



app.listen(PORT, () => {
    console.log("servidor rodadndo  http://localhost:", PORT)

})