//Criando uma constante para armazenar perguntas
const question = [
  'What do I learned today ?',
  'What do let me bored ? And what sould I do to improve ?',
  'What do let me happy today ?',
  'How many people I helped today ?'
];

//Criando uma callback para escrever no terminal as perguntas.
const ask = (index = 0) => {
  process.stdout.write('\n' + question[index] + ' > ');
};

ask();

//Criando uma constante para armazenar as resposta
const answer = [];

//Utilizando o process com uma callback para ouvir os dados de entrada 'Enter'
process.stdin.on('data', data => {
  //pegando as resposta e adicionando na constante e transformando em string
  answer.push(data.toString().trim());
  //Criando uma condição para imprimir as pergunta enquanto as resposta for menor
  if (answer.length < question.length) {
    //executando as pergunta enquanto as resposta for menor
    ask(answer.length);
  }else{
    //imprimindo as resposta exemplo 1
    //console.log(answer) --> esta comentado porque estou usando o exemplo 2
    //parando de executar o processo
    process.exit();
  }
});

//Ouvindo o process.exit()
process.on('exit', () => {
  //Imprimindo a resposta usando template literals exemplo 2
  console.log(`
  'What do I learned today ?',
  ${answer[0]}

  'What do let me bored ? And what sould I do to improve ?',
  ${answer[1]}
  
  'What do let me happy today ?',
  ${answer[2]}

  'How many people I helped today ?'
  ${answer[3]}
  `);
});