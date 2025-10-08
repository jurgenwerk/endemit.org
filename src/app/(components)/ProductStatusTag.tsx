import { ProductStatus } from "@/app/(types)/product";
import clsx from "clsx";
import { getStatusColor } from "@/app/(logic)/product";

interface Props {
  status: ProductStatus;
}

export default function ProductStatusTag({ status }: Props) {
  if (status === ProductStatus.AVAILABLE) {
    return;
  }

  const variableColours = getStatusColor(status);

  return (
    <div
      className={clsx(
        variableColours,
        "absolute z-10 rounded-md  px-2 py-1 text-xs font-semibold"
      )}
    >
      {status.replace("_", " ").toLowerCase()}
    </div>
  );
}
