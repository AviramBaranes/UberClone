import axios from 'axios';

export const getRestaurantsData = async (city: string) => {
  const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  const api_key =
    'w4zlN6joTy92rWQmLCGkQT4zoU6ogVWAV5df0xBMNb-hwSA_HvLNo_HLpSlZtuZQmjzURJLoVXEqq1AhgI2ZiMhMYA2uSlLH00zGdNJpKmCB_SG0WeGG8XiQglcPYnYx';

  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${api_key}` },
    });

    return data;
  } catch (err) {
    throw err;
  }
};
