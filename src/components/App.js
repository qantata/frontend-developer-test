import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Table } from "./Table.js";
import { css } from "@emotion/css";

export const App = () => {
  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 128px;
            margin-bottom: 256px;
          `}
        >
          <div>
            <Typography variant="h3">Users</Typography>
            <Table type="User" />
          </div>

          <div>
            <Typography variant="h3">Projects</Typography>
            <Table type="Project" />
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default App;
