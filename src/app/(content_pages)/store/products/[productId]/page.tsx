export default async function ProductPage({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) {
  const { productId } = await params;
  return <div className={"p-32 bg-white"}>Nothing here for {productId}</div>;
}
