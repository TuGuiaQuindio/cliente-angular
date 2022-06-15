import { Component, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { FileBufferComponent } from '../file-buffer/file-buffer.component';

@Component({
  selector: 'app-upload-compound-input',
  templateUrl: './compound-input.component.html',
  styleUrls: ['./compound-input.component.scss']
})
export class UploadCompoundInputComponent extends InputValueAccessor implements OnInit {

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    this.setup();
  }

  @ViewChild(FileBufferComponent) public fileBuffer!: FileBufferComponent;

  onFileUpload(files: File[]) {
    for(const file of files) {
      try {
        this.fileBuffer.add(file);
        this.ngControl.control!.setValue(this.fileBuffer.getFiles());
      } catch {
      }
    }
  }


}
