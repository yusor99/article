import { useState } from "react";
import { Container, Row, Col,  Card,Button } from "react-bootstrap";
import Link from "next/link";

const Home = (props) => {
console.log(props.post.articles);
  return (
    <>
      <div className="container" style={{marginTop:100}}>
        <Row gutter={[20, 20]}>
          {props.post.articles.map((item , index) => (
           <Card style={{ width: "18rem" }} key={index}>
           <Card.Img variant="top" src={item.image} />
           <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text>{item.athor}</Card.Text>
             <Link href={`article/${item.id}`}>
               <a> read artical</a>
             </Link>
           </Card.Body>
         </Card>
          ))}
        </Row>
      </div>
    </>
  );
};
export async function getStaticProps({ params }) {
  const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/articles`);
  const post = await res.json();
  return { props: { post } };
}
export default Home;
