import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button, TextField, Link, Grid } from '@mui/material';

import reactLogo from '../assets/react.svg'
import '../App.css'
import { Language, TextFieldPassword } from '../components';

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  const [username, setUsername] = useState(useLocation().state ?? '')
  const [password, setPassword] = useState('')

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
      <h1>{t("login.title")}</h1>
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
            <TextFieldPassword label={t("password.password")} /> {/* TODO: ??? setPassword={setPassword} */}
          </Grid>

          <Grid item>
            <Button 
              variant="outlined" 
              onClick={() => { navigate('/test', { state: { username/* TODO: ??? , password */ } }) }}
              // href="#" // TODO: This is rerendering the page, but it should not
            >{t("login.login")}</Button>
          </Grid>

          <Grid item>
            {/* TODO: I'm not sure if this is the best way to do it */}
            {/*       href="#" is rerendering the page, but maybe it should not */}
            <Link onClick={() => navigate("/signup")} href="#">{t("signup.signup")}</Link>
          </Grid>

          <Grid item>
            <Language />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}