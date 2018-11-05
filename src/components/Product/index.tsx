import { Image } from 'components/Image';
import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';

export const Product = ({ product }) => {
  return (
    <Card>
      <Image
        src={product.featuredImage}
        alt={product.name}
        style={{ height: 400 }}
      />
      <a
        href={product.storeLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black' }}
      >
        <CardBody className="card-block">
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>${product.price}</CardSubtitle>
        </CardBody>
        <CardFooter>
          <Button color="primary" block>
            Purchase
          </Button>
        </CardFooter>
      </a>
    </Card>
  );
};
