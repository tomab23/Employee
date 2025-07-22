import './App.css'
import { useEffect} from 'react';
import { themeChange } from 'theme-change';
import './i18n/i18n'
import Router from './routes/Router';
import InProgressPage from './pages/InProgressPage';

function App() {

  const inProgess = true

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    inProgess ? <InProgressPage /> : <Router />
  )
}

export default App
