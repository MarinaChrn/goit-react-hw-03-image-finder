import axios from "axios";

axios.defaults.baseURL="https://pixabay.com/api";

export const fetchData = async()=> {
    const response = await axios.get('/?q=cat&page=1&key=34548627-4253aa847fe52c38f81610ad9&image_type=photo&orientation=horizontal&per_page=12');
    return response.data;
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