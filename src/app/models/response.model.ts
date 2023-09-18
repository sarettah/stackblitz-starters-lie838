export class Response {
  errors: [];
  get: string;
  response: any;

  constructor(errors: [], get: string, response: any) {
    this.errors = errors;
    this.get = get;
    this.response = response;
  }
}
