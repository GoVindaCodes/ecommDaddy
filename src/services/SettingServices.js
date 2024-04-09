import requests from './httpService';
import SettingData from '../dummy_data/SettingsData';

const SettingServices = {
  // global setting all function
  addGlobalSetting: async (body) => {
    return requests.post('/setting/global/add', body);
  },

  getGlobalSetting: async () => {
    // return requests.get('/setting/global/all');
    // console.log(SettingData);
    return SettingData;
  },

  updateGlobalSetting: async (body) => {
    return requests.put(`/setting/global/update`, body);
  },
};

export default SettingServices;
