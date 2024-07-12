// animal slides
    
let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
// console.log(prevDom)

let carosuelDom = document.querySelector('.carousel')
// console.log(carosuelDom)
let SliderDom = carosuelDom.querySelector('.carousel .list')
// console.log(SliderDom)
// thumbnail

let thumbnailDom = document .querySelector('.carousel .thumbnail')




nextDom.onclick= function(){
   showSlider('next')
}
prevDom.onclick= function(){
   showSlider('prev')
}
function showSlider(type){
   // sliderdomitem is the list of all images
    let slideItems = SliderDom.querySelectorAll('.carousel .list .item')
    let thumbnailItems =thumbnailDom .querySelectorAll('.carousel .thumbnail .item')
    console.log(slideItems)
    if (type === 'next') {
        SliderDom.appendChild(slideItems[0])
        thumbnailDom.appendChild(thumbnailItems[0])
    }
    else
    {
        SliderDom.prepend(slideItems[slideItems.length-1])
        thumbnailDom.prepend(thumbnailItems[thumbnailItems.length-1])
     }
}