#!/bin/sh

set -e

# Starts daemonized pulseaudio idempotently.
pulseaudio --start

sxhkd &

# bspwm is in charge of loading colors into X, and starting polybar + dunst
exec bspwm
