import axios from 'axios';

export const retrieveCreators = async () => {
  try {
    const response = await axios.get(
      "https://showcase-backend-production.up.railway.app/creators"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
  };

  export const retrieveItems = async () => {
    try {
      const response = await axios.get(
        "https://showcase-backend-production.up.railway.app/items"
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
    };

export const retrieveSpaces = async () => {
try {
  const response = await axios.get(
    "https://showcase-backend-production.up.railway.app/spaces"
  );
  // console.log(response.data);
  return response.data;
} catch (error) {
  throw error;
}
};