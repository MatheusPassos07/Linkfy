/* ===============================
   REFERÊNCIAS DE ELEMENTOS DO DOM
   =============================== */

// Botão do switch (bolinha)
const btn = document.getElementById("switchBtn")

// Body da página (onde aplicamos a classe "light")
const body = document.body

// Imagem do perfil que muda conforme o tema
const img = document.querySelector("#profile img")

/* ===============================
   FUNÇÃO RESPONSÁVEL POR
   APLICAR O TEMA VISUALMENTE
   =============================== 


  Essa função recebe o tema ("light" ou "dark")
  e aplica TODAS as mudanças visuais:
  - classe no body
  - posição do botão
  - imagem do perfil
*/

function applyTheme(theme) {
  if (theme === "light") {
    // Ativa o modo claro
    body.classList.add("light")

    // Move o botão do switch para a direita
    btn.classList.add("is-active")

    // Troca a imagem para a versão clara
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "")
  } else {
    body.classList.remove("light")
    btn.classList.remove("is-active")
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "")
  }
}

/* ===============================
      FUNÇÃO DE ALTERNAR O TEMA
   =============================== 


  Essa função é chamada quando o usuário
  clica no switch.
  
  Ela:
  1. Descobre qual tema está ativo
  2. Define o novo tema
  3. Salva no localStorage
  4. Aplica o tema visualmente
*/

function togglemode() {
  // Verifica se o body já está em modo claro
  const isLight = body.classList.contains("light")

  // Se estiver claro, muda para dark; senão, para light
  const newTheme = isLight ? "dark" : "light"

  // Salva o tema escolhido no navegador
  localStorage.setItem("theme", newTheme)

  // Aplica o tema visualmente
  applyTheme(newTheme)
}
/* ===============================
   EVENTO DE CLIQUE NO SWITCH
   =============================== */

// Quando clicar no botão do switch, alterna o tema
btn.addEventListener("click", togglemode)

/* ===============================
   INICIALIZAÇÃO AO CARREGAR A PÁGINA
   =============================== 


  Esse evento roda assim que a página termina
  de carregar.
  
  Ele:
  - Busca o tema salvo
  - Aplica o tema correto
  - Atualiza o ano do footer
*/

document.addEventListener("DOMContentLoaded", () => {
  // Busca o tema salvo ou usa dark como padrão
  const savedTheme = localStorage.getItem("theme") || "dark"
  // Aplica o tema salvo
  applyTheme(savedTheme)

  // Atualiza o ano no footer
  update_year()
})
/* ===============================
   FUNÇÃO PARA ATUALIZAR O ANO
   =============================== */

/*
  Atualiza automaticamente o ano no footer
  (ex: © 2026) 
  */

function update_year() {
  const yearSpan = document.getElementById("year")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }
}
