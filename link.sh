#!/usr/bin/env sh

die () { printf %s\\n "ERROR: ${1}"; exit 1; }

command -v stow > /dev/null 2>&1 || die 'You must have GNU stow installed.'

usage () {
    cat <<EOF
USAGE: $0 PRESET [d]

PRESETS:
base        - base, bin, and interactive shell configs
dd          - daily driver (arch linux)
dd2         - daily driver v2 (gentoo linux)
tatami      - tatami (alpine linux)
work        - configs for work [currently: n/a]

Pass d as the second argument if you want to unlink the dotfiles
belonging to the specified preset.
EOF
    exit 1
}

stow="stow --no-folding -vt ${HOME}"
stow_alt="stow --no-folding -v"
if [ "$2" = 'd' ]; then
    stow="stow -vDt ${HOME}"
    stow_alt="stow -vD"
fi

# TODO: dd2 assumes my gentoo-x220, will need to prompt for more specificity in future

if
    ! case "$1" in
    base)
        $stow base
        $stow --ignore='README\.md' --ignore='LICENSE' bin
        $stow -d apps gnupg
        $stow -d shells bash mksh zsh
        ;;
    dd)
        $stow base
        $stow --ignore='README\.md' --ignore='LICENSE' bin
        $stow -d os arch
        $stow -d configs dd
        $stow -d apps gnupg cava redshift rofi-pass irssi feh
        $stow -d dev-langs python golang rust ruby nodejs
        $stow -d dev-tools editorconfig git nano micro tmux sqlite
        ;;
    dd2)
        $stow base
        $stow -d os gentoo
        sudo $stow_alt -t / -d os gentoo-x220
        $stow -d configs dd2
        $stow -d apps gnupg
	$stow -d dev-langs python
        $stow -d dev-tools git
        ;;
    tatami)
        $stow base
        $stow --ignore='README\.md' --ignore='LICENSE' bin
        $stow -d os alpine
        $stow -d configs tatami
        $stow -d apps gnupg irssi feh
        $stow -d dev-langs python golang rust ruby nodejs
        $stow -d dev-tools editorconfig git nano micro tmux
        ;;
    work)
        true
        $stow base
#        $stow --ignore='README\.md' --ignore='LICENSE' bin
#        $stow -d os osx
#        $stow -d apps irssi
        $stow -d configs work
        $stow -d dev-langs python nodejs
        $stow -d dev-tools editorconfig git micro tmux
        ;;
    *)
        usage
        ;;
    esac
then
    die "stow exited unsuccessfully; you probably have to move or delete the files stow is conflicting with."
fi
