const fetchData = async (type, name) => {
  try {
    const response = await fetch(`https://www.dnd5eapi.co/api/${type}/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default fetchData;