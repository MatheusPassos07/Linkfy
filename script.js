function togglemode() {
  const body = document.body
  //pegar a tag img ↓↓↓↓
  const img = document.querySelector("#profile img")

  // alterna a classe "light"
  body.classList.toggle("light")
  /* Outra forma de alterar
    if (body.classList.contains("light")) {
      body.classList.remove("light")
      } else {
        body.classList.add("light")
    } */

  // substituir a imagem de acordo com o modo
  if (body.classList.contains("light")) {
    // se light mode, imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "avatar claro")
  } else {
    //  se dark mode, imagem dark
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "avatar negro")
  }
}
