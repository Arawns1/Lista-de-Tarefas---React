
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export function Input(props){
    const [tituloTarefa, setTituloTarefa] = useState("")

    function submit(){
        props.insertTarefa((tarefasAnteriores) => [...tarefasAnteriores, 
            {
                id : tarefasAnteriores.length > 0 ? tarefasAnteriores[tarefasAnteriores.length - 1].id + 1 : 1,
                nome : tituloTarefa,
                completa : false
            }
        ])
    }

    return(
        <div className='input-container'>
            <input type="text" 
                   placeholder= {props.placeholder}
                   onChange={e => setTituloTarefa(e.target.value)}
            />
            <button type='submit' onClick={submit} >
             <FontAwesomeIcon icon={faPlus} className='plus-icon' />   
            </button>
        </div>
        
    )
}