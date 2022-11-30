//console.log('%c HI', 'color: firebrick')
//Challenge 1
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogData => renderDogs(dogData))

//Define     
const renderDogs = (dogData) => {
    dogData.message.forEach(dogUrl => {
        let image = document.createElement('img')
        image.src = dogUrl
        const container = document.querySelector("#dog-image-container")
        container.append(image)
       // console.log(image)
       // console.log(container)
    })
}

//Challenge 2
let breeds = []

fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => {
        renderBreeds(breeds)
        breeds = Object.keys(data.message)
    })

const renderBreeds = (breeds) => {
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.innerText = breed
        const ul = document.querySelector("#dog-breeds")
        ul.append(li)
        li.addEventListener('click', updateColor)
        //console.log(li)
    })
}
//Challenge 3
const updateColor = (e) => {
    e.target.style.color = "red"
    console.log(e.target)
}

//Challenge 4

const handleChange = (e) => {
    const letter = e.target.value
    //console.log(e)
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ''
    //renderBreeds(filteredBreeds)
    //console.log(filteredBreeds)
    // console.log(breeds)
}

const breedDropdown = document.getElementById("breed-dropdown")
console.log(breedDropdown)
breedDropdown.addEventListener('change', handleChange)



