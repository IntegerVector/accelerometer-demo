import { log } from './helpers/logs-helper';

export class DisplayText {
    constructor(elementId) {
        this._mainText = document.createElement('p');
        this._element = document.getElementById(elementId);
        this._element.appendChild(this._mainText);
    }

    setMainText(text) {
        this._mainText.textContent = text;
    }

    addChildText(text) {
        log(text);

        const newText = document.createElement('p');
        newText.textContent = text;
        this._element.appendChild(newText);
    }
}
