fetch("https://www.omdbapi.com/?s=avengers&apikey=3c34912c&page=2")
    .then(res => res.json())
    .then(data => render(data.Search))

function render(array) {
    let elWrapper = document.querySelector("#list")
    let fragment = document.createDocumentFragment()

    for (let i = 0; i < array.length; i++) {
    let newLi = document.createElement("li")
    let newImg = document.createElement("img")
    let newh2 = document.createElement("h2")
    let newP = document.createElement("p")
    
    newLi.appendChild(newImg)
    newLi.appendChild(newh2)
    newLi.appendChild(newP)
    newLi.classList.add("d-flex" , "flex-column" , "justify-content-center", "align-items-center")
    newImg.src = array[i].Poster
    newh2.textContent = `Title: ${array[i].Title}`
    newP.textContent = `Year: ${array[i].Year}`
    fragment.appendChild(newLi)
    }
    elWrapper.appendChild(fragment)
}