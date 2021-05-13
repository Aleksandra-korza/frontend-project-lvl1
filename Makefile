install: #Эта команда полезна при первом клонировании репозитория
	npm ci

brain-games: #Набирать эту команду руками довольно долго, а make brain-games быстро и просто.
	bin/brain-games.js

brain-even: #запускает игру brain-even.
	bin/brain-even.js

brain-calc: #запускается игра brain-calc
	bin/brain-calc.js

publish: #Для отладки публикации не нужно добавлять пакет в основной каталог NPM. На протяжении всего проекта используйте аргумент --dry-run
	npm publish --dry-run

lint: #проверка кода по стандарту Airbnb
	npx eslint .

.PHONY: test
