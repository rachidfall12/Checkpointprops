import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Alert from 'react-bootstrap/Alert';
import PlayerList from '../src/components/PlayerList';


function App() {
  return (
  
  <div className="App">
    {['primary',].map((variant) => (
      <Alert style={{borderRadius: '30px' , color: 'black' , backgroundColor: '#0059ff'}}
       key={variant} variant={variant}>
        Liste de mes joueurs préférés
      </Alert>
    ))}
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;