import { useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { ImCross } from "react-icons/im";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <table border={5} cellPadding={20} cellSpacing={20} bgcolor='#141212' >
          <thead bgcolor='#777'>
            <tr>
        <th><BsFillSunriseFill color='#f76319' size='50px'/></th>
        <th><FaBottleWater color='#6394f7' size='50px'/></th>
        <th><FaRunning color='#520109' size='50px'/></th>
        <th><GiBiceps color='#965c21' size='50px'/></th>
        <th><FaDumbbell color='#4f0701' size='50px'/></th>
        <th><GiMeditation color='#54a876' size='50px'/></th>
        <th><FaBookOpen color='white' size='50px'/></th>
        <th><FaMobile color='#59555c' size='50px'/></th>
        <th><FaShower color='#0218bf' size='50px'/></th>
        </tr>
        </thead>
        <tbody >
          <tr>
            <td align='center'><div className="donebtn"><button className='done' color='#999'><MdDone color='white' size={25} /></button></div> <div className="failbtn"><button className='failed'><ImCross size={25}/></button></div></td>
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
        </tbody>
        </table>
      
      </div>
    </>
  )
}

export default App
