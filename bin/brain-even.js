#!/usr/bin/env node

// что бы в вызову не было  node написано, что бы пользователь не знал на чем написана программа.

// в bin мы создаем вызов, в этой папке лежат файлы которые запускают нашу программу.
// Этот вайл вызова.

import game from '../src/brain-even.js'; // скобки добавить к путю, такой синтаксис у импорта.

game();
// вызов функции - нужен обязательно, что бы запустился импорт  и игра.