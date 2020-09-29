import { useRouter } from "next/router";
import { Head } from "next/head";
import path from "path";
import { useEffect ,useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Artical = (props) => {
    const [article, setArticle] = useState({});
    useEffect(() => {
      setArticle(props.post.article);
      console.log(article);
    }, []);
  return (
    <>
        <Card style={{ width: "18rem" }} >
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.athor}</Card.Text>
                </Card.Body>
              </Card>
    </>
  );
};
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/article/${context.params.id}`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { post:data } }
  }
  export default  Artical ;
/*export async function getStaticPaths() {
    const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/articles`);
    const post = await res.json();
    const paths = post.articles.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  export async function getStaticProps({ params }) {
      const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/article/${params.id}`);
      const post = await res.json();
      return { props: { post } };
    }*/

