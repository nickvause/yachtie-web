import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const HEALTH = new URL('/health', API_URL);

export async function fetchData() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }
    const response = await axios.get(HEALTH, { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
