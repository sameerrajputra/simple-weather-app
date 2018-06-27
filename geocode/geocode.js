const request = require('request');

var geocodeRequest = (address, callback) => {
var encodedAddress = encodeURIComponent(address);
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
},(error,response,body) => {

	if(error){
		callback('Cannot connect to the google server!!');
	}else if(body.status === 'ZERO_RESULTS'){
		callback('Invallid Address!!');
	}else if(body.status === 'OK'){
		callback(undefined,{
			Address: body.results[0].formatted_address,
			Latitude: body.results[0].geometry.location.lat,
			Longitude: body.results[0].geometry.location.lng
		});
}else{
	console.log('Other errors');
}
});	
};


module.exports.geocodeRequest = geocodeRequest;


