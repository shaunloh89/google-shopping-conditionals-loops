var data = require('../products.json')

// Write your solutions below

// console.log(data.items)

// Remember to type node js/google-shopping.js to run the file (or npm start).
//
// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

// console.log(data.items[0].kind)
// var countOfShoppingProduct = 0
//
// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].kind === "shopping#product") {
//   countOfShoppingProduct += 1
//   }
// }
// console.log(countOfShoppingProduct)

// 2.) Print the title of all items with a backorder availability in inventories.

// console.log(data.items[0].product.inventories[0].availability)
// console.log(data.items[0].product.title)
// console.log(data.items[0].product.inventories[0].availability)
//
// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.inventories[0].availability === "backorder") {
//     console.log(data.items[i].product.title + '\n')
//   }
// }

// 3.) Print the title of all items with more than one image link.
// console.log(data.items[0].product.images.length)
// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title, '\n')
//   }
// }

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
// console.log(data.items[20].product.brand)
//
// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand === "Canon") {
//     console.log(data.items[i].product.title)
//   }
// }

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
// console.log(data.items[0].product.author.name)

// for (var i = 0; i < data.items.length; i++) {
//   if ((data.items[i].product.author.name === 'eBay') && (data.items[i].product.brand === 'Canon')) {
//     console.log(data.items[i].product.title)
//   }
// }

// 6.) Print all the products with their brand, price, and an image link

//console.log(data.items[0].product.inventories[0].price)
//console.log(data.items[0].product.images[0])


// for (var i = 0; i < data.items.length; i++) {
//   console.log(data.items[i].product.brand, '\n',
//     data.items[i].product.inventories[0].price, '\n',
//     data.items[i].product.images[0], '\n')
// }

// 1.) getItems(objectData)
//
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
//
// Note all other functions (below) use the return of this function as their input.

var getItems = function (object) {
   return object.items
}
//console.log(getItems(data))

// 2.) getItemsByBrand(items, brand)
//
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.


function getItemsByBrand(items, brand) {
  var arrItemsByBrand = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      arrItemsByBrand.push(items[i])
    }
  }
  return arrItemsByBrand
}

//console.log(getItemsByBrand(getItems(data), "Sony"))

// 3.) getItemsByAuthor(items, author)
//
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
//
// Test this function by searching for Target, CDW, eBay


function getItemsByAuthor (items, author) {
  var arrItemsByAuthor = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      arrItemsByAuthor.push(items[i])
    }
  }return arrItemsByAuthor
}
//console.log(getItemsByAuthor(getItems(data), 'Dell'))

// 4.) getAvailableProducts(items)
//
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)



function getAvailableProducts (items) {
  var arrAvailableProducts = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === 'inStock') {
      arrAvailableProducts.push(items[i].product.title)
    }
  }
  return arrAvailableProducts
}
//console.log(getAvailableProducts(getItems()))

// 5.) Use your functions
//
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.

var sonyProducts = getItemsByBrand (getItems(data), "Sony")
// console.log(sonyProducts)

var availableSonyProducts = getAvailableProducts (sonyProducts)
// console.log(availableSonyProducts)

var adoramaCamera = getItemsByAuthor (getItems(data), 'Adorama Camera')
//console.log(adoramaCamera)

var adoramaCameraAvailable = getAvailableProducts (adoramaCamera)
//console.log(adoramaCameraAvailable)
//its not in stock

var nikonProducts = getItemsByBrand (getItems(data), "Nikon")
console.log(nikonProducts)
//
var nikonAndAuthorEbay = getItemsByAuthor (nikonProducts, 'eBay')
// console.log(nikonAndAuthorEbay)
