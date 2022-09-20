class Personel{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log("Personel kaydedildi.")
    }
}
const personel = new Personel()
personel.kaydet();

//buradaki ad'ın constructor'daki ad ile ilgisi yok
//yeni bir alan eklemeye izin var class dışından ve bu saçma
/*personel.ad = "Engin"
console.log(personel.ad)*/
personel.ad = "Derin"
personel.soyad = "Demiroğ"

//yani this olunca asıl property oluyor üstteki sahte property
//yani güvensiz bir işlem  