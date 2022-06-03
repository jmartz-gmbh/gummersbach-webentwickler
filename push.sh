#!/bin/bash

docker build -t jomartz/gummersbach-webentwickler:v0.1 . --no-cache
docker image push jomartz/gummersbach-webentwickler:v0.1