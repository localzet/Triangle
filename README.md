<p align="center"><a href="#"><img src="https://static.zorin.space/media/logos/ZorinProjectsSP.svg" alt="Image"></a></p>

# Triangle-Vue - Шаблон веб-приложения
[![](https://img.shields.io/github/v/release/localzet/Triangle.svg?label=%D0%92%D0%B5%D1%80%D1%81%D0%B8%D1%8F)](https://github.com/localzet/Triangle/releases)
[![](https://img.shields.io/badge/license-AGPL%20V3-blue.svg?longCache=true&label=%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F)](https://www.gnu.org/licenses/agpl-3.0.en.html)

## ▶️ Начало работы

### Системные требования

1. [Node.js LTS](https://nodejs.org/en/)
2. Навыки [Typescript](https://github.com/microsoft/typescript) _(не должен быть установлен глобально)_
3. Навыки [Tailwind CSS](https://tailwindcss.com/)
4. (Рекомендуется) [VSCode](https://code.visualstudio.com/) и [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Установка Node.js

1. Проверьте, установлен ли у вас уже Node.js. Запустите эту команду в терминале:

```bash
node -v
```

Если node ещё не установлен, вы можете скачать его с nodejs.org и выбрать версию в зависимости от вашей операционной системы:

- <a href="https://nodejs.org/en/download/" target="_blank">Установите Node.js и npm на Windows, Linux или Mac OSX</a>
- <a href="https://github.com/nvm-sh/nvm" target="_blank">Или установите Node Version Manager для быстрой установки и использования разных версий Node.js</a>

2. Включите pnpm с помощью corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Чтобы загрузить шаблон и начать установку зависимостей проекта, выполните:

Для Windows:
```powershell
Invoke-Expression ([System.Text.Encoding]::UTF8.GetString((New-Object System.Net.WebClient).DownloadData('https://raw.githubusercontent.com/localzet/Triangle/master/install.ps1')))
pnpm install
```

Для Linux:
```bash
bash <(curl -Ls https://raw.githubusercontent.com/localzet/Triangle/master/install.sh)
pnpm install
```

> **Примечание:** Это установит зависимости из всех пакетов, которые соответствуют `pnpm-workspace.yaml`. Если вам нужно очистить все `node_modules`, вы можете использовать команду `pnpm clear:all`.

## 🔃 Запуск сервера разработки

Чтобы запустить сервер разработки, выполните:

```bash
pnpm dev
```

Это запустит скрипт `dev` из файла `package.json`.

> Доступ к фронтенду в вашем браузере по адресу [http://localhost:3000/](http://localhost:3000/)
