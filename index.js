async function getCatPicObject() {
    var fetchResponse = await fetch('https://thatcopy.pw/catapi/rest/')
    var catPicJson = await fetchResponse.json()
    return catPicJson
}

async function addCatToDom() {
    var entryPoint = document.querySelector('.cat-container')

    var catPicObject = await getCatPicObject();

    var catPicCard = document.createElement("div")
    catPicCard.classList.add("cat-card")

    var image = document.createElement("img")
    var description = document.createElement("p")
    var link = document.createElement("a")

    link.href = catPicObject.url
    link.textContent = "Permalink"

    image.src = catPicObject.url;

    catPicCard.appendChild(image)
    description.append(link)
    catPicCard.appendChild(description)

    entryPoint.appendChild(catPicCard)



}

var catButton = document.querySelector("#add-cat-button")

catButton.addEventListener('click', addCatToDom)

// get stuff off dom:
// getElementById
// getElementsByClassName
// querySelector
// querySelectorAll

// add stuff to the dom:
// createElement('elementTag')

getCatPicObject()