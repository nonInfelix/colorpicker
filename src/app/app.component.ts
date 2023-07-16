import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as chroma from 'chroma-js';
import {Color} from './ColorModel'
import { ColorfieldsComponent } from "./colorfields/colorfields.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, ColorfieldsComponent]
})
export class AppComponent {
  title = 'colorpicker';
}
