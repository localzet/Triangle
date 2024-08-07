# Localzet Nuxt - Многоцелевой шаблон администратора и веб-приложения Tailwind

## ▶️ Начало работы

### Системные требования

1. Современный браузер (Chrome, Edge, Firefox, ...)
2. Установленный [Node.js LTS](https://nodejs.org/en/) _(> 18 и pnpm > 8)_
3. Навыки [Typescript](https://github.com/microsoft/typescript) _(не должен быть установлен глобально)_
4. Навыки [Tailwind CSS](https://tailwindcss.com/)
5. (Рекомендуется) [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Установка Node.js

1. Проверьте, установлен ли у вас уже Node.js. Запустите эту команду в терминале:

```bash
node -v
```

Если node не установлен на вашем компьютере, вы можете перейти на официальный сайт nodejs.org и выбрать версию в зависимости от вашей операционной системы:

- <a href="https://nodejs.org/en/download/" target="_blank">Установите Node.js и npm на Windows, Linux или Mac OSX</a>
- <a href="https://github.com/nvm-sh/nvm" target="_blank">Или установите Node Version Manager для быстрой установки и использования разных версий Node.js</a>

2. Включите pnpm с помощью corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack устанавливается с node начиная с **v16.13.x**, если ваша версия ниже, установите его с помощью: `npm install -g corepack`_

Чтобы настроить шаблон и начать установку зависимостей проекта, выполните:

```bash
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
