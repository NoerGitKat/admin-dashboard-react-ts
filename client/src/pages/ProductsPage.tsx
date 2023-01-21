import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { Header, Product } from "../components";
import { useGetProductsQuery } from "../store/api/storeApi";
import { TTheme } from "../types";

function ProductsPage() {
  const theme = useTheme<TTheme>();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { data: products, isLoading } = useGetProductsQuery(null);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title={"Products"}
        subtitle="Here are all of the products from your store."
      />
      {isLoading && !products ? (
        <CircularProgress />
      ) : (
        <Box
          mt="1.25rem"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="1.25rem"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isDesktop ? undefined : "span 4" },
          }}
        >
          {products &&
            products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
        </Box>
      )}
    </Box>
  );
}

export default ProductsPage;
