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
    var xmin = 1000, ymin = 1000, xmax = -1000, ymax= -1000
    //b - a = 2 - (-1) = 3
    for (let a = -1; a <= 2; a += 3 / parseFloat(document.getElementById("N-value").value)) {
        let tr = document.createElement("TR"),
            y = 1 - a - 2 / Math.pow((a + 2), 2);
        
        let td1 = document.createElement("TD");
        td1.appendChild(document.createTextNode("x=" + a.toPrecision(4)));
        let td2 = document.createElement("TD");
        td2.appendChild(document.createTextNode("y=" + y.toPrecision(6)));
        if (a > xmax) xmax = a
        if (y > ymax) ymax = y
        if (a < xmin) xmin = a
        if (y < ymin) ymin = y
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("myTable").appendChild(tr);
    }
    if (xmin * ymax > xmax * ymin) {
        alert("xmin * ymax > xmax * ymin | : " + xmin * ymax)
    } else {
        alert("xmin * ymax < xmax * ymin | : " + xax * ymin)
    }
    
}
