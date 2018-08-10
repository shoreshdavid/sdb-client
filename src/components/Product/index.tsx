import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

export const Product = ({ product }) => {
  return (
    <Card>
      <CardImg src={product.featuredImage} alt={product.name} />
      <Link to={product.storeLink} target="_blank" rel="noopener noreferrer">
        <CardBody className="card-block">
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>${product.price}</CardSubtitle>
          <CardText>{product.description}</CardText>
        </CardBody>
        <CardFooter>
          <Button>Purchase</Button>
        </CardFooter>
      </Link>
    </Card>
  );
};
