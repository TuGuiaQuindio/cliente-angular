export type AdditionalInformation = { firstAid: boolean, hasTransport: boolean, availability: string };
export type Language = { name: string, level: number }
export interface Guide {
  firstName: string;
  lastName: string;
  aboutMe?: string;
  publicId: string;
  birthdate: string;
  city: string;
  languages: Language[];
  additionalInformation: AdditionalInformation;
  verified: boolean;
}
