//Кэширую документ
let doc = document
let head = doc.head
let body = doc.body

//Функция для добавления класса
function addClass(a, b) {
    a.classList.add(b)
}

//Ссылка CSS в Head
let linkCss = doc.createElement("link")
linkCss.setAttribute("rel", "stylesheet")
linkCss.setAttribute("href", "css/style.css")
head.append(linkCss)

//Создаю header в body
body.innerHTML = "<header></header>"
let header = doc.querySelector("header")
addClass(header, "header")

//Создаю nav
let nav = doc.createElement("nav")
addClass(nav, "nav")
header.prepend(nav)

//Создаю container
let container = doc.createElement("div")
addClass(container, "container")
nav.prepend(container)

//logo
let logo = doc.createElement("img")
logo.setAttribute("src", "img/logo.svg")

//search
let search = doc.createElement("img")
search.setAttribute("src", "img/search.svg")

let shopWrap = doc.createElement("div")
shopWrap.style.position = "relative"
let shop = doc.createElement("img")
shop.setAttribute("src", "img/shop.svg")

//Функция для создания ссылки-img
function createLinkImg(a, b, c) {
    let linkImg = doc.createElement("a")
    linkImg.appendChild(a)
    linkImg.setAttribute("href", "#")
    c.append(linkImg)
    a.classList.add(b)
}

//Функция для создания ссылок
function createLink(a) {
    link = doc.createElement("a")
    link.setAttribute("href", "#")
    link.setAttribute("id", a)
    link.innerText = a
    container.append(link)
    link.style.color = "black"
    link.style.textDecoration = "none"
    link.style.fontSize = "18px"
    link.classList.add("headerLink")
}

//Вызываю функции
createLinkImg(logo, "logo", container)
createLink("Store")
createLink("Mac")
createLink("iPad")
createLink("iPhone")
createLink("Watch")
createLink("Vision")
createLink("AirPods")
createLink("TV-Home")
createLink("Entertaiment")
createLink("Accessories")
createLink("Support")
createLinkImg(search, "search", container)
createLinkImg(shop, "shop", shopWrap)
search.style.height = "56.69px"
shop.style.height = "56.69px"

//Стили container
container.style.display = "flex"
container.style.justifyContent = "space-between"
container.style.alignItems = "center"
container.style.padding = "20px"
container.style.maxWidth = "1200px"
container.style.margin = "0 auto"


//Dropdown для ссылок
let dropdownLinks = doc.createElement("div")
let dropdownLinksContainer = doc.createElement("div")
let dropdownLinksFirstPart = doc.createElement("div")
let dropdownLinksSecondPart = doc.createElement("div")
let dropdownLinksThirdPart = doc.createElement("div")

//appends
nav.append(dropdownLinks)
dropdownLinks.append(dropdownLinksContainer)
dropdownLinksContainer.append(dropdownLinksFirstPart)
dropdownLinksContainer.append(dropdownLinksSecondPart)
dropdownLinksContainer.append(dropdownLinksThirdPart)
container.append(shopWrap)

//styles
dropdownLinks.style.width = "1200px"
dropdownLinks.style.padding = "0px 20px"
dropdownLinks.style.margin = "0px auto"
dropdownLinksContainer.style.display = "flex"
dropdownLinksContainer.style.justifyContent = "space-evenly"
dropdownLinksContainer.style.width = "50%"

//Функция для создания h6
function createH6(a, b) {
    h6 = doc.createElement("h6")
    h6.innerText = a
    h6.style.color = "rgb(110, 110, 115)"
    b.append(h6)
    h6.style.fontSize = "12px"
    h6.style.padding = "9px 11px 7px 0px"
    h6.style.color = "#6E6E73"
}

//Функция для создания жирной ссылки
function createBoldLink(a, b) {
    boldLink = doc.createElement("a")
    boldLink.innerText = a
    boldLink.style.color = "#333336"
    b.append(boldLink)
    boldLink.style.display = "block"
    boldLink.style.fontSize = "24px"
    boldLink.style.padding = "9px 11px 7px 0px"
}

