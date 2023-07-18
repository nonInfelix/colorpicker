import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as chroma from 'chroma-js';
import {Color} from '../ColorModel';

@Component({
  selector: 'app-colorfields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colorfields.component.html',
  styleUrls: ['./colorfields.component.css']
})
export class ColorfieldsComponent implements OnInit{
  colors: Color[] = [];

  ngOnInit(){
    let colorOne:Color = new Color();
    let colorTwo:Color = new Color();
    let colorThree:Color = new Color();

    this.colors.push(colorOne, colorTwo, colorThree);
  }

  removeField(color: any){
   const index = this.colors.indexOf(color);
   const newColor = new Color();
  if (index !== -1 && !color.isLocked && this.colors.length <=2) {
    this.colors.splice(index, 1, newColor);
    console.log(this.colors)
    } else if (index !== -1 && !color.isLocked) {
      this.colors.splice(index, 1);
    }
  }

  createField(){
  if(this.colors.length <= 4){
    const color = new Color();
    this.colors.push(color);
    }
  }

  refreshField(color: any){
    const index = this.colors.indexOf(color);
    const newColor = new Color();
  if (index !== -1 && !color.isLocked) {
    this.colors.splice(index, 1, newColor);
    }
  }

  refreshAllFields(){
    this.colors.forEach((color, index) => {
      if (!color.isLocked) {
        this.colors[index] = new Color();
      }
    });
  }

  copyToClipboard(color: Color) {
    const textToCopy = color.color;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text erfolgreich in die Zwischenablage kopiert.');
      })
      .catch((error) => {
        console.error('Fehler beim Kopieren in die Zwischenablage:', error);
      });
      color.clipped = true;
  }
}
