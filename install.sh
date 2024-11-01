#!/bin/bash

red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'

function LOGE() {
    echo -e "${red}$*${plain}"
}

function LOGI() {
    echo -e "${green}$*${plain}"
}

cur_dir=$(pwd)
LOGI "Запуск..."

tag_version=$(curl -Ls "https://api.github.com/repos/localzet/Triangle/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

if [[ ! -n "$tag_version" ]]; then
    LOGE "Ошибка получения версии Triangle, возможно, это связано с ограничениями API Github, попробуйте позже"
    exit 1
fi

echo -e "Получена версия Triangle: ${tag_version}, загрузка..."
wget -N --no-check-certificate -O ${cur_dir}/${tag_version}.tar.gz https://github.com/localzet/Triangle/archive/refs/tags/${tag_version}.tar.gz

if [[ $? -ne 0 ]]; then
    LOGE "Ошибка загрузки Triangle, пожалуйста, убедитесь, что ваш сервер имеет доступ к Github"
    exit 1
fi

tar zxvf ${tag_version}.tar.gz
rm ${tag_version}.tar.gz -f

dir_name="Triangle-${tag_version#v}"
mv ${cur_dir}/${dir_name}/* ${cur_dir}/
rmdir ${cur_dir}/${dir_name}

LOGI "Загрузка завершена..."
