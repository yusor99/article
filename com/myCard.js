import Link from "next/link";
import { Card } from "react-bootstrap";
const MyCard = ({ item }) => {
    console.log(item);
  return (
    <>
      <div className="blog-item">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.athor}</Card.Text>
            <Link href={`article/${item.id}`}>
              <a> read artical</a>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default MyCard;
