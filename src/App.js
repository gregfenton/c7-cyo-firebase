import logo from './logo.svg';
import './App.css';
import RestOfApp from './components/RestOfApp';
import FirebaseProvider from './providers/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <RestOfApp />
    </FirebaseProvider>
  );
}

export default App;
