export interface Heroes {
  image: string;
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
