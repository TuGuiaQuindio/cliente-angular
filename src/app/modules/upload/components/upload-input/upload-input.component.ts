import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss'],
  providers: [{ provide: InputValueAccessor, useExisting: UploadInputComponent }]
})
export class UploadInputComponent extends InputValueAccessor implements OnInit, OnDestroy {

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  @Output() filesDropped = new EventEmitter<File[]>();
  @ViewChild('input') public set hostInput(value: ElementRef) {
    this.fileInput = value.nativeElement
    fromEvent(this.fileInput, 'change')
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        {
          next: (e) => {
            const input = e.target as HTMLInputElement;
            const files = input.files;
            if (files == null) return;
            const fileBuffer: File[] = []
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              if (this.allowedMIMES.findIndex((el) => el === file.type) === -1) continue;
              if (!file) continue;
              fileBuffer.push(file);
            }
            this.filesDropped.next(fileBuffer);
          }
        }
      );
  }

  private lifecycle = new Subject<string>();

  public get destroy$() {
    return this.lifecycle.asObservable()
      .pipe(filter(state => state == 'destroy'));
  }

  public fileInput!: HTMLInputElement;
  public fileOnDropzone = false;
  public allowedMIMES: string[] = [
    "image/png",
    "image/jpeg",
    "application/pdf",
    "application/msword",
  ];

  ngOnInit(): void {
    this.setup();
    window.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
    }, false);
    this.lifecycle.next('init');
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public onFileDrag(event: DragEvent) {
    this.fileOnDropzone = true;
  }

  public onFileDragLeave() {
    this.fileOnDropzone = false;
  }

  public onFileDrop(event: DragEvent) {
    this.fileOnDropzone = false;
    this.handleDrops(event);
    event.preventDefault();
  }

  private handleDrops(event: DragEvent) {
    const items = event.dataTransfer?.items;
    const fileBuffer: File[] = [];
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind != 'file') continue;
      if (this.allowedMIMES.findIndex((el) => el === item.type) === -1) continue;
      const file = item.getAsFile();
      if (!file) continue;
      fileBuffer.push(file);
    }
    this.filesDropped.next(fileBuffer);
  }

  public selectFiles() {
    this.fileOnDropzone = false;
    this.fileInput.click();
  }

}
