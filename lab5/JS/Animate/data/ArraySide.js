"use strict";

export class ArraySide {
    #array = [{left: "-=150px"}, {top: "+=150px"}, {left: "+=150px"}, {top: "-=150px"}];
    #i = 0;

    get nextSide() {
        (this.#i == 3) ? this.#i = 0 : this.#i++;
        return (this.#array[this.#i]);
    }
}