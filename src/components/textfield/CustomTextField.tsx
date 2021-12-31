import { TextField } from "@mui/material";
import { useField } from "formik";

interface CustomTextFieldProps {
  label: string;
  name: string;
  type?: string;
}

const CustomTextField = ({
  type = "text",
  label,
  ...props
}: CustomTextFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      type={type}
      fullWidth
      variant="outlined"
      {...field}
      label={label}
      placeholder={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      margin="normal"
    />
  );
};

export default CustomTextField;
