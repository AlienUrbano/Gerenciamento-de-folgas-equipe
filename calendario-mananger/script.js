function mostrarConteudo(conteudoId) {
  const conteudos = document.querySelectorAll(".conteudo");
  for (const conteudo of conteudos) {
    conteudo.style.display = "none";
  }

  const conteudoSelecionado = document.getElementById(conteudoId);
  conteudoSelecionado.style.display = "block";
}
