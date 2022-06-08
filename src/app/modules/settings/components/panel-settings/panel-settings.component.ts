import { Component, OnInit } from '@angular/core';

export type PanelSectionDefinition = { title: string, buttons: PanelButtonDefinition[] }
export type PanelButtonDefinition = { icon: string, label: string, url: string }

@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent implements OnInit {

  constructor() { }
  public buttonSection: PanelSectionDefinition[] = [
    { title: "Mi perfil", buttons: 
      [
        { icon: "bx-user", label: "información personal", url: "/settings" },
        { icon: "bx-lock-alt", label: "seguridad", url: "/settings" },
        { icon: "bx-book-bookmark", label: "mis certificaciones", url: "/settings" },
      ]
    },
    { title: "Privacidad", buttons: 
      [
        { icon: "bx-user", label: "información personal", url: "/settings" },
        { icon: "bx-lock-alt", label: "seguridad", url: "/settings" },
        { icon: "bx-book-bookmark", label: "mis certificaciones", url: "/settings" },
      ]
    },
  ]

  ngOnInit(): void {
  }

}
