import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';
import WebGLRenderer = THREE.WebGLRenderer;
import Scene = THREE.Scene;
import PerspectiveCamera = THREE.PerspectiveCamera;
import Mesh = THREE.Mesh;

@Component({
  selector: 'scene',
  templateUrl: 'app/scene.component.html',
  styleUrls: ['app/scene.component.css']
})
export class SceneComponent implements OnInit {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private sphere: Mesh;  
  private container: ElementRef;
  title = 'mirrorball works!';
    
  constructor(el:ElementRef) {
    this.container = el.nativeElement; //dom element
  }  

  ngOnInit() {
    this.init(<HTMLElement><any>this.container);
  }

  public init(container: HTMLElement) {
    const width = window.innerWidth;
    const height = window.innerHeight - 90;

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
        let geometry = new THREE.SphereGeometry(5, 50, 50);
        let material = new THREE.MeshLambertMaterial({map: t});
        this.sphere = new THREE.Mesh(geometry, material);

        this.scene.add(this.sphere);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(300, 0, 300);
    this.scene.add(pointLight);

    // start animation
    // this.animate();

    // // bind to window resizes
    // window.addEventListener('resize', _ => this.onResize());    
  }
}
