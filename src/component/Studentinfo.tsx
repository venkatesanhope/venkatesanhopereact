import { useCallback, useMemo, useState } from "react";
import ReactDOM from 'react-dom/client';
import './Studentinfo.css';
const Studentinfo = () => {
    var inputfirstname:any="";

    const [firstName, setFirstName] = useState("Raghava");
    const [lastName, setLastName] = useState("Lawrence rahman");
    const [studentID, setstudentID] = useState(321000001);
    const [standard, setstandard] = useState(4);
    const [section, setsection] = useState(4);
    const [roll, setroll] = useState(125);
    const [acadyear, setacadyear] = useState(2004);
    const [gender, setgender] = useState("Male");
    const [religion, setreligion] = useState("Hindu");
    const [blood, setblood] = useState("0+ve");
    const [otherinfo, setotherinfo] = useState("This is a simple profile page design containing different sections of the student profile. ");
    
    

    const listenForFirstNameChange = useCallback((e:any)=>{
          setFirstName(e.target.value);
    },[])

    const listenForSecondNameChange = useCallback((e:any)=>{
            setLastName(e.target.value);
    },[])

      const idChange = useCallback((e:any)=>{
        setstudentID(e.target.value);
    },[])

    const stdChange = useCallback((e:any)=>{
        setstandard(e.target.value);
    },[])

    const sectionChange = useCallback((e:any)=>{
        setsection(e.target.value);
    },[])

    const rollChange = useCallback((e:any)=>{
        setroll(e.target.value);
    },[])

     const acadyearChange = useCallback((e:any)=>{
        setacadyear(e.target.value);
    },[])

    const genderChange = useCallback((e:any)=>{
        setgender(e.target.value);
    },[])

    const religionChange = useCallback((e:any)=>{
        setreligion(e.target.value);
    },[])

    const bloodChange = useCallback((e:any)=>{
        setblood(e.target.value);
    },[])
    const otherinfoChange = useCallback((e:any)=>{
        setotherinfo(e.target.value);
    },[])
    

    return (
        <>
           
            <div className="grid-container">
                <div>
                    <table>
                    <h5 >Student Information</h5><br></br>
                        <tr>
                            <td>First Name</td>
                            <td><input type="text" name="First_Name"  value={firstName} onChange={listenForFirstNameChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td><input type="text" name="Last_Name" value={lastName} onChange={listenForSecondNameChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Student ID</td>
                            <td>
                                <input type="text" name="Student_ID" value={studentID} onChange={idChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>ClassName</td>
                            <td>
                                <input type="text" name="Class_Name" value={standard} onChange={stdChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Section</td>
                            <td>
                                <input type="text" name="Section" value={section} onChange={sectionChange}/>
                            </td>
                        </tr>
                        <hr></hr>
                        <tr>
                            <td>Roll</td>
                            <td>
                                <input type="text" name="Roll" value={roll} onChange={rollChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Academic Year</td>
                            <td>
                                <input type="text" name="Academic_Year" value={acadyear} onChange={acadyearChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>GENDER</td>
                            <td>
                            <select value={gender} onChange={genderChange}>
                                <option value="Male">MALE</option>
                                <option value="Female">FEMALE</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                        <td>Religion</td>
                            <td>
                                <select name="Religion" id="Religion" value={religion} onChange={religionChange}>
                                    <option value="Select">Select:</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                        <td>Blood Group</td>
                            <td>
                                <select name="Blood" id="blood" value={blood} onChange={bloodChange}>
                                    <option value="Select">Select:</option>
                                    <option value="o+ve">o+ve</option>
                                    <option value="B+ve">B+ve</option>
                                    <option value="B-ve">B-ve</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                        </tr>
                        <hr></hr>
                        <tr>
                            <td>Other Informations</td>
                            <td>
                                <textarea value={otherinfo} onChange={otherinfoChange}></textarea> 
                                
                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <div className="student-profile py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card shadow-sm">
                                        <div className="card-header bg-transparent text-center">
                                            <img className="profile_img" src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" alt="student dp"></img>
                                            <h3>{firstName+" "}{lastName}</h3>
                                        </div>
                                        <div className="card-body" >
                                            <p className="mb-0"><strong className="pr-1">Student ID:</strong>{studentID}</p>
                                            <p className="mb-0"><strong className="pr-1">Standard:</strong>{standard}</p>
                                            <p className="mb-0"><strong className="pr-1">Section:</strong>{section}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="card shadow-sm">
                                        <div className="card-header bg-transparent border-0">
                                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                        </div>
                                        <div className="card-body pt-0">
                                            <table className="table table-bordered">
                                                <tr>
                                                    <th >Roll</th>
                                                    <td width="2%">:</td>
                                                    <td>(roll)</td>
                                                </tr>
                                                <tr>
                                                    <th>Academic Year	</th>
                                                    <td width="2%">:</td>
                                                    <td>{acadyear}</td>
                                                </tr>
                                                <tr>
                                                    <th >Gender</th>
                                                    <td width="2%">:</td>
                                                    <td>{gender}</td>
                                                </tr>
                                               
                                                <tr>
                                                    <th >Religion</th>
                                                    <td width="2%">:</td>
                                                    <td>{religion}</td>
                                                </tr>
                                                <tr>
                                                    <th >blood</th>
                                                    <td width="2%">:</td>
                                                    <td>{blood}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="otherinfo" ></div>
                                    <div className="card shadow-sm">
                                        <div className="card-header bg-transparent border-0">
                                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                        </div>
                                        <div className="card-body pt-0">
                                            <p>{otherinfo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Studentinfo