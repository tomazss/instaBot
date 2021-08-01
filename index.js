const express = require('express');
const puppeteer = require('puppeteer-core');
const users = require('./models/users')
const apiRoute = require('./router/api')
const app = express();
const path = require('path');
const port = 3333;

// craindo a rota api 

// usar pagina html com caminho da pastas paa acessar os arquivos path.join junta as partes de um caminho  v__dirname diretorio do projeto mais concatenado com a minha pasta public
app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/puppeteer', apiRoute, async function logar() {
    let email = (users.users[0]);
    let senha = (users.users[1]);
    let url = (users.users[2]);
    let comentarios = (users.users[3]);
    let tempo = (users.users[4]);
    let pausa = (users.users[5]);
    let comentar = (users.users[6]);
    console.log(comentarios, tempo, pausa);
    const browser = await puppeteer.launch({
            
       
        defaultViewport: null,
       
        args : [
            '--window-size=300,500',
        
          ], 
        headless: false,
        
       
        slowMo: 380,
       
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome',
       
            
          
    });
    
        const page = await browser.newPage();
        
   
 
    
    await page.goto('https://www.instagram.com/'); // vai para a pagina de login
    await page.waitForTimeout(4000)

    function segundos(valor) {
        let mile = 1000;
        let result = valor * mile;
        return Math.floor(Math.random() * 9000 + result);
    };
    function minutos(valor) {
        let mile = 1000 * 60;
        let result = valor * mile;
        return Math.floor(result);
    };

    



//https://www.instagram.com/p/CR76FlgscGW/ tomazsila487
//https://www.instagram.com/p/CR5U8glM6Wc/ tz_sampaio3
//https://www.instagram.com/p/CR74IwSsWXg/ tom__sampaio
//https://www.instagram.com/p/CR75-IOMKZ2/ samptz3
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
            await page.click('._15y0l button')
            await page.waitForTimeout(2000);
            await page.type('.Ypffh', comentar[Math.floor(Math.random() * comentar.length)]); //sorteia o array random

            await page.waitForTimeout(2000);

            //clica no botão
            await page.keyboard.press('Enter')
            // await page.click('_15y0l')
            await page.waitForTimeout(1000)
            async function comentarioBloqueado(page, selector) {
                const bloqueio = await page.$(selector)
                if (bloqueio) {
                    console.log(email, 'comentario bloqueado', x)
                    await page.waitForTimeout(2000)
                    await page.click('.sqdOP.yWX7d._8A5w5.ZIAjV')
                    
                    await page.waitForTimeout(minutos(pausa) * 20)

                 

                   
                    await page.goto(url);

                 

                   


                    await comentarioBloqueado(page, selector)
                } else {

                    // comenta o array selecionado



                    await page.waitForTimeout(segundos(tempo));
                }


            }
            await comentarioBloqueado(page, '.gxNyb')



        }
        console.log(email, x - 1)
        await page.waitForTimeout(minutos(pausa));



    }
    comentario();


    await page.waitForNavigation();

    setInterval(comentario, minutos(pausa) + (segundos(tempo) + 10000) * comentarios);


    await page.waitForNavigation();



    //fecha o browse    // await browser.close();
});

app.listen(process.env.PORT || port);