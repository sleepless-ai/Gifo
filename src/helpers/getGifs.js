export const getGifs = async( category ) => {
  
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RAk3EmtGh8X0Lu0Y9CTVrmyKIdZ0RyL9&q=${category}&limit=20`
  const resp = await fetch(url);
  
  // Convierte a json
  
  const { data } = await resp.json();
  
  // Genera datos de la api
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  
  console.log(gifs)
  return gifs
  
}