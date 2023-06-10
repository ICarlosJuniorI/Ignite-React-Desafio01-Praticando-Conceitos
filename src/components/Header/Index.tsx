import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../../assets/todoLogo.svg'

import styles from './Header.module.css'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(title)
    setTitle("")
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo do projeto" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
        />
        <button
          disabled={title === "" ? true : false}
        >
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}