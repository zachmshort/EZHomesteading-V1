import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard({ productName, price, description, imageUrl, shelfLife, stock, quantityType }) {
  return (
    
    <Card className="w-7/8 mb-2.5 mx-2 flex lg:w-96 md:w-82 sm:w-70">
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
          Shelf Life: {shelfLife} days
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {stock} {quantityType} 
        </Typography>
      </CardBody>
      <CardFooter className=" flex space-center">
        <Button
          ripple={true}
          fullWidth={false}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
        <Button
          ripple={true}
          fullWidth={false}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Buy Now
        </Button>
        <Button
          ripple={true}
          fullWidth={false}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Message User
        </Button>
      </CardFooter>
    </Card>
  );
}
