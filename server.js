'use strict';
const express = require('express');

express().use((req, res)=>res.json({
    version: 2,
    url: req.url,
    headers: req.headers,
    env: process.env,
})).listen(process.env.PORT||3000, ()=>console.log('listening...'));


