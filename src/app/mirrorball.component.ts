import { Component } from '@angular/core';
import { SceneComponent } from './scene.component'

@Component({
  moduleId: module.id,
  selector: 'mirrorball-app',
  templateUrl: 'mirrorball.component.html',
  styleUrls: ['mirrorball.component.css'],
  directives: [SceneComponent]
})
export class MirrorballAppComponent { 
  title = 'mirrorball works!';
}
