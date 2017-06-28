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

// Search By BRAND
    var searchByBrandInput = document.querySelector('.brand-input')
    var searchByBrandSubmit = document.querySelector('.brand-button')

    searchByBrandSubmit.addEventListener('click', function () {
      shoppingList.innerHTML = ''
      //console.log(searchByBrandInput.value);
      var foundItemsByBrand = getItemsByBrand(items, searchByBrandInput.value)
      for (var i = 0; i < foundItemsByBrand.length; i++) {
        var foundItemsByBrandList = document.createElement('li')
        foundItemsByBrandList.textContent = foundItemsByBrand[i]
        shoppingList.appendChild(foundItemsByBrandList)
      }
    })

    function getItemsByBrand (items, brand) {
      var arrItemsByBrand = []
      for (var i = 0; i < items.length; i++) {
        if (items[i].product.brand === brand) {
          arrItemsByBrand.push(items[i].product.title)
        }
      }
      return arrItemsByBrand
    }
//Search by author
  var searchByAuthorInput = document.querySelector('.author-input')
  var searchByAuthorSubmit = document.querySelector('.author-button')

  searchByAuthorSubmit.addEventListener('click', function () {
    // 'click' function begins ...
    shoppingList.innerHTML = '' //Clears the initial shopping list
    //console.log(searchByAuthorInput.value)
    // create array that stores the searched items according to the search value
    var foundItemsByAuthor = getItemsByAuthor (items, searchByAuthorInput.value)
    // for loop to go through each item in array
    for (var j = 0; j < foundItemsByAuthor.length; j++) {
      // for each element, create a new 'li'
      var foundItemsByAuthorList = document.createElement('li')
      // add the item title to the 'li' using textContent
      foundItemsByAuthorList.textContent = foundItemsByAuthor[j]
      // add the 'li' to the parent 'shoppingList'
      shoppingList.appendChild(foundItemsByAuthorList)
    }
  })
// get items by author function
  function getItemsByAuthor (items, author) {
    var arrItemsByAuthor = []
    for (var i = 0; i < items.length; i++) {
      if (items[i].product.author.name === author) {
        arrItemsByAuthor.push(items[i].product.title)
      }
    }return arrItemsByAuthor
  }

// Add to Cart
    var cartButton = document.querySelector('button')

    cartButton.addEventListener('click', addToCart)
    function addToCart () {
      var lastItem = document.querySelectorAll('#shopping-list li')
      var cartList = document.querySelector('#cart-list')
      cartList.appendChild(lastItem[lastItem.length - 1])
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
