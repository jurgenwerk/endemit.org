import { ProductStatus } from "@/types/product";
import clsx from "clsx";
import { getStatusColor } from "@/domain/product/product.actions";

interface Props {
  status: ProductStatus;
  className?: string;
}

export default function ProductStatusTag({ status, className }: Props) {
  if (status === ProductStatus.AVAILABLE) {
    return;
  }

  const variableColours = getStatusColor(status);

  return (
    <div
      className={clsx(
        variableColours,
        "absolute z-10 rounded-md px-2 py-1 text-sm font-semibold",
        className
      )}
    >
      {status.replace("_", " ").toLowerCase()}
    </div>
  );
}
