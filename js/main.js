;(function ($) {
    $(function () {
        var
            // qty = 0,
            // totalSum = 0,
            // cartTotalSum = 0,
            cartTotalQty = $('.cart .total-qty'),
            cartGroupQty = $('.cart .group-qty'),
            cartTotalPrice = $('.cart .total-price'),
            groupQty = [];

        cartTotalQty.text(localStorage.getItem('qty') || '0');
        cartGroupQty.text(localStorage.getItem('group-qty') || '0');
        cartTotalPrice.text(localStorage.getItem('price') || '0');


        $('.add-to-cart').on('click', function () {
            var $this = $(this),
                item = $this.closest('.item'),
                price = parseInt(item
                    .find('.price')
                    .text()),
                qty = parseInt(item
                    .find('[type=number]')
                    .val()) || 1,
                newQty = parseInt(cartTotalQty.text() || 0) + qty,
                newPrice = parseInt(cartTotalPrice.text() || 0) + price * qty,
                count = 1;


            cartTotalQty.text(newQty);
            localStorage.setItem('qty', newQty);
            for (var i = 0; i < groupQty.length; i++) {
                !groupQty[item.data('id')] && count++;
            }
            //groupQty[item.data('id')] = (groupQty[item.data('id')] || 0) + count;
            groupQty[item.data('id')] = count;
            cartGroupQty.text(count);
            cartTotalPrice.text(newPrice);
            localStorage.setItem('price', newPrice);
            localStorage.setItem('group-qty', count);


            console.log(cartTotalQty.text());
            console.log(price);
            console.log(groupQty);
        });

        console.log(cartTotalQty);

        $('.reset-cart').on('click', function () {
            cartTotalQty.text(0);
            cartTotalPrice.text(0);
            cartGroupQty.text(0);
            localStorage.clear();
        });


    });
})(jQuery);