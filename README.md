# bread
bread api implementation in shopping cart.  Will need to have mongoose installed and run node ./product-seeder.js to initialize data in database

Currently bread API is taking in static data of $100 Amazon Echo.  To Do Make cart dynamic enough that the API gets the json data from the Cart and adds it to the bread implementation.

Note: All bread front-end code is in public/javascripts/breadout.js
CSS/View is in views/shop/shopping-cart.hbs and views/shop/bread.hbs

To demo:

Sign-up as a new user (shopping cart requires login)
Create any user login and password.

Add one item to the cart (bread/shopping cart will not show without one item)

Note the bread button (Stripe button was hidden to avoid confusion)  In the future will have payment option and then select payment based off of the option.

After clicking through the bread data you should get to a nice splash page (with a loaf of bread).

Currently loaf of bread splash page is static, To-Do make it dynamic based off of purchase.

Cheers
