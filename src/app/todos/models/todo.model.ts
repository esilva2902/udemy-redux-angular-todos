export class Todo {
  private _id: number;
  private _text: string;
  private _completed: boolean;

  constructor(text: string) {
    this._text = text;
    this._id = new Date().getTime();
    this._completed = false;
  }

  get id(): number {
    return this._id;
  }

  get text(): string {
    return this._text;
  }

  get completed(): boolean {
    return this._completed;
  }
}
