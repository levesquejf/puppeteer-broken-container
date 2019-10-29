#!/bin/bash

node index.js

NB=$(lsof | wc -l)

if [ "$NB" == "0" ]
then
    echo "lsof result is empty. Container is broken :-("
fi
