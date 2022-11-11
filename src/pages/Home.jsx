import { ShoppingCartSharp } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  async function fetchAllProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, image, price, rating, id, description }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  paragraph
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Typography fontSize="large" paragraph>
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions
                sx={{
                  alignSelf: "center",
                }}
              >
                <Button variant="contained">
                  <ShoppingCartSharp />
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
