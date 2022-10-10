/*Seleciona todos os itens do parâmetro passado*/
const menuItems = document.querySelectorAll('.nav-bar a[href^="#"]');

/*obtém a distancia do item em relação ao topo da pagina*/
function getDistanceFromTheTop (element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

/*Realiza o scroll da pagina até o item, levando em conta a distância obtida anteriormente */
function nativeScroll(distanceFromTheTop) {
    window.scroll ({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

/*A função "limpa" o scroll padrão, */
function scrollToSection (event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 50;
    nativeScroll(distanceFromTheTop)
}

/*ação que aciona tudo, sendo disparado ao click*/
menuItems.forEach((item) => {
    item.addEventListener("click", scrollToSection);
});