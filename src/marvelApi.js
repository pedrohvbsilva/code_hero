import md5 from 'md5'
const MARVEL_URL = "https://gateway.marvel.com/v1/public/characters?";
const PUBLIC_KEY = '83fb155d7bfe832669970173e4ecdaa6';
const PRIVATE_KEY = 'd2630d393637a3d3a412a380b03975f8b0ed16f6';
const ts = Date.now().toString();
const hash = md5(ts+PRIVATE_KEY+PUBLIC_KEY);
const MARVEL_API = `${MARVEL_URL}ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=50`;

export default MARVEL_API