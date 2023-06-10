import { FiClipboard } from 'react-icons/fi'

import { ITask } from '../../App'
import { Task } from '../Task/Index'

import styles from './Tasks.module.css'

interface TaskProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TaskProps) {
  const tasksQnt = tasks.length;
  const tasksFinished = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.textBlue}>Tarefas criadas</p>
          <span>{tasksQnt}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{tasksFinished} de {tasksQnt}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasksQnt > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))
        ) : (
          <>
            <hr />
            <div className={styles.noTasks}>
              <FiClipboard size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </>
        )}
      </div>
    </section>
  )
}