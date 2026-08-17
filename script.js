function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar uma tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // substituir a imagem
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //setiver sem light mode adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
