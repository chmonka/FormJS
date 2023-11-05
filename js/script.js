function checkForm(el) {
    var name = el.name.value
    var pass = el.pass.value
    var repass = el.repass.value
    var state = el.state.value

    var fail = ""
    if (name == "" || pass == "" || state == "") {
        fail = "Заполните все поля"
    }
    else if (name.length <= 1 || name.length > 50) {
        fail = "Введите короткое имя"
    }
    else if (pass != repass) {
        fail = "Пароли должны совпадать"
    }
    else if (pass.split("&").length > 1) {
        fail = "Некоректный пароль"
    }
    if (fail != "") {
        document.getElementById("error").innerHTML = fail

    } else {
        alert("Все данные заполнены коректно")
        return false
    }

}
