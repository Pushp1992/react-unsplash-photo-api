import axios from 'axios';

const CLIENT_ID = "ZuYZ_yf59pzJLeEZSA8RAE-STklCOZMLMtYcTwWUZw0";
const API_KEY='01352df94e0c46e9bb394a793b8c1a28';

const UnSplashService = {
    async getRandomImage() {
        const encodedURI = window.encodeURI(`/proxy/photos/random/?client_id=${CLIENT_ID}`);

        try {
            return await axios({
                method: "GET",
                url: encodedURI,
                "headers": {
                    'Content-Type': "application/json",
                    "SERVER": "UNSPLASH_API"
                }
            }).then(function (response) {
                return response.data
            })
        } catch (error) {
            console.error(error)
        }
    },  
}

export default UnSplashService;