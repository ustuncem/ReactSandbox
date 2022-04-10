import React from "react";
import CartHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";

export default function Card() {
  return (
    <article className="bg-primary-100 rounded-xl max-w-xs">
      <CartHeader />
      <CardMain />
      <CardFooter />
    </article>
  );
}
