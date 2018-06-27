const request = require('request');

var getWeather = (lat,lng,callback) => {
request({
	url: `https://api.darksky.net/forecast/86ec4287cdf675e46e4fbca798576d9d/${lat},${lng}`,
	json: true
},(error, response, body) => {
	if(!error && response.statusCode === 200){
	callback(undefined, {
		temperature: body.currently.temperature,
		apparant_temperature: body.currently.apparentTemperature
	});		
}else{
	callback('Cannot fetch from the weather forecast');
}

}
);
};

module.exports.getWeather = getWeather;