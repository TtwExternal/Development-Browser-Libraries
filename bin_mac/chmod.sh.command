#!/bin/sh
cd $(dirname $0)

sudo chmod -R 755 ./*.command

sudo chmod -R 755 ../WebPage/root/bin_custom/*.command
sudo chmod -R 755 ../WebPage/root/bin_mac/*.command
#sudo chmod -R 755 ../WebPage/root/bin_mac/*.sh
sudo chmod -R 755 ../WebPage/root/ui_template/**/**/*.command