#!/usr/bin/env sh

usage () {
    cat <<EOF
USAGE: $0 PRESET [d]

PRESETS:
dd          - daily driver (arch linux)
dd2         - daily driver v2 (gentoo linux)
tatami      - tatami (alpine linux)
work        - configs for work [currently: sentry.io]

Pass 'd' as the second argument if you want to unlink the dotfiles
belonging to the specified preset.
EOF
    exit 1
}

sym="${HOME}/bin/sym -v"
[ "$2" = 'd' ] && sym="${HOME}/bin/sym -vd"

# TODO: when sym supports --ignore: --ignore='README\.md' --ignore='LICENSE'

case "$1" in
dd)
    $sym \
        base                    \
        os/arch                 \
        configs/dd              \
        shells/zsh              \
        apps/alacritty          \
        apps/mpv                \
        apps/feh                \
        dev-langs/*             \
        dev-tools/* ;;
dd2)
    $sym \
        base                    \
        os/gentoo               \
        configs/dd2             \
        shells/zsh              \
        apps/mpv                \
        dev-langs/*             \
        dev-tools/*

    sudo /home/josh/bin/$sym -t / \
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
	os/osx			\
        configs/work            \
        shells/zsh              \
        apps/alacritty          \
        apps/mpv                \
        dev-langs/*             \
        dev-tools/* ;;
*)
    usage
    ;;
esac
