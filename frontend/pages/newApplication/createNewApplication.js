import { postNewApplication } from "../../fetch/postNewApplication.js";


const car_number = document.querySelector('.car-number')
const description = document.querySelector('.description')

const buttonSend = document.querySelector('.btn-send')

buttonSend.addEventListener('click', async (e) => {
    e.preventDefault();
    let newApplication = {
        car_number: car_number.value,
        description: description.value
    }
    console.log(newApplication);
    postNewApplication(newApplication);

    if(car_number.value == '' || description.value == ''){
        alert("Заполните все поля")
    }
    else{
        alert('Заявка успешно отправлена')
    }
})