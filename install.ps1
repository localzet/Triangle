# Цвета для логирования
$red = [char]27 + "[0;31m"
$green = [char]27 + "[0;32m"
$yellow = [char]27 + "[0;33m"
$plain = [char]27 + "[0m"

function LOGE {
    param ([string]$message)
    Write-Host "$red$message$plain"
}

function LOGI {
    param ([string]$message)
    Write-Host "$green$message$plain"
}

$cur_dir = Get-Location
LOGI "Запуск..."

$tag_version = Invoke-RestMethod -Uri "https://api.github.com/repos/localzet/Triangle/releases/latest" | Select-Object -ExpandProperty tag_name

if (-Not $tag_version) {
    LOGE "Ошибка получения версии Triangle, возможно, это связано с ограничениями API Github, попробуйте позже"
    exit 1
}

Write-Host "Получена версия Triangle: $tag_version, загрузка..."
Invoke-WebRequest -Uri "https://github.com/localzet/Triangle/archive/refs/tags/$tag_version.tar.gz" -OutFile "$cur_dir\$tag_version.tar.gz" -UseBasicParsing

if ($LASTEXITCODE -ne 0) {
    LOGE "Ошибка загрузки Triangle, пожалуйста, убедитесь, что ваш сервер имеет доступ к Github"
    exit 1
}

tar -zxvf "$cur_dir\$tag_version.tar.gz"
Remove-Item "$cur_dir\$tag_version.tar.gz" -Force

$dir_name = "Triangle-$($tag_version.Substring(1))"
Get-ChildItem "$cur_dir\$dir_name\*" -Recurse | Move-Item -Destination $cur_dir
Remove-Item "$cur_dir\$dir_name" -Recurse

pnpm install

LOGI "Загрузка завершена..."
