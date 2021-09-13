// GET request to NASA's APOD API
export const getData = async (queryParams = "") => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=XPrDo4Mv7M893BJVqEwTm81Y9v24lFEncCpN10cV${queryParams}`, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
