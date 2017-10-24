$(document).ready(function () {

    /* Navigation menu scripting */
    $('.left_rightcontent li a').click(function () {
        $(this).addClass('highlight');
        $(this).parent('li').siblings().children('a').removeClass('highlight');
    });

    /* Cycling through the menu options */
    $('.firstChild').click(function () {
        if ($(this).text() == "Life Portrait") {
            $('.right_rightcontent section:not(.portrait)').hide();
            $('.portrait').show();
        } else if ($(this).text() == "Life Suite") {
            $('.right_rightcontent section:not(.suite)').hide();
            $('.suite').show();
        }
    });


    $('.subContainer li a').click(function () {
        $('.sub_window').show();
        $(this).addClass('submenuHighlight')
            .parent('li').siblings().children('a').removeClass('submenuHighlight');
        $('.sub_window_content h3').text(this.text);
        debugger;
        var anchorText = $(this).text();
        var trimmed = $.trim(anchorText);
        if (trimmed == "LifeSuite QA Region") {
            var quality = $('.quality').clone();
            $('.sub_window_contentDiv').empty();
            $('.sub_window_contentDiv').append(quality);
            $('.sub_window_contentDiv').find('div').show();
        } else if (trimmed == "LifeSuite Amica Region") {
            var amica = $('.amica').clone();
            $('.sub_window_contentDiv').empty();            
            $('.sub_windows_contentDiv').append(amica);
            $('.sub_window_contentDiv').find('div').show();
        } else if (trimmed == "LifeSuite Patriot Region") {
            var patriot = $('.patriot').clone();
            $('.sub_window_contentDiv').empty();            
            $('.sub_windows_contentDiv').append(patriot);
            $('.sub_window_contentDiv').find('div').show();
        }
        else {
            $('.sub_window_contentDiv').empty();
            $('.sub_window').hide();
        }
    })

    /* Cycling through the Life Suite Regions */
    // $(document).on('click','.subContainer li a',(function() {
    //     $('.sub_window').show();
    //     $(this).addClass('submenuHighlight')
    //         .parent('li').siblings().children('a').removeClass('submenuHighlight');
    //     $('.sub_window_content h3').text($(this).text());
    //     debugger;
    //     if($(this).text() == "LifeSuite QA Region"){
    //         $(body).append(QA);
    //     }
    // }))
})
