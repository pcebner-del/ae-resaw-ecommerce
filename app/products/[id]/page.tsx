import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