//Функция для создания ссылки для dropdown
function createDropdownLink(a, b) {
    link = doc.createElement("a")
    link.setAttribute("href", "#")
    link.innerText = a
    b.append(link)
    link.style.color = "black"
    link.style.textDecoration = "none"
    link.style.fontSize = "12px"
    link.classList.add("DropdownLink")
    link.style.display = "block"
    link.style.padding = "7px 11px 7px 0px"
}

//Закидываю ссылки header-a в переменные
let store = doc.querySelector("#Store")
let mac = doc.querySelector("#Mac")
let ipad = doc.querySelector("#iPad")
let iphone = doc.querySelector("#iPhone")
let watch = doc.querySelector("#Watch")
let vision = doc.querySelector("#Vision")
let airpods = doc.querySelector("#AirPods")
let tv = doc.querySelector("#TV-Home")
let entertaiment = doc.querySelector("#Entertaiment")
let accessories = doc.querySelector("#Accessories")
let support = doc.querySelector("#Support")
dropdownLinks.style.height = "0px"
dropdownLinks.style.backgroundColor = "white"
dropdownLinks.style.display = "none"

//Функция для вызова dropdown-a при наведении
function callDropdownLinks(a) {
    a.onmouseenter = () => {
        dropdownLinks.style.height = "280px"
        nav.style.backgroundColor = "whitesmoke"
        dropdownLinks.style.backgroundColor = "whitesmoke"
        dropdownLinks.style.display = "block"
    }
    dropdownLinks.onmouseleave = () => {
        dropdownLinks.style.height = "0px"
        dropdownLinks.style.backgroundColor = "white"
        nav.style.backgroundColor = "white"
        dropdownLinks.style.display = "none"
    }
}

//Вызываю функцию для создания ссылок
createH6("Shop", dropdownLinksFirstPart)
createH6("Quick Links", dropdownLinksSecondPart)
createH6("Shop Special Stores", dropdownLinksThirdPart)
createBoldLink("Mac", dropdownLinksFirstPart)
createBoldLink("iPad", dropdownLinksFirstPart)
createBoldLink("iPhone", dropdownLinksFirstPart)
createBoldLink("Apple Watch", dropdownLinksFirstPart)
createBoldLink("Accessories", dropdownLinksFirstPart)
createDropdownLink("Find a Store", dropdownLinksSecondPart)
createDropdownLink("Order Status", dropdownLinksSecondPart)
createDropdownLink("Apple Traade IN", dropdownLinksSecondPart)
createDropdownLink("Financing", dropdownLinksSecondPart)
createDropdownLink("College Student Offer", dropdownLinksSecondPart)
createDropdownLink("Certefied Reburbished", dropdownLinksThirdPart)
createDropdownLink("Education", dropdownLinksThirdPart)
createDropdownLink("Business", dropdownLinksThirdPart)
createDropdownLink("Veterans and Military", dropdownLinksThirdPart)
createDropdownLink("Government", dropdownLinksThirdPart)

//Вызываю функцию для dropdown-a
callDropdownLinks(vision)
callDropdownLinks(tv)
callDropdownLinks(entertaiment)
callDropdownLinks(accessories)
callDropdownLinks(support)


let circle = doc.createElement("div")
circle.innerHTML = 0
//Функция для создания красного кружка
function createCircle() {
    circle.style.height = "30px"
    circle.style.width = "30px"
    circle.style.borderRadius = "50%"
    circle.style.backgroundColor = "red"
    shopWrap.append(circle)
    circle.style.position = "absolute"
    circle.style.top = "-5px"
    circle.style.right = "-5px"
    circle.style.display = "flex"
    circle.style.alignItems = "center"
    circle.style.justifyContent = "center"
    circle.style.color = "white"
    circle.style.fontSize = "18px"
}

//dropdown cards и стили для него
let dropdownCards = doc.createElement("div")
dropdownCards.style.display = "flex"
dropdownCards.style.flexWrap = "wrap"
dropdownCards.style.gap = "16px"
dropdownCards.style.width = "1200px"
dropdownCards.style.margin = "0px auto"
dropdownCards.style.padding = "0px 20px"
nav.append(dropdownCards)

