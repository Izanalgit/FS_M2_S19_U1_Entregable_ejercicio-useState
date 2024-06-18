import { useState } from 'react'
import './App.css'

//EJR
// function App() {
//     const [name,newName] = useState('Sofia');
//     const names = ["Data", "Reyes", "Yolanda"];
//     return (
//         <>
//             <h2>Teach Name {name}</h2>
//             <ul>
//                 {names.map(n=>
//                     <li>
//                         <button onClick={()=>newName(n)}>{n}</button>
//                     </li>
//                 )}
//             </ul>
//         </>
//     )
// }

//BONUS
function App() {
    const [name,setName] = useState('Sofia');
    const [newName,setNewName] = useState('');

    const names = ["Data", "Reyes", "Yolanda"];

    const changeName  = (event) =>{
        event.preventDefault(); //GLORIA A W3Schools !! (por ser valores de estados distintos no?)
        if(newName) setName(newName);
        setNewName('');
    }

    return (
        <>
        <h2>Teach Name {name}</h2>

        <ul>
            {names.map(n=>
                <li>
                    <button onClick={()=>{setName(n)}}>{n}</button>                     
                </li>
            )}
        </ul>

        <form onSubmit={changeName}>
            <input
                type="text" 
                value={newName}
                onChange={(elm) => setNewName(elm.target.value)}
                placeholder='add a name'
            />
            <button type='submit'>Add</button>
        </form>
        </>
    )
}

export default App
