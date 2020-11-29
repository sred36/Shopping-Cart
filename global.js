 
 var gridData = {
    items: [
      {
        id:"11",
        name: "Samsung Series 4",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 13999,
          display: 22500
        },
        discount: 37
      },
      {
        id:"12",
        name: "Samsung Super 6",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 35999,
          display: 66900
        },
        discount: 46
      },
      {
        id:"13",
        name: "Samsung The Frame",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 84999,
          display: 133900
        },
        discount: 36
      },
      {
        id:"14",
        name: "Thomson B9 Pro",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 16999
        },
        discount: 41
      },
      {
        id:"15",
        name: "LG Ultra HD",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 39990,
          display: 79990
        },
        discount: 50
      },
      {
        id:"16",
        name: "Vu Ready LED TV",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 7999,
          display: 17e3
        },
        discount: 52
      },
      {
        id:"17",
        name: "Koryo Android TV",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 55999,
          display: 199990
        },
        discount: 71
      },
      {
        id: "18",
        name: "Micromax LED Smart",
        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 27990
        },
        discount: 64
      }
    ]
  }

  var cartItems = [];
 var cart = {
        loadData : function() {
           for( var i = 0; i< gridData.items.length;i++) {
                itemName = '<div class="item">'+'<span class="item-name">'+gridData.items[i].name +'</span>'+'<div>';
                itemImage = '<img'+ ' '+ 'src ='+ gridData.items[i].image + ' '+ '/>';
                itemPrice = '<div class="price">'+' '+'<span class="price__old">'+ gridData.items[i].price.display +'</span>'+'<span class="price__new">'+ gridData.items[i].price.actual +'</span>'+'</div>';
                addTocart = '<button class="grid__addTocart-bt"'+'id='+gridData.items[i].id+'>'+ "Add to cart "+ '</button>';
                discountItem = '<span class="discount">'+''+ gridData.items[i].discount +''+ '</span>';
                appendData = '<div>'+ itemImage + itemName + itemPrice + addTocart + discountItem + '</div>';
                container = document.createElement("div");
                container.classList ="grid__item"; 
                container.innerHTML = appendData;
              
                document.getElementById('grid__section').appendChild(container);
           }
        },
        addToCart: function() {
            var elements = document.querySelectorAll(".grid__addTocart-bt");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener("click", function(e) {
                    if(e.target.id === e.currentTarget.id ) {
                    addItems(e.target.id);
                    }
                });
            }
            function addItems(id) {

                for(var i = 0; i < gridData.items.length;i++) {
                    if(gridData.items[i].id === id) {
                        if(cartItems.indexOf(gridData.items[i]) > -1) {
                            cartItems.forEach(function(cartItem,index) {
                                if(cartItem.id == id) {
                                    cartItem.counter = cartItem.counter ? cartItem.counter + 1 : 1;
                                }
                                
                            });
                        } else {
                            cartItems.push(gridData.items[i]);
                            cartItems.forEach(function(cartItem,index) {
                                cartItem.counter = 1;
                            });
                        }
                        
                    }
                }
                cart.appendToCart(cartItems);
            }

        },
        appendToCart: function(cartItems) {
            document.getElementById('grid__cart-items').innerHTML = null;
            cartItems.forEach(function(item) {
                cartImage = '<img'+ ' '+ 'src ='+ item.image + ' '+ '/>';
                cartItemName = '<div class="item">'+'<span class="item-name">'+item.name +'</span>'+'<div>';
                stepperDecrementButton = '<button class="decrement"'+'id='+item.id+'>'+ '-' + '</button>';
                input = '<input'+' '+'value='+ ''+ item.counter + ' ' +'/>';
                stepperIncrementButton = '<button class="increment"'+'id='+item.id+'>'+ '+' + '</button>';
                stepper = '<div class="stepper">'+ stepperDecrementButton + input + stepperIncrementButton +'</div>';
                cartItemPrice = '<div class="price">'+' '+'<span class="price__old">'+ item.price.display +'</span>'+'<span class="price__new">'+ item.price.actual +'</span>'+'</div>';
                removeItem = '<span class="remove"' + 'id='+ item.id +'>'+ '<i class="fa fa-times" aria-hidden="true"></i>' + '</span>';
                cartParent= '<div class="cart__item">'+ cartImage + cartItemName + cartItemPrice + stepper + removeItem +'</div>';
                cartContainer = document.createElement('div');
                cartContainer.classList ='cart-items';
                cartContainer.innerHTML = cartParent;
                document.getElementById('grid__cart-items').appendChild(cartContainer);
            });
           
            cart.appendTotal();
            cart.removeCartItem();
            cart.incrementCartItem();
            cart.decrementCartItem();

        },
        appendTotal: function() {
            var itemsValue = 0;
            var dissCountValue = 0;
            var orderValue = 0; 
            var itemLength = 0;           
            for (var i = 0; i < cartItems.length; i++) {
                    
                itemsValue += cartItems[i].counter * cartItems[i].price.display;
                dissCountValue += (cartItems[i].counter * cartItems[i].price.display) - (cartItems[i].counter * cartItems[i].price.actual);
                orderValue +=  cartItems[i].counter * cartItems[i].price.actual;
                itemLength = cartItems.length;
                document.getElementById('item-value').innerHTML = itemsValue;
                document.getElementById('item-discount').innerHTML = dissCountValue;
                document.getElementById('item-orderValue').innerHTML = orderValue;

                displayItemsLength(itemLength)

            }
            function displayItemsLength(itemLength) {
                var elementCount =  document.querySelectorAll('.items-count');
                for (var i = 0; i < elementCount.length; i++) {
                    if(cartItems.length === 0) {
                        elementCount[i].innerHTML = 0;
                    } else {
                        elementCount[i].innerHTML = itemLength;    
                    }
                    
                    
                }
            }
            if(cartItems.length === 0) {
                document.getElementById('item-value').innerHTML = 0;
                document.getElementById('item-discount').innerHTML = 0;
                document.getElementById('item-orderValue').innerHTML = 0;
            }
            console.log('appendTotal', cartItems);

        },
        removeCartItem: function() {
                var removeElements = document.querySelectorAll(".remove");
                for (var i = 0; i < removeElements.length; i++) {
                    removeElements[i].addEventListener("click", function(e) {
                        cart.removeItem(e.currentTarget.id,e);
                    });
                }
                
        },
        removeItem(id,e) {
            for (var i = 0; i < cartItems.length; i++) {
                if(cartItems[i].id === id) {
                    cartItems.splice(i,1);
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.innerHTML=null;
                }

            }
            cart.appendTotal();
        },
        incrementCartItem: function() {
            var increButton = document.querySelectorAll(".increment");
            for (var i = 0; i < increButton.length; i++) {
                increButton[i].addEventListener("click", function(e) {
                    increaseItem(e.currentTarget.id,e);
                });
            }
            function increaseItem(id,e) {
                gridData.items.filter(function(item) {
                        if(item.id === id) {
                            var currentValue = Number(e.currentTarget.previousElementSibling.value); 
                            e.currentTarget.previousElementSibling.value = String(currentValue + 1);

                        }
                });
                cart.addCounterProperty(Number(e.currentTarget.previousElementSibling.value),id);
                cart.appendTotal();
                  
            }
        },
        addCounterProperty: function(value,id) {
            for(var i=0; i<cartItems.length;i++) {
                if(cartItems[i].id === id) {
                    cartItems[i].counter = value
                }
            }
            console.log(cartItems);
        },
        decrementCartItem: function() {
            var decrement = document.querySelectorAll(".decrement");
            for (var i = 0; i < decrement.length; i++) {
                decrement[i].addEventListener("click", function(e) {
                    decrementItem(e.currentTarget.id,e);
                });
            }
            function decrementItem(id,e) {
                for (var i = 0; i < gridData.items.length; i++) {
                        if(gridData.items[i].id === id) {
                            var currentValue;
                            if(Number(e.currentTarget.nextElementSibling.value) > 1) {
                                currentValue = Number(e.currentTarget.nextElementSibling.value); 
                                e.currentTarget.nextElementSibling.value = String(currentValue - 1);
                            } else {
                                cart.removeItem(e.currentTarget.id,e);
                            }
                           
                        }
                    }
                    cart.addCounterProperty(Number(e.currentTarget.nextElementSibling.value),id);
                    cart.appendTotal();
            }
        },
        init: function () {
            var _self = cart;
            _self.loadData();
            _self.addToCart();
            
        }
 };

window.onload= cart.init(); ;