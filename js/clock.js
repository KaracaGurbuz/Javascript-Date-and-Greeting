let userName = prompt("İsminizi Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = userName;
let date = new Date();
let day = date.getDay();
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
function tarihSaat() {
  let date = new Date().toLocaleTimeString() + ` ${days[day]}`;
  document.getElementById("myClock").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);
