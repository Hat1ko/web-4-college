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
    let a = 1.1728,
        b = 0.6789,
        c = 3.14,
        k = 1,
        x0 = 0.2,
        xk = 3.01,
        delX = 0.2;
    for (let i = 0; i < parseInt(document.getElementById("n-value").value) && x0 <= xk; i++, x0 += delX) {
        let tr = document.createElement("TR"),
            y;
        if (x0 < 1.8) {
            y = Math.sqrt(a * Math.pow(x0, 2) + k) / (c * x0 + b);
        } else if (x0 < 2.75) {
            y = Math.pow(Math.cos(x0 / b), 2) - a * a * x0 * x0;
        } else {
            y = Math.pow(Math.exp(0), (-b / x0));
            y /= (c * x0);
            y += Math.sin(a * x0);
        }
        let td1 = document.createElement("TD");
        td1.appendChild(document.createTextNode("x=" + x0.toPrecision(2)));
        let td2 = document.createElement("TD");
        td2.appendChild(document.createTextNode("y=" + y.toPrecision(4)));
        let td3 = document.createElement("TD");
        td3.appendChild(document.createTextNode(i + 1));
        tr.appendChild(td3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("myTable").appendChild(tr);
    }
    if (x0 > xk) {
        alert("x почало виходити за рамки доступних чисел!")
    }
}