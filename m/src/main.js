 import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 3

const light = new THREE.DirectionalLight("white",3)
light.position.set(2,2,2)
scene.add(light)
 
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('/e.jpg')

const geometry = new THREE.SphereGeometry(1, 20, 20)
const material = new THREE.MeshPhysicalMaterial({
  map: texture, 
})
const earth = new THREE.Mesh(geometry, material)
scene.add(earth)
earth.rotation.y =1

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') })
renderer.setSize(window.innerWidth, window.innerHeight)

function animate() {
  requestAnimationFrame(animate)
  earth.rotation.y += 0.002
  renderer.render(scene, camera)
}
animate()