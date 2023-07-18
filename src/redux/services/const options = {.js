const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': '0648d61b78msh8bd8cd6bff4da0ap169e78jsn1c88e90b206c\n'
  }
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));