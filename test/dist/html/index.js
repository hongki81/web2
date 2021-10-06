$(function () {
    var $selector = $('.cp-index-nav li');

    $selector.on('click', function (e) {
        var $this = $(e.currentTarget);
        var $target = $('#iframe');
        var $headingTitle = $('.cp-index-content h2');
        var type = $this.parent().attr('data-folder');
        var fileName = $this.attr('data-file');

        $selector.removeClass('cp-selected');
        $this.addClass('cp-selected');

        if (type == undefined || type == null) {
            $headingTitle.text(fileName + ".html");
            $target.attr('src', fileName + '.html');
        } else {
            $headingTitle.text('html / ' + type + ' / ' + fileName + ".html");
            $target.attr('src', type + '/' + fileName + '.html');
        }
    });

    $('h1.is-selected + ul li').eq(0).trigger('click');

    $('.cp-page-index h1').on('click', function (e) {
        var $this = $(e.currentTarget);

        $('.cp-page-index h1').removeClass('is-selected');
        $('.cp-page-index ul').attr('aria-expanded', 'false');
        $selector.removeClass('cp-selected');

        $this.addClass('is-selected');
        $this.next('ul').attr('aria-expanded', 'true');
        $this.next('ul').children('li').eq(0).trigger('click');
    });
});