# Cyber 2.0 port scan filtering service assignment

This repo contains:
 * A filteringService function to be implemented.
 * Simple testing function to simpleportscanner.js.
 * Winston logger.

## Port scanner definition.

General definition:
 
A port scan is an attack that sends client requests to a range of server port addresses on a host, with the goal of finding an active port and exploiting a known vulnerability of that service. Scanning, as a method for discovering exploitable communication channels, has been around for ages. The idea is to probe as many listeners as possible, and keep track of the ones that are receptive or useful to your particular need.

## Assignment Description.

The object of this assignment is:
To implement a POC filtering microservice in filteringService.js which decides if the request is a valid.
  * If the request is valid it will be passed to writeLegitimateRequest function.
  * If its a port scan attempt the requests history will be logged with thier timestamps. 

Node event loop hang must be taken in consideration, if any limitation is broke please specifty why.

**A request will be considered a portscan if there were atleast 5 diffrent requests in a 10 seconds timeframe relative to the request.**

**If the Assignment isn't completed it is still valid to send a POC of the desigered solutions**




## Frameworks limitations.
Any framework, infrascture or DB can be used.
If needed - a deployment/spec instruction must be supplied (Not limited to the assignment time limit).
Extra credit will be given for a dockerized application.


