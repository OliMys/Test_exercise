№1 и №2 - файлы: table.html, table_style.css, script.js

На HTML
Нарисовать таблицу 3*4. Одна ячейка красный фон, одна синий шрифт курсивом
На JavaScript
Добавить к таблице форму с кнопкой. Перед нажатием на кнопку пользователь выбирает любой цвет и номер одной ячейки из таблицы, по умолчанию это ячейка один и красный цвет.
Выбранная ячейка закрашивается в белый цвет, остальные в цвет, который выбрал пользователь.
Таблица перекрашивается каждый раз, при выборе новой ячейки, цвета, и нажатия на кнопку.

№3 Файл - request_sql.sql
Есть таблица сотрудников col. В ней поля id, fullname, subdivision_name, birth_date. Вторая таблица learning. В ней поля id, col_id, course_name, score. Нужно написать select запрос,
который выведет всех сотрудников подразделения "бухгалтерия", которые прошли курс "excel" с баллом выше 80. И по ним вывести фио, дату рождения и балл.

№4
Создание на WebTutor страницы (Шаблон документа), выводящую таблицу со списком сотрудников. В таблице должны быть следующие поля:
1. ФИО
2. Дата рождения
3. Адрес электронной почты
4. Логин
5. Наименование организации, к которой прикреплен сотрудник
6. Наименование региона, к которому принадлежит организация

Инструкция по реализации:
1-ая версия: 1. Заходим на WebTutor Administrator -> Дизайнер -> Шаблоны документов
             2. Создаем новую запись, где произвольно указываем название, код. Тип результата - "произвольный"
             3. На вкладке "код" вставляем код из файла Collaborators_table.txt
             4. В браузере вводим ссылку для просмотра шаблона http://localhost/view_doc.html?mode=doc_type&object_id=#id Где #id - ID документа, копируем из созданного шаблона в WebTutor
       
2-ая версия (с использованием XAML). Последовательность действий та же, но в тип результата обязательно указываем XAML. Во вкладке "код" вставляем код из файла Collaborators_table_XAML.txt 
