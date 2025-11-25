import axios from 'axios';

const ytsearch = async (query) => {
  try {
    const response = await axios.get(`https://api.youtube.com/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching YouTube search results:', error);
    return null;
  }
};

export default ytsearch;




















