export class ArrayFontSize {
    arrayFontSize = [{fontSize: "-=5px"}, {fontSize: "+=5px"}];
    i = 0;

    get fontSize() {
        (this.i == 0) ? this.i = 1 : this.i = 0;
        return this.arrayFontSize[this.i];
    }
}
