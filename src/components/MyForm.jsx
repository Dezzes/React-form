import React from 'react';
import MyInput from './UI/MyInput/MyInput';
import {cities} from "../cities"
import MySelect from './UI/MySelect/MySelect';
import './myForm.css'
import { useDispatch, useSelector } from 'react-redux';
import {setValuesAction} from "../redux/reducers/formValuesReducer"
import {setErrorsAction} from "../redux/reducers/formErrorsReducer"

const MyForm = () => {

    const dispatch = useDispatch()
    const formValues = useSelector(state => state.formValues)
    const formErrors = useSelector(state => state.formErrors)

    function cityFilter(cities) {
        let sortedCities = [];
        sortedCities = cities.filter(city => Number(city.population) > 50000).sort((a, b) => Number(b.population) - Number(a.population))
        const maxPopulationCity = sortedCities[0].population
        return sortedCities.sort((a, b) => {
        if(a.population === maxPopulationCity || b.population === maxPopulationCity) {
            return 1
        }else {
            return a.city.localeCompare(b.city)
        }
        })
    }

    function handleChange(e) {
        dispatch(setValuesAction({[e.target.name]: e.target.value}))
    }

    function handleSumbit(e) {
        e.preventDefault()
        for(const key in formErrors) {
            if(formErrors[key]){
                return
            }
        }
        getDateOfChanges()
        console.log(JSON.stringify(formValues))
    }

    function getDateOfChanges() {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
    }        

    
    function validateInfo() {

        //Password1
        if(!formValues.password1) {
            dispatch(setErrorsAction({"password1": "Укажите пароль"}))
        } else if(formValues.password1.length < 5) {
            dispatch(setErrorsAction({"password1": "Используйте не менее 5 символов"}))
        } else {
            dispatch(setErrorsAction({"password1": ""}))
        }
        //Password2
        if(!formValues.password2) {
            dispatch(setErrorsAction({"password2": "Укажите пароль"}))
        } else if(formValues.password2.length < 5) {
            dispatch(setErrorsAction({"password2": "Используйте не менее 5 символов"}))
        } else if(formValues.password1 !== formValues.password2) {
            dispatch(setErrorsAction({"password2": "Пароли не совпадают"}))
        } else {
            dispatch(setErrorsAction({"password2": ""}))
        }
        //E-mail
        if(!formValues.email) {
            dispatch(setErrorsAction({"email": "Укажите E-mail"}))
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            dispatch(setErrorsAction({"email": "Неверный E-mail"}))
        } else {
            dispatch(setErrorsAction({"email": ""}))
        }
    }

    
    return (
        <form onSubmit={handleSumbit} className="form">
            <h1 className="form__greeting"><span className="form__greeting_gray">Здравствуйте,</span> Человек №3596941</h1>
            <div className="status">
                <p className="status__change"><a href="#" >Сменить статус</a></p>
                <div className="status__triangle"></div>
                <p>Прежде чем действовать, надо понять</p>
            </div>
            <MySelect
                options={cityFilter(cities)}
                id={"city-id"}
                label={"Ваш город"}
                name="city"
                onChange={handleChange}
            />
            <hr/>
            <div className="form__inputs">
                <MyInput
                    type={"password"}
                    label={"Пароль"}
                    name={"password1"}
                    afterText={"Ваш новый пароль должен содержать не менее 5 символов."}
                    value={formValues.password1}
                    onChange={handleChange}
                    warning={formErrors.password1 && <p>{formErrors.password1}</p>}
                />
                <MyInput
                    type={"password"}
                    label={"Пароль еще раз"}
                    name={"password2"}
                    afterText={"Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."}
                    value={formValues.password2}
                    onChange={handleChange}
                    warning={formErrors.password2 && <p>{formErrors.password2}</p>}
                />
                <hr/>
                <MyInput
                    type={"text"}
                    label={"Электронная почта"}
                    name={"email"}
                    afterText={"Можно изменить адрес, указанный при регистрации."}
                    value={formValues.email}
                    onChange={handleChange}
                    warning={formErrors.email && <p>{formErrors.email}</p>}
                />
            </div>
            <div className="mailing-checkbox">
                <span style={{width:"25%"}}>Я согласен</span>
                <input type="checkbox" className="custom-checkbox" id="custom-checkbox"/>
                <label htmlFor="custom-checkbox">принимать актуальную информацию на емейл</label>
            </div>
            <div className="submit-btn-wrapper">
                <button type="submit" className="submit-btn" onClick={() => validateInfo()}>Изменить</button>
                <span>последние изменения 12 мая 2012 в 14:55:17</span> 
            </div>

        </form>
    );
}

export default MyForm;


