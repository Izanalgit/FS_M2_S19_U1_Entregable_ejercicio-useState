import { useState } from 'react'
import './App.css'

function App() {
    const [name,newName] = useState('Sofia');

    const names = ["Data", "Reyes", "Yolanda"];

    return (
        <>
            <h2>Teach Name {name}</h2>
            <ul>
                {names.map(n=>
                    <li>
                        <button onClick={()=>newName(n)}>
                            {n}
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default App
