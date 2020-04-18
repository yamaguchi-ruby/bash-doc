#!/usr/bin/env bash

f=index.md

echo "---" > $f
echo "layout: doc" >> $f
echo "---" >> $f
echo "" >> $f

for filename in `ls`; do
    if [ "${filename##*.}" = "md" ]; then
        echo "- [${filename%.*}](${filename%.*})" >> $f
    fi
done
