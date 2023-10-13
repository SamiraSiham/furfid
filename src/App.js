import './App.css';
import Landing from './components/landing page/Landing';
import { Route, BrowserRouter } from "react-router-dom";
import Auth from './components/Auth';
import DevisForm from './components/Devis/DevisForm';
import InfosChat from './components/Animals/InfosChat';
import InfosChien from './components/Animals/InfosChien';
import InfosNac from './components/Animals/InfosNac';
import AntecedantesMedicales from './components/AntecedantesMedicales';
import Select from './components/Select';
import Partenariat from './components/Partenariat/Partenariat';
function App() {
  return (
    <div>
      <div className='app'>
        <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/devis' component={DevisForm} />
        <Route exact path='/infos-chat' component={InfosChat} />
        <Route exact path='/infos-chien' component={InfosChien} />
        <Route exact path='/infos-nac' component={InfosNac} />
        <Route exact path='/antecedants' component={AntecedantesMedicales} />
        <Route exact path='/choose-animal' component={Select} />
        <Route exact path='/partners' component={Partenariat} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
