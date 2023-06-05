import './tarefa.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export function Tarefa(props){
    return(
        <section className="task-card">
            <div>
                <input type='checkbox'></input>
                <h1>{props.titulo}</h1>
                <button>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                </button>
            </div>
        </section>
    )
}