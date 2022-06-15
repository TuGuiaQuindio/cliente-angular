import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { SharedModule } from '../shared/shared.module';
import { FileBufferComponent } from './components/file-buffer/file-buffer.component';
import { FileComponent } from './components/file/file.component';
import { UploadCompoundInputComponent } from './components/compound-input/compound-input.component';

@NgModule({
  declarations: [
    UploadInputComponent,
    FileBufferComponent,
    FileComponent,
    UploadCompoundInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UploadInputComponent,
    FileBufferComponent,
    UploadCompoundInputComponent
  ]
})
export class UploadModule { }
