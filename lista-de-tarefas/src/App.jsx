import './App.css'
import { Tarefa } from './components/tarefa/Tarefa'
import { Input } from './components/input/Input'
import { useState } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([])
  return (
    <div className='main-body'>
      <main className='main-container'>
        <div className='header-container'>
          <h1>Lista de Tarefas v1.0</h1>
          <div className='insert-task'>
            <Input placeholder="Digite sua tarefa" insertTarefa={setTarefas} />
          </div>
        </div>

        <div className="tasks-container">
          {tarefas.map(tarefa => <Tarefa titulo={tarefa.nome} key={tarefa.id} />)}
        </div>
      </main>
    </div>
  )
}

export default App
