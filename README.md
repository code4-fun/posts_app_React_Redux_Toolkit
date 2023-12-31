**[Demo](http://84.38.180.229:92)**

## Используемые технологии

- React

- Redux toolkit

## Задача

Реализовать spa в соответствии с предложенным макетом, в котором будет представлена таблица с данными пользователей и возможностью сортировки и поиска.

### Общие требования 

  1. Приложение должно работать в chrome и firefox. 
  2. Разрешается использовать UI фреймворки по типу bootstrap.
  3. Код должен быть чистым и читабельным. 
  4. Не должно быть необоснованного дублирования, всё должно распределяться по компонентам.
  5. Код должен быть отформатирован в едином стиле. 
  6. Вёрстка должна совпадать с макетами figma.
  7. Приложение должно быть написано на react.
  8. Плюсом будет использование глобального state менеджера redux.
  9. Приложение должно быть адаптировано под различные устройства.

### Описание API

[Список данных](https://jsonplaceholder.typicode.com/posts) 

### Описание приложения
  1. При входе на страницу отображается таблица с данными.
  2. На одной странице таблицы показывается только 10 записей.
  3. Под таблицей располагаются элементы, показывающие количество страниц таблицы.
  4. Кнопки “Назад” и “Далее” переключают страницы таблицы.
  5. Переключение между страницами происходит без перезагрузки. 
  6. При нажатии на заголовки столбцов происходит сортировка записей (от большего к меньшему или по алфавиту).
  7. В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует. Поиск по всем столбцам.
  8. Страница таблицы должна отображаться в URL браузера.

[Макет Figma](https://www.figma.com/file/amcWeZhjaZ0eSyYiSNG6vN/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B?node-id=0%3A1) 
