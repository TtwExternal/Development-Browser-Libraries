#!/bin/sh
cd $(dirname $0)

sudo chmod -R 755 ./*.command

sudo chmod -R 755 ../WebPage/root/bin_custom/*.command
sudo chmod -R 755 ../WebPage/root/bin_linux/*.command
#sudo chmod -R 755 ../WebPage/root/bin_linux/*.sh
sudo chmod -R 755 ../WebPage/root/ui_template/**/**/*.command