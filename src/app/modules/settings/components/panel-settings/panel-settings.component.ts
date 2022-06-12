import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { concatMap, filter, map, of, Subject, take, takeUntil } from 'rxjs';

export type PanelSectionDefinition = { title: string, buttons: PanelButtonDefinition[] }
export type PanelButtonDefinition = { icon: string, label: string, url: string }

@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent {

  constructor(router: Router) {
    this.solveSelectedButton(router.url);
  }

  public solveSelectedButton(url: string) {
    const urlParts = url.split("/").filter(part => part.length != 0);
    if (urlParts.length < 2) return;

    const section = urlParts[1];
    type ButtonPart = { parts: string[], button: PanelButtonDefinition }
    type ButtonAndSegment = { lastSegment: string, button: PanelButtonDefinition }

    of(this.buttonSection)
      .pipe(
        concatMap(sections => sections),
        concatMap(section => section.buttons),
        map(button => {
          return {
            parts: button.url.split("/").filter(part => part.length != 0),
            button: button
          } as ButtonPart
        }),
        filter(({ parts }) => parts.length >= 2),
        map(({ button, parts }) => {
          return {
            lastSegment: parts[parts.length - 1],
            button
          } as ButtonAndSegment
        }),
        filter(({ lastSegment }) => lastSegment === section),
        take(1)
      ).subscribe({
        next: ({ button }) => {
          this.currentButton = button;
        }
      })
  }

  public buttonSection: PanelSectionDefinition[] = [
    {
      title: "Mi perfil", buttons:
        [
          { icon: "bx-user", label: "información personal", url: "/settings/information" },
          { icon: "bx-lock-alt", label: "seguridad", url: "/settings/security" },
          { icon: "bx-book-bookmark", label: "mis certificaciones", url: "/settings" },
        ]
    },
    {
      title: "Privacidad", buttons:
        [
          { icon: "bx-user", label: "información personal", url: "/settings" },
          { icon: "bx-lock-alt", label: "seguridad", url: "/settings" },
          { icon: "bx-book-bookmark", label: "mis certificaciones", url: "/settings" },
        ]
    },
  ]

  private currentButton?: PanelButtonDefinition;

  public isSelected(button: PanelButtonDefinition) {
    return !!this.currentButton && button === this.currentButton;
  }

  public selectButton(button: PanelButtonDefinition) {
    this.currentButton = button;
  }
}
