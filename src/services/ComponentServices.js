import AxiosInstance from './serviceConfig';

const ComponentServices = {
      getHotels: () => {
            return AxiosInstance.get('/hotels');
      }
}

export default ComponentServices;