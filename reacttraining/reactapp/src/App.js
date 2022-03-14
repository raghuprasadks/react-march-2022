import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './components/Header';
//import {ClassComponent} from './components/ClassComponent'
import ClassComponent from './components/ClassComponent';
import { ClassComponentState } from './components/ClassComponentState';
import { DemoForm } from './components/DemoForm';
import { SimpleInterest } from './components/SimpleInterest';
import GroceryList from './components/GroceryList';
import { CoronaComponent } from './components/CoronaComponent'; 
import TodoApp from './sandbox/TodoApp';
import Jsonservergetapi from './sandbox/JsonServerGetApi';
import Jsonserverpostapi from './sandbox/JsonServerPostApi';
import { FetchApiDemo } from './sandbox/FetchApiDemo';

function App() {
  const emp={
    id:1,
    name:"ravi",
    course:"React",
    duration:"7 days"
  }

  var CoronaData=[
    {state:"karnatka",
     total:10000,
     active:1000,
     recovered:800,
     death:100
    },

    {state:"kerala",
     total:20000,
     active:2000,
     recovered:700,
     death:200
    },
    {state:"TamilNadu",
     total:30000,
     active:3000,
     recovered:500,
     death:400
    },
    {state:"Andhra Pradesh",
     total:40000,
     active:4000,
     recovered:600,
     death:200
    },
    {state:"Madhya Pradesh",
     total:50000,
     active:5000,
     recovered:700,
     death:1500
    }
    

  ]

  return (
    <div className="App">
      <h1>Welcome to React</h1>
       {/* <Header/>
        <Content></Content>
        <ClassComponent course={emp}/>
        <ClassComponentState></ClassComponentState>
        <DemoForm/>
        <SimpleInterest></SimpleInterest>
        <GroceryList></GroceryList>
        <CoronaComponent Coronalist={CoronaData}></CoronaComponent>
      <Footer/>
      <Jsonservergetapi></Jsonservergetapi>
        <Jsonserverpostapi></Jsonserverpostapi>
        <TodoApp></TodoApp>
  */}
        
        <FetchApiDemo></FetchApiDemo>
        
    </div>
  );
}

export default App;
