
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from 'react'

function App() {

  const [count1,setcount1]=useState(0);
  const [count2,setcount2]=useState(0);
  const [result,setResult]=useState(false);
  const incre1=()=>{
    setcount1(count1+1);
  }

  const incre2=()=>{
    setcount2(count2+1);
  }

  const declare=()=>{
    setResult(!result)
  }
  return (
    <div className="back">
      <h1 className="heading">Welcome to CR Electing App</h1>
      <div className="innerContainer">
        <div className="container">
              <i className="bi bi-person-standing imgsize" ></i>
              <h1>Male</h1>
              <p className='head'>count: {count1}</p>
              {!result && (<button onClick={incre1} className="btn head">Vote</button>)}
        </div>
        <div className="container">
              <i class="bi bi-person-standing-dress imgsize"></i>
              <h1>Female</h1>
              <p className='head'>count: {count2}</p>
              {!result && (<button onClick={incre2} className="btn head">Vote</button>)}
        </div>
      </div>
      <div className='bottom-cont bottom'>
        <button onClick={declare} className="btn head">Declare Result</button>
      </div>
      <div className='bottom-cont bottom'>
      {result && (
        <h1>{count1 > count2 ? 'Boy is elected as CR' : 'Girl is elected as CR'}</h1>
      )}
      </div>
    </div>
  );
}

export default App;
