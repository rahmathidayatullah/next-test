/* eslint-disable default-param-last */
import axios from 'axios';

// get list data fleet from home link content_api_url and product service  bisnis/probadi content_api_url
// get setting
export async function GetSetting(headers) {
  try {
    const response = await axios({
      url: '/api/setting',
      baseURL: '/',
      method: 'GET',
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
}
// get data settings
export async function GetDataSettings() {
  try {
    const response = await axios.get(`/api/setting`, {
      headers: {
        Authorization: `Bearer ${process.env.CMS_STATIC_TOKEN}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
