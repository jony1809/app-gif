export const getGif = async ({ categoria, limit = 10 }) => {
  const API_KEY = "CR4iNqN6oGWyv4qOsfUGbqfr3qRWQKM6";
  const BASE_API = "http://api.giphy.com/v1/gifs";
  const url = `${BASE_API}/search?api_key=${API_KEY}&q=${categoria}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
