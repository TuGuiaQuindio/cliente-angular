import { Component, Input } from '@angular/core';
import { FileWrapper } from '../file/file.component';

@Component({
  selector: 'app-file-buffer',
  templateUrl: './file-buffer.component.html',
  styleUrls: ['./file-buffer.component.scss']
})
export class FileBufferComponent {

  constructor() { }
  @Input() public buffer: FileWrapper[] = [];

  public onFileClose(wrapper: FileWrapper) {
    const { file } = wrapper;
    this.remove(file);
  }

  public onFileEdit(wrapper: FileWrapper) {
    const idx = this.getFileIndex(wrapper.file);
    if (idx === -1) return;
    const bufferWrapper = this.buffer[idx];
    bufferWrapper.filename = wrapper.filename;
    bufferWrapper.file = wrapper.file;
  }

  public add(file: File) {
    const existingIdx = this.getFileIndexByName(file.name);
    if (existingIdx !== -1) throw new Error("File already on buffer");
    this.buffer.push({ file, filename: file.name });
  }

  public remove(file: File) {
    const idx = this.getFileIndex(file);
    if (idx === -1) return;
    this.buffer.splice(idx, 1);
  }

  public getFiles(): FileWrapper[] {
    return this.buffer;
  }

  private getFileIndex(file: File): number {
    return this.buffer.findIndex(el => el.file === file);
  }

  private getFileIndexByName(filename: string): number {
    return this.buffer.findIndex(el => el.file.name === filename);
  }
}
