// Tek satırlık kodlamalarda

/*
    Multi comments 
    Multi comments 
    Multi comments
*/

// function bir() {
//     console.log("Log alanı");
// }
// bir();

// function iki() {
//     console.error("Hatalarımız.");
// }
// iki();

// function uc() {
//     console.warn("Uyarılarımız.");
// }
// uc();

// alert("Bir pop-up(Sayfa açılır açılmaz.)");

// mertdede = function md(){
//     console.log("Jquery Dersleri");
// }
// mertdede();

// mertdede2 = () => {
//     console.log("JavaScript Dersleri");
// }
// mertdede2();

// console.clear();

/* ----------------- DataTypes NaN undefined ------------------- */

// var temp = 5;
// console.log(temp);
// console.log(typeof temp);

// var temp2 = 5.4;
// console.log(temp2);
// console.log(typeof temp2);

// var temp3 = "Mert Dede";
// console.log(temp3);
// console.log(typeof temp3);

// var temp4 = true;
// console.log(temp4);
// console.log(typeof temp4);

// var temp5 = null;
// console.log(temp5);
// console.log(typeof temp5);

// var deg;     //Undefined
// console.log(deg);
// console.log(typeof deg);

// var deg,deg1,deg2,deg3,deg4;

// var deg5 =String(10);
// console.log(deg5);
// console.log(typeof deg5);

// var deg6 =[10,18,20,25];
// console.log(deg6);
// console.log(typeof deg6);

// var deg7 =Number('10');
// console.log(deg7);
// console.log(typeof deg7);

// var deg8 =Number('mert'); //Sayıya çeviremedi NaN
// console.log(deg8);
// console.log(typeof deg8);


/* ------------------ Operators , cast , case-sensitive ------------------ */

// var temp1 = 9,
//     temp2 = 4,
//     temp3;
// temp3 = temp1 + temp2;
// console.log(temp3);

// temp3 = temp1 - temp2;
// console.log(temp3);

// temp3 = temp1 * temp2;
// console.log(temp3);

// temp3 = temp1 / temp2;
// console.log(temp3);

// temp3 = temp1 ** temp2;
// console.log(temp3);

// temp3 = temp1 % temp2;
// console.log(temp3);
// console.log(typeof temp3);

// var temp4 = String(temp3);
// console.log(temp4);
// console.log(typeof temp4);

// var Temp4 = Number(temp3);
// console.log(Temp4);
// console.log(typeof Temp4);


// temp1++;
// console.log(temp1);

// temp2--;
// console.log(temp2);


// (temp4 = Temp4) ? console.log(true) : console.log(false);
// (temp4 == Temp4) ? console.log(true) : console.log(false);
// (temp4 === Temp4) ? console.log(true) : console.log(false);
// (temp4 < Temp4) ? console.log(true) : console.log(false);
// (temp4 <= Temp4) ? console.log(true) : console.log(false);
// (temp4 != Temp4) ? console.log(true) : console.log(false);
// (temp4 !== Temp4) ? console.log(true) : console.log(false);

/* ----------------- Number ----------------- */

// isNaN();  true = sayi değildir , false = sayidir
// toPrecision();
// toFixed();

// var sayi = 44.2357;
// var sayi2 = 44.2752;
// console.log(sayi.toPrecision(3));
// console.log(sayi2.toPrecision(3));
// console.log(sayi.toFixed(3));
// console.log(sayi2.toFixed(3));

// var isSayi = 34;
// console.log(isSayi);
// console.log(typeof isSayi);

// var isSayi = String(34);
// console.log(isSayi);
// console.log(typeof isSayi);

// var isSayi = Number('34a');
// console.log(isSayi);
// console.log(typeof isSayi);

// console.log(isNaN('44a'));
// console.log(isNaN('44'));

// var value = isNaN('44a');
// if(value){
//     console.log('Sayı Değildir.');
// }
// else{
//     console.log('sayidir.');
// }

/* ---------------------- Date ---------------------- */

// let tarih = new Date();

// console.log(tarih.getFullYear() + " / " + tarih.getMonth());
// console.log(tarih.getMonth()); // 0-1-2-3-4-5-6-7-8-9-10-11  Ocak 0 --- Aralık 11
// console.log(tarih.getDay());
// console.log(tarih.getHours());
// console.log(tarih.getMinutes());
// console.log(tarih.getSeconds());
// console.log(tarih.getMilliseconds());

/* ---------------------- Syntax ---------------------- */

// var 4sayi; // Sayi ile başlanmaz.
// var mert-dede; // Arada tire kullanılmaz.

