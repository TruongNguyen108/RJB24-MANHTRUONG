import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Changecolor from './Examples/Changecolor';
import BasicUI from './Homework/BasicUI/BasicUI';

function App() {
  return (
    <Header nameProps = {'Thông tin'}/>,
    <Changecolor/>,
    <BasicUI/>
  );
}

export default App;
