var promise = new Promise(function (resovle, reject) {
	resovle([
	{
		subject: "javascript"
	},
	{
		subject: "java"
	}
	])
	reject('co lỗi');
});

promise
	.then(function () {
		console.log('Thanh cong')
	})
	.catch(function (error) {
		console.log(error)
	})
	.finally(function () {
		console.log('End')
	});