window.onload = function() {
    $.ajax({
        type: 'get',
        url: '../page/flower_present_page.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax flower_present_page 성공");
            console.log(data);
            
            data.forEach((list, i) => {
                $(".goods_list_1").append(
                    `<li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!--상품이미지-->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="/flower_present_detail?flowerId=${list.flowerId}" class="respItemImageArea">
                                    <img src="${list.flowerImg}" 
                                            data-src="${list.data_src}" 
                                            class="${list.class}" 
                                            onerror="${list.onerror}"
                                            alt="${list.alt}">
                                </a>
                            </div>
                            <div class="resp_display_goods_info infO_style_1">
                                <!-- 상품명-->
                                <div class="goodS_info displaY_goods_name">
                                    <span class="areA">
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                <div class="infO_group">
                                    <!-- 비회원 대체문구 -->
                                    <!-- (할인혜택)판매가 -->
                                    <div class="goodS_info displaY_sales_price">
                                        <span class="areA">
                                            <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                        </span>
                                    </div>
                                    <!-- 정가 -->
                                    <!-- 할인율 -->
                                </div>
                                <div class="infO_group">
                                    <!-- (단독이벤트) 판매수량 -->
                                    <div class="goodS_info displaY_event_order_ea">
                                        <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                    </div>
                                    <!-- 상품후기 작성수 -->
                                    <div class="goodS_info displaY_review_count">
                                        <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../page/post.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax post 성공");
            console.log(data);
            
            
            data.forEach((list, i) => {
                $(".goods_list_2").append(
                    `<li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!--상품이미지-->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="javascript:void(0);" class="respItemImageArea">
                                    <img src="${list.flowerImg}" 
                                            data-src="${list.data_src}" 
                                            class="${list.class}" 
                                            onerror="${list.onerror}"
                                            alt="${list.alt}">
                                </a>
                            </div>
                            <div class="resp_display_goods_info infO_style_1">
                                <!-- 상품명-->
                                <div class="goodS_info displaY_goods_name">
                                    <span class="areA">
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                <div class="infO_group">
                                    <!-- 비회원 대체문구 -->
                                    <!-- (할인혜택)판매가 -->
                                    <div class="goodS_info displaY_sales_price">
                                        <span class="areA">
                                            <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                        </span>
                                    </div>
                                    <!-- 정가 -->
                                    <div class="goodS_info displaY_consumer_price">
                                        <span class="areA">
                                            <span class="nuM">${list.consumer_price}</span>
                                        </span>
                                    </div>
                                    <!-- 할인율 -->
                                    <div class="goodS_info displaY_sales_percent">
                                        <span class="areA"><span class="nuM">${list.sales_percent}</span></span>
                                    </div>
                                </div>
                                <div class="infO_group">
                                    <!-- (단독이벤트) 판매수량 -->
                                    <div class="goodS_info displaY_event_order_ea">
                                        <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                    </div>
                                    <!-- 상품후기 작성수 -->
                                    <div class="goodS_info displaY_review_count">
                                        <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../page/diy.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax diy 성공");
            console.log(data);
            
            
            data.forEach((list, i) => {
                $(".swiper-wrapper_1").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                        <li class="gl_item" style="width: 300px;">
                            <div class="gl_inner_item_wrap">
                                <!--상품이미지-->
                                <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                    <a href="javascript:void(0);" class="respItemImageArea">
                                        <img src="${list.flowerImg}"
                                                data-src="${list.data_src}" 
                                                class="${list.class}" 
                                                onerror="${list.onerror}"
                                                alt="${list.alt}">
                                    </a>
                                </div>
                                <div class="resp_display_goods_info infO_style_1">
                                    <!-- 상품명-->
                                    <div class="goodS_info displaY_goods_name">
                                        <span class="areA"><a href="#">${list.flowerTitle}</a></span>
                                    </div>
                                    <div class="infO_group">
                                        <!-- 비회원 대체문구 -->
                                        <!-- (할인혜택)판매가 -->
                                        <div class="goodS_info displaY_sales_price">
                                            <span class="areA">
                                                <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                            </span>
                                        </div>
                                        <!-- 정가 -->
                                        <div class="goodS_info displaY_consumer_price">
                                            <span class="areA">
                                                <span class="nuM">${list.consumer_price}</span>
                                            </span>
                                        </div>
                                        <!-- 할인율 -->
                                        <div class="goodS_info displaY_sales_percent">
                                            <span class="areA"><span class="nuM">${list.sales_percent}</span></span>
                                        </div>
                                    </div>
                                    <div class="infO_group">
                                        <!-- (단독이벤트) 판매수량 -->
                                        <div class="goodS_info displaY_event_order_ea">
                                            <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                        </div>
                                        <!-- 상품후기 작성수 -->
                                        <div class="goodS_info displaY_review_count">
                                            <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../page/famous.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax famous 성공");
            console.log(data);
            
            
            data.forEach((list, i) => {
                $(".swiper-wrapper_2").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                        <li class="gl_item" style="width: 300px;">
                            <div class="gl_inner_item_wrap">
                                <!--상품이미지-->
                                <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                    <a href="javascript:void(0);" class="respItemImageArea">
                                        <img src="${list.flowerImg}"
                                                data-src="${list.data_src}" 
                                                class="${list.class}" 
                                                onerror="${list.onerror}"
                                                alt="${list.alt}">
                                    </a>
                                    <!-- 상품 상태 표시 -->
                                    <div class="respGoodsStatus">
                                        <a href="/goods/view?no=115" class="area">
                                            <span class="status_style type1"><em>${list.state}</em></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="resp_display_goods_info infO_style_1">
                                    <!-- 상품명-->
                                    <div class="goodS_info displaY_goods_name">
                                        <span class="areA"><a href="#">${list.flowerTitle}</a></span>
                                    </div>
                                    <div class="infO_group">
                                        <!-- 비회원 대체문구 -->
                                        <!-- (할인혜택)판매가 -->
                                        <div class="goodS_info displaY_sales_price">
                                            <span class="areA">
                                                <span class="nuM">${list.sales_price.toLocaleString()}</span>
                                            </span>
                                        </div>
                                        <!-- 정가 -->
                                        <!-- 할인율 -->
                                    </div>
                                    <div class="infO_group">
                                        <!-- (단독이벤트) 판매수량 -->
                                        <div class="goodS_info displaY_event_order_ea">
                                            <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                        </div>
                                        <!-- 상품후기 작성수 -->
                                        <div class="goodS_info displaY_review_count">
                                            <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../page/most.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax most 성공");
            console.log(data);
            
            
            data.forEach((list, i) => {
                $(".goods_list_3").append(
                    `<li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!--상품이미지-->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="javascript:void(0);" class="respItemImageArea">
                                    <img src="${list.flowerImg}" 
                                            data-src="${list.data_src}" 
                                            class="${list.class}" 
                                            onerror="${list.onerror}"
                                            alt="${list.alt}">
                                </a>
                            </div>
                            <div class="resp_display_goods_info infO_style_1">
                                <!-- 상품명-->
                                <div class="goodS_info displaY_goods_name">
                                    <span class="areA">
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                <div class="infO_group">
                                    <!-- 비회원 대체문구 -->
                                    <!-- (할인혜택)판매가 -->
                                    <div class="goodS_info displaY_sales_price">
                                        <span class="areA">
                                            <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                        </span>
                                    </div>
                                    <!-- 정가 -->
                                    <div class="goodS_info displaY_consumer_price">
                                        <span class="areA">
                                            <span class="nuM">${list.consumer_price}</span>
                                        </span>
                                    </div>
                                    <!-- 할인율 -->
                                    <div class="goodS_info displaY_sales_percent">
                                        <span class="areA"><span class="nuM">${list.sales_percent}</span></span>
                                    </div>
                                </div>
                                <div class="infO_group">
                                    <!-- (단독이벤트) 판매수량 -->
                                    <div class="goodS_info displaY_event_order_ea">
                                        <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                    </div>
                                    <!-- 상품후기 작성수 -->
                                    <div class="goodS_info displaY_review_count">
                                        <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../page/cake.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax cake 성공");
            console.log(data);
            
            
            data.forEach((list, i) => {
                $(".swiper-wrapper_3").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                        <li class="gl_item" style="width: 300px;">
                            <div class="gl_inner_item_wrap">
                                <!--상품이미지-->
                                <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                    <a href="javascript:void(0);" class="respItemImageArea">
                                        <img src="${list.flowerImg}"
                                                data-src="${list.data_src}" 
                                                class="${list.class}" 
                                                onerror="${list.onerror}"
                                                alt="${list.alt}">
                                    </a>
                                    <!-- 상품 상태 표시 -->
                                    <div class="respGoodsStatus">
                                        <a href="/goods/view?no=115" class="area">
                                            <span class="status_style type1"><em>${list.state}</em></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="resp_display_goods_info infO_style_1">
                                    <!-- 상품명-->
                                    <div class="goodS_info displaY_goods_name">
                                        <span class="areA"><a href="#">${list.flowerTitle}</a></span>
                                    </div>
                                    <div class="infO_group">
                                        <!-- 비회원 대체문구 -->
                                        <!-- (할인혜택)판매가 -->
                                        <div class="goodS_info displaY_sales_price">
                                            <span class="areA">
                                                <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                            </span>
                                        </div>
                                        <!-- 정가 -->
                                        <div class="goodS_info displaY_consumer_price">
                                            <span class="areA">
                                                <span class="nuM">${list.consumer_price}</span>
                                            </span>
                                        </div>
                                        <!-- 할인율 -->
                                        <div class="goodS_info displaY_sales_percent">
                                            <span class="areA"><span class="nuM">${list.sales_percent}</span></span>
                                        </div>
                                    </div>
                                    <div class="infO_group">
                                        <!-- (단독이벤트) 판매수량 -->
                                        <div class="goodS_info displaY_event_order_ea">
                                            <span class="areA">구매<span class="nuM">${list.orderEA.toLocaleString()}</span></span>
                                        </div>
                                        <!-- 상품후기 작성수 -->
                                        <div class="goodS_info displaY_review_count">
                                            <span class="areA">후기 <span class="nuM">${list.review_count.toLocaleString()}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>`
                );
            });
        }
    });//ajax
    




};//javascript