export class Todo {
  private _id: number;
  private _text: string;
  private _completed: boolean;

  constructor(text: string) {
    this._text = text;
    this._id = Math.random();
    this._completed = false;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}
