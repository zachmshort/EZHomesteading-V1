import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard({ productName, price, description, imageUrl, shelfLife, quantity, quantityType }) {
  return (
    
    <Card className="w-full lg:w-96 lg:max-h-96 mb-10 ml-12 lg:ml-3 flex">
      <CardHeader shadow={false} floated={false} className="h-48 lg:h-48">
        <img
          src={imageUrl}
          alt={productName}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between flex-col lg:flex-row">
          <Typography color="blue-gray" className="font-medium">
            {productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Shelf Life: {shelfLife}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {quantity}{quantityType}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
