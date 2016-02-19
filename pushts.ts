import * as express from "express";
import * as webPush from 'web-push';

export = function (app : express.Express, route : String) : any {
    app.post(route + 'sendNotification', function (req, res : express.Response) {
        webPush.sendNotification(req.query.endpoint).then(function () {
            res.status(201);
        });
    });
};