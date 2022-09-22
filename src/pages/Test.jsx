import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import '../App.css'
import { useState, useEffect } from 'react';
 
export default () => {
  const [t, i18n] = useTranslation("global");
  const [test, setTest] = useState('')

  const location = useLocation()
  const { username, password } = location.state ?? {}

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => setTest(data));

    // // Simple POST request with a JSON body using fetch
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch('https://www.boredapi.com/api/activity', requestOptions)
    //     .then(response => response.json())
    //     .then(data => setTest(data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <div>
        <h1>{t("welcome")} {username}</h1>
      </div>
      <div>
        <p>{test.activity}</p>
      </div>
    </div>
  );
}