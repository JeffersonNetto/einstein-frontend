import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import FormaPagamentoSelect from "../../components/select/FormaPagamentoSelect";
import CustomDateRangePicker from "../../components/datepicker/CustomDateRangePicker";
import TipoMovimentoFinanceiroSelect from "../../components/select/TipoMovimentoFinanceiroSelect";
import CustomCurrencyField from "../../components/textfield/CustomCurrencyField";
import MovimentoFinanceiroService from "../../services/MovimentoFinanceiroService";
import FiltroMovimentoFinanceiro from "../../view-models/filtros/FiltroMovimentoFinanceiro";
import { useState } from "react";
import MovimentoFinanceiro from "../../models/MovimentoFinanceiro";
import Loading from "../../components/loader/Loading";
import { CustomResponse } from "../../helpers/Retorno";

const columns: GridColDef[] = [
  {
    field: "DataHora",
    headerName: "Data do Movimento",
    width: 150,
    editable: true,
  },
  {
    field: "ValorTotal",
    headerName: "Valor Total",
    width: 150,
    editable: true,
  },
];

export const Movimentos = () => {
  const [promise, setPromise] =
    useState<Promise<CustomResponse<MovimentoFinanceiro[]> | undefined>>();

  return (
    <>
      <Box>
        <Card variant="elevation" sx={{ my: 2 }} elevation={6}>
          <CardContent>
            <Paper sx={{ py: 2, px: 2 }} variant="outlined">
              <Typography variant="h5" align="center">
                Movimentos Financeiros
              </Typography>
            </Paper>

            <Paper sx={{ py: 4, px: 2, mt: 2 }} variant="outlined">
              <Formik
                initialValues={
                  {
                    FormaPagamentoId: 0,
                    DataMovimentoDe: undefined,
                    DataMovimentoAte: undefined,
                    ValorMovimentoDe: undefined,
                    ValorMovimentoAte: undefined,
                    TipoMovimentoFinanceiro: 0,
                  } as FiltroMovimentoFinanceiro
                }
                onSubmit={(values) => {
                  console.log(values);

                  setPromise(MovimentoFinanceiroService.Listar(values));
                }}
              >
                <Form>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={6} xl={3}>
                        <TipoMovimentoFinanceiroSelect />
                      </Grid>
                      <Grid item xs={6} xl={3}>
                        <FormaPagamentoSelect />
                      </Grid>
                      <Grid item xs={6} xl={6}>
                        <CustomDateRangePicker
                          nameDataInicio="DataMovimentoDe"
                          nameDataFim="DataMovimentoAte"
                        />
                      </Grid>
                      <Grid item xs={6} xl={3}>
                        <CustomCurrencyField
                          label="Valor Inicial"
                          name="ValorMovimentoDe"
                        />
                      </Grid>
                      <Grid item xs={6} xl={3}>
                        <CustomCurrencyField
                          label="Valor Final"
                          name="ValorMovimentoAte"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      mt: 2,
                    }}
                  >
                    <Button color="primary" variant="contained" type="submit">
                      Filtrar
                    </Button>
                  </Box>
                </Form>
              </Formik>
            </Paper>

            <Loading promise={promise}>
              {(movimentos) => (
                <DataGrid
                  localeText={
                    ptBR.components.MuiDataGrid.defaultProps.localeText
                  }
                  sx={{ mt: 2 }}
                  autoHeight
                  rows={movimentos?.Dados || []}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  columns={columns}
                />
              )}
            </Loading>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
