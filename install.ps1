# Установка кодировки консоли
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

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

LOGI "Получена версия Triangle: $tag_version, загрузка..."

$url = "https://github.com/localzet/Triangle/archive/refs/tags/$tag_version.tar.gz"
$output = "$cur_dir\$tag_version.tar.gz"

try {
    $webClient = New-Object System.Net.WebClient
    $webClient.Encoding = [System.Text.Encoding]::UTF8
    $webClient.DownloadFile($url, $output)
    LOGI "Файл успешно загружен в $output"
} catch {
    LOGE "Ошибка загрузки файла: $($_.Exception.Message)"
    exit 1
}

tar -zxvf "$output"
Remove-Item "$output" -Force

$dir_name = "Triangle-$($tag_version.Substring(1))"
Get-ChildItem "$cur_dir\$dir_name\*" -Recurse | ForEach-Object {
    $dest = Join-Path -Path $cur_dir -ChildPath $_.Name
    if (Test-Path $dest) {
        Remove-Item -Path $dest -Force
    }
    Move-Item -Path $_.FullName -Destination $cur_dir
}
Remove-Item "$cur_dir\$dir_name" -Recurse

pnpm install

LOGI "Загрузка завершена..."
