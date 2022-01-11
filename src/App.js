import SignUp from './components/SignUp'; 
import './App.css';

// function App () { .. }
const App = () => {
  // const onLogin= (data) => {
  //   // submit Handler
  // }
  return (
    <div className='App'>
      <SignUp /* onLogin={onLogin}*/  />
    </div>
  );
}

export default App;
