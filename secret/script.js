alert("Отгадай 3 загадки");
n = 0;
let question1 = "Висит груша нельзя скушать";
let answer1 = "лампа";
let answer2 = "лампочка";
let UserAnswer1 = prompt(question1).toLowerCase();
if (UserAnswer1 == answer1 || UserAnswer1 == answer2) {
    alert("Верно!");
    n++;
}
else {
    alert("Неверно!");
}

let result1 = confirm("Поотгадываем еще?")
if (result1 == true) {
    let question2 = "Рыжая плутовка, хитрая да ловкая, в сарай попала, кур пересчитала";
    let answer3 = "лиса";
    let answer4 = "лисичка";
    let UserAnswer2 = prompt(question2).toLowerCase();

    if (UserAnswer2 == answer3 || UserAnswer2 == answer4) {
        alert("Верно!");
        n++;
    }
    else {
        alert("Неверно!");
    }
    let result2 = confirm("Ну что, отгадаешь последнюю загадку?")
    if (result2 == true) {
        let question3 = "Сто одёжек и все без застежек.";
        let answer5 = "капуста";
        let UserAnswer3 = prompt(question3).toLowerCase();
        if (UserAnswer3 == answer5) {
            alert("Верно!");
            n++;
        }
        else {
            alert("Неверно!");
        }
        alert("Вы угадали:" + " " + n + " " + "из 3 " + "загадок.");
    } else { alert("Игра окончена") }

} else { alert("Пока!") }

