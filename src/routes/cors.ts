const express=require('express');
const cors=require('cors');
const app=express();

const allowlist = ['http://localhost:3000', 'https://localhost:3443']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

export const corsWithoutOptions=cors();
export const corsWithOptions=cors(corsOptionsDelegate);