



console.log('hi')

			let myCanvas = document.querySelector('#mouse')
			myCanvas.width = window.innerWidth * window.devicePixelRatio
			myCanvas.height = window.innerHeight * window.devicePixelRatio
			// then we need to get its 'drawing context'
			let myDrawContext = myCanvas.getContext('2d')
			myDrawContext.scale(window.devicePixelRatio, window.devicePixelRatio)
			myDrawContext.fillStyle = "red"

			window.requestAnimationFrame(loop)

			let p = {
				x:0, y:0
			}

			function loop(){

					p.x += (m.x - p.x) * 0.1
					p.y += (m.y - p.y) * 0.1
					myDrawContext.fillRect(p.x - 2, p.y - 2, 5, 5)

				window.requestAnimationFrame(loop)
			}
