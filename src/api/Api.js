import axios from 'axios';

export const getProducts = async () => {
    const data = await axios.get('https://fakestoreapiserver.reactbd.com/products');
    return data;
};
