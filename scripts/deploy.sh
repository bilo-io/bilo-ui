#!/bin/bash

yarn build
git add docs
echo "deploy (commit) message"
read commitMessage
git commit -m "$commitMessage" #prompt for deploy message
git push origin master
