/*Lucas Alves Freitas tem 27 anos , pesa 90kg tem 1.73 de altura e seu imc é de ...
Lucas Alves nasceu em 1995 */

const nome = 'Lucas';
const sobreNome = 'Alves Freitas';
const idade = 27;
const peso = 90;
const alturaEmM= 1.73;
const ano = 2022;
let anoNascimento = (idade-ano);
let imc = peso / (alturaEmM * alturaEmM);


// forma moderna e de melhor entendimento
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobreNome},nasceu em ${anoNascimento}.`);

