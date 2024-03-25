import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import Navbar from './Navbar';
import './Home.css';

function App() {
  const { t, i18n } = useTranslation(['home']);

  return (
    <>
      <Navbar/>
      <div id='content'>
        <h1 className='programmer-name'>
          Christopher Robidas
        </h1>
        <h2>
          Game Programmer
        </h2>
      </div>
      <Footer/>
    </>
  )
}

export default App;