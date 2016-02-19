"use strict";
var webPush = require('web-push');
module.exports = function (app, route) {
    app.post(route + 'sendNotification', function (req, res) {
        webPush.sendNotification(req.query.endpoint).then(function () {
            res.status(201);
        });
    });
};
//# sourceMappingURL=pushts.js.map