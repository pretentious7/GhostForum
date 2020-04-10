#!/bin/bash
tmpfile=$(mktemp)

mv "$1" tmpfile
cat "$2" tmpfile > "$1" 

rm "$tmpfile"
