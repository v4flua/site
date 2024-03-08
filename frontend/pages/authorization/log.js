import { postAuthUser } from "../../fetch/postAuthUser.js";


const login = document.querySelector('.login1')
const password = document.querySelector('.password1')

const buttonAuth = document.querySelector('.btn-auth')

buttonAuth.addEventListener('click', async (e) => {
    e.preventDefault();
    let authUser = {
        login: login.value,
        password: password.value
    }
    
    console.log(authUser);
    
    if(login.value == '' || password.value == ''){
        alert('Заполните все поля')
    }
    else {
        alert("Вы успешно вошли")
        let userr = await postAuthUser(authUser);
        console.log(userr);
        localStorage.setItem('fio', JSON.stringify(userr))
        window.location.href="../lk/lk.html"
    }
})
