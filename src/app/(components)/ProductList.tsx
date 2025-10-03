"use client";

import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Head from "next/head";
import type { StripeProduct } from "@/app/api/v1/products/types";

interface ProductCardProps {
  product: StripeProduct;
  onAddToCart: (product: StripeProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {product.images[0] && (
        <div className="product-image">
          <img src={product.images[0]} alt={product.name} loading="lazy" />
        </div>
      )}

      <div className="product-info">
        <h3>{product.name}</h3>
        {product.description && (
          <p className="description">{product.description}</p>
        )}

        <div className="product-meta">
          <p className="price">€{(product.price / 100).toFixed(2)}</p>
          {/*{product?.metaData?.weight > 0 && (*/}
          {/*  <p className="weight">Weight: {product.metaData.weight}g</p>*/}
          {/*)}*/}
          {product.category && (
            <p className="category">Category: {product.category}</p>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="add-to-cart-btn"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useShoppingCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/v1/products/list");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: StripeProduct[] = await response.json();
      setProducts(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: StripeProduct): void => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.images[0] || "",
      weight: product.metaData.weight,
      priceId: product.priceId,
    });
  };

  if (loading) {
    return (
      <div className="loading">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error loading products: {error}</p>
        <button onClick={fetchProducts} type="button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Our Products</title>
        <meta name="description" content="Browse our amazing products" />
      </Head>

      <div className="products-page">
        <h1>Our Products</h1>

        {products.length === 0 ? (
          <p>No products available at the moment.</p>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
