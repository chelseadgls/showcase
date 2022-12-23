import axios from 'axios';

export const retrieveSpaces = async () => {
try {
  const response = await axios.get(
    "https://eozjtvk41svx4nc.m.pipedream.net"
  );
  // console.log(response.data);
  return response.data;
} catch (error) {
  throw error;
}
};

export const retrieveCreators = async () => {
  try {
    const response = await axios.get(
      "https://eojbtbh68hot62m.m.pipedream.net"
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
        "https://eoc685b1ynuwbq.m.pipedream.net"
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
    };