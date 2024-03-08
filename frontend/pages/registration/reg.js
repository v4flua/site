import { postNewUser } from "../../fetch/postNewUser.js"


const fio = document.querySelector('.fio')
const telephone = document.querySelector('.telephone')
const email = document.querySelector('.email')
const login = document.querySelector('.login')
const password = document.querySelector('.password')

const buttonReg = document.querySelector('.btn-reg')

buttonReg.addEventListener('click', async (e) => {
    e.preventDefault();
    let newUser = {
        fio: fio.value,
        telephone: telephone.value,
        email: email.value,
        login: login.value,
        password: password.value,
    }
    console.log(newUser);

    if(fio.value == "" || telephone.value == "" || email.value == "" || login.value == "" || password.value == ""){
        alert('Заполните все поля')
    }
    else {
        const response = await postNewUser(newUser)
        const responseData = await response.json()
        console.log(responseData);
        console.log(response.status);

        if(response.status === 400){
            alert(responseData)
            alert('Измение данные при регистрации')
        }
        else {
            alert("Регистрация прошла успешно")
            window.location.href="../authorization/log.html";
        }
    }
});