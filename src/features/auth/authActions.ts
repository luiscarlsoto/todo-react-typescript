import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../api/fetchApi';
import toast from 'react-hot-toast';
import { notificationAsyncMessage } from '../notification/Notification';

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}


const login = async (user: LoginData) => {
    const response = await fetchApi({ method: 'post', route: 'auth', path: 'signin', data: user })
    return response.data;
}

export const loginUser = createAsyncThunk(
  'auth/signin',
  async (user: LoginData) => toast.promise(login(user), notificationAsyncMessage),
);

export const getToken = (state: any) => state.auth.token;