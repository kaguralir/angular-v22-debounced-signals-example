import { Component } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  imports: [DemoComponent],
  template: `<app-demo />`,
})
export class AppComponent {}
