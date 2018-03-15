let images = document.querySelectorAll('.clickable')



let searchBarURLs = [
  "facebook-c.png",
  "airbnb-c.png",
  "apple-c.png",
  "att-c.png",
  "bing-c.png",
  "ch-c.png",
  "ebay-c.png",
  "msn-c.png",
  "pin-c.png",
  "times-c.png",
  "twitter-c.png",
  "yelp-c.png",
  "youtube-c.png",
  "google-c.png",
  "ins-c.png",
  "imdb-c.png",
  "netflix-c.png",

]


let searchBarImages = []
let speedX = []
let speedY = []

images[0].addEventListener('pointerup', function(){

  let newBar = document.createElement('img')
  newBar.src = searchBarURLs[Math.floor(Math.random() * searchBarURLs.length)]

  newBar.classList.add('searchBars')

  searchBarImages.push(newBar)

  speedX.push(0)
  speedY.push(0)

  console.log(searchBarImages)

  document.body.appendChild(newBar)

})

window.requestAnimationFrame(animate)

function animate(){


  for(let index = 0; index < searchBarImages.length; index ++){
    let rect = searchBarImages[index].getClientRects()[0]
    console.log(rect.x, rect.y,rect)

    speedX[index] += 2* (Math.random() - 0.5)
    speedY[index] += 2 * (Math.random() - 0.5)

    if(speedY[index] + rect.y + window.scrollY < 0 || speedY[index] + rect.y + window.scrollY > window.innerHeight){
      speedY[index] = -speedY[index]
    }

    if(speedX[index] + rect.x < 0 || speedX[index] + rect.x /*+ rect.width*/ > window.innerWidth){
      speedX[index] = -speedX[index]
    }

    searchBarImages[index].style.top = speedY[index] + rect.y + window.scrollY + "px"

    searchBarImages[index].style.left = speedX[index] + rect.x + "px"

  }

  window.requestAnimationFrame(animate)

}


// for(let index = 0; index < images.length; index ++){
//   images[index].addEventListener('pointerup', function(){
//     images[index].classList.toggle('desktop')
//   })
// }
