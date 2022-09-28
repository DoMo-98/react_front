import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation("global");

  function changeLanguage(lan) {
    i18n.changeLanguage(lan)
    localStorage.setItem('lng', lan)
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => changeLanguage("en")} >EN</Button>
      <Button onClick={() => changeLanguage("es")} >ES</Button>
    </ButtonGroup>
  );
}
