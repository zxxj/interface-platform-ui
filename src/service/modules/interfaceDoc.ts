import http from '../index';

export const listResource = () => http.get('/resources/all');
export const listResourceByName = (name: string) =>
  http.get('/resources/all?name=' + name);

export const listDocById = (id: number) =>
  http.get(`api-documents/${id}/forClient`);

export const listDocByName = (id: number, name: number) =>
  http.get(`api-documents/${id}/forClient?name=${name}`);
