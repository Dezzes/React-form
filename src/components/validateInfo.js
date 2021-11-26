import { useSelector } from "react-redux"


export default function validateInfo() {
    const form = useSelector(state => state.form)
    let errors = {}

    //Password1
    if(!form.password1) {
        errors.password1 = "Укажите пароль"
    } else if(form.password1.length < 5) {
        errors.password1 = "Используйте не менее 5 символов"
    }
    //Password2
    if(!form.password2) {
        errors.password2 = "Укажите пароль"
    } else if(form.password2.length < 5) {
        errors.password2 = "Используйте не менее 5 символов"
    } else if(form.password1 !== form.password2) {
        errors.password2 = "Пароли не совпадают"
    }
    //E-mail
    if(!form.email) {
        errors.mail = "Укажите E-mail"
    } else if (!/\S+@\S+\.\S+/.test(errors.email)) {
        errors.email = 'Неверный E-mail';
  }
  return errors
}