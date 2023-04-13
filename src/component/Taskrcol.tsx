import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useCallback, useMemo } from "react";


const Taskrcol = () => {

    var getrownum: any = 0;
    var getcolnum: any = 0;
    var tables:any="";
    var myarray:any =0;
    const [rownumber, rowfunc] = useState(0)
    const [colnumber, colfunc] = useState(0)


    const incrementRow = useCallback(() => {
       
        colfunc(0);
        rowfunc(rownumber + 1);
        getrownum = { rownumber };
    }, [rownumber]);


    const incrementCol = useCallback(() => {
       
        colfunc(colnumber + 1);
        getcolnum = { colnumber };
        createtable(rownumber,colnumber);
    }, [colnumber]);



        function createtable(firchar:any,lastchar:any){
           

        tables = document.getElementById('myTable');
        tables.innerHTML = "";
            //alert(firchar+"_"+lastchar);
        for (var i = 0; i < firchar; i++) {
             //myarray[i].push(firchar);
          
             var tr = document.createElement("tr");
                tr.id = 'row_'+myarray;
                tables.appendChild(tr);
            for (var j = 0; j < lastchar; j++) {
                //myarray[firchar][j]=lastchar;
                
                var td = document.createElement("td");
                td.innerHTML = "Hello";
                tr.appendChild(td);
            }
             
        }
    }

    return (
        <>
            <h1>Task Row and Column</h1>
            <br></br>
            <button onClick={incrementRow}>Increment Row</button>
            <button onClick={incrementCol}>Increment Col</button>
            
            <br></br>
            <span>Row {rownumber} Col {colnumber}</span>
            <br></br>
           
            <table id="myTable">
           
            </table>
        </>
    )
}
//<button onClick={() => createtable({rownumber},{colnumber})}>createtable</button>
export default Taskrcol