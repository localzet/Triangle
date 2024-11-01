#!/bin/bash

red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'

function LOGD() {
    echo -e "${yellow}[DEG] $* ${plain}"
}

function LOGE() {
    echo -e "${red}[ERR] $* ${plain}"
}

function LOGI() {
    echo -e "${green}[INF] $* ${plain}"
}

cur_dir=$(pwd)

#[[ $EUID -ne 0 ]] && LOGE "Ошибка: Пожалуйста, запустите скрипт с root-правами! \n " && exit 1

apt-get update && apt install -y -q wget curl tar tzdata

echo -e "${green}Запуск...${plain}"

tag_version=$(curl -Ls "https://api.github.com/repos/localzet/Triangle/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
if [[ ! -n "$tag_version" ]]; then
    echo -e "${red}Ошибка получения версии Triangle, возможно, это связано с ограничениями API Github, попробуйте позже${plain}"
    exit 1
fi
echo -e "Получена версия Triangle: ${tag_version}, запуск установки..."
wget -N --no-check-certificate -O ${cur_dir}/${tag_version}.tar.gz https://github.com/localzet/Triangle/archive/refs/tags/${tag_version}.tar.gz
if [[ $? -ne 0 ]]; then
    echo -e "${red}Ошибка загрузки Triangle, пожалуйста, убедитесь, что ваш сервер имеет доступ к Github ${plain}"
    exit 1
fi

tar zxvf ${tag_version}.tar.gz
rm ${tag_version}.tar.gz -f

echo -e "${green}Установка завершена...${plain}"
