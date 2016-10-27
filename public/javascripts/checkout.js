Stripe.setPublishableKey('pk_test_m6ZWLYyvkUAqJzr1fvr1uRj2');

var $form = $('#checkout-form');

$form.submit(function (event) {
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();

    }
};

var items = [];
          // We'll assume you have a `cart` object which has `products`
          // the shopper has chosen.
          cart.products.forEach(function (p) {
            items.push(
              {
                name: p.name,                       // required
                price: parseInt( (p.price * 100) ), // required (value in cents USD)
                sku: p.sku,                         // required
                imageUrl: p.imgUrl,                 // optional
                detailUrl: p.detailUrl,             // required
                quantity: parseInt(p.quantity)      // required
              }
            );
          });

          // If you have their shipping address already, you can pass it to us
          // so they don't have to fill it out again.
          var shippingContact = {
            fullName: 'Jane Doe',
            address:  '123 Test St.',
            address2: '#8',
            zip:      '11238',
            phone:    '5555555555',
            city:     'Coolstown',
            state:    'NY'
          };

          // Likewise, if you have the billing contact, you can pass it in to us
          // so they don't have to.
          var billingContact = {
            email:      'jane.doe@geocities.com',
            firstName:  'Jane',
            lastName:   'Doe',
            address:    '123 Test St.',
            address2:   'Apt. 4',
            zip:        '11238',
            phone:     '5555555555'
          };

          // Below, we will build the required opts object.
          var opts = {
            buttonId: 'bread-checkout-btn',
            items: items,
            // Optional Array of Shipping Options
            shippingOptions: [
              {
                type: 'General Shippers',
                typeId: 'GS_001',
                cost: 1350,
              }
            ],
            tax: 900, // optional
            shippingContact: shippingContact,
            billingContact: billingContact
          };

          // Lastly, call `checkout` with `opts` as the argument.
          bread.checkout(opts);

