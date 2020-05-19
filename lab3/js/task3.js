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
    let a = 5.43,
        b = 1.75,
        p = 4,
        s = 7,
        x0 = 0.11,
        xk = 4.25,
        delX = 0.27;
    for (let i = x0, t = 0; t < parseInt(document.getElementById("n-value").value) && i <= xk; t++, i+=delX) {
        let tr = document.createElement("TR"),
            y;
        if (i <= 1.5 && i >= 0.1) {
            y = Math.pow(i, 2.5) + p*i - s
        } else if (i > 1.5 && i <=2.5) {
            y = Math.exp(i) + Math.exp(Math.sqrt(i)) + Math.exp(Math.cbrt(i))
        } else {
            y = i / (Math.pow(a, 2) + Math.pow(b, 1.8)) + (a / b) * Math.sin(i)
        }
        let td1 = document.createElement("TD");
        td1.appendChild(document.createTextNode("x=" + i.toPrecision(2)));
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
