
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "BDAlab_publications.json", true);
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        let storage = JSON.parse(this.response);

        for (i in storage.data) {
            let tr = document.createElement('tr');
            for (let j=0; j<4; j++) {
                let td = document.createElement('td');
                td.innerHTML = storage.data[i][j];
                tr.appendChild(td);
            }
            document.querySelector("tbody").appendChild(tr);
        }
    }
};

xhttp.send();
                            