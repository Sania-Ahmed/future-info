async function fetchDataJSON() {
    const response = await fetch('data.json');
    const movies = await response.json();
    return movies;
  }

  export default fetchDataJSON