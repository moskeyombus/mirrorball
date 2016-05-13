import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {MirrorballAppComponent, environment} from './app/';
import * as THREE from 'three';

if (environment.production) {
  enableProdMode();
}

bootstrap(MirrorballAppComponent);
