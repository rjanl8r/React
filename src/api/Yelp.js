import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 2yGmD-xDMKX1xNUjVPZ9J0sxMqduOaAyvfPBDchXZ3A0f0WOkaDi67V51tVrXV3ik1VmnKr33TCP4SgoCTZWrg4Kw_uZFD5yjXSS0071nrY-BLwRcHPwq9cbj0maXnYx'
    }
});