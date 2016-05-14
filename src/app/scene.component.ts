import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';
// import * as OrbitControls from 'three-orbit-controls';
import WebGLRenderer = THREE.WebGLRenderer;
import Scene = THREE.Scene;
import PerspectiveCamera = THREE.PerspectiveCamera;
import Mesh = THREE.Mesh;
// import OrbitControls = THREE.OrbitControls;

@Component({
  selector: 'scene',
  templateUrl: 'app/scene.component.html',
  styleUrls: ['app/scene.component.css']
})
export class SceneComponent implements OnInit {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private innerSphere: Mesh;
  private outerSphere: Mesh;
  private container: ElementRef;
  // private controls: OrbitControls;
  title = 'mirrorball works!';
    
  constructor(el:ElementRef) {
    this.container = el.nativeElement; //dom element
  }  

  ngOnInit() {
    this.init(<HTMLElement><any>this.container);
  }

  public init(container: HTMLElement) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width/height);
    this.camera.position.set(0, 0, 100);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000);

    container.appendChild(this.renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('assets/earth.jpg', t => {
      let geometry = new THREE.SphereGeometry(10, 50, 50);
      let material = new THREE.MeshLambertMaterial({map: t});
      this.innerSphere = new THREE.Mesh(geometry, material);
      this.scene.add(this.innerSphere);
    });

    textureLoader.load('assets/starwars.jpg', t => {
      let geometry = new THREE.SphereGeometry(100, 50, 50);
      let material = new THREE.MeshLambertMaterial({map: t});
      this.outerSphere = new THREE.Mesh(geometry, material);
      this.outerSphere.material.side = THREE.BackSide;
      this.scene.add(this.outerSphere);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(300, 0, 300);
    this.scene.add(pointLight);

    // start animation
    this.animate();

    // bind to window resizes
    window.addEventListener('resize', _ => this.onResize());    
  }
  
  public animate() {
    window.requestAnimationFrame(_ => this.animate());
    this.renderer.render(this.scene, this.camera);
   }  
   
  public onResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width/height;
    this.camera.updateProjectionMatrix();
   }     
}
