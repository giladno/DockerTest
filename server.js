'use strict';
const express = require('express');

express().get('/', (req, res)=>res.send('ok...')).listen(8080, ()=>console.log('listening...'));