// // Global değişkenler
// var sayi4;
// var $sayi;
// var _sayi;

// //Belli scope çalışır
// let scope ="Mert Dede";
// console.log(scope);

// const degismez = 19;
// console.log(degismez);
// // degismez = 6;  //Hata verir const değiştirilemez.
// // console.log(degismez);

/* ---------------------- Math ---------------------- */

// console.log(Math.PI); //Pi sayısı 
// console.log(Math.random()); //Random sayı üretme 0-1 arası
// console.log(Math.round(Math.random()*100)); // Random 0 -100 arası sayı üretme
// console.log(Math.round(6.5)); // Ceil + Floor (Sayı 5ve büyükse üste Altındaysa alta yuvarlama)
// console.log(Math.ceil(6.2)); // Üstündeki tam sayıya yuvarlama
// console.log(Math.floor(6.8)); // Altındaki sayıya yuvarlama
// console.log(Math.sqrt(81)); // Karekök => 9
// console.log(Math.pow(2,5)); // Üslü sayı (ilk sayı taban,ikinci sayı üs)
// console.log(Math.abs(-44)); // Mutlak değer => 44
// console.log(Math.min(1,2,4,5,20)); // Minumum değer => 1
// console.log(Math.max(1,2,4,5,20)); // Maximum değer => 20

/* ---------------------- Escape Template ---------------------- */

//       \          Escape character
//       ``         Backtick
//       {}         Curl brackets
//       &          Ampersand
//       ${} 

// let ad,soyad,tamisim,adSoyad;
// ad = "Mert";
// soyad = "Dede";
// adSoyad = "Adınız: " + ad + " Soyadınız: " + soyad;
// tamisim = `Adınız: ${ad} Soyadınız: ${soyad} `;
// alert(tamisim);

// console.log(ad+"\'in kitabı"); // Escape character

/* ---------------------- String ---------------------- */

// var kelime = " Btk Akademi Türkiye yazılımı Türkçe";
// var search = "yazılımı";

// console.log(kelime.length);                                                     //Kelime boyutu
// console.log(kelime.toUpperCase());                                              //Hepsi büyük harf
// console.log(kelime.toLowerCase());                                              //Hepsi küçük harf
// console.log(kelime.concat("Mert Dede"));                                        //Sonuna ekleme
// console.log(kelime.search(search));                                             //Arama
// console.log(kelime.indexOf(search));                                            //Arama
// console.log(kelime.trim(kelime));                                               //Başında ve sonunda boşluk silme
// console.log(kelime.split(" "));                                                 //Parçalama
// console.log(kelime.substring(0,kelime.length/2));                               //Alt metni bölme
// console.log(kelime.startsWith(" Btk"));                                         //Başlangıç bumu ? 
// console.log(kelime.startsWith("Btk"));                      
// console.log(kelime.endsWith("Türkçe"));                                         //Bitiş bumu ?
// console.log(kelime.replace("ı","i"));                                           //Değiştirme (İlk gördüğünü değiştiriyor.)
// console.log(kelime.replace(/ı/g,'i').replace(/ç/g,'c').replace(/ü/g,'u'));      //Değiştirme (Hepsini değiştiriyor.)

/* ---------------------- Conditional ---------------------- */

// var result = 3>5;

// if(result){
//     console.log("Büyüktür");
// }
// else{
//     console.log("Küçüktür");
// }

// var ternary = (3>1) ? "Büyüktür." : "Küçüktür.";
// console.log(ternary);

// var deger = Number(prompt("Bir sayı Giriniz."));  //Kullanıcıdan veri alıp ona göre switche uyguluyoruz.
// switch (deger) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     default:
//         console.log("alan dışı");
//         break;
// }

/* ---------------------- Loop ---------------------- */

// for(let i = 0; i<=5 ; i++){                                 //iterative for
//     console.log(`i : ${i}`);
// }

// let j = 10;
// while (j<=15) {                                             //while
//     console.log(`j : ${j}`);
//     j++;
// }


// let k=15;
// do{
//     console.log(`k : ${k}`);
//     k++;
// }while(k <= 20);                                            //do-while

// var dizi = [21,22,23,24,25];
// for (var temp in dizi) {                                    //for-in 
//     console.log(`Sayilar : ${temp} Eleman : ${dizi[temp]}`)
// }

// var dizi = [26,27,28,29,30];
// dizi.forEach(                                               //For-each
//     function(item){
//         console.log(item);  
// });        

// var yeniDizi =dizi.map(function(item){                      //Map (Dizilerde return lazımsa)
//     return item+5;
// });
// console.log(yeniDizi);

