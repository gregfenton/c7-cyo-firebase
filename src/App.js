import logo from './logo.svg';
import './App.css';
import RestOfApp from './components/RestOfApp';
import FirebaseProvider from './providers/FirebaseProvider';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <RestOfApp />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
