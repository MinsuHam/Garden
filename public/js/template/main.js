window.onload = function() {

    /*  
        const params = new URLSearchParams(document.location.search);
        const fid = params.get("flowerId"); 
    */

    $.ajax({
        type: 'get',
        url: '../template/theme_content.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax theme_content 성공");
            console.log(data);
            
            /*          
                const rs = data.filter((list) => list.flowerId == fid);
                console.log(rs);
                const result = rs[0]; 
            */
            

            data.forEach((list, i) => {
                $(".content_container").append(
                    `<div class="col sizing">
                            <div class="theme_box_1220">
                                <a href="#">
                                    <div class="theme_text">${list.flowerTitle}</div>
                                    <div>
                                        <img src="${list.flowerImg}" alt="${list.alt}" class="${list.class}">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>`
                );
            });
        }
    });//ajax

    $.ajax({
        type: 'get',
        url: '../template/recommandation.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax recommandation 성공");
            console.log(data);

            data.forEach((list, i) => {
                $(".swiper_wrapper_1").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                    <li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!-- 상품 이미지 -->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="javascript:void(0);" class="respItemImageArea">
                                    <img src="${list.flowerImg}" alt="${list.alt}" class="${list.class}">
                                </a>
                                <!-- 텍스트형 아이콘 -->
                                <div class="respGoodsIcon typeText empty" style="background: #71a200;">
                                    <div class="respGoodsIconInner">
                                        <div class="iconArea">
                                            <span class="nuM">BEST</span>
                                            <span class="secondMessage">${list.flowerId}위</span>
                                            <span class="nextMessage"></span>
                                            <!-- 부가 텍스트 있는 경우 노출 없으면 미노출-->
                                        </div>
                                    </div>
                                </div>
                                <!-- 반응형 찜 -->
                                <div class="respGoodsZzim">
                                    <a class="zzimArea" href="#" onclick="zzim()">
                                        <img src="${list.zzimImage}" alt="찜하기" class="zzimImage normal" title="찜하기">
                                        <img src="${list.zzimOn}" alt="찜한 상품" class="zzimImage active hide" title="찜한 상품">
                                    </a>
                                </div>
                                <!-- 미리보기/옵션보기/SNS보내기 -->
                                <!-- 상품 상태 표시 -->
                            </div>
                            <div class="resp_display_goods_info infO_style_4">
                                <!-- ++++++++ NEW 상품 정보 ++++++++ -->
                                <!-- 상품명 -->
                                <div class="goodS_info displaY_goods_name">
                                    <span class="araA">
                                        <a href="#">${list.flowerTitle}</a>
                                    </span>
                                </div>
                                    <!-- 비회원 대체 문구 -->
                                    <div class="infO_group">
                                        <!--(할인혜택)판매가 -->
                                        <div class="goodS_info displaY_sales_price">
                                            <span class="araA">
                                                <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                            </span> 
                                        </div>
                                        <!-- 정가 -->
                                    </div>
                                    <!-- 짧은 설명 -->
                                    <div class="goodS_info displaY_goods_short_desc">
                                        <span class="areA">${list.flowerDescription}</span>
                                    </div>
                                    <!-- 아이콘 -->
                                    <!-- ++++++++ //NEW 상품 정보 ++++++++ -->
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
        url: '../template/flower_present.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax flower_present 성공");
            console.log(data);

            data.forEach((list, i) => {
                $(".swiper_wrapper_2").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                            <li class="gl_item">
                                <div class="gl_inner_item_wrap">
                                    <!-- 상품 이미지 -->
                                    <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                        <a href="javascript:void(0);" class="respItemImageArea" onclick="">
                                            <img src="${list.flowerImg}" alt="${list.alt}" class="${list.class}">
                                        </a>
                                        <!-- 텍스트형 아이콘 -->

                                        <!-- 반응형 찜 -->
                                        <div class="respGoodsZzim">
                                            <a class="zzimArea" href="#" onclick="zzim()">
                                                <img src="${list.zzimImage}" alt="찜하기" class="zzimImage normal" title="찜하기">
                                                <img src="${list.zzimOn}" alt="찜한 상품" class="zzimImage active hide" title="찜한 상품">
                                            </a>
                                        </div>
                                        <!-- 미리보기/옵션보기/SNS보내기 -->
                                        <!-- 상품 상태 표시 -->
                                    </div>
                                    <div class="resp_display_goods_info infO_style_2">
                                        <!-- ++++++++ NEW 상품 정보 ++++++++ -->
                                        <!-- 컬러옵션 -->
                                        <div class="goodS_info displaY_color_option"></div>
                                        <div class="infO_group">
                                            <!-- 브랜드명 -->
                                            <!-- 상품명 -->
                                            <div class="goodS_info displaY_goods_name">
                                                <span class="araA">
                                                    <a href="#">${list.flowerTitle}</a>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- 짧은 설명 -->
                                        <div class="goodS_info displaY_goods_short_desc">
                                            <span class="areA">${list.flowerDescription}</span>
                                        </div>
                                        <!-- 비회원 대체 문구 -->
                                        <!-- 정가 -->
                                        <div class="goodS_info displaY_consumer_price">
                                            <span class="areA">
                                                <span class="nuM">${list.consumer_price}</span>
                                            </span>
                                        </div>
                                        <div class="infO_group">
                                            <!--(할인혜택)판매가 -->
                                            <div class="goodS_info displaY_sales_price">
                                                <span class="araA">
                                                    <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                                </span> 
                                            </div>
                                            <!-- 할인율 -->
                                            <div class="goodS_info displaY_sales_percent">
                                                <span class="areA"><span class="nuM">${list.sales_percent}</span></span>
                                            </div>
                                        </div>
                                        <!-- 아이콘 -->
                                        <!-- ++++++++ //NEW 상품 정보 ++++++++ -->
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
        url: '../template/foliage.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax foliage 성공");
            console.log(data);

            data.forEach((list, i) => {
                $(".swiper_wrapper_3").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                    <li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!-- 상품 이미지 -->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="javascript:void(0);" class="respItemImageArea">
                                    <img src="${list.flowerImg}" alt="${list.alt}" class="${list.class}">
                                </a>
                                <!-- 텍스트형 아이콘 -->

                                <!-- 반응형 찜 -->
                                <div class="respGoodsZzim">
                                    <a class="zzimArea" href="#" onclick="zzim()">
                                        <img src="${list.zzimImage}" alt="찜하기" class="zzimImage normal" title="찜하기">
                                        <img src="${list.zzimOn}" alt="찜한 상품" class="zzimImage active hide" title="찜한 상품">
                                    </a>
                                </div>
                                <!-- 미리보기/옵션보기/SNS보내기 -->
                                <!-- 상품 상태 표시 -->
                            </div>
                            <div class="resp_display_goods_info infO_style_2">
                                <!-- ++++++++ NEW 상품 정보 ++++++++ -->
                                <!-- 컬러옵션 -->
                                <div class="goodS_info displaY_color_option"></div>
                                <div class="infO_group">
                                    <!-- 브랜드명 -->
                                    <!-- 상품명 -->
                                    <div class="goodS_info displaY_goods_name">
                                        <span class="araA">
                                            <a href="#">${list.flowerTitle}</a>
                                        </span>
                                    </div>
                                </div>
                                <!-- 짧은 설명 -->
                                <div class="goodS_info displaY_goods_short_desc">
                                    <span class="areA">${list.flowerDescription}</span>
                                </div>
                                <!-- 비회원 대체 문구 -->
                                <div class="infO_group">
                                    <!--(할인혜택)판매가 -->
                                    <div class="goodS_info displaY_sales_price">
                                        <span class="araA">
                                            <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                        </span> 
                                    </div>
                                    <!-- 정가 -->
                                </div>
                                <!-- 아이콘 -->
                                <!-- ++++++++ //NEW 상품 정보 ++++++++ -->
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
        url: '../template/customer_satisfaction.json',
        dataType: 'json',
        success: function(data) {
            console.log("ajax customer_satisfaction 성공");
            console.log(data);

            data.forEach((list, i) => {
                $(".swiper_wrapper_4").append(
                    `<ul class="goods_list swiper-slide swiper-slide-active">
                    <li class="gl_item">
                        <div class="gl_inner_item_wrap">
                            <!-- 상품 이미지 -->
                            <div class="gli_image goodsDisplayImageWrap" style="border: 0px;">
                                <a href="javascript:void(0);" class="respItemImageArea">
                                    <img src="${list.flowerImg}" alt="${list.alt}" class="${list.class}">
                                </a>
                                <!-- 텍스트형 아이콘 -->

                                <!-- 반응형 찜 -->
                                <div class="respGoodsZzim">
                                    <a class="zzimArea" href="#" onclick="zzim()">
                                        <img src="${list.zzimImage}" alt="찜하기" class="zzimImage normal" title="찜하기">
                                        <img src="${list.zzimOn}" alt="찜한 상품" class="zzimImage active hide" title="찜한 상품">
                                    </a>
                                </div>
                                <!-- 미리보기/옵션보기/SNS보내기 -->
                                <!-- 상품 상태 표시 -->
                            </div>
                            <div class="resp_display_goods_info infO_style_5">
                                <!-- ++++++++ NEW 상품 정보 ++++++++ -->
                                <!-- 컬러옵션 -->
                                <div class="goodS_info displaY_color_option"></div>
                                <div class="infO_group">
                                    <!-- 브랜드명 -->
                                    <!-- 상품명 -->
                                    <div class="goodS_info displaY_goods_name">
                                        <span class="araA">
                                            <a href="#">${list.flowerTitle}</a>
                                        </span>
                                    </div>
                                </div>
                                <!-- 비회원 대체 문구 -->
                                <div class="infO_group">
                                    <!--(할인혜택)판매가 -->
                                    <div class="goodS_info displaY_sales_price">
                                        <span class="araA">
                                            <span class="nuM">${list.sales_price.toLocaleString()}</span>원
                                        </span> 
                                    </div>
                                    <span style="color:#08B899; font-size:14px;" class="no_mobile"></span>
                                </div>
                                <div class="infO_group">
                                    <!-- 상품 후기 평가 점수(별점) -->
                                    <div class="goodS_info displaY_review_score_a">
                                        <span class="areA">
                                            <span class="ev_active2"><b style="${list.bStyle}"></b></span>
                                        </span>
                                    </div>
                                    <!-- 상품 후기 평가 점수(점수) -->
                                    <div class="goodS_info displaY_review_score_b">
                                        <span class="areA"><span class="nuM">${list.review_score}</span>점</span>
                                    </div>
                                </div>
                                <!-- 아이콘 -->
                                <!-- ++++++++ //NEW 상품 정보 ++++++++ -->
                            </div>
                        </div>
                    </li>
                </ul>`
                );
            });
        }
    });//ajax
};//javascript