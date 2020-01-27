/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import {
  Container,
  Strong,
  Form,
  LabelBlock,
  LocationBlock,
  Button,
} from './styles';

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.error(err.message);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }
  return (
    <>
      <Container>
        <Strong>Cadastrar</Strong>
        <Form onSubmit={handleSubmit}>
          <LabelBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </LabelBlock>

          <LabelBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </LabelBlock>

          <LocationBlock>
            <LabelBlock>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </LabelBlock>

            <LabelBlock>
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required
              />
            </LabelBlock>
          </LocationBlock>
          <Button type="submit">Salvar</Button>
        </Form>
      </Container>
    </>
  );
}
