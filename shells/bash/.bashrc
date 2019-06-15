. "${HOME}/.profile"
. "${XDG_CONFIG_HOME}/dotfiles/all"
prompt_export_PS1

# configure GNU readline + keybindings
bind -f "${XDG_CONFIG_HOME}/readline/inputrc"

# options
export FIGNORE=".:.."
set -o noclobber  # use >| to force redirection overwrite
shopt -s extglob
shopt -s nullglob
shopt -s nocaseglob
shopt -s no_empty_cmd_completion
shopt -s checkwinsize

# options, 4+ only
if [ "${BASH_VERSINFO}" -ge 4 ]; then
    # shopt -s globstar  # recurse all directories with **
    shopt -s autocd
fi

# history
export PROMPT_COMMAND="history -a"
export HISTFILE="${XDG_DATA_HOME}/bash/history"
export HISTFILESIZE=1000000
export HISTSIZE="$HISTFILESIZE"
export SAVEHIST="$HISTSIZE"
export HISTTIMEFORMAT="%F %T "
export HISTCONTROL=ignoreboth
shopt -s cmdhist
shopt -s histappend
