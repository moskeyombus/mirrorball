import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MirrorballAppComponent } from '../app/mirrorball.component';

beforeEachProviders(() => [MirrorballAppComponent]);

describe('App: Mirrorball', () => {
  it('should create the app',
      inject([MirrorballAppComponent], (app: MirrorballAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mirrorball works!\'',
      inject([MirrorballAppComponent], (app: MirrorballAppComponent) => {
    expect(app.title).toEqual('mirrorball works!');
  }));
});
