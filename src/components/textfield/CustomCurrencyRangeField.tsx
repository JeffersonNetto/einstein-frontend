import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useField } from "formik";

export const CustomCurrencyRangeField = ({
  nameValorInicial,
  nameValorFinal,
}: {
  nameValorInicial: string;
  nameValorFinal: string;
}) => {
  const [{ value: valueInicial }, , { setValue: setValueInicial }] =
    useField(nameValorInicial);
  const [{ value: valueFinal }, , { setValue: setValueFinal }] =
    useField(nameValorFinal);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel htmlFor={nameValorInicial}>Valor Inicial</InputLabel>
        <OutlinedInput
          fullWidth
          id={nameValorInicial}
          name={nameValorInicial}
          value={valueInicial}
          onChange={(e) => setValueInicial(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Valor Inicial"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor={nameValorFinal}>Valor Final</InputLabel>
        <OutlinedInput
          fullWidth
          id={nameValorFinal}
          name={nameValorFinal}
          value={valueFinal}
          onChange={(e) => setValueFinal(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          label="Valor Final"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </FormControl>
    </>
  );
};
