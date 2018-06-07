#!/bin/bash

yarn build
git add docs
git commit -m "updated docs" #prompt for deploy message
git push origin master
