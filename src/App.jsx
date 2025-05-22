import './App.css'
import { useEffect} from 'react';
import { themeChange } from 'theme-change';
import './i18n/i18n'
import Router from './routes/Router';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Router />
  )
}

export default App
