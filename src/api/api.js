// GET request to NASA's APOD API
export const getData = async (queryParams = "") => {
  const response = await fetch(`${process.env.REACT_APP_API}${queryParams}`);
  const data = response.json();
  return data;
}
