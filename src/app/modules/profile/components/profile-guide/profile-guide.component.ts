import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter, Subject, takeUntil, map } from 'rxjs';
import { AdditionalInformation, Guide, Language } from 'src/app/core/interfaces/guide';
import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { GuideDataService } from '../../services/guide-data.service';
import { CardItem } from '../guide-card/guide-card.component';

export type ProfileState = { name: string, items: CardItem[], additionalInfo?: AdditionalInformation, languages: Language[] }
@Component({
  selector: 'app-profile-guide',
  templateUrl: './profile-guide.component.html',
  styleUrls: ['./profile-guide.component.scss']
})
export class ProfileGuideComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private guideData: GuideDataService, private modalSrv: ModalService) {
    const params = route.snapshot.params;
    const { id } = params;
    this.profileId = id;
    guideData.getGuideById(id).subscribe({
      next: (guide) => {
        this.noGuideFound = !guide;
        if (!guide) return;
        const items = this.generateItems(guide);
        this.profileStateSubj.next({
          name: `${guide.firstName} ${guide.lastName}`,
          items: items,
          languages: guide.languages,
          additionalInfo: guide.additionalInformation,
        })
      }
    });
  }

  private lifecycle = new Subject<string>();
  private profileStateSubj = new BehaviorSubject<ProfileState>({
    name: "",
    items: [],
    additionalInfo: undefined,
    languages: []
  });
  public noGuideFound = true;
  public profileId = "";

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  private get destroy$() {
    return this.lifecycle.pipe(
      filter(state => state == 'destroy')
    );
  }

  private get profileState$() {
    return this.profileStateSubj.asObservable().pipe(takeUntil(this.destroy$));
  }

  public get name$() { return this.profileState$.pipe(map(state => state.name)); }
  public get items$() { return this.profileState$.pipe(map(state => state.items)); }
  public get additionalInfo$() { return this.profileState$.pipe(map(state => state.additionalInfo)); }
  public get languages$() { return this.profileState$.pipe(map(state => state.languages)); }

  private generateItems(guide?: Guide): CardItem[] {
    if (!guide) return [];
    const output: CardItem[] = [];
    output.push({
      title: 'Acerca de mi',
      content: guide.aboutMe ?? 'Sin descripción',
      icon: 'bx-user-circle'
    });
    const date = new Date(Date.parse(guide.birthdate));
    output.push({
      title: 'Fecha de nacimiento',
      content: date.toLocaleString(['es'], { dateStyle: 'long' }) ?? 'No especifica',
      icon: 'bx-cake'
    })
    output.push({
      title: 'Ciudad de Residencia',
      content: guide.city ?? 'No especifica',
      icon: 'bx-buildings'
    })
    return output;
  }

  public onHireClick() {
    this.modalSrv.prepareModal()
      .withTitle("¿Estás seguro?")
      .withMainText("¿Deseas conocer la información de contacto de este guía?")
      .withFooterText("Una vez la información sea pública se registrará en tu perfil")
      .onAcceptDo(() => {
        console.warn("Accept");
      })
      .send();
  }

}
