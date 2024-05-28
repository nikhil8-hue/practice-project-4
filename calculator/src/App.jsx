
import { useState } from "react";
import styles from "./App.module.css"
import ButtonContanier from "./componets/ButtonContanier";
import Display from "./componets/Display";

function App() {
    
  let [calVal,setcalVal] = useState("");
  const onButtonClick = (buttonText) =>{ 
    
    if( buttonText==='c'){
      
      setcalVal("");
    }
    else if( buttonText==='='){
       const result= eval(calVal)
       setcalVal(result)
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);

    }
      
    
  }

  return(
   <div className={styles.calculator} >
     <Display displayValue={calVal}></Display>
     <ButtonContanier onButtonClick={onButtonClick}></ButtonContanier>
  </div>
  ); 
     

  
}

export default App
