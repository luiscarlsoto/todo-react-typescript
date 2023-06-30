import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task, TaskResponse } from '../../types/task.types';


interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    taskFetchStart(state) {
      state.error = null
      state.loading = true
    },
    taskFetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.loading = false
    },
    createTaskSuccess(state, action: PayloadAction<Task>) {
      console.log(action.payload)
      state.tasks.push(action.payload)
      state.loading = false
    },
    editTaskSuccess(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)
      state.tasks[index] = action.payload
      state.loading = false
    },
    deleteTaskSuccess(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      state.loading = false
    },
    getAllTaskSuccess(state, action: PayloadAction<TaskResponse>) {
      console.log(action.payload)
      state.tasks = action.payload.tasks
      state.loading = false
    }
  }
})

export const { 
  taskFetchStart,
  taskFetchFailure,
  createTaskSuccess,
  deleteTaskSuccess,
  editTaskSuccess,
  getAllTaskSuccess
 } = taskSlice.actions

export default taskSlice.reducer