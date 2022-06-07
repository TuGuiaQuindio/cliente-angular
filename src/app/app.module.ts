import { NgModule, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter, Observable, Subject, takeUntil } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { THEME_KEY } from './constants';
import { CoreModule } from './core/core.module';
import { FormServicesModule } from './modules/form-services/form-services.module';

import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnDestroy {

  private lifecycleSubj = new Subject<string>();
  private get destroy$(): Observable<string> {
    return this.lifecycleSubj.pipe(filter(x => x === 'destroy'));
  }

  constructor(router: Router) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (event) => {
          document.body.dataset["theme"] = localStorage.getItem(THEME_KEY) ?? "default";
        }
      });
  }

  ngOnDestroy(): void {
    this.lifecycleSubj.next('destroy');
  }
}
