import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useField } from "formik";
import { useEffect, useState } from "react";
import { CustomResponse } from "../../helpers/Retorno";
import FormaPagamentoService from "../../services/FormaPagamentoService";
import ComboBase from "../../view-models/ComboBase";
import Loading from "../loader/Loading";

const FormaPagamentoSelect = ({
  label = "Forma de Pagamento",
  name = "FormaPagamentoId",
}: {
  label?: string;
  name?: string;
}) => {
  const [field, meta] = useField(name);
  const [promise, setPromise] =
    useState<Promise<CustomResponse<ComboBase<number>[]>>>();

  useEffect(() => {
    setPromise(FormaPagamentoService.GetCombo());
  }, []);

  return (
    <Loading promise={promise}>
      {(response: CustomResponse<ComboBase<number>[]> | undefined) => {
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
              {response?.Dados.map((option: ComboBase<number>, index) => (
                <MenuItem key={index} value={option.Value}>
                  {option.Text}
                </MenuItem>
              ))}
            </Select>
            {meta.touched && Boolean(meta.error) && (
              <FormHelperText>{meta.error}</FormHelperText>
            )}
          </FormControl>
        );
      }}
    </Loading>
  );
};

export default FormaPagamentoSelect;
