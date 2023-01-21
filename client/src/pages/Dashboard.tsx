import { Box } from "@mui/material";
import NavBox from "../components/common/nav/NavBox";
import { useGetProductsQuery } from "../store/api/storeApi";

function Dashboard() {
  const { data: products } = useGetProductsQuery(null);

  console.log("products are", products);
  return (
    <Box m="1.5rem 2.5rem">
      <NavBox>Dashboard</NavBox>
    </Box>
  );
}

export default Dashboard;
