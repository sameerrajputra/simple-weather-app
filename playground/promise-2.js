const request = require('request');

var geocodeAddress = (address) => {
	var encodedAddress = encodeURIComponent(address);
	return new Promise((resolve, reject) => {
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
},(error,response,body) => {

	if(error){
		reject('Cannot connect to the google server!!');
	}else if(body.status === 'ZERO_RESULTS'){
		reject('Invallid Address!!');
	}else if(body.status === 'OK'){
		resolve({
			Address: body.results[0].formatted_address,
			Latitude: body.results[0].geometry.location.lat,
			Longitude: body.results[0].geometry.location.lng
		});
	}else{
		console.log('Other errors');
	}
	});	

	});

};

geocodeAddress('00000').then((location) => {
	console.log(location);
},(error) => {
	console.log(error);
});