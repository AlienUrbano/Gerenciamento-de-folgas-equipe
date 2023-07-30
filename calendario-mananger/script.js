function mostrarConteudo(conteudoId) {
  const conteudos = document.querySelectorAll(".conteudo");
  for (const conteudo of conteudos) {
    conteudo.style.display = "none";
  }

  const conteudoSelecionado = document.getElementById(conteudoId);
  conteudoSelecionado.style.display = "block";
}

function mostrarSelecionado(menuId) {
  const menus = document.querySelectorAll(".menu p");
  for (const menu of menus) {
    menu.classList.remove("selected");
  }

  const menuSelecionado = document.getElementById(menuId);
  menuSelecionado.classList.add("selected");
}