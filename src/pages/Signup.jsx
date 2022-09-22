import { Input, Spacer } from "@nextui-org/react";
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import '../App.css'

export default function Signup() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function changeLanguage(lan) {
    i18n.changeLanguage(lan)
    localStorage.setItem('lng', lan)
  }

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("signup.title")}</h1>
      <div className="card">
        <div>
          <Input clearable placeholder={t("username")} onChange={e => setUsername(e.target.value)} value={username}/>
          <Spacer y={1}/>
          <Input clearable placeholder={t("email")} onChange={e => setEmail(e.target.value)} value={email}/>
          <Spacer y={1}/>
          <Input clearable placeholder={t("password")} onChange={e => setPassword(e.target.value)} value={password} type="password"/>
          <Spacer y={1}/>
          <button onClick={() => { navigate('/login', { state: username }) }}>{t("signup.signup")}</button>
        </div>

        <div>
          <Link to="/login">{t("login.login")}</Link>
        </div>
        
        {/* TODO: movilizar a todas las pantallas de alguna forma eficiente 
                  y hacer que se guarde en el local storage (para que al refrescar se mantenga el idioma seleccionado) */}
        <Button.Group ghost>
          <Button onClick={() => changeLanguage("en")}>EN</Button>
          <Button onClick={() => changeLanguage("es")}>ES</Button>
        </Button.Group>
      </div>
    </div>
  )
}