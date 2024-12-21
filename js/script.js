function correctDate(date) {
  return date < 10 ? "0" + date : date;
} 




function saleDate(){
  const day = document.getElementsByClassName("time")[0];
  const hours = document.getElementsByClassName("time")[1];
  const minutes = document.getElementsByClassName("time")[2];
  const seconds = document.getElementsByClassName("time")[3];
  const finishDate = new Date(2024, 11, 31);
  const currentDate = new Date();

  const date = finishDate - currentDate;
  day.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
  hours.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutes.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
  seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
}
saleDate();
setInterval(function(){
  saleDate();
},1000)


function secondCorrectDate(secondDate) {
  return secondDate < 10 ? "0" + secondDate : secondDate;
} 


function SecondSaleDate(){
  const secondDay = document.getElementsByClassName("timeTimer")[0];
  const secondHours = document.getElementsByClassName("timeTimer")[1];
  const secondMinutes = document.getElementsByClassName("timeTimer")[2];
  const secondSeconds = document.getElementsByClassName("timeTimer")[3];
  const secondFinishDate = new Date(2024, 11, 31);
  const secondCurrentDate = new Date();

  const secondDate = secondFinishDate - secondCurrentDate;
  secondDay.innerHTML = secondCorrectDate(Math.trunc(secondDate / (1000 * 60 * 60 * 24)));
  secondHours.innerHTML = secondCorrectDate(Math.trunc((secondDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  secondMinutes.innerHTML = secondCorrectDate(Math.trunc((secondDate % (1000 * 60 * 60)) / (1000 * 60)));
  secondSeconds.innerHTML = secondCorrectDate(Math.trunc((secondDate % (1000 * 60)) / 1000));
}
SecondSaleDate();
setInterval(function(){
  SecondSaleDate();
},1000)
