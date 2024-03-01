// const $ = document.querySelector.bind(document)
//         const $$ = document.querySelectorAll.bind(document)

//         const tabs = $$('.icon__item')
//         const panes = $$('.content__item')

//         tabs.forEach((tab, index) => {
//             const pane = panes[index]

//             tab.onclick = function() {
//                 $('.icon__item.active').classList.remove('active')
//                 $('.content__item.active').classList.remove('active')

//                 this.classList.add('active')
//                 pane.classList.add('active')
//             }
//         });

        $(document).ready(function() {
            $('.sub-info__item').click(function() {
                $('.info-detail img').attr('src', $(this).data('avata'));
                $('.sub-info').find('.sub-info__item').removeClass('active');

                $(this).addClass('active');
            });
        });
        