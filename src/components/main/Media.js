import React from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpeg';

const StyledCard = styled(Card)`
  max-width: 18em;
`;

const StyledCardGroup = styled(CardGroup)`
  margin-top: 5em;
  justify-content: space-around;
`;

const Media = () => {
  return (
    <>
      <video
        id="video"
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '32vh',
          marginTop: "1rem",
        }}>
        <source src="https://firebasestorage.googleapis.com/v0/b/dance-app-9c409.appspot.com/o/videoplayback.mp4?alt=media&token=05f88756-ee1d-4efd-a2e9-218b041a1afd" type="video/mp4" />
      </video>

      {/* Card section */}
      <StyledCardGroup>
        <StyledCard>
          <Card.Img variant="top" src={anoli} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={party} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={kids} />
        </StyledCard>
      </StyledCardGroup>
    </>

  );
}

export default Media;