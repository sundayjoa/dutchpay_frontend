import { create } from 'zustand';
import { crossStorage } from '../utils/cross-storage';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  checkLoginStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,

  login: async (token) => {
    await crossStorage.setItem('accessToken', token);
    set({ isLoggedIn: true, accessToken: token });
  },

  logout: async () => {
    await crossStorage.deleteItem('accessToken');
    set({ isLoggedIn: false, accessToken: null });
  },

  checkLoginStatus: async () => {
    const token = await crossStorage.getItem('accessToken');
    if (token) {
      set({ isLoggedIn: true, accessToken: token });
    } else {
      set({ isLoggedIn: false, accessToken: null });
    }
  },
}));
