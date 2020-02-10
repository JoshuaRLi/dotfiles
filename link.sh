#!/usr/bin/env sh

die () { printf %s\\n "$1"; exit 1; }

command -v sym > /dev/null 2>&1 || die 'sym (https://github.com/joshuarli/sym-prototype) is required.'

usage () {
    cat <<EOF
USAGE: $0 PRESET [d]

PRESETS:
base        - base (includes ~/.profile)
dd          - daily driver (arch linux)
dd2         - daily driver v2 (gentoo linux)
tatami      - tatami (alpine linux)
work        - configs for work [currently: n/a]

Pass 'd' as the second argument if you want to unlink the dotfiles
belonging to the specified preset.
EOF
    exit 1
}

sym="sym -v"
[ "$2" = 'd' ] && sym="sym -vd"

# TODO: when sym supports --ignore: --ignore='README\.md' --ignore='LICENSE'

case "$1" in
base)
    $sym base ;;
dd)
    $sym \
        base                    \
        os/arch                 \
        configs/dd              \
        shells/zsh              \
        apps/mpv                \
        apps/cava               \
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
        apps/mpv                \
        dev-langs/*             \
        dev-tools/* ;;
*)
    usage
    ;;
esac
