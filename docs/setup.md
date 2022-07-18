# Setup

## Homebrew ([brew](https://brew.sh/))

### Setup

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Brew packages

```bash
brew install git nvm zsh zsh-syntax-highlighting zsh-autosuggestions cowsay awscli allure libpng
```

## Apps

```bash
brew install --cask iterm2 docker slack visual-studio-code
```

## iTerm

[iTerm2 config or new project — new battle](https://medium.com/@evheniybystrov/iterm2-config-or-new-project-new-battle-9118c9cb157a).

## Node Version Manager ([nvm](https://github.com/nvm-sh/nvm))

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

## Node.js

```bash
nvm -v
nvm install lts/gallium
nvm use default lts/gallium
nvm alias default lts/gallium

npm i -g npm yarn ts-node typescript ntl http-server npm-run-all

yarn set version berry

yarn plugin import interactive-tools
yarn plugin import version

```

## Upgrade

### Brew

```bash
brew update && brew upgrade
```

### Project dependencies

```bash
yarn upgrade-interactive
```
