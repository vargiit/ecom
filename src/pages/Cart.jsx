import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getSubTotal } from "../utils";

const Cart = () => {
  const cart = useSelector((state) => state.cart?.value);
  const theme = useTheme();
  return (
    <Container sx={{ py: 8 }} spacing={2}>
      <Grid container>
        <Grid item container spacing={2} md={8}>
          {cart?.map(({ product, quantity }) => {
            const { title, id, price, description, image, rating } = product;
            return (
              <Grid item key={id} xs={12}>
                <Card sx={{ display: flex, py: 2 }}>
                  <CardMedia
                    component="img"
                    image={image}
                    sx={{
                      width: theme.spacing(30),
                      height: theme.spacing(30),
                      objectFit: "contain",
                      pt: theme.spacing(),
                    }}
                    alt={title}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography>{title}</Typography>
                      <Rating readOnly precision={0.5} value={rating.rate} />
                      <form>
                        <TextField
                          label="quantity"
                          value={quantity}
                        ></TextField>
                      </form>
                    </Box>
                    <Box>
                      <Typography variant="h4" paragraph>
                        {title}
                      </Typography>
                      <Typography variant="h4" paragraph>
                        {getSubTotalotal(cart)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container md={4}>
          <Typography variant="h4">Subtotal</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
