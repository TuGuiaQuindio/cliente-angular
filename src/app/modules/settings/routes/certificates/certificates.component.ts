import { Component, OnInit, ViewChild } from '@angular/core';
import { FileBufferComponent } from 'src/app/modules/upload/components/file-buffer/file-buffer.component';
import { BaseRouteComponent } from '../base-route/base-route.component';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent extends BaseRouteComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public onSubmit() {

  }

}
