import { Box } from "@mui/material";
import { CustomersTable, Header } from "../components";
import { useGetCustomersQuery } from "../store/api/storeApi";

function CustomersPage() {
  const { data: customers, isLoading } = useGetCustomersQuery(null);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Customers"
        subtitle="Here's a list of our current customers."
      />
      <CustomersTable customers={customers} isLoading={isLoading} />
    </Box>
  );
}

export default CustomersPage;
