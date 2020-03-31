function yeniKayitEkleme() {
    var yeniKayit = document.getElementById("yeni-kayit").value.trim();

    if (yeniKayit === undefined || yeniKayit === "") {
        alert("boş bırakmayınız");
        return;
    }
    console.log(yeniKayit);

    var table = document.getElementById("icerik");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var buton = document.createElement("button");
    buton.innerText = "Sil";
    buton.style = "color: red;"
    buton.type = "button";
    td.innerHTML = yeniKayit;
    tr.appendChild(td);
    tr.appendChild(buton);
    table.appendChild(tr);
    document.getElementById("yeni-kayit").value = "inci";
}

