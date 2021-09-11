// GET request to NASA's APOD API
export const getData = async (queryParams = "") => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}${queryParams}`, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
