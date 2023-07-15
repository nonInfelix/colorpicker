import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as chroma from 'chroma-js';
import {Color} from './ColorModel'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorpicker';
}
