window.onload = function() {
    const params = new URLSearchParams(document.location.search);
    const fid = params.get('flowerId');

    $.ajax({
        type: 'get',
        url: '../page/flower_present_page.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax 상세페이지 성공 👌");
            console.log(data);

            const rs = data.filter((list) => list.flowerId == fid );
            console.log(rs);

            const result = rs[0];

            $('.name').text(result.flowerTitle);
            $('.summary').text(result.flowerDescription);
            $('.flowerImg').attr("src", result.flowerImg);
            $('.num').text(result.sales_price.toLocaleString());

            /* let options = '';
            for(let i=0; i < result.foodToppimg.length; i++) {
            options += `<div class="ul-topping-box">
            <div class="topping"
                style="background-image:url('assets/img/Home/${result.foodToppimg[i].img}.png');"
                data-optionprice="${result.foodToppimg[i].toppingPrice}"
                data-option="${result.foodToppimg[i].toppingName}">
                <p>${result.foodToppimg[i].toppingName}</p>
                <p>${result.foodToppimg[i].toppingPrice.toLocaleString()}원</p>
            </div>
            </div>`;
            }
            $('.ul-topping').html(options);  */

        $('#flowerId').val(fid);
        $('#price').val(result.sales_price);
        $('#option-price').val(result.sales_price);
        $('#total-price').val(result.sales_price);

        //input
        $('.out_option_price').text(result.sales_price.toLocaleString()+ "원");
        $('#total_goods_price').text(result.sales_price.toLocaleString());
    },
    error: function(){
        console.log("ajax 통신 에러😢");
    },
    complete: function(){
        /* myoption(); */
    }
});

};