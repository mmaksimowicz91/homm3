export interface Heroes {
  name: string;
  race: string;
  gender: Gender;
  class: string;
  trait: string;
}

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
