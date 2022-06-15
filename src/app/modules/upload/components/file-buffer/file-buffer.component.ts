import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-buffer',
  templateUrl: './file-buffer.component.html',
  styleUrls: ['./file-buffer.component.scss']
})
export class FileBufferComponent {

  constructor() { }
  @Input() public buffer: File[] = [];

  public onFileClose(file: File) {
    this.remove(file);
  }

  public add(file: File) {
    const existingIdx = this.getFileIndexByName(file.name);
    if (existingIdx !== -1) throw new Error("File already on buffer");
    this.buffer.push(file);
  }

  public remove(file: File) {
    const idx = this.getFileIndex(file);
    if (idx === -1) return;
    this.buffer.splice(idx, 1);
  }

  private getFileIndex(file: File): number {
    return this.buffer.findIndex(el => el === file);
  }

  private getFileIndexByName(filename: string): number {
    return this.buffer.findIndex(el => el.name === filename);
  }
}
