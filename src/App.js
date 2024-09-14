import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <BrowserRouter>
          <Routes> {/* Replace Switch with Routes */}
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
