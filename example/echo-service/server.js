/*
 * Cloud Foundry Services Connector
 * Copyright (c) 2014 ActiveState Software Inc. All rights reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

var Broker = require('../../');
var Config = require('./config/echo-service');

var broker = new Broker(Config);

broker.start();

broker.on('provision', function (req, next) {
    var reply = { dashboard_url: req.params.service_id };
    next(reply);
});

broker.on('unprovision', function (req, next) {
    next();
});

broker.on('bind', function (req, next) {
    var reply = {};

    reply.credentials = {
        echo: 'echo',
        anotherEcho: 'anotherEcho',
    };
    next(reply);
});

broker.on('unbind', function (req, next) {
    next();
});

// broker.stop();
