. "${XDG_CONFIG_HOME}/dotfiles/all"

# prompt
fg_green=$'%{\e[32m%}'
fg_cyan=$'%{\e[36m%}'
fg_red_bold=$'%{\e[1;31m%}'
fg_white_bold=$'%{\e[1;97m%}'
reset=$'%{\e[0m%}'
setopt prompt_subst
devprompt

# keybindings
bindkey -e
bindkey '\C-H'  backward-kill-word          # ctrl+backspace
bindkey '\e[1;5D'  backward-word            # ctrl+left
bindkey '\e[1;5C'  forward-word             # ctrl+right
bindkey '\e[3~'  kill-whole-line            # del

# completion
[ ! -d "${XDG_CACHE_HOME}/zsh" ] && mkdir -p "${XDG_CACHE_HOME}/zsh"
autoload -Uz compinit && compinit -d "${XDG_CACHE_HOME}/zsh/zcompdump"
zstyle ':completion:*:*:*:*:*' menu select
zstyle ':completion:*' special-dirs false
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' matcher-list 'r:|=*' 'l:|=* r:|=*'
zstyle ':completion:*:*:*:users' ignored-patterns '_*'
zstyle ':completion:*' rehash true

setopt COMPLETE_ALIASES
setopt COMPLETE_IN_WORD
setopt PATH_DIRS
unsetopt CASE_GLOB
setopt AUTO_CD
setopt NULL_GLOB

# auto-expand aliases inline
globalias () {
   zle _expand_alias
   zle expand-word
   zle self-insert
}
zle -N globalias
bindkey ' ' globalias
bindkey '^ ' magic-space            # control-space to bypass completion
bindkey -M isearch ' ' magic-space  # normal space during history searches

# calculator
calc () {
    bindkey ' ' self-insert
    autoload -Uz zcalc && zcalc
    bindkey ' ' globalias
}
alias bc=calc

# history
[ ! -d "${XDG_DATA_HOME}/zsh" ] && mkdir -p "${XDG_DATA_HOME}/zsh"
export HISTFILE="${XDG_DATA_HOME}/zsh/history"
export HISTSIZE=1000000
export SAVEHIST="$HISTSIZE"
setopt APPEND_HISTORY
setopt INC_APPEND_HISTORY
setopt EXTENDED_HISTORY
setopt SHARE_HISTORY
setopt HIST_SAVE_NO_DUPS
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_IGNORE_SPACE
setopt HIST_REDUCE_BLANKS
setopt HIST_VERIFY

# if df_require fzy; then
#     __fuzzy_history () {
#         BUFFER=$(fc -l 1 | awk '{$1=""; print}' | fzy)
#         CURSOR=$#BUFFER
#         zle reset-prompt
#     }
#     zle -N fh __fuzzy_history
#     bindkey '^R' fh
# fi

# os-specific overrides and custom stuff
[ -f "${XDG_CONFIG_HOME}/dotfiles/os" ] && . "${XDG_CONFIG_HOME}/dotfiles/os"

if df_require direnv; then
    eval "$(direnv hook zsh)"
fi
