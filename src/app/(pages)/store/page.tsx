import type { Metadata } from "next";
import { getVisibleProducts } from "@/domain/product/product.actions";
import { ProductCategory } from "@/types/product";
import ProductSection from "@/components/product/ProductSection";
import {
  isProductFeatured,
  isProductTicket,
} from "@/domain/product/product.rules";

export const metadata: Metadata = {
  title: "Store",
  description: "Exclusive Endemit merchandise, coming soon.",
  openGraph: {
    description: "Exclusive Endemit merchandise, coming soon.",
    images: ["/images/og/endemit-og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function Store() {
  const products = await getVisibleProducts();

  const productsInMerch = products.filter(
    product => product.category === ProductCategory.MERCH
  );

  const productsInTickets = products.filter(product =>
    isProductTicket(product)
  );

  const productsInFeatured = products.filter(product =>
    isProductFeatured(product)
  );

  const productsInOther = products.filter(
    product =>
      product.category !== ProductCategory.MERCH &&
      product.category !== ProductCategory.TICKETS
  );

  return (
    <div className="lmx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
      <h1 className="text-3xl font-bold text-white mb-8">STORE</h1>

      <div>
        {productsInFeatured.length > 0 && (
          <ProductSection
            products={productsInFeatured}
            title="🔥Featured Products"
            description="Selling out fast, get yours now!"
          />
        )}

        {productsInTickets.length > 0 && (
          <ProductSection
            products={productsInTickets}
            title="🔥New hot tickets for our events"
            description="Selling out fast, get yours now!"
          />
        )}

        {productsInMerch.length > 0 && (
          <ProductSection
            products={productsInMerch}
            title="New hot Merch"
            description="Get your new hot merch from the store!"
          />
        )}

        {productsInOther.length > 0 && (
          <ProductSection
            products={productsInOther}
            title="Other Products"
            description="Check out our other amazing products!"
          />
        )}

        {products.length === 0 && <p>No products available at the moment.</p>}
      </div>
    </div>
  );
}
