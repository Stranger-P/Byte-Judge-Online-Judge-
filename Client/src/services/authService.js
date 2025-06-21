import axios from 'axios';

const API_URL = '/api/auth'; // Relative URL for proxy

export const signup = async (email, username, password) => {
  const response = await axios.post(
    `${API_URL}/signup`,
    { email, username, password },
    { withCredentials: true }
  );
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(
    `${API_URL}/login`,
    { email, password },
    { withCredentials: true }
  );
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`, {}, {
    withCredentials: true,
  });
  return response.data;
};