let images = document.querySelectorAll('.clickable')

images[0].addEventListener('pointerup', function(){

})

for(let index = 0; index < images.length; index ++){
  images[index].addEventListener('pointerup', function(){
    images[index].classList.toggle('desktop')
  })
}
