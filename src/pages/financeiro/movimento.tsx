import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import CustomDatePicker from "../../components/datepicker/CustomDatePicker";
import FormaPagamentoSelect from "../../components/select/FormaPagamentoSelect";
import TipoMovimentoFinanceiroSelect from "../../components/select/TipoMovimentoFinanceiroSelect";
import CustomSliderField from "../../components/slider/CustomSliderField";
import CustomCurrencyField from "../../components/textfield/CustomCurrencyField";

export const Movimento = () => {
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{
        TipoMovimentoFinanceiro: "",
        DataHora: null,
        FormaPagamentoId: "",
        NrParcelas: 0,
        ValorEntrada: 0,
        ValorDesconto: 0,
        ValorTotal: 0,
        ValorPago: 0,
        DiaVencimento: 1,
      }}
    >
      <Form>
        <Box>
          <Card variant="elevation" sx={{ my: 2 }} elevation={6}>
            <CardContent>
              <Paper sx={{ py: 2, px: 2 }} variant="outlined">
                <Typography variant="h5" align="center">
                  Movimento Financeiro
                </Typography>
              </Paper>
              <Paper sx={{ py: 4, px: 2, mt: 2 }} variant="outlined">
                <Grid container spacing={2} rowSpacing={4}>
                  <Grid item xs={6} xl={4}>
                    <TipoMovimentoFinanceiroSelect />
                  </Grid>
                  <Grid item xs={6} xl={4}>
                    <CustomDatePicker
                      label="Data do movimento"
                      name="DataHora"
                    />
                  </Grid>
                  <Grid item xs={6} xl={4}>
                    <FormaPagamentoSelect />
                  </Grid>

                  <Grid item xs={6} xl={3}>
                    <CustomCurrencyField
                      label="Valor entrada"
                      name="ValorEntrada"
                    />
                  </Grid>
                  <Grid item xs={6} xl={3}>
                    <CustomCurrencyField
                      label="Valor desconto"
                      name="ValorDesconto"
                    />
                  </Grid>
                  <Grid item xs={6} xl={3}>
                    <CustomCurrencyField
                      label="Valor total"
                      name="ValorTotal"
                    />
                  </Grid>
                  <Grid item xs={6} xl={3}>
                    <CustomCurrencyField label="Valor pago" name="ValorPago" />
                  </Grid>

                  <Grid item xs={6} xl={6}>
                    <CustomSliderField
                      label="Nº de parcelas"
                      name="NrParcelas"
                      max={24}
                    />
                  </Grid>
                  <Grid item xs={6} xl={6}>
                    <CustomSliderField
                      label="Dia do vencimento"
                      name="DiaVencimento"
                      min={1}
                      max={31}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button color="primary" variant="contained" type="submit">
                  Salvar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Form>
    </Formik>
  );
};
