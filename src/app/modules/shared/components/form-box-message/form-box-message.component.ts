import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormMessageResolverService } from 'src/app/core/services/form-message-resolver.service';

export interface FormProperties {
  type: string;
  message: string;
}

@Component({
  selector: 'app-form-box-message',
  templateUrl: './form-box-message.component.html',
  styleUrls: ['./form-box-message.component.scss']
})
export class FormBoxMessageComponent implements OnInit {

  constructor(private formMsgSrv: FormMessageResolverService) { }

  @Input() public visible = false;
  @Input() public type = "";
  @Input() public message = "";

  container?: HTMLElement;

  @ViewChild('container') public set hostContainer(value: ElementRef) {
    if (!value) return;
    this.container = value.nativeElement;
  }

  public show() {
    this.visible = true;
  }

  public hide() {
    this.visible = false;
  }

  public publishError(err: HttpErrorResponse) {
    this.hide();
    const formBoxData: Partial<FormProperties> = { type: 'error'}
    const { status } = err;
    formBoxData.message = this.formMsgSrv.getFormStatusMessage(status).replace(/\${errorMessage}/, err.message);
    this.formValues = formBoxData;
    this.triggerFadeInAnimation();
  }

  public triggerFadeInAnimation() {
    console.log('Remove class');
    this.container?.classList.remove('show');
    setTimeout(() => {
      this.container?.classList.add('show');
      this.show();
    }, 100);
  }

  public set formValues(values: Partial<FormProperties>) {
    const { type, message } = values;
    if (type) this.type = type;
    if (message) this.message = message;
  }

  ngOnInit(): void {
  }

}
