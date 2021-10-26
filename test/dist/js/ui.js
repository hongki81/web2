$(document).ready(function(){
    // 응답 > 감정바 Range Slider
    $("#rangeSlider01").ionRangeSlider({
        type: "single",
        min: 0,
        max: 100,
        grid: false,
        step: 1,
        postfix: "%",
        onChange: function(data){
            $(data.input).prev('.irs').find('.irs-slider').addClass('is-change');
            $(data.input).parents('.component-slider').next().children('.txt-value').text(data.from);

            if(data.from >= 0 && data.from <= 20) {
                $(data.input).parent().attr('class','is-a');
            } else if(data.from >= 21 && data.from <= 40) {
                $(data.input).parent().attr('class','is-b');
            } else if(data.from >= 41 && data.from <= 60) {
                $(data.input).parent().attr('class','is-c');
            } else if(data.from >= 61 && data.from <= 80) {
                $(data.input).parent().attr('class','is-d');
            } else {
                $(data.input).parent().attr('class','is-e');
            }
        },
        onStart: function(data){
            data.from = 22;
            $(data.input).parents('.component-slider').next().children('.txt-value').text(data.from);

            if(data.from >= 0 && data.from <= 20) {
                $(data.input).parent().attr('class','is-a');
            } else if(data.from >= 21 && data.from <= 40) {
                $(data.input).parent().attr('class','is-b');
            } else if(data.from >= 41 && data.from <= 60) {
                $(data.input).parent().attr('class','is-c');
            } else if(data.from >= 61 && data.from <= 80) {
                $(data.input).parent().attr('class','is-d');
            } else {
                $(data.input).parent().attr('class','is-e');
            }
        },
        onFinish: function(data){
            $(data.input).prev('.irs').find('.irs-slider').removeClass('is-change');
            $(data.input).blur();
            $(data.input).trigger('blur');
        }
    });

    // 응답 > 별점
    var rating = 0;
    $(".item-rating input").on("change", function(e){
        var $this = $(e.currentTarget);

        rating = $this.val();
    });
    $(".item-rating").on("mouseover mouseleave", function(e){
        var $target = $(this).children("input");

        if(e.type === "mouseover") {
            for(var i=0; i < $target.length; i++) {
                if(rating === $target.eq(i).val()) {
                    $target.eq(i).prop("checked",false);
                }
            }
        } else {
            for(var j=0; j < $target.length; j++) {
                if(rating === $target.eq(j).val()) {
                    $target.eq(j).prop("checked",true);
                }
            }
        }
    });

    // 제작 > Input
    // $(".component-input").on("click focus blur", function(e) {
    //     var $this = $(e.currentTarget);
    //
    //     if(e.type === "click" || e.type === "focus") {
    //         $this.prop("readonly", "");
    //         $this.focus();
    //     } else {
    //         $this.prop("readonly", "readonly");
    //     }
    // });

    // 제작 > Textarea
    $(".component-textarea").on("keyup keydown keypress", "textarea", function(e){
        if(e.type === "keypress") {
            if($(e.currentTarget).parent().hasClass("type-none") && e.keyCode === 13) {
                e.preventDefault();
            }
        } else {
            $(e.currentTarget).css({height : 0});
            $(e.currentTarget).height(this.scrollHeight);
        }
    });
    $('.component-textarea').find('textarea').trigger("keyup");
    $(window).resize(function(){
        $('.component-textarea').find('textarea').trigger("keyup");
    });

    // 제작 > 유형 선택
    $(".item-survey-editor .component-dropdown-type .txt-label").on("click", function(e){
        var $this = $(e.currentTarget);
        var $layer = $this.siblings();

        setPositionLayer($this, $layer);
    });

    // 제작 > 레벨 선택
    $(".item-survey-editor .component-dropdown-level .txt-label").on("click", function(e){
        var $this = $(e.currentTarget);
        var $layer = $this.siblings();

        setPositionLayer($this, $layer);
    });

    // 제작 > 유형 추가
    $(".item-survey-editor .survey-type .btn-icon.type-add").on("click", function(e){
        var $this = $(e.currentTarget);
        var $layer = $this.siblings();

        setPositionLayer($this, $layer);
    });
});

// Textarea Enter replace br
function replaceBr() {
    var a = $(".component-textarea .textarea-desc").val().replace(/\r\n|\r|\n/g,"<br />");
    $(".test").html(a);
}

// 제작 > 레이어(유형,레벨) 팝업 위치
function setPositionLayer(target, layer) {
    var $target = target;
    var $layer = layer;
    var $screenHeight = $target.parents(".section-editor").height() + $(".layout-gnb").innerHeight();
    var $itemHeight = $target.offset().top + $layer.outerHeight(true) + parseInt($layer.css("top"));

    // 레이어 Show
    if($target.parent().attr("aria-expanded") === "false") {
        $target.parent().attr("aria-expanded", "true");

        // 레이어 위치
        if($screenHeight < $itemHeight) {
            $layer.addClass("is-bottom");
        }
        if($layer.offset().top < $(".layout-gnb").innerHeight()) {
            $layer.addClass("is-bottom");
            $layer.css({bottom : -(Math.abs($layer.offset().top) + $target.height() + Math.abs(parseInt($target.parent().css("bottom"))))});
        }
    } else {
        // $target.parent().attr("aria-expanded", "false");
        // $layer.removeClass("is-bottom").attr("style","");
    }

    // 레이어 Hide
    // $target.parent().on("mouseleave", function(e){
    //     $(e.currentTarget).attr("aria-expanded", "false");
    //     $layer.removeClass("is-bottom").attr("style","");
    // });
}

// 제작 > 응답 스크롤 이동
function moveAnswer(target) {
    var $target = document.querySelector(target);
    var $scroll = $(".container-answer .flex-scroll");
    var $itemHeight = ($('.container-answer').height() / 2) - ($(target).height() / 2);

    $scroll.stop().animate({scrollTop : ($target.offsetTop - $itemHeight)}, 500);
}

// 응답 > '필수 질문' 스크롤 이동
function moveAnswerRequired(target) {
    var $target = document.querySelector(target);
    var $scroll = $("html, body");
    var $itemHeight = ($(window).height() / 2) - ($(target).height() / 2);

    $scroll.stop().animate({scrollTop : ($target.offsetTop - $itemHeight)}, 500);
}

function rotate(el, degs) {
    transform = 'rotate('+degs+'deg)';
    styles = {
        transform: transform,
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-o-transform': transform,
    };
    $(el).css(styles);
}