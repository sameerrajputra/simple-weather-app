console.log('Starting app');

setTimeout(() => {
	console.log('Inside of the callback function');
},2000);

setTimeout(() => {
	console.log('Inside 2nd callback function');
},0);

console.log('Finishing up');