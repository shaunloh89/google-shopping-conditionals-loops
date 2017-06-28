document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    var searchInput = document.querySelector('.search-input')

    var searchSubmit = document.querySelector('.search-button')

    var cartButton = document.querySelector('button')

    cartButton.addEventListener ('click', addToCart)

    function addToCart () {

      var lastItem = document.querySelectorAll('#shopping-list li')
      var cartList = document.querySelector('#cart-list')
      cartList.appendChild(lastItem[lastItem.length-1])
    }




    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
