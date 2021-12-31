import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useField } from "formik";

const options: { Value: number; Text: string }[] = [
  { Value: 1, Text: "Despesa" },
  { Value: 2, Text: "Receita" },
];

const TipoMovimentoFinanceiroSelect = ({
  label = "Tipo",
  name = "TipoMovimentoFinanceiro",
}: {
  label?: string;
  name?: string;
}) => {
  const [field, meta] = useField(name);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
    >
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        {...field}
        id={name}
        autoWidth
        label={label}
        placeholder={label}
      >
        <MenuItem value={0} />
        {options.map((option, index) => {
          return (
            <MenuItem key={index} value={option.Value}>
              {option.Text}
            </MenuItem>
          );
        })}
      </Select>
      {meta.touched && Boolean(meta.error) && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default TipoMovimentoFinanceiroSelect;
