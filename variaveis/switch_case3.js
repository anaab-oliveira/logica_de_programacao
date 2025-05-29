SIMULADOR DE TERMINAL

let plataformas = prompt(&quot;Escolha uma plataforma: CMD ou Linux?: &quot;)
if (plataformas == &quot;CMD&quot; || plataformas == &quot;cmd&quot;){
console.log(&quot;Modo CMD ativado.&quot;)

let cmd = prompt(&quot;Qual comando você quer conhecer? &quot;)
switch (cmd){
case &quot;dir&quot;:
console.log(&quot;Para acessar o conteúdo de uma pasta.&quot;)
break;
case &quot;cd&quot;:
console.log(&quot;Para entrar na pasta.&quot;)
break;
case &quot;cd..&quot;:
console.log(&quot;Para voltar ao diretório anterior.&quot;)
break;
case &quot;cls&quot;:
console.log(&quot;Para limpar a tela toda.&quot;)
break;
case &quot;mkdir&quot;:
console.log(&quot;Para criar um diretório (pasta).&quot;)
break;
case &quot;rmdir&quot;:
console.log(&quot;Excluir ou remover um diretório.&quot;)
break;
case &quot;echo&quot;:
console.log(&quot;Criar um arquivo.&quot;)
break;
case &quot;del&quot;:

console.log(&quot;Apagar arquivo.&quot;)
break;
case &quot;ren&quot;:
console.log(&quot;Para renomear.&quot;)
break;
default:
console.log(&quot;Código inválido.&quot;)
break;
}
}

else if(plataformas == &quot;LINUX&quot; || plataformas == &quot;linux&quot;){
console.log(&quot;Modo LINUX ativado.&quot;)

let linux = prompt(&quot;Qual comando você quer conhecer? &quot;)
switch (linux){
case &quot;mkdir&quot;:
console.log(&quot;Para criar uma pasta.&quot;)
break;
case &quot;ls&quot;:
console.log(&quot;Para listar arquivos e diretórios no diretório atual.&quot;)
break;
case &quot;cd&quot;:
console.log(&quot;Entra no diretório.&quot;)
break;
case &quot;cd..&quot;:
console.log(&quot;Volta para o diretório anterior.&quot;)
break;
case &quot;rm&quot;:
console.log(&quot;Remove arquivo, enquanto (rm -r) remove a pasta.&quot;)

break;
case &quot;clear&quot;:
console.log(&quot;Limpa a tela.&quot;)
break;
case &quot;cp&quot;:
console.log(&quot;Copia arquivos ou diretórios.&quot;)
break;
case &quot;mv&quot;:
console.log(&quot;Move ou renomeia arquivos e pastas.&quot;)
break;
case &quot;cat&quot;:
console.log(&quot;Mostra o conteúdo direto no terminal.&quot;)
break;
default:
console.log(&quot;Código Inválido.&quot;)
break;

}
}