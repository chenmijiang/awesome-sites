import { driver } from 'rc-localforage';

// 搜索相关的数据表
export const searchDataTable: LocalForageOptions = {
  name: 'home',
  storeName: 'search',
  driver: driver.LOCALSTORAGE,
  version: 1.0,
  description: 'search data table',
};

// 站点相关的数据表
export const sitesDataTable: LocalForageOptions = {
  name: 'home',
  storeName: 'sites',
  version: 1.0,
  description: 'sites data table',
};
