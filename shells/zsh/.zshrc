. "${HOME}/.profile"
. "${XDG_CONFIG_HOME}/dotfiles/all"

# prompt
# need to redefine colors so zsh knows the control characters don't need to show up in terminal
fg_green='%{\e[32m%}'
fg_cyan='%{\e[36m%}'
fg_red_bold='%{\e[1;31m%}'
fg_white_bold='%{\e[1;97m%}'
reset='%{\e[0m%}'
setopt prompt_subst
prompt_export_PS1_echo

# keybindings
bindkey -e
#bindkey '\C-?'  backward-kill-word          # possible ctrl+backspace (iTerm2)
bindkey '\C-H'  backward-kill-word          # possible ctrl+backspace (urxvt)
bindkey '\C-K'  kill-whole-line
bindkey '\e[1;5D'  backward-word            # ctrl+left
bindkey '\e\e[D'  backward-word             # alt+left
bindkey '\e[1;5C'  forward-word             # ctrl+right
bindkey '\e\e[C'  forward-word              # alt+right
bindkey '\e[3~'  backward-delete-char       # del

# completion
[ ! -d "${XDG_CACHE_HOME}/zsh" ] && mkdir "${XDG_CACHE_HOME}/zsh"
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

# history
#alias history='fc -l'
[ ! -d "${XDG_DATA_HOME}/zsh" ] && mkdir "${XDG_DATA_HOME}/zsh"
export HISTFILE="${XDG_DATA_HOME}/zsh/history"
export HISTSIZE=1000000
export SAVEHIST="$HISTSIZE"
export HISTIGNORE="&:ls:[bf]g:exit:reset:clear:cd:cd ..:ls:history"
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
