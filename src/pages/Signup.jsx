import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import '../App.css'
import Language from "../components/Language";
import { Button, Grid, Link, TextField } from "@mui/material";
import TextFieldPassword from "../components/TextFieldPassword";

export default function Signup() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

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
        <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="stretch">
          <Grid item>
            <TextField 
              fullWidth 
              label={t("username")} 
              onChange={e => setUsername(e.target.value)} 
              value={username} 
            />
          </Grid>
          <Grid item>
            <TextField 
              fullWidth 
              label={t("email")} 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
            />
          </Grid>
          
          <Grid item>
            <TextFieldPassword label={t("password.password")} /> {/* TODO: ??? setPassword={setPassword} */}
          </Grid>
          
          <Grid item>
            <TextFieldPassword label={t("password.confirm")} /> {/*TODO: ??? setPassword={setConfirmPassword} */}
          </Grid>

          <Grid item>
            <Button 
              variant="outlined" 
              onClick={() => { navigate('/login', { state: username }) }}
              // href="#" // TODO: This is rerendering the page, but it should not
            >{t("signup.signup")}</Button>
          </Grid>

          <Grid item>
            {/* TODO: I'm not sure if this is the best way to do it */}
            {/*       href="#" is rerendering the page, but maybe it should not */}
            <Link onClick={() => navigate("/login")} href="#">{t("login.login")}</Link>
          </Grid>

          <Grid item>
            {/* TODO: movilizar a todas las pantallas de alguna forma eficiente*/}
            <Language />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}