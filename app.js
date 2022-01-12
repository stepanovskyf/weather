var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var minValue = data['main']['temp_min'];
  var maxValue = data['main']['temp_max'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";



  //Getting the min and max values for each day
   for(i = 0; i<5; i++){
        temp_min.innerHTML = "Min Temp: "+minValue;
        temp_max.innerHTML = "Max Temp: "+maxValue;
       //Number(1.3450001).toFixed(2); // 1.35
   }





.catch(err => alert("Wrong city name!"));
})
