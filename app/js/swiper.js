import Swiper, {Navigation, Pagination} from 'swiper'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
})
