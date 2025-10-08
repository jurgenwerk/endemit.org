import { Product } from "@/app/(types)/product";
import { useCartActions, useCartItems } from "@/app/(stores)/CartStore";
import Link from "next/link";
import ProductStatusTag from "@/app/(components)/ProductStatusTag";
import {
  isProductSellable,
  isProductSellableByStatus,
} from "@/app/(logic)/product";
import Image from "next/image";
import { priceFormat } from "@/app/(lib)/formatting";
import ProductQtyControl from "@/app/(components)/ProductQtyControl";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartActions();
  const cartItems = useCartItems();

  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;
  const isSellable = isProductSellableByStatus(product.status);

  return (
    <div className={"group"}>
      <ProductStatusTag status={product.status} />
      {product.images[0] && (
        <Link href={`/store/products/${product.uid}`}>
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt ?? product.name}
            width={800}
            height={800}
            loading="lazy"
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
        </Link>
      )}
      <h3 className="mt-4 text-sm text-gray-100">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-500">
        {priceFormat(product.price)}
      </p>
      {isSellable && <ProductQtyControl item={cartItem} product={product} />}

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
