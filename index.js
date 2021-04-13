  //Implement Your Code Here
const burgerMenu = document.querySelector('div#burger-menu')
const yourOrderMenu = document.querySelector('ul#order-list')
// const burgerDivision = burgerElement.closest('div.burger')

function renderBurgerMenu (){
  fetch('http://localhost:3000/burgers')
    .then(resp => resp.json())
    .then(burgerArr => {
      burgerArr.forEach(burgerObject => {
        renderOneBurger(burgerObject)
      })
    })
}

function renderOneBurger(burgerObject) {
  const burgerDiv = document.createElement('div')

  burgerDiv.className = 'burger'
  burgerDiv.innerHTML = 
  `
  <h3 class="burger_title">${burgerObject.name}</h3>
  <img src="${burgerObject.image}">
  <p class="burger_description">
      ${burgerObject.description}
  </p>
  <button class="button">Add to Order</button>
  `

  burgerMenu.append(burgerDiv)


}

burgerMenu.addEventListener('click', event => {
  if (event.target.className === 'button'){

    burgerTitle = event.target.parentElement.querySelector('h3').textContent
    let burgerItem = document.createElement('li')
    burgerItem.append(burgerTitle)

    

    yourOrderMenu.append(burgerItem)
  }
})

const newBurgerForm = document.querySelector('form#custom-burger')

newBurgerForm.addEventListener('submit', event => {
  event.preventDefault()
  // console.log(event.target)
    const newBurgerObj = {
      name: event.target.name.value,
      description: event.target.description.value,
      image: event.target.url.value
    }
   

  fetch(`http://localhost:3000/burgers`, {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newBurgerObj)
  })
  newBurgerForm.reset()
})





renderBurgerMenu()
