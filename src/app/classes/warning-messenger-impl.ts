import { Component } from "@angular/core";
import { WarningMessenger } from "../interfaces/warning-messenger";

@Component({
  template: ''
})
export abstract class WarningMessengerImpl implements WarningMessenger {
  public abstract set warningMsg(value: string);
}
