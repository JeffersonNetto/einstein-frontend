import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useField } from "formik";

const CustomCurrencyField = ({
  label,
  name,
}: {
  label: string;
  name: string;
}) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        fullWidth
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        label={label}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
    </FormControl>
  );
};

export default CustomCurrencyField;
