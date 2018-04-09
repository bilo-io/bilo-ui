#!/bin/bash
# KeyCodes for AppleScript
# https://eastmanreference.com/complete-list-of-applescript-key-codes/
echo "init: dev & demo for vscode"
yarn dev &
osascript -e 'tell application "System Events" to key code 42 using command down' &
yarn dev:demo 
# &
# osascript -e 'tell application "System Events" to key code 42 using command down'
# bilo
