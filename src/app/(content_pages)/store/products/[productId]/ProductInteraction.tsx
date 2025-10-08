"use client";

import ProductQtyControl from "@/app/(components)/ProductQtyControl";
import { Product } from "@/app/(types)/product";
import { useCartActions, useCartItems } from "@/app/(stores)/CartStore";
import { isProductSellableByStatus } from "@/app/(logic)/product";

interface Props {
  product: Product;
}

export default function ProductInteraction({ product }: Props) {
  const { addItem } = useCartActions();
  const cartItems = useCartItems();

  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;
  const isSellable = isProductSellableByStatus(product.status);

  const handleAddToCart = () => {
    if (isSellable) {
      addItem(product);
    }
  };

  return (
    <div className="mt-10">
      {/* Sizes */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-100">Size</h3>
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Size guide
          </a>
        </div>

        <fieldset aria-label="Choose a size" className="mt-4">
          <div className="grid grid-cols-4 gap-3">
            {product.variants.map(variant => (
              <label
                key={variant.variant_value}
                aria-label={variant.variant_value}
                className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
              >
                <input
                  defaultValue={variant.variant_value}
                  // defaultChecked={size === variant.variant_value}
                  name="size"
                  type="radio"
                  className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                />
                <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                  {variant.variant_value}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        onClick={handleAddToCart}
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
      >
        Add to bag
      </button>
      <ProductQtyControl item={cartItem} product={product} />
    </div>
  );
}
