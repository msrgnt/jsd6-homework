/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

$("button").on("click", function(){
  var inny = JSON.stringify($("input").val());
  var innyB = $("input").val();
  var apiKey = "716699c512e51e0b079137a1a3d6a3a4";
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + inny + "&APPID=" + apiKey;
  $.get(weatherUrl, function(response){
    var weather = (response.weather[0].description);
    var temp = (response.main.temp);
    var tempC = Math.ceil((temp * 9/5) - 459.67);
    console.log(response);
    var weatherS = JSON.stringify(weather);
      $("div").text("Currently, it's nothin' but " + weather + " in " + JSON.parse(inny));
      $(".divB").text(tempC + " degrees");
  });
  $("input").val("");
});
