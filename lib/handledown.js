var markdown = require("markdown");
var handlebars = require("handlebars");


module.exports = function(arr, tmpl, cb) {
	var compiledTemplate = handlebars(tmpl);
	var headers = arr.shift();
	var results = [];
	var newHeaders = headers
	results.push
	var end = (function (max) {
		var counter = 0;
		return function () {
			counter += 1;
			if (counter == max && typeof cb == 'function') {
				headers.push("result");
				results.unshift(headers);
				cb(results);
			}
		};
	})(arr.length);



	arr.forEach(function (item) {
		var obj = {};
		headers.forEach(function (header, idx) {
			obj[header] = item[idx];
		});
		results.push(compiledTemplate(compiledTemplate, obj));
		end();
	});

};