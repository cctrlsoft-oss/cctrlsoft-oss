const API_URL = 'http://localhost:8000/core';

export const authService = {
  async login(username, password) {
    try {
      const response = await fetch(`${API_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
        throw new Error('Error de autenticación');
      }

      const data = await response.json();
      console.log('Respuesta del login:', data);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      
      return data;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  getToken() {
    return localStorage.getItem('access_token');
  },
};
