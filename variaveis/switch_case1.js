EXERCÍCIO 1
let idioma = prompt(&quot;Escolha um idioma: &quot;)

switch (idioma){
case &quot;portugues&quot;:
console.log(&quot;Olá, seja bem vindo!&quot;);
break;
case &quot;ingles&quot;:
console.log(&quot;Hello, it&#39;s nice to see you!&quot;);
break;
case &quot;espanhol&quot;:
console.log(&quot;¡Buenas! ¿Qué pasa?&quot;);
break;
case &quot;frances&quot;:
console.log(&quot;Bonjour, bienvenue!&quot;);
break;
default:
console.log(&quot;Idioma não reconhecido.&quot;);
break;
}

EXERCICIO 2

let dia = prompt(&quot;Digite um número de 1 a 7 para ver o dia da semana:&quot;);

switch (dia) {
case &quot;1&quot;:
console.log(&quot;Domingo&quot;);

break;
case &quot;2&quot;:
console.log(&quot;Segunda-feira&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Terça-feira&quot;);
break;
case &quot;4&quot;:
console.log(&quot;Quarta-feira&quot;);
break;
case &quot;5&quot;:
console.log(&quot;Quinta-feira&quot;);
break;
case &quot;6&quot;:
console.log(&quot;Sexta-feira&quot;);
break;
case &quot;7&quot;:
console.log(&quot;Sábado&quot;);
break;
default:
console.log(&quot;Número inválido.&quot;);
break;
}

EXERCÍCIO 3
let transporte = prompt(&quot;Escolha um numero de 1-4 para decidir seu transporte:
&quot;)

switch (transporte){

case &quot;1&quot;:
console.log(&quot;O carro chegará em 5 minutos.&quot;)
break;
case &quot;2&quot;:
console.log(&quot;O helicoptero chegará em 10 minutos.&quot;)
break;
case &quot;3&quot;:
console.log(&quot;O trem chegará na estação em 2 minutos.&quot;)
case &quot;4&quot;:
console.log(&quot;O ônibus chegará no ponto as 10h15.&quot;)
break;
default:
console.log (&quot;Não temos essa opção.&quot;)
break;
}

EXERCICIO 4

let urgencia = prompt(&quot;Digite o nível de urgência (1 - baixa, 2 - média, 3 - alta):
&quot;);

switch (urgencia) {
case &quot;1&quot;:
console.log(&quot;O nivel da urgência é baixa.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;O nivel da urgência é média.&quot;);
break;
case &quot;3&quot;:

console.log(&quot;O nivel da urgência é alta.&quot;);
break;
default:
console.log(&quot;Nível inválido.&quot;);
break;
}

EXERCÍCIO 5

let categoria = prompt(&quot;Digite a categoria do veículo: &quot;);

switch (categoria) {
case &quot;esportivo&quot;:
console.log(&quot;Veículo esportivo selecionado&quot;);
break;
case &quot;SUV&quot;:
console.log(&quot;Veículo SUV selecionado&quot;);
break;
case &quot;elétrico&quot;:
console.log(&quot;Veículo elétrico selecionado&quot;);
break;
default:
console.log(&quot;Categoria inválida.&quot;);
break;
}

EXERCÍCIO 6

let tempo = prompt(&quot;Digite o tempo estacionado em horas: &quot;);

switch (tempo) {
case &quot;1 hora&quot;:
console.log(&quot;Total a pagar: R$ 6,00&quot;);
break;
case &quot;2 horas&quot;:
console.log(&quot;Total a pagar: R$ 8,00&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Total a pagar: R$ 10,00&quot;);
break;
default:
console.log(&quot;Total a pagar: R$ 15,00 ou mais.&quot;);
break;
}

EXERCÍCIO 7

let dificuldade = prompt(&quot;Digite o nível (1 - fácil, 2 - médio, 3 - difícil): &quot;);

switch (dificuldade) {
case &quot;1&quot;:
console.log(&quot;Nível fácil selecionado.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Nível médio selecionado.&quot;);

break;
case &quot;3&quot;:
console.log(&quot;Nível difícil selecionado.&quot;);
break;
default:
console.log(&quot;Nível inválido.&quot;);
break;
}

EXERCÍCIO 8

let servico = prompt(&quot;Digite o serviço (yoga, musculação, personal):&quot;);

switch (servico) {
case &quot;yoga&quot;:
console.log(&quot;Aula de yoga selecionada&quot;);
break;
case &quot;musculação&quot;:
console.log(&quot;Área de musculação selecionada&quot;);
break;
case &quot;personal&quot;:
console.log(&quot;Personal trainer selecionado&quot;);
break;
default:
console.log(&quot;Serviço inválido.&quot;);
break;
}

EXERCÍCIO 9

let ingresso = prompt(&quot;Digite a categoria do ingresso: &quot;);

switch (ingresso) {
case &quot;estudante&quot;:
console.log(&quot;Preço: R$ 10,00&quot;);
break;
case &quot;meia&quot;:
console.log(&quot;Preço: R$ 15,00&quot;);
break;
case &quot;inteira&quot;:
console.log(&quot;Preço: R$ 30,00&quot;);
break;
default:
console.log(&quot;Categoria inválida.&quot;);
break;
}

EXERCÍCIO 10

let idade = prompt(&quot;Digite sua idade: &quot;);

switch (true) {
case idade &lt; 12:
console.log(&quot;Fazer exercícios leves recomendados pelo personal.&quot;);
break;
case idade &gt;= 12 &amp;&amp; idade &lt; 50:

console.log(&quot;Fazer exercícios moderados recomendados pelo personal.&quot;);
break;
case idade &gt;= 50:
console.log(&quot;Fazer exercícios leves com acompanhamento.&quot;);
break;
default:
console.log(&quot;Idade inválida.&quot;);
break;
}

EXERCÍCIO 11

let genero = prompt(&quot;Digite o gênero musical que deseja fazer: &quot;);

switch (genero) {
case &quot;rock&quot;:
console.log(&quot;Use uma guitarra elétrica&quot;);
break;
case &quot;clássico&quot;:
console.log(&quot;Use um piano&quot;);
break;
case &quot;samba&quot;:
console.log(&quot;Use um pandeiro&quot;);
break;
default:
console.log(&quot;Gênero inválido.&quot;);
break;
}

EXERCÍCIO 12

let area = prompt(&quot;Digite a área do curso:&quot;);

switch (area) {
case &quot;front-end&quot;:
console.log(&quot;Curso de HTML, CSS e JavaScript&quot;);
break;
case &quot;back-end&quot;:
console.log(&quot;Curso de Node.js e Banco de Dados&quot;);
break;
case &quot;mobile&quot;:
console.log(&quot;Curso de React Native e Flutter&quot;);
break;
default:
console.log(&quot;Área inválida.&quot;);
break;
}

EXERCÍCIO 13

let idadeEsporte = prompt(&quot;Digite a idade do atleta:&quot;);

switch (true) {
case idadeEsporte &lt; 12:
console.log(&quot;Atleta iniciante&quot;);
break;
case idadeEsporte &gt;= 12 &amp;&amp; idadeEsporte &lt; 18:

console.log(&quot;Atleta intermediário&quot;);
break;
case idadeEsporte &gt;= 18:
console.log(&quot;Atleta avançado&quot;);
break;
default:
console.log(&quot;Idade inválida.&quot;);
break;
}

EXERCÍCIO 14

let categoria = prompt(&quot;Digite a categoria do exercicios: &quot;);

switch (categoria) {
case &quot;basico&quot;:
console.log(&quot;Operações simples&quot;);
break;
case &quot;intermediario&quot;:
console.log(&quot;Problemas de lógica e porcentagem&quot;);
break;
case &quot;avançado&quot;:
console.log(&quot;Equações e álgebra&quot;);
break;
default:
console.log(&quot;Categoria inválida.&quot;);
break;
}