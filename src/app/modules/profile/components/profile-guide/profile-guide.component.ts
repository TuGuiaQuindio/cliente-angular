import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardItem } from '../guide-card/guide-card.component';

@Component({
  selector: 'app-profile-guide',
  templateUrl: './profile-guide.component.html',
  styleUrls: ['./profile-guide.component.scss']
})
export class ProfileGuideComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    const params = route.snapshot.params;
    console.warn(params)
  }

  public guideItems: CardItem[] = [
    { title: "Acerca de mi", content: "Adipisicing neque placeat illo illo tempora? Delectus modi eos autem soluta accusamus! Quibusdam esse quo facilis vero dolorum Aliquid repellat nam doloremque illum quis, aut.", icon: "bx-user-circle" },
    { title: "Acerca de mi", content: "Adipisicing neque placeat illo illo tempora? Delectus modi eos autem soluta accusamus! Quibusdam esse quo facilis vero dolorum Aliquid repellat nam doloremque illum quis, aut.", icon: "bx-user-circle" },
    { title: "Acerca de mi", content: "Adipisicing neque placeat illo illo tempora? Delectus modi eos autem soluta accusamus! Quibusdam esse quo facilis vero dolorum Aliquid repellat nam doloremque illum quis, aut.", icon: "bx-user-circle" },
  ];

  ngOnInit(): void {
  }

}
