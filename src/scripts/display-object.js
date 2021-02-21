export class DisplayObject {
    constructor(elementId) {
        const TIMEOUT = 5;
        this._element = document.getElementById(elementId);
        this._w = Math.round(this._element.width / 5);
        this._h = Math.round(this._element.height / 5);
        this._sw = this._element.width - this._w;
        this._sh = this._element.height - this._h;
        this._x = 0;
        this._y = 0;
        this._dx = 0;
        this._dy = 0;

        if(this._element.getContext) {
            this._ctx = this._element.getContext('2d');
            this._ctx.fillStyle = '#ff7373';
            setInterval(this._draw.bind(this), TIMEOUT);
        }
    }
    
    setPosition(position) {
        this._dx = -position.x;
        this._dy = position.y;
    }
    
    _draw() {
        this._ctx.clearRect(0, 0, this._element.width, this._element.height);
        
        this._x += this._dx;
        this._y += this._dy;
        
        if (this._x < 0) {
            this._x = 0;
        }
        if (this._x > this._sw) {
            this._x = this._sw;
        }
        if (this._y < 0) {
            this._y = 0;
        }
        if (this._y > this._sh) {
            this._y = this._sh;
        }
        
        this._ctx.fillRect(this._x, this._y, this._w, this._h);
    }
}
