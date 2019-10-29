#!/bin/bash

docker build -t puppeteer-lsof-bug:latest .
docker run --privileged puppeteer-lsof-bug:latest