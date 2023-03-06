import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../api/fetchApi';

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}


export const loginUser = createAsyncThunk(
  'auth/signin',
  async (user: LoginData) => {
    const response = await fetchApi({ method: 'post', route: 'auth', path: 'signin', data: user });
    return response.data;
  }
);

export const getToken = (state: any) => state.auth.token;