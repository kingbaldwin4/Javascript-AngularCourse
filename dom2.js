
//inner html p içine mtin yazdığımız yeri temsil eder. 
//document.getElementById("bio").innerHTML="Kader Nur Tekin: 1999"


var intro1=document.getElementById("intro1");
var mesaj=document.getElementById("mesaj");
mesaj.innerHTML=intro1.innerHTML;

//şehirleri sıralamak

var tumListeler=document.getElementsByTagName("ul")
var sehirler= tumListeler[0]
tumElemanlar=sehirler.getElementsByTagName("li")

/*for(i=0;i<tumElemanlar.length;i++)
{
    alert(tumElemanlar[i].innerHTML)
}*/

Array.from(tumElemanlar).forEach(element=>{
    alert(element.innerHTML);
});

//css için dom manipülasyonu

// var classElamanlari=document.getElementsByClassName("intro1");

// alert(classElamanlari[1].innerHTML);




