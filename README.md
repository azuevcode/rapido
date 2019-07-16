## Задача

Реализовать логику игры "Рапидо"

## Правила игры

У игры есть 2 поля: в первом поле 19 клеток, во втором 2 клетки. От участника лотереи требуется отметить в первом поле 8 цифр, во втором 1 цифру.

Нужно также сравнить отмеченные пользователем числа с двумя случайно сгенерированными, в соответствиями с правилами игры, массивами чисел (8 чисел в первом массиве, 1 число во втором). 

В случае совпадения 4-х чисел в первом поле или 3-х чисел и более в первом поле и 1-го числа втором, пользователь считается победителем лотереи и получает причитающиеся ему лавры (ничего не получает).

## Реализовано

1) Интерфейс и логика игры

2) Дополнительные задания:
  2.1) Адаптивная mobile-first вёрстка
  2.2) Генерация случайно выбранных полей в билете по правилам лотереи. Все это происходит после нажатия на значок волшебной палочки.
  2.3) Логика отправки выбранных чисел на сервер по любому URL. Предлагается использовать фейковый URL /finch-test, чтобы не иметь дела с CORS. Отправка должна  происходить после нажатия на кнопку «Показать результат». В данных отправки должен быть следующий объект:
  
    {
      selectedNumber:
        { firstField: [ *first field numbers* ], secondField: [ *second field numbers* ] },
        isTicketWon: *Boolean(true||false)*
      }
    }
  
  Нужно предусмотреть ситуацию, что в ответ придет код-ответ не «200 OK», а любой другой. В таком случае требуется отправлять запрос еще два раза с интервалом 2 секунды. Если ответ «200 OK» так и не пришел, то нужно показать какое-либо уведомление об ошибке.

