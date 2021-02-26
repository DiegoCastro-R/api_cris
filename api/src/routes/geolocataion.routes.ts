// @ts-nocheck
import { Router } from 'express';
import fetch from 'node-fetch';
import acidentes from '../acidentes-2015.json';
const geoLocationRouter = Router();

geoLocationRouter.get('/', async (request, response) => {
  const body: {
    numero: string | number;
    endereco: string;
    cidade: string;
  }[] = [];
  const result: any[] = [];
  acidentes.features.forEach(item => {
    body.push({
      latitude: item.properties.latitude,
      longitude: item.properties.longitude,
    });
  });

  // body.forEach(item => {});
  // fetch(
  //   // `https://nominatim.openstreetmap.org/search?street=${item.numero},${item.endereco}&city="Recife"&format=geojson&limit=1`,
  //   `https://nominatim.openstreetmap.org/search?street="${body[0].numero}","${body[0].endereco}"&city=Recife"&format=json&limit=1`,
  // )
  //   .then(res => res.json())
  //   .then(body => console.log(body));

  return response.json(body);
});

export default geoLocationRouter;
