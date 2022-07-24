import { API_CONF } from '../config';
import axios from 'axios';

const endpoint = API_CONF.TEST_HOST;

const instance = axios.create({
  baseURL: endpoint,
});

export const getBillList = (size = 9, offset = 0) => {
  return instance.get('/', { params: { size, offset } });
};

export const getBillDetail = (id: any) => {
  return instance.get(`/${id}`);
};

export const addBill = (data = {}) => {
  return instance.post('/', data);
};

export const editBill = (id: any, data = {}) => {
  return instance.put(`/${id}`, data);
};

export const deleteBill = (id: any) => {
  return instance.get(`/${id}`);
};
