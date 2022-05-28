import { Container, Content } from "@/styles/meetups/MeetupDetailStyle";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <Content>
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default MeetupDetail;
