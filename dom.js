//document.getElementById("bio").innerHTML="Derin Demirog : 2014"
var intro1 = document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");
mesaj.innerHTML = intro1.innerHTML; //html içeriği innerHTML

var tumListeler = document.getElementsByTagName("ul")
var sehirler = tumListeler[0] //ul 1 tane ve ona ulaştık
var tumElemanlar = sehirler.getElementsByTagName("li")
/*for(i = 0;i<tumElemanlar.length;i++){
    alert(tumElemanlar[i].innerHTML);
}*/
Array.from(tumElemanlar).forEach(element => {
    alert(element.innerHTML);
});

var classElemanlari = document.getElementsByClassName("intro1");
alert(classElemanlari[0].innerHTML); 
//intro1'i kullanan birden fazla tag olabilir diye 0 yazdık
alert(classElemanlari[1].innerHTML);
alert(classElemanlari.length);

//aynı class'ı kullanan farklı türde tag'ler olursa
var queryElemanları = document.querySelectorAll("p.intro1");
alert(queryElemanları.length);
alert(queryElemanları[1].innerHTML);

var isimElemanlari = document.getElementsByName("musteriAdi");
alert(isimElemanlari[0].value);

//click tanımlı event'tir
//ve click olunca ne olacağını girdik mesela fonksiyon çalıştırsın diyoruz
var salih = document.getElementById("salih").addEventListener("click",rengiDegistir);
function rengiDegistir(){
    document.getElementById("p1").style.color="green";
    isimElemanlari[0].value="Derin Demiroğ";
}
var yazar = document.getElementById("yazar").addEventListener("mouseover",rengiDegistir2);
function rengiDegistir2(){
    document.getElementById("p2").style.color="yellow";
    isimElemanlari[0].value="Engin Demiroğ";
}

//ul'nin içindeki li aslında onun node'u oluyor
//şimdi agac'ın alt node'u olan ağaç değeri'ni okuyalım
var node = document.getElementById("agac");
alert(node.childNodes[0].nodeValue);

//element oluşturalım

var baslik = document.createElement("h2");
var node2 = document.createTextNode("Merhaba Javascript");
//simdi node2'yi basligin node'u olacak sekilde ayarlayalim
baslik.appendChild(node2);
//peki bu, html dosyasında nereye eklenecek ??
//ornegin p1 ile p2'nin arasına ekleyelim bu yüzden div1'e erişmeliyiz
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
//div1'in içine ekle, eklenecek tag h2(onu tutan baslik değiskeni)
//ve p2'nin üstüne ekle(yani p2'den öncesine ekle)
div1.insertBefore(baslik,p2);

//ornegin p2'yi kaldırmak istersek
alert("p2 siliniyor");
div1.removeChild(p2);

//basligi p1'in yerine koyuyorum
alert("p1 değiştiriliyor")
var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1);
