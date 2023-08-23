import * as THREE from 'three'
import * as React from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GUI } from 'lil-gui'

let windowWidth = 1
let windowHeight = 1
let devicePixelRatio = 1

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  devicePixelRatio = window.devicePixelRatio
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
}

const params = {
  animate: true,
  planeY: {
    constant: 0,
    negated: false,
    displayHelper: false
  },
}

function createPlaneStencilGroup(geometry, plane) {
  const group = new THREE.Group()

  const baseMaterial = new THREE.MeshBasicMaterial()
  baseMaterial.depthWrite = false
  baseMaterial.depthTest = false
  baseMaterial.colorWrite = false
  baseMaterial.stencilWrite = true
  baseMaterial.stencilFunc = THREE.AlwaysStencilFunc

  const backFaceMaterial = baseMaterial.clone()
  backFaceMaterial.side = THREE.BackSide
  backFaceMaterial.clippingPlanes = [plane]
  backFaceMaterial.stencilFail = THREE.IncrementWrapStencilOp
  backFaceMaterial.stencilZFail = THREE.IncrementWrapStencilOp
  backFaceMaterial.stencilZPass = THREE.IncrementWrapStencilOp
  const backFaceMesh = new THREE.Mesh(geometry, backFaceMaterial)
  group.add(backFaceMesh)

  const frontFaceMaterial = baseMaterial.clone()
  frontFaceMaterial.side = THREE.FrontSide
  frontFaceMaterial.clippingPlanes = [plane]
  frontFaceMaterial.stencilFail = THREE.DecrementWrapStencilOp
  frontFaceMaterial.stencilZFail = THREE.DecrementWrapStencilOp
  frontFaceMaterial.stencilZPass = THREE.DecrementWrapStencilOp

  const frontFaceMesh = new THREE.Mesh(geometry, frontFaceMaterial)

  group.add(frontFaceMesh)

  return group
}

const clock = new THREE.Clock()

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(36, windowWidth / windowHeight, 1, 25)
camera.position.set(0, 5, 0)

// Light
// const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
// scene.add(ambientLight)

const directLight = new THREE.DirectionalLight(0xffffff, 3)
directLight.position.set(5, 10, 7.5)
scene.add(directLight)

const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), -0.1)
const clippingPlaneHelper = new THREE.PlaneHelper(clippingPlane, 2, 0xffffff)
clippingPlaneHelper.visible = false
scene.add(clippingPlaneHelper)

const geometry = new THREE.TorusKnotGeometry(0.55, 0.15, 220, 60)
const object = new THREE.Group()
// object.position.y = -0.2
scene.add(object)

const stencilGroup = createPlaneStencilGroup(geometry, clippingPlane)
object.add(stencilGroup)

const planeGeometry = new THREE.PlaneGeometry(8, 8)
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0x17758a,
  stencilWrite: true,
  stencilRef: 0,
  stencilFunc: THREE.NotEqualStencilFunc,
  stencilFail: THREE.ReplaceStencilOp,
  stencilZFail: THREE.ReplaceStencilOp,
  stencilZPass: THREE.ReplaceStencilOp,
})
const planeObject = new THREE.Mesh(planeGeometry, planeMaterial)
planeObject.onAfterRender = (renderer) => {
  renderer.clearStencil()
}
scene.add(planeObject)

// const objectOutsideMaterial = new THREE.MeshPhongMaterial({
//   color: 0x00ff00,
//   shininess: 100,
//   clippingPlanes: [clippingPlane],
// })
// const clippedColorFront = new THREE.Mesh(geometry, objectOutsideMaterial)
// object.add(clippedColorFront)


// Renderer
let renderer
if (typeof document !== 'undefined') {
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(devicePixelRatio)
  renderer.setSize(windowWidth, windowHeight)
  renderer.setClearColor(0x0a0010)
  renderer.localClippingEnabled = true

  document.body.appendChild(renderer.domElement)
}

function onWindowResize() {
  camera.aspect = windowWidth / windowHeight
  camera.updateProjectionMatrix()

  if (renderer) {
    renderer.setSize(windowWidth, windowHeight)
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onWindowResize)
}

// Controls
// const controls = new OrbitControls(camera, renderer ? renderer.domElement : undefined)
// controls.minDistance = 3
// controls.maxDistance = 20
// controls.update()

// GUI
// const gui = new GUI()
// gui.add(params, 'animate')
// const planeY = gui.addFolder('planeY')
// planeY.add(params.planeY, 'displayHelper').onChange(v => clippingPlaneHelper.visible = v)
// planeY.add(params.planeY, 'constant').min(- 1).max(1).onChange(d => clippingPlane.constant = d)
// planeY.add(params.planeY, 'negated').onChange(() => {
//   clippingPlane.negate()
//   params.planeY.constant = clippingPlane.constant
// })

function animate() {
  const delta = clock.getDelta()
  const elapsedTime = clock.getElapsedTime()

  requestAnimationFrame(animate)

  if (params.animate) {
    object.rotation.x += delta * 0.5
    object.rotation.y += delta * 0.2
    const positionXAmplitude = Math.sin(elapsedTime * 0.05) * 1.75
    object.position.x = positionXAmplitude
    object.position.y = Math.cos(elapsedTime * 0.45)
  }

  clippingPlane.coplanarPoint(planeObject.position)
  planeObject.lookAt(
    planeObject.position.x - clippingPlane.normal.x,
    planeObject.position.y - clippingPlane.normal.y,
    planeObject.position.z - clippingPlane.normal.z,
  )

  if (renderer) {
    renderer.render(scene, camera)
  }
}

export default function FloatingBlobsBackground() {
  React.useEffect(() => {
    if (renderer && renderer.domElement.style.display === 'none') {
      renderer.domElement.style.display = 'block'
    }

    animate()

    return () => {
      if (renderer) {
        renderer.domElement.style.display = 'none'
      }
    }
  }, [])

  return null
}
