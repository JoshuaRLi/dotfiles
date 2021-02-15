#!/usr/bin/env sh

usage () {
    cat <<EOF
USAGE: $0 PRESET [d]

PRESETS:
dd          - daily driver (arch linux)
dd2         - daily driver v2 (gentoo linux)
tatami      - tatami (alpine linux)
work        - configs for work [currently: sentry.io]
debian      - dev environment on debian

Pass 'd' as the second argument if you want to unlink the dotfiles
belonging to the specified preset.
EOF
    exit 1
}

sym="${HOME}/bin/sym -v"
[ "$2" = 'd' ] && sym="${HOME}/bin/sym -vd"

case "$1" in
dd)
    $sym \
        --exclude 'os/arch/packages' \
        --exclude 'os/arch/etc/*'    \
        base                    \
        os/arch                 \
        configs/dd              \
        shells/zsh              \
        apps/alacritty          \
        apps/mpv                \
        apps/feh                \
        dev-langs/*             \
        dev-tools/*
    sudo $sym -t / \
        --exclude 'os/arch/packages' \
        os/arch
        ;;
dd2)
    $sym \
        base                    \
        os/gentoo               \
        configs/dd2             \
        shells/zsh              \
        apps/mpv                \
        dev-langs/*             \
        dev-tools/*

    sudo $sym -t / \
        os/gentoo-x230 ;;
tatami)
    $sym \
        base                    \
        os/alpine               \
        configs/tatami          \
        shells/mksh             \
        apps/mpv                \
        apps/feh                \
        dev-langs/*             \
        dev-tools/* ;;
work)
    $sym \
        base                    \
        os/osx                  \
        configs/work            \
        shells/zsh              \
        apps/alacritty          \
        apps/mpv                \
        dev-langs/*             \
        dev-tools/* ;;
debian)
    $sym                        \
        base                    \
        os/debian               \
        shells/zsh              \
        dev-langs/*             \
        dev-tools/* ;;
*)
    usage
    ;;
esac
