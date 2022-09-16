import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Changecolor from './Examples/Changecolor';
import BasicUI from './Homework/BasicUI/BasicUI';
import ChartBar from './Homework/BasicUI/ChartBar/ChartBar';
import ChartBar2 from './Homework/BasicUI/ChartBar/ChartBar2';

function App() {
  return (
    //<Header nameProps = {'Thông tin'}/>,
    //<Changecolor/>,
    //<BasicUI/>,
    <div>
    <ChartBar text= "BANWIDTH" color1="#E54D4C" color2="#F85352" percentage={20}/>,
    <ChartBar text= "STORAGE" color1="#2FB7CE" color2="#31C8DD" percentage={50}/>,
    <ChartBar text= "USERS" color1="#4AC25E" color2="#51D567" percentage={70}/>,
    <ChartBar text= "VISITORS" color1="#E9C318" color2="#FCD518" percentage={30}/>,
    <ChartBar text= "EMAILS" color1="#BB70D5" color2="#CB79E7" percentage={45}/>,
    <ChartBar text= "BASIC" color1="#EB59D6" color2="#FE60E8" percentage={80}/>,
    <ChartBar text= "OTHERS" color1="#5890DA" color2="#619CEC" percentage={37}/>,
    <hr></hr>
    <ChartBar2 text= "HTML" icon="logo-html5" color="#4DD364" percentage={70}/>,
    <ChartBar2 text= "CSS" icon="logo-apple" color="#F85050" percentage={50}/>,
    <ChartBar2 text= "PHP" icon="logo-dropbox" color="#2FCCDF" percentage={30}/>,
    <ChartBar2 text= "JAVA" icon="logo-electron" color="#FCD518" percentage={80}/>,
    <ChartBar2 text= ".NET" icon="logo-octocat" color="#CB79E5" percentage={40}/>,
    </div>
 
  );
}

export default App;
