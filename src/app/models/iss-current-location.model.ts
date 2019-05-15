export class IssCurrentLocation {
  timestamp: number;
  message: string;
  iss_position: LogLat = new LogLat();

  public constructor(json) {
    Object.assign(this, json);
  }
}

export class LogLat {
  latitude = '';
  longitude = '';

  public constructor(json?) {
    Object.assign(this, json);
  }
}
