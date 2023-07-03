let dropdownStore = doc.createElement("div")
addClass(dropdownStore, "dropdownStore")
nav.append(dropdownStore)
let dropdownStoreContainer = doc.createElement("div")
addClass(dropdownStoreContainer, "dropdownStoreContainer")
dropdownStore.append(dropdownStoreContainer)
dropdownStore.style.maxWidth = "1200px"
dropdownStore.style.margin = "0px auto"
dropdownStoreContainer.style.display = "flex"
dropdownStore.style.height = "0px"
dropdownStore.style.backgroundColor = "#ccc"



function createH6(a, b) {
    h6 = doc.createElement("h6")
    h6.innerText = a
    h6.style.color = "rgb(110, 110, 115)"
    b.append(h6)
    h6.style.fontSize = "12px"
    h6.style.padding = "9px 11px 7px 0px"
    h6.style.color = "#6E6E73"
}
function createBoldLink(a, b) {
    boldLink = doc.createElement("a")
    boldLink.innerText = a
    boldLink.style.color = "#333336"
    b.append(boldLink)
    boldLink.style.display = "block"
    boldLink.style.fontSize = "24px"
    boldLink.style.padding = "9px 11px 7px 0px"
}
function createDropdownLink(a, b) {
    link = doc.createElement("a")
    link.setAttribute("href", "#")
    link.innerText = a
    b.append(link)
    link.style.color = "black"
    link.style.textDecoration = "none"
    link.style.fontSize = "12px"
    addClass(link, "dropdownLink")
    link.style.display = "block"
    link.style.padding = "7px 11px 7px 0px"

}




let dropdownLinks = doc.createElement("div")
addClass(dropdownLinks, "dropdownLinks")
nav.append(dropdownLinks)
let dropdownLinksContainer = doc.createElement("div")
addClass(dropdownLinksContainer, "dropdownLinksContainer")
dropdownLinks.append(dropdownLinksContainer)
dropdownLinks.style.maxWidth = "1200px"
dropdownLinks.style.margin = "0px auto"
dropdownLinksContainer.style.display = "flex"
dropdownLinks.style.height = "0px"
dropdownLinks.style.backgroundColor = "#ccc"
let dropdownFirstPart = doc.createElement("div")
let dropdownSecondPart = doc.createElement("div")
let dropdownThirdPart = doc.createElement("div")
dropdownLinksContainer.append(dropdownFirstPart)
dropdownLinksContainer.append(dropdownSecondPart)
dropdownLinksContainer.append(dropdownThirdPart)
dropdownFirstPart.style.height = "0px"
dropdownSecondPart.style.height = "0px"
dropdownThirdPart.style.height = "0px"

console.log(dropdownLinks);

support.onmouseenter = () => {
    dropdownLinks.style.height = "100px"
    nav.style.backgroundColor = "#ccc"
    dropdownFirstPart.style.height = "100px"
    dropdownSecondPart.style.height = "100px"
    dropdownThirdPart.style.height = "100px"
}
dropdownLinks.onmouseenter = () => {
    dropdownFirstPart.style.height = "0px"
    dropdownSecondPart.style.height = "0px"
    dropdownThirdPart.style.height = "0px"
    dropdownLinks.style.height = "0px"
    nav.style.backgroundColor = "white"
}



createH6("Shop", dropdownFirstPart)
createH6("Quick Links", dropdownSecondPart)
createH6("Shop Special Stores", dropdownThirdPart)
createBoldLink("Lorem", dropdownFirstPart)
createBoldLink("Lorem", dropdownFirstPart)
createBoldLink("Lorem", dropdownFirstPart)
createBoldLink("Lorem", dropdownFirstPart)
createBoldLink("Lorem", dropdownFirstPart)
createDropdownLink("Lorem", dropdownSecondPart)
createDropdownLink("Lorem", dropdownSecondPart)
createDropdownLink("Lorem", dropdownSecondPart)
createDropdownLink("Lorem", dropdownSecondPart)
createDropdownLink("Lorem", dropdownSecondPart)
createDropdownLink("Lorem", dropdownThirdPart)
createDropdownLink("Lorem", dropdownThirdPart)
createDropdownLink("Lorem", dropdownThirdPart)
createDropdownLink("Lorem", dropdownThirdPart)
createDropdownLink("Lorem", dropdownThirdPart)