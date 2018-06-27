

const request = require('request');
const yargs = require('yargs');

const weather = require('./weather/weather');
const geocodes = require('./geocode/geocode.js');
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

geocodes.geocodeRequest(argv.address, (errorMessage, result) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		//console.log(JSON.stringify(result, undefined, 2));
		console.log(result.Address);

		weather.getWeather(result.Latitude, result.Longitude, (errorMessage, weatherResult) => {
		if(errorMessage){
			console.log(errorMessage);
		}else{
			console.log(`It is currently ${weatherResult.temperature}.But It feels like ${weatherResult.apparant_temperature}`);
		}
});

	}
}
	);

