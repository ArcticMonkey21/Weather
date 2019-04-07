const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('starting'));



// Call current weather data for one location

/*
http://api.openweathermap.org/data/2.5/weather?
q = city name
id = city ID, check out the list.json.gz
lat, lon = long longtitude and latitude
zip = zip code, country code
*/

// Call current weather data for several cities

/*
http://api.openweathermap.org/data/2.5/box/city?
--> to get cities inbound by the rectangle from longtitude , latitude
bbox = bounding box lon-left,lat-bottom,lon-right,lat-top,zoom
callback = javascript functionName
cluster = use server clustering of points. Possible values ​​are [yes, no]
*/

/*
http://api.openweathermap.org/data/2.5/find?
--> to get limited number of cities, depending on the center point of the longtitude and latitude
lat = latitude
lon = longitude
callback = functionName for JSONP callback.
cnt = number of cities
cluster = use server clustering of points. Possible values ​​are [yes, no]
*/

/*
http://api.openweathermap.org/data/2.5/group?
--> to get requested cities by their ID, limit of 20
NOTE: A single ID counts as a one API call! So, the above example is treated as a 3 API calls. free account can only call 10 times.
id = separated by commas
units = can me metric
*/

/*
Extras:
units=imperial for Fahrenheit
units=metric for Celsius
Kelvin is by default
*/