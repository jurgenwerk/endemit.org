interface Props {
  errorMessage?: string;
}

export default function FormFieldError({ errorMessage }: Props) {
  return (
    <p className="text-red-500 text-sm mt-1">
      {errorMessage ?? "This field has an error"}
    </p>
  );
}
