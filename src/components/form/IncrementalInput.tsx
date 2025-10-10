interface Props {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export default function IncrementalInput({
  handleDecrement,
  handleIncrement,
  quantity,
}: Props) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className="w-8 text-center font-medium">{quantity}</span>

      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
