 $.ajax({
     url: "https://api.openweathermap.org/data/2.5/weather?appid=659b8b8c2d0e8b24dd645ad475a53b38&q=New Orleans",
     type: "GET",
     dataType: "json",
     success: function (response) {
         render(response);
         console.log(response)
     },
     error: function (jqXHR, textStatus, error) {
         console.log(jqXHR, textStatus, error)
     }

 })

 function render(data) {
     let cel = Math.round(data.main.temp - 273.15);
     let output = `<h1>Live Weather</h1><br><h3> New Orleans <br> ${cel}&#176 ${data.weather[0].description}</h3>`;
     $('#weather').html(output);

 }