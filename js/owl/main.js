$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
const modal = document.querySelector('.modal-container')

function openModal(){
    modal.classList.add('active')

}
function closeModal(){
    modal.classList.remove('active')
}