class Circle {
    #pi = Math.PI;

    constructor(radius){
        this.radius = radius;
        this._parameter = 2*this.#pi * radius;
    }

    get parameter(){
        this._parameter;
    }

    set parameter(value){
        if (value < 0){
            throw new Error('Perimeter cannot be less than zero.')

        }
        this._parameter = value;
    }
}