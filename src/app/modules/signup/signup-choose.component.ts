import { Component, OnInit } from '@angular/core';
import { RegisterOption } from './interfaces/register-option';

@Component({
  selector: 'app-signup-choose',
  templateUrl: './signup-choose.component.html',
  styleUrls: ['./signup-choose.component.scss']
})
export class SignupComponent implements OnInit {

  public options: RegisterOption[] = [
    { title: "Para Empresas", description: "Pequeñas, medianas y grandes empresas que requieren la contratación de personal calificado en el sector turístico." },
    { title: "Para Guias", description: "Personas dedicadas a diferentes ramas del sector turístico que buscan brindar un servicio de calidad a partir de sus aptitudes personales y profesionales, vivencias y experiencia." },
  ]

  public selectedIdx = -1;

  constructor() { }

  ngOnInit(): void {
  }

  public onCardClick(idx: number) {
    this.selectedIdx = idx;
  }

}
