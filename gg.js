function minutos(valor) {
    let mile = 1000;
    let result = valor * mile;
    return Math.floor(Math.random() * result + 3000);
};
console.log(minutos(20));