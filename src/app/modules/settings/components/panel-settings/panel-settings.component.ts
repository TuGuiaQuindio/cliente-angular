import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { concatMap, filter, map, of, Subject, take, takeUntil, tap } from 'rxjs';
import { USER_ROLE } from 'src/app/constants';
import { ConfigurationSolverService } from '../../services/configuration-solver.service';

export type PanelSectionDefinition = { title: string, buttons: PanelButtonDefinition[] }
export type PanelButtonDefinition = { icon: string, label: string, url: string }

@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent implements OnInit {

  constructor(private router: Router, private configurationSolverSrv: ConfigurationSolverService) { }

  public ngOnInit() {
    const role = localStorage.getItem(USER_ROLE);
    if(!role) return;
    this.buttonSection = this.configurationSolverSrv.getPanelSections(role);
    this.solveSelectedButton(this.router.url);
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

  public buttonSection!: PanelSectionDefinition[];

  private currentButton?: PanelButtonDefinition;

  public isSelected(button: PanelButtonDefinition) {
    return !!this.currentButton && button === this.currentButton;
  }

  public selectButton(button: PanelButtonDefinition) {
    this.currentButton = button;
  }
}
