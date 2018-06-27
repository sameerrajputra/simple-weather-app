///////////////////////////////////////////		WEATHER APP   ////////////////////////////////////////////
const request = require('request');
const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
	.options({
		a : {
		describe: 'Address tp fetch weather from',
		demand: true,
		alias:'address',
		string: true
	}
})
	.alias('help', 'h')
	.help()
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maogleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
if(response.data.status === 'ZERO_RESULT'){
	throw new Error('Unable to find the address');
}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherURL = `https://api.darksky.net/forecast/86ec4287cdf675e46e4fbca798576d9d/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherURL);

}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparant_temperature = response.data.currently.apparentTemperature;
	console.log(`It is currently ${temperature}.But It feels like ${apparant_temperature}`);

}).catch((e) => {
	if(e.code === 'ENOTFOUND'){
		console.log('Unable to connect to the server');
	}else{
		console.log(e.message);
	}
});