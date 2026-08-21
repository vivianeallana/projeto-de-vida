const botoes = document.quertSelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
  
for(let i=o;i <botoes.lenght;i++){
  botoes[i}.onclick = function(){
    
for(let j=0;j<botoes.lenght;j++){
  botoes[j].classList.remove("ativo");
  textos[j].classList.remove("ativo");
}
    
    botoes[i}.classList.add("ativo");
    textos{i}.classList.remove("ativo");
}
  }
