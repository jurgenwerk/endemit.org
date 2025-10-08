"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/app/(types)/product";
import ProductCard from "@/app/(components)/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

      const data: Product[] = await response.json();
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

  if (loading) {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error loading products: {error}</p>
        <button onClick={fetchProducts} type="button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>Our Products</h1>

        {products.length === 0 ? (
          <p>No products available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
