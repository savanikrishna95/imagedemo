import axios from "axios";

const clientId = 'cYXjP7GtGuNQd1Cnq310YPNjwZMfBYOmv5_5pHGOU6o';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: `Client-ID ${clientId}`,
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;
