// @ts-nocheck
import { Router } from 'express';
import fetch from 'node-fetch';
import acidentesjaneiro from '../acidentes-2015-janeiro.json';
import acidentesfevereiro from '../acidentes-2015-fevereiro.json';
import acidentesmarco from '../acidentes-2015-marco.json';
import { v4 as uuidv4 } from 'uuid';
const geoLocationRouter = Router();

geoLocationRouter.get('/', async (request, response) => {
  const body: {
    numero: string | number;
    endereco: string;
    cidade: string;
  }[] = [];
  const result: any[] = [];
  acidentesjaneiro.features.forEach(item => {
    body.push({
      id: uuidv4(),
      latitude: item.properties.latitude,
      longitude: item.properties.longitude,
      descricao: item.properties.tipo,
      data: item.properties.data,
      detalhes: item.properties.detalhes,
    });
  });
  acidentesfevereiro.features.forEach(item => {
    body.push({
      id: uuidv4(),
      latitude: item.properties.latitude,
      longitude: item.properties.longitude,
      descricao: item.properties.tipo,
      data: item.properties.data,
      detalhes: item.properties.detalhes,
    });
  });
  acidentesmarco.features.forEach(item => {
    body.push({
      id: uuidv4(),
      latitude: item.properties.latitude,
      longitude: item.properties.longitude,
      descricao: item.properties.tipo,
      data: item.properties.data,
      detalhes: item.properties.detalhes,
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
