import React, { useEffect, useRef } from 'react'
import { TweenLite, SlowMo } from 'gsap/all'

import useWindowSize from '../custom_hooks/useWindowSize'

import { palette } from '../../styles/meta'

const getDistance = (p1, p2) => ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2)

let dpr

if (typeof window !== `undefined`) {
  dpr = window.devicePixelRatio
}

function FloatingGridCanvas() {
  const { windowWidth, windowHeight } = useWindowSize()
  const canvasEl = useRef()

  const points = []
  const target = {
    x: windowWidth / 2,
    y: windowHeight / 2,
  }

  useEffect(() => {
    const ctx = canvasEl.current.getContext(`2d`)
    ctx.scale(dpr, dpr)

    class Circle {
      constructor(pos, rad) {
        this.pos = pos || null
        this.radius = rad || null
      }

      draw() {
        if (!this.active) return

        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(255, 112, 3, ${this.active})`
        ctx.fill()
      }
    }

    // Create edges.
    for (let x = 0; x < windowWidth; x += windowWidth / 15) {
      for (let y = 0; y < windowHeight; y += windowHeight / 15) {
        const px = x + Math.random() * windowWidth / 15
        const py = y + Math.random() * windowHeight / 15
        points.push({
          x: px,
          originX: px,
          y: py,
          originY: py,
        })
      }
    }

    // For each edge, find 5 closest edges.
    for (let i = 0; i < points.length; i++) {
      const closest = []
      const p1 = points[i]

      for (let j = 0; j < points.length; j++) {
        const p2 = points[j]

        if (!(p1 === p2)) {
          let placed = false

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2
                placed = true
              }
            }
          }

          for (let a = 0; a < 5; a++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[a])) {
                closest[a] = p2
                placed = true
              }
            }
          }
        }
      }

      p1.closest = closest
    }

    // Generate a circle and assign it to an edge.
    points.forEach((p) => {
      p.circle = new Circle(p, 2 + Math.random())
    })
  }, [points, windowHeight, windowWidth])

  useEffect(() => {
    const ctx = canvasEl.current.getContext(`2d`)

    function drawLines(p) {
      if (!p.active) return

      p.closest.forEach((pClosest) => {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(pClosest.x, pClosest.y)
        ctx.strokeStyle = `rgba(204, 146, 23, ${p.active})`
        ctx.stroke()
      })
    }

    function animate() {
      ctx.clearRect(0, 0, windowWidth, windowHeight)

      points.forEach((p) => {
        // Set opacity for elements which are closest to the cursor.
        if (Math.abs(getDistance(target, p)) < 5000) {
          p.active = 0.3
          p.circle.active = 0.6
        }
        // Set opacity for elements around cursor.
        else if (Math.abs(getDistance(target, p)) < 25000) {
          p.active = 0.15
          p.circle.active = 0.30
        }
        // Set opacity for elements further away from cursor.
        else if (Math.abs(getDistance(target, p)) < 250000) {
          p.active = 0.05
          p.circle.active = 0.15
        }
        // Hide other elements from view.
        else {
          p.active = 0
          p.circle.active = 0
        }

        drawLines(p)
        p.circle.draw()
      })

      window.requestAnimationFrame(animate)
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: SlowMo.ease.config(0.05, 0.05, false),
        onComplete: () => shiftPoint(p),
      })
    }

    animate()
    points.map((_el, i) => shiftPoint(points[i]))
  }, [points, target, windowHeight, windowWidth])

  useEffect(() => {
    if (!(`ontouchstart` in window)) {
      const handler = ({ pageX, pageY }) => {
        target.x = pageX
        target.y = pageY
      }

      window.addEventListener(`mousemove`, handler)
      return () => window.removeEventListener(`mousemove`, handler)
    }
    return null
  }, [target.x, target.y])

  return (
    <canvas
      ref={canvasEl}
      width={windowWidth * dpr}
      height={windowHeight * dpr}
      style={{
        position: `absolute`,
        width: `${windowWidth}px`,
        height: `${windowHeight}px`,
        backgroundColor: `${palette.white}`,
      }}
    />
  )
}

export default FloatingGridCanvas
