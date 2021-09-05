import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { History } from './components/History';
import { PlusMinus } from './components/PlusMinus';
import { AddNew } from './components/AddNew';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <PlusMinus />
        <History />
        <AddNew />
      </div>
    </GlobalProvider>
  );
}

export default App;
