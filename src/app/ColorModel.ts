import * as chroma from 'chroma-js';

export class Color {
  color: string;
  isLocked: boolean;
  backgroundColor: string;
  textColor: string;
  isHovered: boolean;
  visible: boolean;
  clipped: boolean;

  constructor() {
    this.color = chroma.random().hex();
    this.isLocked = false;
    this.backgroundColor = this.color;
    this.textColor = chroma(this.backgroundColor).luminance() > 0.6 ? '#232323' : '#ffffff';
    this.isHovered = false;
    this.visible = true;
    this.clipped = false;
  }

  toggleLock(): boolean {
    this.isLocked = !this.isLocked;
    return this.isLocked;
  }
  darken(): void {
    if(!this.isLocked) {
      this.color = chroma(this.color).darken(0.2).hex();
      this.backgroundColor = this.color;
      this.textColor = chroma(this.backgroundColor).luminance() > 0.6 ? '#232323' : '#ffffff';
    }
  }
  brighten(): void {
    if(!this.isLocked) {
      this.color = chroma(this.color).brighten(0.2).hex();
      this.backgroundColor = this.color;
      this.textColor = chroma(this.backgroundColor).luminance() > 0.6 ? '#232323' : '#ffffff';
    }
  }
  getLuminance() {
    this.textColor = chroma(this.backgroundColor).luminance() > 0.6 ? '#232323' : '#ffffff';
  }

}
