const express = require('express');
const puppeteer = require('puppeteer-core');
const users = require('./models/users')
const apiRoute = require('./router/api')
const app = express();
const path = require('path');
const port = 3000;

// craindo a rota api 

// usar pagina html com caminho da pastas paa acessar os arquivos path.join junta as partes de um caminho  v__dirname diretorio do projeto mais concatenado com a minha pasta public
app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")));


app.use('/api', apiRoute, async function logar() {
    let email = (users.users[0]);
    let senha = (users.users[1]);
    let url = (users.users[2]);
    let comentarios = (users.users[3]);
    let tempo = (users.users[4]);
    let pausa = (users.users[5]);
    let comentar = (users.users[6]);
    console.log(comentarios, tempo, pausa);
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 380,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://www.instagram.com/'); // vai para a pagina de login
    await page.waitForTimeout(4000)

    function segundos(valor) {
        let mile = 1000;
        let result = valor * mile;
        return Math.floor(Math.random() * 3000 + result);
    };
    function minutos(valor) {
        let mile = 1000 * 60;
        let result = valor * mile;
        return Math.floor(result);
    };

    //Eu quero ,dessa vez eu ganho,Eu,É meu,meuuu,Fé que vou ganhar,Já é meu Sorte Eu 
    // quero ganhar esse sorteio  Vamos lá
    //❤️ ❤🎮Eu quero ❤🎮,Ok , 🙌 😅 😮 👏  🔥✅👽👽 🚀🔝 😛😜😝
    //🌞 🍎 👼👼💜🖱🖥😎🔔🛐😳🥰🔥❤️🎉🎃😍🪀🤑🎯🤗

   
    





    await page.type('[name="username"] ', email);
    await page.type('[name="password"]', senha);
    await page.waitForTimeout(4000); //tempo para ir para o proximo comando

    //clica no botão
    await page.keyboard.press('Enter')
    //await page.click('.sqdOP.L3NKy.y3zKF');

    await page.waitForTimeout(4000);
    //vai para a postagem especifica
    await page.goto(url);
    await page.waitForTimeout(3000);



    async function comentario() {
        let x = 1
        
        for (x; x <= comentarios; x++) {



            // comenta o array selecionadp
            await page.type('.Ypffh', comentar[Math.floor(Math.random() * comentar.length)]); //sorteia o array random

            await page.waitForTimeout(3000);

            //clica no botão
            await page.keyboard.press('Enter')
            // await page.click('[type="submit"]')
            await page.waitForTimeout(1000)
            async function comentarioBloqueado(page, selector) {
                const bloqueio = await page.$(selector)
                if (bloqueio) {
                    console.log(email,'comentario bloqueado')
                    await page.waitForTimeout(2000)
                    await page.goto(url);
                    await page.waitForTimeout(minutos(pausa) + (segundos(tempo) + 10000) * comentarios)
                    await comentarioBloqueado(page, selector)
                } else {

                    // comenta o array selecionado



                    await page.waitForTimeout(segundos(tempo));
                }


            }
            await comentarioBloqueado(page, '.gxNyb')


            await page.waitForTimeout(segundos(tempo));
        } 
        console.log(email, x - 1)
         
        

    }
    comentario();


    await page.waitForNavigation();

    setInterval(comentario, minutos(pausa) + (segundos(tempo) + 10000) * comentarios);


    await page.waitForNavigation();



    //fecha o browse    // await browser.close();
});

app.listen(process.env.PORT || port);