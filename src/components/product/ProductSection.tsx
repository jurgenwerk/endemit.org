import { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

interface Props {
  products: Product[];
  title?: string;
  description?: string;
}

export default function ProductSection({
  products,
  title,
  description,
}: Props) {
  if (products.length === 0) {
    return;
  }

  return (
    <section>
      {title && <h2 className={"text-2xl"}>{title}</h2>}
      {description && <p className={"font-light"}>{description}</p>}

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
