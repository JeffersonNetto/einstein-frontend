import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface LoadingProps<T> {
  promise?: Promise<T>;
  children: (value?: T) => React.ReactNode;
}

export default function Loading<T>(props: LoadingProps<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [value, setValue] = useState<T>();

  useEffect(() => {
    if (props.promise) {
      setIsLoading(true);
      setErrorMessage(null);

      (async () => {
        try {
          const response = await props.promise;
          setValue(response);
        } catch (error: any) {
          console.error(error);
          setErrorMessage(error.toString());
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [props.promise]);

  if (errorMessage) {
    return GetErrorMessage(errorMessage);
  }

  return isLoading ? (
    <Box display="flex" justifyContent="center">
      <CircularProgress size={30} sx={{ py: 1 }} />
    </Box>
  ) : (
    <>
      {(errorMessage && GetErrorMessage(errorMessage)) || props.children(value)}
    </>
  );
}

const GetErrorMessage = (errorMessage: string) => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography sx={{ pt: 1 }}>{errorMessage}</Typography>
    </Box>
  );
};
