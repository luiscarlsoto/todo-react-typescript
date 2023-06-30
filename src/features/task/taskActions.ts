import { fetchApi } from '../../api/fetchApi';
import toast from 'react-hot-toast';
import { notificationAsyncMessage } from '../notification/Notification';
import { createTaskSuccess, deleteTaskSuccess, editTaskSuccess, getAllTaskSuccess, taskFetchFailure, taskFetchStart } from './taskSlice';
import { Task } from '../../types/task.types';
import { AppDispatch } from '../../store/store';

export const createTask = (task: Task) => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskFetchStart());
    const data = await toast.promise(
      (async () => {
        const { data } = await fetchApi({ method: 'post', route: 'task', data: task })
        return data;
      })(),
      notificationAsyncMessage
    );
    dispatch(createTaskSuccess(data));
  } catch (error: any) {
    dispatch(taskFetchFailure(error.message));
  }
};

export const deleteTask = (taskId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskFetchStart());
    const data = await toast.promise(
      (async () => {
        const { data } = await fetchApi({ method: 'delete', route: 'task', path: taskId })
        return data;
      })(),
      notificationAsyncMessage
    );
    dispatch(deleteTaskSuccess(data));
  } catch (error: any) {
    dispatch(taskFetchFailure(error.message));
  }
};

export const editTask = (task: Task) => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskFetchStart());
    const data = await toast.promise(
      (async () => {
        const { data } = await fetchApi({ method: 'patch', route: 'task', path: task.id, data: task })
        return data;
      })(),
      notificationAsyncMessage
    );
    dispatch(editTaskSuccess(data));
  } catch (error: any) {
    dispatch(taskFetchFailure(error.message));
  }
};
export const getAllTasks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskFetchStart());
    const data = await toast.promise(
      (async () => {
        const { data } = await fetchApi({ method: 'get', route: 'task' })
        return data;
      })(),
      notificationAsyncMessage
    );
    dispatch(getAllTaskSuccess(data));
  } catch (error: any) {
    dispatch(taskFetchFailure(error.message));
  }
};