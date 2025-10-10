import { Product } from "@/types/product";
import Link from "next/link";
import ProductStatusTag from "@/components/product/ProductStatusTag";
import Image from "next/image";
import { formatPrice } from "@/lib/formatting";
import { createSlug } from "@/lib/util";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={"group"}>
      <ProductStatusTag
        status={product.status}
        className={"translate-y-2 translate-x-2"}
      />

      <Link href={`/store/${createSlug(product.category)}/${product.uid}`}>
        {product.video && (
          <div className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 overflow-hidden">
            <video
              src={product.video}
              loop={true}
              muted={true}
              autoPlay={true}
            />
          </div>
        )}

        {product.images[0] && !product.video && (
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt ?? product.name}
            width={800}
            height={800}
            loading="lazy"
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
        )}
        <h3 className="mt-4 text-sm text-gray-100">{product.name}</h3>
      </Link>

      <p className="mt-1 text-lg font-medium text-gray-500">
        {formatPrice(product.price)}
      </p>

      {/*<div>*/}
      {/*  <h3>{product.name}</h3>*/}
      {/*  {product.description && (*/}
      {/*    <p className="description">{product.description}</p>*/}
      {/*  )}*/}

      {/*  {product.variants.length > 0 && (*/}
      {/*    <div>*/}
      {/*      Avaiable in:*/}
      {/*      <div className="flex gap-x-2">*/}
      {/*        {product.variants.map(variant => (*/}
      {/*          <div>{variant.variant_value}</div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}

      {/*  {isInCart && <div>You have {quantity} in cart</div>}*/}

      {/*  <div>*/}
      {/*    <p className="price">€{product.price.toFixed(2)}</p>*/}

      {/*    {product.category && (*/}
      {/*      <p className="category">Category: {product.category}</p>*/}
      {/*    )}*/}
      {/*  </div>*/}

      {/*</div>*/}
    </div>
  );
}
