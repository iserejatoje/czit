import Swiper, {Navigation, Pagination} from 'swiper'

Swiper.use([Navigation, Pagination])

new Swiper('.documents-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".documents .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
})

new Swiper('.frontpage-slider', {
    slidesPerView: 1,
    pagination: {
        el: ".frontpage .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
})
