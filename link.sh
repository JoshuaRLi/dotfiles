#!/usr/bin/env sh

die () { printf %s\\n "$1"; exit 1; }

command -v sym > /dev/null 2>&1 || die 'sym (https://github.com/joshuarli/sym-prototype) is required.'

usage () {
    cat <<EOF
USAGE: $0 PRESET [d]

PRESETS:
base        - base, bin, and interactive shell configs
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

# XXX: dd2 assumes my gentoo-x230
# TODO: when sym supports --ignore: --ignore='README\.md' --ignore='LICENSE' bin

case "$1" in
base)
    $sym \
        base        \
        bin         \
        apps/gnupg  \
        shells/bash \
        shells/mksh \
        shells/zsh  ;;
dd)
    $sym \
        base                    \
        bin                     \
        os/arch                 \
        configs/dd              \
        shells/zsh              \
        apps/gnupg              \
        apps/cava               \
        apps/redshift           \
        apps/rofi-pass          \
        apps/irssi              \
        apps/feh                \
        dev-langs/python        \
        dev-langs/golang        \
        dev-tools/editorconfig  \
        dev-tools/git           \
        dev-tools/nano          \
        dev-tools/micro         \
        dev-tools/tmux  ;;
dd2)
    $sym \
        base                    \
        bin                     \
        os/gentoo               \
        configs/dd2             \
        shells/zsh              \
        apps/gnupg              \
        dev-langs/python        \
        dev-tools/git
    sudo $sym -t / -d os/gentoo-x230 ;;
tatami)
    $sym \
        base                    \
        bin                     \
        os/alpine               \
        configs/tatami          \
        shells/mksh             \
        apps/gnupg              \
        apps/irssi              \
        apps/feh                \
        dev-langs/python        \
        dev-langs/golang        \
        dev-tools/editorconfig  \
        dev-tools/git           \
        dev-tools/nano          \
        dev-tools/micro         \
        dev-tools/tmux  ;;
work)
    $sym \
        base                    \
        bin                     \
        configs/work            \
        shells/zsh              \
        dev-langs/python        \
        dev-langs/nodejs        \
        dev-tools/editorconfig  \
        dev-tools/git           \
        dev-tools/nano          \
        dev-tools/micro         \
        dev-tools/tmux  ;;
*)
    usage
    ;;
esac
