import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { AnchorDirective } from 'src/app/directive/anchor.directive';
import { IntentHiddenState, ModalIntentDeclaration, ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(modalSrv: ModalService) {
    modalSrv.onModalIntent()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (intent) => {
          const {title, hiddenState, footerText, mainText, component, onCancel, onAccept} = intent;
          this.open();
          this.title = title ?? 'Información';
          this.state = hiddenState;
          this.footerText = footerText ?? '';
          this.mainText = mainText ?? '';
          this.intent = intent;
        }
      })
  }
  @Input() public title = "";
  @Input() public mainText = "";
  @Input() public footerText = "";
  @Input() public state: IntentHiddenState = {
    accept: { label: 'Aceptar', disabled: false },
    cancel: { label: 'Cancelar', disabled: false },
  };

  private intent?: ModalIntentDeclaration;

  @ViewChild(AnchorDirective) public appAnchor!: AnchorDirective;
  @HostBinding('class.hidding') public hidding = false;
  @HostBinding('class.hide') public hide = true;

  private lifecycle = new Subject<string>();
  private get destroy$() {
    return this.lifecycle.asObservable()
      .pipe(
        filter(state => state == "destroy")
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public close() {
    this.hidding = true;
    setTimeout(() => {
      this.hide = true;
      this.hidding = false;
    }, 100);
  }

  public open() {
    this.hidding = false;
    this.hide = false;
  }

  public onCancelClick() {
    if (this.intent?.onCancel) this.intent.onCancel();
    this.close();
  }

  public onAcceptClick() {
    if (this.intent?.onAccept) this.intent.onAccept();
    this.close();
  }

}
