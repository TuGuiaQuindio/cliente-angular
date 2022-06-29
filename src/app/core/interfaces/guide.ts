import { AdditionalInformation } from "src/app/modules/profile/components/extra-info-card/extra-info-card.component";
import { Language } from "src/app/modules/profile/preview/preview.component";

export interface Guide {
  firstName: string;
  lastName: string;
  aboutMe?: string;
  birthdate: string;
  city: string;
  languages: Language[];
  additionalInformation: AdditionalInformation;
  verified: boolean;
}
