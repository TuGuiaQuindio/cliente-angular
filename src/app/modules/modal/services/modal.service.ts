import { Component } from '@angular/compiler/src/core';
import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }

  private signal = new Subject<ModalIntentDeclaration>();

  public onModalIntent(): Observable<ModalIntentDeclaration> {
    return this.signal.asObservable();
  }

  public prepareModal(properties?: ModalIntentDeclaration) {
    const modalIntent = new ModalIntent(this);
    if (!properties) return modalIntent;
    return modalIntent.from(properties);
  }

  public sendIntent(modalIntent: ModalIntent) {
    this.signal.next(modalIntent);
  }
}

export type IntentHiddenState = {
  accept: {
    label: string,
    disabled: boolean
  }, cancel: {
    label: string,
    disabled: boolean
  }
};
export interface ModalIntentDeclaration {
  onAccept?: () => void;
  onCancel?: () => void;
  hiddenState: IntentHiddenState;
  title?: string;
  mainText?: string;
  footerText?: string;
  component?: Type<Component>;
}
export class ModalIntent implements ModalIntentDeclaration {
  constructor(private modalService: ModalService) { }
  public onAccept?: () => void;
  public onCancel?: () => void;
  public hiddenState: IntentHiddenState = {
    accept: { label: "Aceptar", disabled: false },
    cancel: { label: "Cancelar", disabled: false },
  }
  public title = "";
  public mainText = "";
  public footerText = "";
  public anchorComponent?: Type<Component>;

  public from(properties: ModalIntentDeclaration) {
    const { onAccept, onCancel, mainText, footerText, hiddenState, component } = properties;
    this.onAccept = onAccept;
    this.onCancel = onCancel;
    this.mainText = mainText ?? '';
    this.footerText = footerText ?? '';
    this.hiddenState = hiddenState;
    this.anchorComponent = component;
    return this;
  }

  public onAcceptDo(callback: () => void) {
    this.onAccept = callback;
    return this;
  }

  public onCancelDo(callback: () => void) {
    this.onCancel = callback;
    return this;
  }

  public setHiddenState(state: IntentHiddenState) {
    this.hiddenState = state;
    return this;
  }

  public withTitle(title: string) {
    this.title = title;
    return this;
  }

  public withMainText(text: string) {
    this.mainText = text;
    return this;
  }

  public withFooterText(text: string) {
    this.footerText = text;
    return this;
  }

  public setComponent(component: Type<Component>) {
    this.anchorComponent = component;
    return this;
  }

  public send() {
    this.modalService.sendIntent(this);
  }
}
