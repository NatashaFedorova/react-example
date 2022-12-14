import axios from 'axios';

axios.defaults.baseURL = 'https://6351388e3e9fa1244e58a016.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterial = async () => {
  const response = await axios.get('/materials');
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterial = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
