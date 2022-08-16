let elInput = document.querySelector("#input")

elInput.addEventListener("input" , function (evt) {
    let input = elInput.value.trim()
    fetch(`https://www.omdbapi.com/?s=${input}&apikey=3c34912c&page=2`)
    .then(res => res.json())
    .then(data => render(data))

})


function render(array) {
    let elWrapper = document.querySelector("#list")
    let fragment = document.createDocumentFragment()
    elWrapper.innerHTML = null
    for (let i = 0; i < array.Search.length; i++) {
    let newLi = document.createElement("li")
    let newImg = document.createElement("img")
    let newh2 = document.createElement("h2")
    let newP = document.createElement("p")
    
    newLi.appendChild(newImg)
    newLi.appendChild(newh2)
    newLi.appendChild(newP)
    newLi.classList.add("d-flex" , "flex-column" , "justify-content-center", "align-items-center")
    newImg.src = array.Search[i].Poster
    newh2.textContent = `Title: ${array.Search[i].Title}`
    newP.textContent = `Year: ${array.Search[i].Year}`
    fragment.appendChild(newLi)
    }
    elWrapper.appendChild(fragment)
}