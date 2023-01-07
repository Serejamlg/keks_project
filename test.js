document.getElementById('main-form').addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();
const el = document.getElementById('main-form');    

let name = el.name.value;
let pass = el.pass.value;
let repass = el.repass.value;
let state = el.state.value;
    
let fail = "";

if(name == "" || pass == ""  || state == "") 
 fail = "Заполните все поля";

 else if (name.length <= 1 || name.length > 10)
 fail = "Введите корректное имя";

 else if(repass != pass) 
    fail = "Пароли не совпадают";

    document.getElementById('error').innerHTML = fail

    if( fail != "") { 
    } else {
        alert("Все данные введены корректно") 
        return true;
    }
    return false;
}