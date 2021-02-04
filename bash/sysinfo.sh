#!/bin/bash
#This script will email us our user, IP, hostname, and today's date.
emailaddress=moffettzl@mail.uc.edu
today=$(date +"%d-%m-%Y")
clock=$(date +"%H:%M:%S")
ip=$(ip a | grep 'dynamic ens192' | awk '{print $2}')
content="User $USER"

mail -s "IT3038C Linux IP" $emailaddress <<< $(echo -e "The User that sent this was: \n" $USER " | My IP is: \n" $ip " | My Hostname is: \n" $HOSTNAME " | My Bash Version is: \n" $BASH_VERSION " | Today's Date is: \n" $today " " $clock)