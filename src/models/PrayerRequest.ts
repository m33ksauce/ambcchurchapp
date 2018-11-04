export class PrayerRequest {
    private _id: string;
    private _title: string;
    private _text: string;
    private _user: string;

    constructor(id: string, title: string, text: string, user: string) {
        this._id = id;
        this._title = title;
        this._text = text;
        this._user = user;
    }

    ID(): string {
        return this._id;
    }

    Title(): string {
        return this._title;
    }

    Text(): string {
        return this._text;
    }

    User(): string {
        return this._user;
    }
}