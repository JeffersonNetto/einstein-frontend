import { Box, CircularProgress } from "@mui/material";

const Loader = (props: { loading: boolean; children?: JSX.Element }) => {
  return props.loading ? (
    <Box display="flex" justifyContent="center">
      <CircularProgress size={30} />
    </Box>
  ) : (
    props.children || <></>
  );
};

export default Loader;
