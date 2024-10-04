import { useEffect, useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";


import './App.css'


function App() {
  const [tableData, setTableData] = useState(() => {
    const storedData = localStorage.getItem('tableData');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);




  const handleAddData = () => {
    const newData = [];
    for (let i = 1; i <= 9; i++) {
      const textareaId = `textarea${i}`;
      const textareaValue = document.getElementById(textareaId)?.value;
      const textareaname= document.getElementById(textareaId)?.name;
      if (textareaValue && textareaname) {
        newData.push(textareaname,textareaValue);
      }else{
        continue;
      }
    }
    setTableData([...tableData, newData]);
  };
  return (
    <>

    <div className="heading">
      <center style={{fontWeight:'bold',fontSize:'30px',color:'white'}}>Daily Goals</center>
    </div>
      <div className="main">
        <table border={5} cellPadding={20} cellSpacing={20} bgcolor='#141212' >
          <thead bgcolor='#666'>
            <tr>
        <th><BsFillSunriseFill color='#f76319' size='50px' /></th>
        <th><FaBottleWater color='#6394f7' size='50px'/></th>
        <th><FaRunning color='#520109' size='50px'/></th>
        <th><GiBiceps color='#965c21' size='50px'/></th>
        <th><FaDumbbell color='#4f0701' size='50px'/></th>
        <th><GiMeditation color='#54a876' size='50px'/></th>
        <th><FaBookOpen color='white' size='50px'/></th>
        <th><FaMobile color='#333' size='50px'/></th>
        <th><FaShower color='#0218bf' size='50px'/></th>
        </tr>
        </thead>
        <tbody >
         <tr>
            <td><div className="form"><textarea placeholder='status' name='Early Morning ' id="textarea1" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Drink Water ' id="textarea2" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Running ' id="textarea3" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Push-Ups ' id="textarea4" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Exercise ' id="textarea5" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Meditation ' id="textarea6" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='2pg Reading ' id="textarea7" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Social Media ' id="textarea8" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
            <td><div className="form"><textarea placeholder='status' name='Shower ' id="textarea9" cols="7" style={{alignContent:'center',background:'#edd491',color:'black',textAlign:'center'}}></textarea></div></td>
         </tr>
        </tbody>
        </table>
      
      </div>
      <button onClick={handleAddData} style={{color:'black',background:'lightgreen',minWidth:'100px',padding:'10px',borderRadius:'10px',cursor:'pointer',margin:'10px'}}>Add Data</button>
      <button onClick={() => setTableData([])} style={{color:'black',background:'lightgreen',minWidth:'100px',padding:'10px',borderRadius:'10px',cursor:'pointer',margin:'10px'}}>Clear Data</button>

      {tableData.map((row, index) => (
            <div style={{background:'#141212',padding:'10px',borderRadius:'10px',margin:'10px',width:'100'}} key={index}>
              
              {row.map((cell, cellIndex) => (
                <label style={{color:'green',fontSize:'20px',fontWeight:'bold',padding:'10px'}} cellPadding={20} cellSpacing={20} key={cellIndex}>{cell}</label>
              ))}
          <label colSpan={9}>Day {index+1}</label>
         </div>
          ))}
    </>
  )
}

export default App


 {/* <tr>
            <td ><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
          <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
            <td><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>

          </tr>
          <tr>
            
          </tr> */}