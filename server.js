'use strict';
const express = require('express');

express().use((req, res)=>res.json({
    url: req.url,
    headers: req.headers,
    env: process.env,
})).listen(process.env.PORT||3000, ()=>console.log('listening...'));


