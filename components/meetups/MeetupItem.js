import { useRouter } from "next/router";
import Card from "@/ui/Card";
import {
  Container,
  ImgWrapper,
  Content,
  Button,
} from "@/styles/meetups/MeetupItemStyle";

const MeetupItem = ({ image, id, title, address }) => {
  const router = useRouter();

  const showDetailHadnler = () => {
    router.push(`/${id}`);
  };

  return (
    <Container>
      <Card>
        <ImgWrapper>
          <img src={image} alt={title} />
        </ImgWrapper>
        <Content>
          <h3>{title}</h3>
          <address>{address}</address>
        </Content>
        <Button>
          <button onClick={showDetailHadnler}>Show Details</button>
        </Button>
      </Card>
    </Container>
  );
};

export default MeetupItem;
