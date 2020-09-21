//////   Config   //////

let students = [
  "Космос и Белашев",
  "Бондаревский и Винтулин",
  "Глазков и Годованцев",
  "Гридин и Джувеликян",
  "Жадан и Карандеев",
  "Карпов и Кашин",
  "Коваленко и Крыжановский",
  "Кулаков и Лебединцев",
  "Жорди",
  "Манда и Попов",
  "Раимов и Ржавин",
  "Середа и Ситников",
  "Слепухина и Яровой",
];

//////   Programm   //////

let startdate = new Date("2019-09-18")
let now = new Date();
let sutki = 86400000;
let weekday = now.getDay();
let day;
let dezhurniy = 1;
let vivod;
let dayspass;
let vihday = 0;

function dezhur()
{
  dayspass = Math.trunc((now - startdate) / sutki);

for (let i = 1; i <= dayspass; i++)
{
  let vih = new Date(now - sutki * i);
  let numvih = vih.getDay();
  if (numvih == 0 || numvih == 2 || numvih == 6)
  {
   vihday += 1;
  }
}


  if (weekday == 1 || weekday == 3 || weekday == 4 || weekday == 5)
  {

    if (dayspass == 1 || dayspass > 1)
    {
      dezhurniy += (dayspass - vihday);

      if (dezhurniy > students.length)
      {
        let a = Math.trunc(dezhurniy / students.length);
        dezhurniy -= a * students.length;
      }
    }
  }
  else if (weekday == 2 || weekday == 0 || weekday == 6)
  {
   dezhurniy = 100;
  }


  return dezhurniy;
  return dayspass;

}

dezhur();

vivod = students[dezhurniy];
if (dezhurniy == 100)
{
  document.getElementById("dezhurniy").innerHTML = "Сегодня выходной!";
}
else
{
  document.getElementById("dezhurniy").innerHTML = vivod;
}

window.onload = function() {
document.getElementById("nomer").innerHTML = "Номер дежурного: " + dezhurniy;
document.getElementById("vremstart").innerHTML = startdate;
document.getElementById("vrem").innerHTML = now;
document.getElementById("days").innerHTML = "Дней прошло с начала цикла: " + dayspass;
}
