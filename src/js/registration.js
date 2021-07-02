const signUp = e => {
    let formData = {
        login: document.getElementById('login').value,
        password: document.getElementById('password').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    dispData();
    e.preventDefault();
}

function dispData() {

    let {login, password} = JSON.parse(localStorage.getItem('formData'))
    let output = document.getElementById('output')
    const regExp = /^[a-zа-яё|A-ZА-ЯЁ]+\s[a-zа-яё|A-ZА-ЯЁ]+$/
    if (regExp.test(login)) {
        let newLogin = login.split(" ")
        let name = newLogin[0]
        let surname = newLogin[1]
        output.innerHTML = `
        ${name.charAt(0).toUpperCase()+name.slice(1)} ${surname[0].toUpperCase()}.
    `
        popupClose.onclick()
        document.getElementById('myBtn').onclick = function () {
            dispData()
            change()
        }
    } else {
        alert('Введите имя и фамилию через пробел')

    }


}

function change() {
    let modalLoginButton = document.getElementById('modal-login-button')
    let loginButton = document.getElementById('myBtn')
    modalLoginButton.onclick = function () {
        loginButton.style.background = 'white'
        loginButton.style.color = 'red'
        loginButton.innerHTML = `
        Выйти
        `
    }
}

// dispData()






