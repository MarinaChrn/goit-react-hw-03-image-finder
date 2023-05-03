import axios from "axios";

axios.defaults.baseURL="https://pixabay.com/api";

const fetchData = async()=> {
    const {data} = await axios.get('/?q=cat&page=1&key=34548627-4253aa847fe52c38f81610ad9&image_type=photo&orientation=horizontal&per_page=12');
    return data;
}

// const comp=() =>{
//     try {
//         const fetchedData = fetchData();
//         console.log(fetchedData)
//     } catch(error) {
//         console.log(error)
//     }
// }

// comp();

export default fetchData;

// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '28194821-49041d995ecd04735d9e20d11';

// const getImages = () => {
//   return fetch(
//     `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(
//         `Oops... there are no searchText images matching your search... `
//       )
//     );
//   });
// };

// const api = {
//   getImages,
// };

// export default api;