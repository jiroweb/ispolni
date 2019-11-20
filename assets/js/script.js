$(document).ready(function () {
    //  ================ -MOBILE-CLICK-JS-START- ================
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        $('body').removeClass('body-fix_mob');
        $('.left-sidebar').removeClass('left-sidebar__dsk')
        if ($(this).hasClass('close-menu')) {
            $('body').addClass('body-fix');
        } else {
            $('body').removeClass('body-fix');
        }
    });
    $('.for-mobile__bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('body').removeClass('body-fix');
    })
    //  ================ -MOBILE-CLICK-JS-END- ================


    //  ================ -SELECT-JS-START- ================
    $(".user .header-user__select").on('click', function () {
        $(".header-user__drop").fadeToggle()
    })
    $(".user-drop__company--title").on('click', function () {
        $(".user-drop__company--list").toggle()
    })


    $(".user-drop__company--items li").on('click', function () {
        $(this).addClass('company-select__active').siblings().removeClass('company-select__active');
    })


    //  ================ -SELECT-JS-END- ================




    //  ================ -SELECT-JS-START- ================
    $('.my-select select').styler();
    //  ================ -SELECT-JS-END- ================




    //  ================ -MOBILE-CLICK-JS-START- ================
    $('.left-sidebar__open').on('click', function () {
        $(".left-sidebar").toggleClass('left-sidebar__dsk');
        $('body').removeClass('body-fix');
        $('.open-menu').removeClass('close-menu')

        if ($(".left-sidebar").hasClass('left-sidebar__dsk')) {
            $('body').addClass('body-fix_mob');
        } else {
            $('body').removeClass('body-fix_mob');
        }
    });
    $('.for-mobile__bg--mob').on('click', function () {
        if ($('.left-sidebar').hasClass('left-sidebar__dsk')) {
            $('.left-sidebar').removeClass('left-sidebar__dsk')
        }
        $('body').removeClass('body-fix_mob');
    })
    //  ================ -MOBILE-CLICK-JS-END- ================




    //  ================ -STEPS-JS-START- ================
    activeCreateMenu('steps-count')
    activeBlockCreate('steps-count')
    $('.steps-btn').on('click', openCreateBlock)
    $('.steps-btn__last').on('click', openCreateBlockLast)


    function activeCreateMenu(element) {
        var prt = $('.' + element);
        var menu_li = $(prt).find('ul li');
        var i = 0;
        $(menu_li).each(function () {
            i++;
            $(this).attr('data-num', i)
            var data_num = $(this).attr('data-num')
            if (data_num == 1) {
                $(this).addClass('steps-count__active steps-count__ready')
            }
        })
    }

    function activeBlockCreate(element) {
        var prt = $('.' + element);
        var menu_li = $(prt).find('ul li');
        $(menu_li).each(function () {
            var this_attr_id = $(this).attr('data-num');
            var this_block = $('#' + this_attr_id);
            if ($(this).hasClass('steps-count__active')) {
                $(this_block).css({
                    display: 'block'
                })
            } else {
                $(this_block).css({
                    display: 'none'
                })
            }
            if (this_attr_id == '2') {
                $('.steps-progress__bar').css({
                    width: '28%'
                })
            }
        })
    }

    function openCreateBlock() {
        var i = 0;
        $('.steps-btn').each(function () {
            i++
            $(this).attr('data-num', i)
        })
        var this_attr = $(this).attr('data-create');
        var menu_li = $('.steps-count ul li');
        $('.steps-blocks').each(function () {
            if (this_attr == $(this).attr('id')) {
                $(this).css({
                    display: 'block'
                })
                $(menu_li).each(function () {
                    $(this).removeClass('steps-count__active')
                    if (this_attr == $(this).attr('data-num')) {
                        if (!$(this).hasClass('steps-count__active')) {
                            $(this).addClass('steps-count__active steps-count__ready')
                        }
                    }
                    if (this_attr == '2') {
                        $('.steps-progress__bar').css({
                            width: '42%'
                        })
                    }
                    if (this_attr == '3') {
                        $('.steps-progress__bar').css({
                            width: '62%'
                        })
                    }
                    if (this_attr == '4') {
                        $('.steps-progress__bar').css({
                            width: '100%'
                        })
                    }
                })
            } else {
                $(this).css({
                    display: 'none'
                })
            }
        })
    }

    function openCreateBlockLast() {

        var this_attr = $(this).attr('data-createLast');
        $('.steps-box').each(function () {
            if (this_attr == $(this).attr('id')) {
                $(this).css({
                    display: 'block'
                })
            } else {
                $(this).css({
                    display: 'none'
                })
            }
        })
    }
    $(".filter-box__input, .steps-btn__last--fu").on('click', function () {
        var parent = $(this).parent();
        $(parent).toggleClass('filter-box__active')
        $(".steps-count__ready").removeClass("steps-count__active")

    })
    $(".filter-box__list--name").on('click', function () {
        var text = $(this).children('span').children().text()
        console.log(text)
        $("#filterCompany").val(text);

    })

    $(".steps-btn, .steps-btn__last").click(function () {
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 500);
    });

    //  ================ -STEPS-JS-END- ================

    //  ================ -SELECT-JS-START- ================
    $('.date').mask('00.00.0000');
    $('.cep').mask('0000 № 000000');
    $('.phoneN').mask('+7 ( Y00 ) 000 - 00 - 00', {
        'translation': {
            Y: {
                pattern: /[7 9]/
            }
        }
    });
    //  ================ -SELECT-JS-END- ================


    //  ================ -FACE-JS-START- ================
    $('.face-box').on('click', function () {
        $(this).addClass('face-box__active').siblings().removeClass('face-box__active');
    });

    //  ================ -FACE-JS-END- ================



    //  ================ -FILTER-BLOCK-JS-START- ================


    function changeMenuBlock($this, parent_block, parent_menu_link) {
        let parent = $('.' + parent_block)
        let parent_menu = $(parent).find('.' + parent_menu_link)

        let first_active_child = $(parent).find('.' + parent_menu_link)[0]
        let first_active_attr = $(first_active_child).data('set')
        let open_block = $(parent).find('.content-about__filter').children()
        if ($($this).data('set')) {

            $(parent_menu).each(function () {
                if ($(this).hasClass('menu-list__active')) {
                    $(this).removeClass('menu-list__active')
                }
            })
            $($this).addClass('menu-list__active')


            $(open_block).each(function () {
                $(this).hide()
                if ($(this).data('set') === $($this).data('set')) {
                    $(this).fadeIn()
                }
            })

        } else {
            if (!$(first_active_child).hasClass('menu-list__active')) {
                $(first_active_child).addClass('menu-list__active')
            }
            $(open_block).each(function () {
                $(this).hide()
                if ($(this).data('set') === first_active_attr) {
                    $(this).fadeIn()
                }
            })
        }
    }

    $(".filter-linksFuC ul li").on('click', function () {
        changeMenuBlock(this, 'clicle-svg', 'filter-linksFuC ul li')
    })
    changeMenuBlock(this, 'clicle-svg', 'filter-linksFuC ul li')

    $(".filter-linksFu ul li").on('click', function () {
        changeMenuBlock(this, 'filter-block', 'filter-linksFu ul li')
    })
    changeMenuBlock(this, 'filter-block', 'filter-linksFu ul li')


    //  ================ -FILTER-BLOCK-JS-END- ================




    //  ================ -RANGE-JS-START- ================
    $('.range-calc').on('input', function () {
        var range_box = $('.for-range-calc');
        $(range_box).css({
            width: ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * 100 + '%'
        })
        var vl = $('.curent-ps');
        $(vl).val($(this).val())

        var account = $('.curent-ps');
        $('.curent-ps').val(accounting.formatMoney(account.val(), "", 2, " ", ",", " "));
    })
    var account = $('.curent-ps');
    $('.curent-ps').val(accounting.formatMoney(account.val(), "", 2, " ", ",", " "));

    $('.range-calc').on('input', function () {
        var textvl = $('.range-price__info p span');
        $(textvl).text($(this).val())
        $('.range-price__info p span').text(accounting.formatMoney(textvl.text(), "", 2, " ", ",", " "));
    })


    $('.curent-ps').keyup(function () {

        var vl = $('.curent-ps');
        $(vl).val($(this).val())

        var textvl = $('.range-price__info p span');
        $(textvl).text($(this).val())

    })


    //  ================ -RANGE-JS-END- ================



    //  ================ -ADD FILE .pdf-JS-START- ================

    $('.basket-files-hidden').on('change', function () {
        var prt = $(this).parents('.formula-for-file');
        var filename = $(prt).find('.basket-files-hidden');
        var cloner = $(filename).clone();
        if ($(filename)[0].files[0] != undefined) {
            varfile_val = $(prt).find('input[type=file]').val();
            var file_block = $(prt).find('.insert-file');
            var file_size = $(filename)[0].files[0].size;
            var file_name = $(filename)[0].files[0].name;
            file_size = parseInt(file_size / 1024)
            var fl_name = '';
            var fl_size = '';
            if (file_size / 1024 > 1) {
                if (((file_size / 1024) / 1024) > 1) {
                    file_size = (Math.round(((file_size / 1024) / 1024) * 100) / 100);
                    fl_size = file_size + ' Gb';
                } else {
                    file_size = (Math.round((file_size / 1024) * 100) / 100)
                    fl_size = file_size + ' Mb';

                }
            } else {
                file_size = (Math.round(file_size * 100) / 100)
                fl_size = file_size + ' kb';

            }

            if (file_name.length >= 35) {
                var name = file_name.split('', 35).join('');
                fl_name = name + '...'
            } else {
                fl_name = file_name;
            }

            // var boxes = $(prt).find('.files-box');
            // if ($(boxes).length <= 3) {
            cloner.attr('class', 'gid-file')
            var sum = 0;

            $(file_block).append('<div class="files-box single-info__block--big">' +
                '<div class="single-info__block">' +
                '<div class="download-documents d_flex j_content_center a_items_center" >' +
                '<div class="fileappend"></div>' +
                '<div class="file-description">' +
                '<div class="downloading-file">' +
                '<svg>' +
                '<use xlink:href="assets/img/svg/icons.svg#downloading_svg">' +
                '</use>' +
                '</svg>' +
                '</div>' +
                '<span class="file-size">' + fl_size + '</span>' +
                '</div>' +
                '</div>' +
                '<p class="file-name">' + fl_name + '</p>' +
                '</div>' +
                '<div class="remove-file"></div>' +
                '</div>')

            $('.fileappend').each(function () {
                $(this).hide()
                if ($(this).html() === '') {
                    cloner.attr('disabled', 'true')
                    $(this).append(cloner);
                }
            })

            // var all_size = $(prt).find('.gid-file');
            // $(all_size).each(function(){
            //     var sz =  $(this)[0].files[0].size;
            //     console.log(sz);
            //     sum+=sz;
            // })
            if (Math.round(((sum / 1024 / 1024) * 100) / 100) > 20) {
                var err_size = $(file_block).find('.error-size span');
                $(err_size).text('Вы не можете скачать более 10 МБ файлов')
                var big_prt = $(this).parents('form');
                var btn = $(big_prt).find('.disabl-btn');
                $(btn).attr('disabled', 'true')
                $(btn).addClass('disable-btn-red')
            }


            // } else {
            //     var err = $(file_block).find('.error-count span');
            //     $(err).text('Вы не можете скачать более 3 файлов')
            // }

        }


    })

    $(document).on('click', '.remove-file', function () {
        var remove_q = confirm("Удалить?");
        if (remove_q == true) {
            var prt_bg = $(this).parents('.formula-for-file');
            var file_block = $(prt_bg).find('.insert-file');
            var prt = $(this).parents('.files-box');
            var err = $(file_block).find('.error-count span');
            var err_size = $(file_block).find('.error-size span');

            $(err).text('');
            $(err_size).text('');
            prt.remove();
        }
    })

    //  ================ -ADD FILE .pdf-JS-END- ================



    //  ================ -ADD FILE .video-JS-START- ================

    $('.basket-files-hidden-v').on('change', function () {
        var prt = $(this).parents('.formula-for-file-v');
        var filename = $(prt).find('.basket-files-hidden-v');
        var cloner = $(filename).clone();

        if ($(filename)[0].files[0] != undefined) {
            varfile_val = $(prt).find('input[type=file]').val();
            var file_block = $(prt).find('.insert-file-v');
            var file_name = $(filename)[0].files[0].name;
            var file_url = URL.createObjectURL(this.files[0]);
            var fl_name = '';


            if (file_name.length >= 35) {
                var name = file_name.split('', 35).join('');
                fl_name = name + '...'
            } else {
                fl_name = file_name;
            }


            cloner.attr('class', 'gid-file')

            $(file_block).append('<div class="files-box video-block">' +
                '<div class="company-document__video">' +
                '<div class="single-video__block" >' +
                '<div class="video-box">' +
                '<video poster="./assets/img/video/poster/poster.jpg" class="video" src="' + file_url + '" type="video/mp4" src="' + file_url + '"></video>' +
                '<div class="video-play__bg">' +
                '<span class="video-play__icon"></span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<p class="file-name">' + fl_name + '</p>' +
                '</div>' +
                '<div class="remove-file-v"></div>' +
                '<div class="fileappend"></div>' +
                '</div>')

            $('.fileappend').each(function () {
                $(this).hide()
                if ($(this).html() === '') {
                    cloner.attr('disabled', 'true')
                    $(this).append(cloner);
                }
            })

        }
        $('.video-play__bg').click(function () {
            var this_prt = $(this).parent()
            var parent_video = $(this_prt)
            var icon_video = $(parent_video).find(".video-play__bg")
            var video = $(parent_video).find(".video")
            $(video).trigger('play')
            $(video).attr("controls", "controls")
            $(icon_video).fadeOut()
        });

    })

    $(document).on('click', '.remove-file-v', function () {
        var remove_q = confirm("Удалить?");
        if (remove_q == true) {
            var prt_bg = $(this).parents('.formula-for-file-v');
            var file_block = $(prt_bg).find('.insert-file-v');
            var prt = $(this).parents('.files-box');
            var err = $(file_block).find('.error-count span');

            $(err).text('');
            prt.remove();
        }
    })


    $('.video-play__bg').click(function () {
        var this_prt = $(this).parent()
        var parent_video = $(this_prt)
        var icon_video = $(parent_video).find(".video-play__bg")
        var video = $(parent_video).find(".video")
        $(video).trigger('play')
        $(video).attr("controls", "controls")
        $(icon_video).fadeOut()
    });


    //  ================ -ADD FILE .video-JS-END- ================







    //  ================ -NEWS PAGE-JS-START- ================


    $('.news-info__box--text').each(function () {
        var this_p = $(this).children('p');
        var this_span = $(this).children('span')
        if ($(this_p).text().length > 350) {
            var this_prt = $(this).parent();
            $(this_p).css({
                height: '90px',
            })
            $(this_span).fadeIn();
            var expend = $(this_prt).find('.expand');
            $(expend).fadeIn();
        }
    })
   

    $('.expand').on('click', function () {
        var this_data = $(this).attr('data-expand');
        var this_prt = $(this).parent();
        var this_block = $(this_prt).find('.news-info__box--text p');
        var this_sp = $(this_prt).find('.news-info__box--text span');
        if (this_data === 'false') {
            this_block.data('oHeight',this_block.height()).css('height','auto').data('nHeight',this_block.height()).height(this_block.data('oHeight')).animate({height: this_block.data('nHeight')},400);
            $(this_sp).fadeOut();
            $(this).attr('data-expand', 'true')
            $(this).text('Свернуть')
        } 
        else {
            this_block.data('oHeight',this_block.height()).css('height','90').data('nHeight',this_block.height()).height(this_block.data('oHeight')).animate({height: this_block.data('nHeight')},400);
            $(this_sp).fadeIn();
            $(this).attr('data-expand', 'false')
            $(this).text('Развернуть')
        }
        
    })

    //  ================ -NEWS PAGE-JS-END- ================


    
    //  ================ -PROFILE-JS-START- ================
    $('.expand').on('click',function()
        {
            var this_data = $(this).attr('data-expand');
            var this_prt = $(this).parent();
            var this_child = $(this_prt).children('.company-info__show--content');
            if (this_data === 'true') {
                this_child.data('oHeight',this_child.height()).css('height','auto').data('nHeight',this_child.height()).height(this_child.data('oHeight')).animate({height: this_child.data('nHeight')},400);
                $(this).text('Свернуть')

            } 
            else {
                this_child.data('oHeight',this_child.height()).css('height','254').data('nHeight',this_child.height()).height(this_child.data('oHeight')).animate({height: this_child.data('nHeight')},400);
                $(this).text('Развернуть')

            }
            
        }
    );

    $('.choose-file__passport').on('change',function(){
      var this_prt = $(this).parent();
      var this_child = $(this_prt).parent();
      var this_parent = $(this_child).parent().hide();
      var parent_block_passport = $(this_parent).parent();
      var url_passport = URL.createObjectURL(this.files[0]);
      $(parent_block_passport).append(
          '<div class="passport-img"><img src="'+url_passport+'"><div class="remove-file__passport"></div></div>'); 
    })

    $(document).on('click', '.remove-file__passport', function () {
        var remove_q = confirm("Удалить?");
        if (remove_q == true) {
        var passport_img_prt = $(this).parent();
        var passport_file_prt = $(passport_img_prt).parent();
         $(passport_file_prt).children('.company-document__video').show();
         var remove_passport_file = $(passport_file_prt).children('.passport-img');
         remove_passport_file.remove();    
        }
    })
    
    $('.choose-file__company--video').on('change',function(){
        var this_prt = $(this).parent();
        var this_child = $(this_prt).parent();
        var this_parent = $(this_child).parent().hide();
        var parent_block_passport = $(this_parent).parent();
        var file_url = URL.createObjectURL(this.files[0]);
        $(parent_block_passport).append(
            '<div class="added-video"><video poster="./assets/img/video/poster/poster.jpg" class="video" src="' + file_url + '" type="video/mp4" src="' + file_url + '"></video><div class="video-play__bg"><span class="video-play__icon"></span></div><div class="remove-company__video"></div></div>'); 
            $('.video-play__bg').click(function () {
                var this_prt = $(this).parent()
                var parent_video = $(this_prt)
                var icon_video = $(parent_video).find(".video-play__bg")
                var video = $(parent_video).find(".video")
                $(video).trigger('play')
                $(video).attr("controls", "controls")
                $(icon_video).fadeOut()
            })
        })
  
      $(document).on('click', '.remove-company__video', function () {
          var remove_q = confirm("Удалить?");
          if (remove_q == true) {
          var passport_img_prt = $(this).parent();
          var passport_file_prt = $(passport_img_prt).parent();
           $(passport_file_prt).children('.company-document__video').show();
           var remove_passport_file = $(passport_file_prt).children('.added-video');
           remove_passport_file.remove();    
          }    
      })
      




      $(".rename-tag").on("click", function(){
        var this_parent = $(this).parent();
        var parent = $(this_parent).parent();
        var child_span = $(parent).find("table tbody tr td span")
        $(child_span).each(function(){
            var text = $(this).text()
        	$(this).replaceWith($('<input value="' + text + '"/>').html($(this).html()));
        });
      })




    //  ================= -PROFILE-JS-END- =================







})

// STEPS third-step search
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("filterCompany");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}







