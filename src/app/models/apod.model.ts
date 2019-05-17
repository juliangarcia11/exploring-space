export class Apod {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;

  public constructor(json) {
    Object.assign(this, json);
  }
}
