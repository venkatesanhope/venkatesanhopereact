import ReactDOM from 'react-dom/client';
import { useState,useCallback,useMemo } from "react";
import './Tasktwo.css';

const Tasktwo = () =>
{

    const divStyle = {
        width: "15px",
        height: "15px",
        background: "red"
      };


 const starString:any = [];
 const [rownumber,rowfunc] = useState(0)
 const [colnumber,colfunc] = useState(0)   

const incrementRow= useCallback(() => {
    colfunc(0);
    rowfunc(rownumber + 1);
  }, [rownumber]);

  const incrementCol= useCallback(() => {
   
   colfunc(colnumber + 1);
    
  }, [colnumber]);



  const stars = useMemo(() => {
   
    for (let index = 0; index < rownumber; index++) {

        starString.push()

      for (let index = 0; index < colnumber; index++) {
        
        starString.push("*")
      }
     
      starString.push(<br></br>)
    }
    return starString;
  }, [rownumber,colnumber]);


  
return(
    <>
    <hr></hr>
    <h1> Task Two</h1>
   
    {rownumber}
    {colnumber}
  
    <button onClick={incrementRow}>Increment Row</button>
    <button onClick={incrementCol}>Increment Col</button>
   <br></br>
    {stars}
   
    </>
)

}

export default Tasktwo