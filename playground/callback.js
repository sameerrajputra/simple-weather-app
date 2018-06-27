var getUser = (id, callback) => {
	var user = {
		id: id,
		Name: 'Hero'
	}
	setTimeout(() => {
		callback(user);
	},3000);
};

getUser(10, (userObject) => {
	console.log(userObject);
});