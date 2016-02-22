"use strict";
var webPush = require('web-push');
module.exports = function (app, route) {
    app.post(route + 'sendNotification', function (req, res) {
        webPush.sendNotification(req.query.endpoint, 0).then(function () {
            res.status(201).end();
        });
    });
};
//# sourceMappingURL=pushts.js.map