// // break        ----> Döngüyü kırmak
// // return       ----> Metodu kırmak
// // continue     ----> Sadece bu değer için çalışma sonrasında devam et

/* ---------------------- Dizi ---------------------- */

// var dizi = [10,15,20,25,30];
// var dizi2 = [45,50,55,60];

// dizi.push(35);                  //Sona ekleme
// dizi.unshift(5);                //Başa ekleme
// dizi.shift();                   //Baştan eleman silme
// dizi.pop();                     //Sondan eleman silme
// dizi = dizi.reverse();          //Diziyi ters çevirme
// dizi = dizi.sort();             //Diziyi sıralama

// var find = dizi.find(function(element){                 //Dizideki ilk çift sayıyı bulma (FİND)
//     return (element%2 == 0);
// });
// console.log(find);

// var filter = dizi.filter(function(element){                 //Dizideki çift sayıları bulma (FİLTER)
//     return (element%2 == 0);
// });
// console.log(filter);

// var tumdizi = dizi.concat(dizi2);                           //Dizileri birleştirme (Sondan)
// console.log(tumdizi);

// dizi.splice(1,0,35);                                        //(Başlangıç index,Silinecek sayısı,eklenecek değer)

// for (var temp in dizi) {                                    
//     console.log(`Sayilar : ${temp} Eleman : ${dizi[temp]}`)
// }

/* ---------------------- BOM (Browser Object Model) ---------------------- */

// console.log(window);

// window.alert("Ekran");

// var reserve = window.confirm("Silmek istiyor musun ?");
// if(reserve){
//     console.log("Siliniyor...");
// }
// else{
//     console.log("Silinmedi...");
// }

// window.document.getElementById("screenWidth").innerHTML ="Ekran genişliği : "+ window.screen.width; // Screen
// window.document.getElementById("screenWidth").innerHTML ="Location host : "+ window.location.host; // Location
// window.document.getElementById("screenWidth").innerHTML ="Location hostname : "+ window.location.hostname; // Location
// window.document.getElementById("screenWidth").innerHTML ="Navigator userAgent : "+ window.navigator.userAgent; // Navigator


/* ---------------------- Object ---------------------- */

// var dizi = [];                              //dizi
// console.log(dizi);

// var object = {};                            //Object
// console.log(object);

// var ogrenci = {
//     ad : 'Mert',
//     soyad : 'Dede',
//     ogrenciNo : '20010310075',
//     bolum : 'Bilgisayar Mühendisliği',
//     sinifi : '4.sınıf',
//     ders: ['VeriYapilari','Matematik1','Matematik2','AlgoritmaVeProgramlama1'],
//     dersicerik:{
//         VeriYapilari: 'Temel veri yapıları',
//         Matematik1: 'Genel matematik',
//         Matematik2: 'Bölüm matematik',
//         AlgoritmaVeProgramlama1: 'Algoritma ve Programlamaya Giriş'
//     }
// }
// console.log(ogrenci);
// console.log(ogrenci.ad +" "+ ogrenci.soyad);
// console.log(ogrenci.bolum);
// console.log(ogrenci.sinifi);
// console.log(ogrenci.ders[1]);
// console.log(ogrenci.dersicerik.VeriYapilari);

// var MatOgrenciler = [
//     {ad:'Mert',vize:Number(25),final:Number(85)} , 
//     {ad:'Dilan',vize:Number(80),final:Number(90)}];

// console.log(MatOgrenciler[0].ad +" Ortalaması : " + (MatOgrenciler[0].vize + MatOgrenciler[0].final)/2);
// console.log(MatOgrenciler[1].ad +" Ortalaması : " + (MatOgrenciler[1].vize + MatOgrenciler[1].final)/2);


/* ---------------------- Functions ---------------------- */

// function parametresiz(){
//     console.log("Parametresiz fonksiyon tanımlama");
// }
// parametresiz();

// function tekParametreli(isim){
//     return isim;
// }
// let isim = tekParametreli("Mert");
// console.log(isim);

// function nParametreli(isim,soyisim){
    
//     return isim +" "+soyisim;
// }
// let adSoyad = nParametreli("Mert","Dede");
// console.log(adSoyad);

// let isimsizArrow = () => {console.log("İsimsiz Arrow fonksiyon tanımlama");} 
// isimsizArrow();
// let isimsiz = function(){
//     console.log("İsimsiz fonksiyon tanımlama");
// }
// isimsiz();

/* ----------------------------------- jQuery --------------------------------------- */


