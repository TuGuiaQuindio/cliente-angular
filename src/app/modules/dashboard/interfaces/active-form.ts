import { FormGroup } from "@angular/forms";
import { SlideComponent } from "../../slideshow/components/slide/slide.component";

export type SectionMap = { [key: number]: FormGroup };
export interface ActiveForm {
  slides: SlideComponent[];
  dataForm: FormGroup;
  sectionMap: SectionMap;
  doSignup(): any;
}
