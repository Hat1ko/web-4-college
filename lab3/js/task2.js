function tabFunc() {
    try {
        let tb = document.getElementById("myTable");
        tb.remove();
    } catch (exc) {
        console.log(exc);
    }
    let tb = document.createElement("TABLE");
    tb.setAttribute("id", "myTable");
    document.body.appendChild(tb);
    let sum = 0;
    for (let a = 2; a < 4; a += (4 - 2) / parseFloat(document.getElementById("N-value").value)) {
        let tr = document.createElement("TR"),
            y = ((Math.sin(a) + Math.pow(a, 4)) / Math.log(a));
        sum += y;
        let td1 = document.createElement("TD");
        td1.appendChild(document.createTextNode("x=" + a.toPrecision(4)));
        let td2 = document.createElement("TD");
        td2.appendChild(document.createTextNode("y=" + y.toPrecision(6)));
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("myTable").appendChild(tr);
    }
    alert("Сума усіх y=" + sum);
}