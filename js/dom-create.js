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
      var itemsByBrand = getItemsByBrand(items, searchByBrandInput.value)
      for (var i = 0; i < itemsByBrand.length; i++) {
        var itemsByBrandList = document.createElement('li')
        itemsByBrandList.textContent = itemsByBrand[i]
        shoppingList.appendChild(itemsByBrandList)
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
