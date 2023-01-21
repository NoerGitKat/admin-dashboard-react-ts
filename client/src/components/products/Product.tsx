import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useToggle } from "../../hooks";
import { IProduct, TTheme } from "../../types";

function Product({
  _id,
  name,
  description,
  price,
  rating,
  supply,
  stats,
}: IProduct) {
  const theme = useTheme<TTheme>();
  const { isOpen, toggle } = useToggle();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small" onClick={toggle}>
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.secondary[300],
        }}
      >
        <CardContent>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              ID
            </Typography>
            <Typography variant="body1">{_id}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Supply Left
            </Typography>
            <Typography variant="body1">{supply}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Yearly Sales This Year
            </Typography>
            <Typography variant="body1">{stats.yearlySalesTotal}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Yearly Units Sold This Year
            </Typography>
            <Typography variant="body1">
              {stats.yearlyTotalSoldUnits}
            </Typography>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;
