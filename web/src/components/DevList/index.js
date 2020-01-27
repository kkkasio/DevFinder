/* eslint-disable react/prop-types */
import React from 'react';

import { Container, DevItem, Header, UserInfo, Link } from './styles';

export default function DevList({ devs }) {
  return (
    <Container>
      <ul>
        {devs.map(dev => (
          <DevItem key={dev.github_username}>
            <Header>
              <img src={dev.avatar_url} alt={dev.name} />
              <UserInfo>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </UserInfo>
            </Header>

            <div>
              <p>{dev.bio}</p>

              <Link
                href={`https://github.com/${dev.github_username}`}
                target="_blank"
              >
                Acessar perfil no Github
              </Link>
            </div>
          </DevItem>
        ))}
      </ul>
    </Container>
  );
}
