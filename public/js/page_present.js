window.onload = function() {

    $.ajax({
        type: 'get',
        url: '../list.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);

            data.forEach((list, i) => {
                $(".goods_list").append(
                    `<li class="gl_item d-flex">
                        <div class="gl_inner_item_wrap">
                            <div class="gl_image">
                                <a href="/page_present_detail">
                                    <img src="${list.flowerImg}" alt="1">
                                </a>
                            </div>
                            <!-- //gl_image -->
                            <!-- ###### 상품 정보(이름, 가격, 구매후기) ###### -->
                            <div class="resp_display_goods_info infO_style_1">
                                <div class="goods_info display_goods_name">
                                    <span>
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                <div class="goodS_info display_sales_price">
                                    <span class="area">
                                        <span class="won">${list.flowerPrice.toLocaleString()}</span>
                                        원
                                    </span>
                                </div>
                                <div class="goods_evaluate">${list.flowerEvaluate}</div>
                            </div>
                            <!-- ###### //상품 정보(이름, 가격, 구매후기) ###### -->
                        </div>
                    </li>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../list_2.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);

            data.forEach((list, i) => {
                $(".goods_list_2").append(
                    `<li class="gl_item d-flex">
                        <div class="gl_inner_item_wrap">
                        <!-- 상품 이미지 -->
                            <div class="gl_image">
                                <a href="/page_present_detail">
                                    <img src="${list.flowerImg}" alt="1">
                                </a>
                            </div>
                            <div class="resp_display_goods_info infO_style_1">
                                <!-- 상품명 -->
                                <div class="goods_info display_goods_name">
                                    <span>
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                <div class="info_group">
                                    <!-- (할인 혜택)판매가 -->
                                    <div class="goodS_info display_sales_price">
                                        <span class="area">
                                            <span class="won">${list.discountPrice.toLocaleString()}</span>
                                            원
                                        </span>
                                    </div>
                                    <!-- 정가 -->
                                    <div class="goodS_info display_consumer_price">
                                        <span class="area">
                                            <span class="won">${list.flowerPrice.toLocaleString()}</span>
                                            원
                                        </span>
                                    </div>
                                    <!-- 할인율 -->
                                    <div class="goodS_info display_sales_percent">
                                        <span class="area">
                                            <span class="won">${list.discountPercent}</span>
                                            %
                                        </span>
                                    </div>
                                    <div class="goods_evaluate">${list.flowerEvaluate}</div>
                                </div>
                            </div>
                        </div>
                    </li>`
                );
            });
        }
    });//ajax

};//javascript