import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export type FileWrapper = { filename: string, file: File }
export type FileState = { filename: string, icon: string, color: string };
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  constructor() { }
  @Input('file') public set inputFile(file: File) {
    this.wrapper = {
      file: file,
      filename: file.name,
    }
    this.fileStateSubj.next({
      filename: file.name,
      icon: this.solveIcon(file.type),
      color: this.solveColor(file.type),
    });
  };
  @Output() public fileClose = new EventEmitter<FileWrapper>();
  @Output() public fileEdit = new EventEmitter<FileWrapper>();
  @ViewChild('inputFilename') public set hostInput(element: any) {
    if (!element) return;
    this.editInput = element.nativeElement as HTMLInputElement;
  }

  private fileStateSubj = new BehaviorSubject<FileState>({
    filename: '',
    icon: 'bxs-file',
    color: 'text-primary',
  })

  public get fileState$(): Observable<FileState> {
    return this.fileStateSubj.asObservable();
  }

  public get filename$() {
    return this.fileStateSubj.asObservable().pipe(
      map(({ filename }) => filename)
    );
  }

  public get icon$() {
    return this.fileStateSubj.asObservable().pipe(
      map(({ icon }) => icon)
    );
  }

  public get color$() {
    return this.fileStateSubj.asObservable().pipe(
      map(({ color }) => color)
    );
  }

  public iconTypes: { [key: string]: string } = {
    "application/msword": "bxs-file-doc",
    "application/pdf": "bxs-file-pdf",
    "image/png": "bxs-file-png",
    "image/jpeg": "bxs-file-jpg",
  }

  public colorTypes: { [key: string]: string } = {
    "application/msword": "text-blue-400",
    "application/pdf": "text-orange-400",
    "image/png": "text-purple-400",
    "image/jpeg": "text-sky-400",
  }

  public wrapper!: FileWrapper;
  public editInput!: HTMLInputElement;

  public isEditting = false;

  ngOnInit(): void {
  }

  public solveIcon(type: string): string {
    if (!this.iconTypes.hasOwnProperty(type)) return 'bxs-file';
    return this.iconTypes[type];
  }

  public solveColor(type: string): string {
    if (!this.colorTypes.hasOwnProperty(type)) return 'bxs-file';
    return this.colorTypes[type];
  }

  public editFilename() {
    if (this.isEditting) {
      const value = this.fileStateSubj.value;
      value.filename = this.editInput.value;
      this.fileStateSubj.next(value)
      this.wrapper.filename = this.editInput.value;
      this.fileEdit.next(this.wrapper);
    }
    this.isEditting = !this.isEditting;
  }

  public onFileClose() {
    if (!this.wrapper.file) return;
    this.fileClose.next(this.wrapper);
    this.fileClose.complete();
  }
}
