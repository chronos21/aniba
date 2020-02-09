const helper = require('./helper');

function send(text, url, ids) {
	var headers = {
		'Content-Type': 'application/json; charset=utf-8',
		Authorization: 'Basic YjY5NzMzMzgtMThkYi00M2ZjLWJkYTEtYWMwMWNkMzY4YjRm'
	};

	var data = {
		app_id: 'ed723a23-d589-408a-9560-52580ecdae9a',
		contents: { en: text.contents },
		headings: { en: text.headings },
		url,
		include_external_user_ids: ids
	};

	var options = {
		host: 'onesignal.com',
		port: 443,
		path: '/api/v1/notifications',
		method: 'POST',
		headers: headers
	};

	var https = require('https');
	var req = https.request(options, function(res) {
		res.on('data', function(data) {
			helper.saveLog(JSON.parse(data), 'Notif Sent');
		});
	});

	req.on('error', function(e) {
		helper.saveLog(e, 'Notif Error');
	});

	req.write(JSON.stringify(data));
	req.end();
}

// sendNotification(message);

exports.send = send;
