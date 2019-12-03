# requires ENV="${HOME}/.kshrc" to be exported in ~/.profile

. "${XDG_CONFIG_HOME}/dotfiles/all"
devprompt

# os-specific overrides and custom stuff
[ -f "${XDG_CONFIG_HOME}/dotfiles/os" ] && . "${XDG_CONFIG_HOME}/dotfiles/os"
