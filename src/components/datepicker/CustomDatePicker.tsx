import { useField } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ptBR from "date-fns/locale/pt-BR";

const CustomDatePicker = ({ label, name }: { label: string; name: string }) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField fullWidth name={name} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
