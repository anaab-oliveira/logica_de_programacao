let usuariodigitado = prompt(&quot;Digite seu nome de usuário: &quot;);
let senhadigitada = prompt(&quot;Digite sua senha: &quot;);
let resultado = &quot;&quot;;

let usuario1 = &quot;admin 1&quot;, senha1 = &quot;beatriz&quot;
let usuario2 = &quot;admin 2&quot;, senha2 = &quot;ana&quot;
let usuario3 = &quot;admin 3&quot;, senha3 = &quot;arroz&quot;
let usuario4 = &quot;admin 4&quot;, senha4 = &quot;anabia&quot;
let usuario5 = &quot;admin 5&quot;, senha5 = &quot;biana&quot;
let usuario6 = &quot;admin 6&quot;, senha6 = &quot;gol&quot;
let usuario7 = &quot;admin 7&quot;, senha7 = &quot;feijao&quot;
let usuario8 = &quot;admin 8&quot;, senha8 = &quot;carro&quot;
let usuario9 = &quot;admin 9&quot;, senha9 = &quot;tomate&quot;

function verificarlogin(usuario, senha) {
let mensagem = &quot;&quot;;

if (usuariodigitado === usuario1 &amp;&amp; senhadigitada === senha1) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario2 &amp;&amp; senhadigitada === senha2) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario3 &amp;&amp; senhadigitada === senha3) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario4 &amp;&amp; senhadigitada === senha4) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario5 &amp;&amp; senhadigitada === senha5) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario6 &amp;&amp; senhadigitada === senha6) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario7 &amp;&amp; senhadigitada === senha7) {

mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario8 &amp;&amp; senhadigitada === senha8) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario9 &amp;&amp; senhadigitada === senha9) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else {
mensagem = &quot;Login negado. Usuário ou senha incorretos.&quot;;
}

return mensagem;
}

resultado = verificarlogin(usuariodigitado, senhadigitada);
console.log(resultado);