var kullanicilar = [
    {email:"engindemirog@gmail.com",sifre:"12345"},
    {email:"derindemirog@gmail.com",sifre:"12345"}
]

var tweetler = [
    {email:"engindemirog@gmail.com",tweet:"Bugün hava çok güzel"},
    {email:"engindemirog@gmail.com",tweet:"Bugün hava çok güzel 2"},
    {email:"derindemirog@gmail.com",tweet:"Kapıyı ben açacağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")


function kullaniciVarmi(email, sifre){
    for(i=0;i<kullanicilar.length;i++){
    if((kullanicilar[i].email == email && kullanicilar[i].sifre == sifre)){
        return true;
    }
    else{
        return false;
    }
}
}
function giris(email,sifre){
    if(kullaniciVarmi(email,sifre)){
        console.log(tweetler)
    }
    else{
        console.log("Kullanıcı adı veya şifresi hatalı")
    }
}
giris(email,sifre)