#!/bin/sh

urxvtd -q -f -o &
redshift &
sxhkd &

command -v udevil > /dev/null && \
command -v pmount > /dev/null && \
devmon --sync \
    --exec-on-drive "notify-send \"volume %l (block device %f) mounted on %d\"" \
    --exec-on-unmount "notify-send \"volume %l (block device %f) unmounted from %d\"" \
    --exec-on-remove "notify-send \"block device %f removed\""

# bspwm is in charge of loading colors into X, and starting polybar + dunst
exec bspwm
