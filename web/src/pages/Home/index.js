import React, { useState, useEffect } from 'react';

import DevForm from '../../components/DevForm';
import DevList from '../../components/DevList';
import { Container } from './styles';

import api from '../../sevices/api';

export default function Home() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <DevForm onSubmit={handleAddDev} />
      <DevList devs={devs} />
    </Container>
  );
}
