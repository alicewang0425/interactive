


setTimeout(function(){

	window.print();
}, 5000)




window.addEventListener('resize',onResize)
let heightOnScreen = window.innerWidth / 3
let circleRadius = 0
function onResize(){
	heightOnScreen = window.innerWidth / 3
   // how much of circle peaks up from the bottom or the screen, could also be a fixed number
  circleRadius = (4 * Math.pow(heightOnScreen,2) + Math.pow(window.innerWidth,2))/
    (8 * heightOnScreen)

  circle.style.top = window.innerHeight - heightOnScreen + "px"
  circle.style.left = window.innerWidth / 2 - circleRadius + "px"
circle.style.width = circleRadius * 2 +"px"

}

onResize()
