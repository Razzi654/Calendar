var curDate = new Date(); // Получаем текущую дату
var curYear = curDate.getFullYear();
var curMonth = curDate.getMonth();
var curDay = curDate.getDate();
var temp = new Date(curYear, curMonth + 1, 0); // Устанавливаем значение следующего месяца дня = 0
var lastDay = temp.getDate(); // Т.е. он будет указывать на последний день предыдущего месяца

function createCalendar() { 
    var date = new Date(curYear, curMonth, 1);
    var startDay = date.getDay();

    var i = 1;
    while (date.getMonth() == curMonth) {
        var day = date.getDay() - 1;
        if (day < 0) { // Делаем воскресенье (0) последним днем
            day = 6;
        }
        
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");

            if (j < day) { // Пробелы для первого ряда
                td.innerHTML = "";
            }
            else {
                if (i == curDay) {
                    td.className = "curday";
                }
                td.innerHTML = date.getDate(); // Записываем значение getDate
                date.setDate(date.getDate() + 1);
            }
            tr.appendChild(td);
            i++
        }
        
        document.getElementById("tbl").appendChild(tr); // tr записываем как дочерний элемент таблицы
    }
    
}

createCalendar();