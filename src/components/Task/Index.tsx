import { HiOutlineTrash } from 'react-icons/hi'
import {
  MdRadioButtonUnchecked,
  MdOutlineCheckCircleOutline
} from 'react-icons/md'

import styles from './Task.module.css'
import { ITask } from '../../App'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
  function deleteTask(id: string) {
    onDelete(id)
  }

  function completeTask(id: string) {
    onComplete(id)
  }

  return (
    <div className={styles.container}>
      <button className={styles.checkButton} onClick={() => completeTask(task.id)}>
        {
          task.isCompleted
            ? <MdOutlineCheckCircleOutline size={24} />
            : <MdRadioButtonUnchecked size={24} />
        }
      </button>

      <p>
        {task.title}
      </p>

      <button className={styles.trashButton} onClick={() => deleteTask(task.id)}>
        <HiOutlineTrash size={24} />
      </button>
    </div>
  )
}