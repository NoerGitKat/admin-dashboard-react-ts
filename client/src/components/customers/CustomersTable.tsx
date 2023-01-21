import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IUser, TTheme } from "../../types";
import { columns } from "./data";

function CustomersTable({
  customers,
  isLoading,
}: {
  customers: IUser[];
  isLoading: boolean;
}) {
  const theme = useTheme<TTheme>();
  console.log("customers", customers);

  return (
    <Box
      mt="40px"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
      }}
    >
      <DataGrid
        loading={isLoading || !customers}
        getRowId={(row) => row._id}
        rows={customers || []}
        columns={columns}
      />
    </Box>
  );
}

export default CustomersTable;
