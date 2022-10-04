//String = texto / number= número

//com constant que basicamente tem as mesmas funções e regras, nao podemos mudar o valor da constante. como fizemos a cima na variável let

//Temos a opção de atribuir uma constante a outra. 

// (mais= + menos= - multiplicação= * divisão= /)


const primeiroNumero = 5;
const segundoNumero =10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

// podemos criar uma variável let

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado)

// com isso podemos tambem alterar o valor da variável

resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// devemos tomar cuidado pois agora com a alteração perdemos o primeiro valor da variável.