#!/bin/sh

sxhkd &

# bspwm is in charge of loading colors into X, and starting polybar + dunst
exec bspwm
