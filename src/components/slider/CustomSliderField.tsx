import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useField } from "formik";
import { Typography } from "@mui/material";

export default function CustomSliderField({
  label,
  name,
  min = 0,
  max,
  step = 1,
}: {
  label: string;
  name: string;
  min?: number;
  max: number;
  step?: number;
}) {
  const [field, ,] = useField(name);

  return (
    <Box>
      <Typography id={name}>
        {label}: {field.value}
      </Typography>
      <Slider
        {...field}
        defaultValue={0}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        aria-labelledby={name}
      />
    </Box>
  );
}
