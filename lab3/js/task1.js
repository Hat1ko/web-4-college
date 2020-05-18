function find() {
    let x = parseInt(document.getElementById("x").value),
        y = parseInt(document.getElementById("y").value);
    alert("Результат: " + (x < 0) ? Math.max(x, y) : Math.min(x, y));
}