//Функция - стили кнопок
function buttonStyle(a, b, c, d) {
    a.style.cursor = "pointer"
    a.style.display = d
    a.style.border = "none"
    a.style.width = "100%"
    a.style.marginTop = "20px"
    a.style.borderRadius = "9px"
    a.style.padding = b
    a.style.backgroundColor = "yellow"
    a.style.fontSize = "16px"
    a.textContent = c
}

//Функция - создание товаров
function createCard(a) {
    
    //Товар & стили
    let card = doc.createElement("div")
    card.style.width = "250px"
    card.style.borderRadius = "12px"
    card.style.padding = "20px"
    card.style.backgroundColor = "whitesmoke"
    card.style.display = "flex"
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
    card.style.justifyContent = "center"
    card.style.flexWrap = "wrap"
    card.style.position = "relative"
    dropdownCards.append(card)

    //Картинка товара
    let cardImg = doc.createElement("img")
    cardImg.setAttribute("src", a)
    card.append(cardImg)

    //Обертка counter & стили
    let counterWrap = doc.createElement("div")
    counterWrap.style.display = "flex"
    counterWrap.style.alignItems = "center"
    counterWrap.style.justifyContent = "center"
    counterWrap.style.gap = "8px"
    card.append(counterWrap)

    //Кнопка "В корзину"
    let toBasket = doc.createElement("button")
    buttonStyle(toBasket, "14px 40px 14px 40px", "В корзину", "block")
    counterWrap.append(toBasket)

    //Кнопка "Минус"
    let minus = doc.createElement("button")
    buttonStyle(minus, "15px", "-", "none")
    counterWrap.append(minus)

    //Cчетчик & стили
    let counter = doc.createElement("span")
    counter.textContent = 1
    counter.style.display = "none"
    counter.style.marginTop = "20px"
    counter.style.fontSize = "24px"
    counterWrap.append(counter)

    //Кнопка "Плюс"
    let plus = doc.createElement("button")
    buttonStyle(plus, "15px", "+", "none")
    counterWrap.append(plus)

    //Кнопка "Добавить в корзину"
    let addToBasket = doc.createElement("button")
    card.append(addToBasket)
    buttonStyle(addToBasket, "14px 40px 14px 40px", "Добавить", "none")

    toBasket.onclick = () => {
        toBasket.style.display = "none"
        minus.style.display = "block"
        plus.style.display = "block"
        counter.style.display = "block"
        addToBasket.style.display = "block"
    }

    plus.onclick = () => {
        counter.innerHTML = ++counter.innerHTML
    }

    minus.onclick = () => {
        if (counter.innerHTML < 2) {
            toBasket.style.display = "block"
            minus.style.display = "none"
            plus.style.display = "none"
            counter.style.display = "none"
            addToBasket.style.display = "none"
            counter.innerHTML = 2
        }
        counter.innerHTML = --counter.innerHTML
    }

    let removeCard = "\u2573"//Крестик
    //Крестик & стили
    let removeCardWrap = doc.createElement("div")
    removeCardWrap.append(removeCard)
    removeCardWrap.style.position = "absolute"
    removeCardWrap.style.right = "10px"
    removeCardWrap.style.top = "10px"
    removeCardWrap.style.cursor = "pointer"
    card.append(removeCardWrap)

    removeCardWrap.onclick = () => {
        card.style.display = "none"
    }

    addToBasket.onclick = () => {
        createCircle()
        card.style.display = "none"
        let circleInner = parseInt(circle.innerHTML)
        let counterInner = parseInt(counter.innerHTML)
        circle.textContent = circleInner + counterInner
    }
}

mac.onclick = () => {
    createCard("img/mac.png")
}
iphone.onclick = () => {
    createCard("img/iphone.png")
}
ipad.onclick = () => {
    createCard("img/ipad.png")
}
airpods.onclick = () => {
    createCard("img/airpods.png")
}
watch.onclick = () => {
    createCard("img/watch.png")
}
store.onclick = () => {
    createCard("img/mac.png")
    createCard("img/iphone.png")
    createCard("img/ipad.png")
    createCard("img/airpods.png")
    createCard("img/watch.png")
}