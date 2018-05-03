// // first we need to get a reference to our canvas
// let myCanvas = document.querySelector('#myCanvas')
//
// // then we need to get its 'drawing context'
// let myDrawContext = myCanvas.getContext('2d')

// store mouse position when it moves
let m = {
	x:0, y:0
}
document.addEventListener('mousemove', (e)=>{
	m.x = e.clientX
	m.y = e.clientY


  let mouseHeight = window.innerHeight - m.y
  let heightOfTriangle = mouseHeight + (circleRadius - heightOnScreen)
  let widthOfTriangle = m.x - window.innerWidth/2

  let angle = Math.atan2(heightOfTriangle, widthOfTriangle)

  circle.style.transform = "rotate("+(Math.PI/2 -angle)+"rad)"

})
