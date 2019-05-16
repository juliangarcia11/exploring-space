export class PeopleInSpace {
  number: number;
  message: string;
  people: PersonInSpace[] = [];

  public constructor(json) {
    Object.assign(this, json);
  }
}

export class PersonInSpace {
  name = '';
  craft = '';

  public constructor(json?) {
    Object.assign(this, json);
  }
}
