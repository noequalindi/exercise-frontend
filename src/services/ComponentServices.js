import AxiosInstance from './serviceConfig';
import qs from 'qs';

const ComponentServices = {
      getHotels: (name, stars) => {
            return AxiosInstance.get('/hotels', qs.stringify({name: name, stars: stars}));
      }
}

export default ComponentServices;