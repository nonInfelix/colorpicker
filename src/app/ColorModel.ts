import * as chroma from 'chroma-js';

export class Color {
  color: string;
  isLocked: boolean;
  backgroundColor: string;
  textColor: string;
  isHovered: boolean;
  visible: boolean;

  constructor(color: string, isLocked: boolean, backgroundColor: string, textColor: string, isHovered: boolean, visible: boolean) {
    this.color = color;
    this.isLocked = isLocked;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.isHovered = isHovered;
    this.visible = visible;
  }

  toggleLock(): boolean {
    this.isLocked = !this.isLocked;
    return this.isLocked;
  }
  darken(): void {
    this.color = chroma(this.color).darken(0.2).hex();
    this.backgroundColor = this.color
  }
  brighten(): void {
    this.color = chroma(this.color).brighten(0.2).hex();
    this.backgroundColor = this.color;
  }
  getLuminance(): string {
    const luminance = chroma(this.backgroundColor).luminance();
    return luminance > 0.6 ? '#000000' : '#ffffff';
  }

}
