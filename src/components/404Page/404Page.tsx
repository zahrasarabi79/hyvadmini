import { Grid, Box, Button, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const NotPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Stack sx={{ margin: 2 }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
            <Link to={`/dashboardd`}>
              <Button sx={{ my: 4 }} variant="contained">
                Back Home
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotPage;
