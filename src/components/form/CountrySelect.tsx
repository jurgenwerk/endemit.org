import countryConfig from "@/config/countries.config";
import SelectInput from "@/components/form/SelectInput";

interface Props {
  name: string;
  label?: string;
  value?: string;
  onChange: (name: string, value: string) => void;
  errorMessage?: string;
  required?: boolean;
}

export default function CountrySelect({
  name,
  onChange,
  label,
  value = "",
  errorMessage,
  required = false,
}: Props) {
  // Sort countries by orderPriority (descending) and then by name (ascending)
  const sortedCountries = Object.values(countryConfig)
    .sort((a, b) => {
      if (a.orderPriority !== b.orderPriority) {
        return (b.orderPriority ?? 0) - (a.orderPriority ?? 0);
      }
      return a.name.localeCompare(b.name);
    })
    .map(country => ({
      label: `${country.flag} ${country.name}`,
      value: country.code,
    }));

  return (
    <SelectInput
      name={name}
      onChange={onChange}
      dataSet={sortedCountries}
      value={value}
      required={required}
      label={label}
      errorMessage={errorMessage}
    />
  );
}
