"use strict";

export class ColorList {
    i = 0;
    arrayColor = ["#0000ff", "#79cdcd"];

    getNextColor() {
        this.i = (this.i == 0) ? 1 : 0;
        return this.arrayColor[this.i];
    }
}
