#!/bin/sh

urxvtd -q -f -o &
sxhkd &

# bspwm is in charge of loading colors into X, and starting polybar + dunst
exec bspwm
