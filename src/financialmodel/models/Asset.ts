export class Asset {
  id: string;
  name: string;
  type: string;
  location: string;
  status: string;

  constructor(init: { id: string; name: string; type: string; location: string; status: string }) {
    this.id = init.id;
    this.name = init.name;
    this.type = init.type;
    this.location = init.location;
    this.status = init.status;
  }
}
