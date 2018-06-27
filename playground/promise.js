var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}else{
			reject('Please enter numbers');
		}
	},2500);
 
});
};

asyncAdd(5, 4).then((success) => {
	console.log(success);
	return asyncAdd(success, '10');
}).then((success) => {
	console.log(success);
}).catch((error) => {
	console.log(error);	
})


// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {

// 	reject('It doesnt woeks!');		
// },2500);


// });

// somePromise.then((message) => {
// 	console.log('Success: ',message);
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// })