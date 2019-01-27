const fs = require('fs');
const log = require('./logger');
const _ = require('lodash');

let myArray = [];
async function filterRequest(source, dest, port, payload){
  let time =  new Date().getTime();
  let counter = 0;
  let object = {
    source,
    dest,
    port,
    payload,
    time
  }
  
  myArray.push(object);
  
  myArray = myArray.filter(e => {
  let diffrence = (time-e.time) / 1000;
  if(diffrence <= 10) {
        return e
      }
  });

  let grouped = _.mapValues(_.groupBy(myArray, 'source'),
  clist => clist.map(single => _.omit(single, 'source')));
  let checkGroup = grouped[source];

  for (i = 0; i < checkGroup.length; i++) { 
   if(checkGroup[i].dest == object.dest && checkGroup[i].port != object.port)  counter++;
  }

  if(counter > 5) writePortScanAttempt(source, dest, port, payload)
  else writeLegitimateRequest(source, dest, port, payload)
}

function writePortScanAttempt(source, dest, port, payload){
  log.error(`Port scan attempt from ${source} to ${dest}:${port} with payload ${JSON.stringify(payload)}`);
  log.error('**ADD HISTORY HERE**');
}

function writeLegitimateRequest(source, dest, port, payload){
  log.info(`Legitimate request from ${source} to ${dest}:${port}`);
}   

// Execute if ran directly for simple testing and debuging
if (typeof require !== 'undefined' && require.main === module) {

}

module.exports = filterRequest;