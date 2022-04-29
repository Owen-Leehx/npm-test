import { useInterval } from 'ahooks'
import { useCallback, useRef } from 'react'

type Props<T> = {
  delay?: number
  maxSize?: number
  taskHandler: (data: T) => void
  fetchHandler: () => Promise<T>
}

export const useEnqueueTask = <T = any>({ taskHandler, fetchHandler, delay = 3000, maxSize = 15 }: Props<T>) => {
  const taskList = useRef<T[]>([])
  const idleCallbackRef = useRef<number>(0)

  const runTaskQueue = (deadline: IdleDeadline) => {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.current.length) {
      const data = taskList.current.shift() as T
      taskHandler(data)
    }

    if (taskList.current.length) {
      idleCallbackRef.current = requestIdleCallback(runTaskQueue)
    } else {
      idleCallbackRef.current = 0
    }
  }

  const resetTask = () => {
    cancelIdleCallback(idleCallbackRef.current)
    taskList.current.length = 0
    idleCallbackRef.current = 0
  }

  const enqueueTask = (taskData: T) => {
    if (taskList.current.length > maxSize) {
      resetTask()
    }
    taskList.current.push(taskData)
    if (!idleCallbackRef.current) {
      idleCallbackRef.current = requestIdleCallback(runTaskQueue)
    }
  }

  const intervalHandler = useCallback(async () => {
    const data = await fetchHandler()
    enqueueTask(data)
  }, [])

  useInterval(intervalHandler, delay, { immediate: true })
}
