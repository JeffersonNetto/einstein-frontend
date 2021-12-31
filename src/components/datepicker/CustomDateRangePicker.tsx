import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import ptBR from "date-fns/locale/pt-BR";
import { useField } from "formik";

export default function CustomDateRangePicker({
  labelDataInicio = "Data Inicial",
  nameDataInicio,
  labelDataFim = "Data Final",
  nameDataFim,
}: {
  labelDataInicio?: string;
  nameDataInicio: string;
  labelDataFim?: string;
  nameDataFim: string;
}) {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const [, , { setValue: setValueDataInicio }] = useField(nameDataInicio);
  const [, , { setValue: setValueDataFim }] = useField(nameDataFim);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DateRangePicker
        startText={labelDataInicio}
        endText={labelDataFim}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setValueDataInicio(newValue[0]);
          setValueDataFim(newValue[1]);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField name={nameDataInicio} {...startProps} fullWidth />
            <Box sx={{ mx: 1 }} />
            <TextField name={nameDataFim} {...endProps} fullWidth />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
