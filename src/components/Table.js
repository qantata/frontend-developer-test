import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { fetchProjects, fetchUsers } from "../utils/fetchApiData.js";
import { CircularProgress, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { css } from "@emotion/css";

export const Table = ({ type }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sortModel, setSortModel] = useState([
    {
      field: "date",
      sort: "desc",
    },
  ]);
  const [data, setData] = useState([]);

  const onLoadMoreClick = async () => {
    if (isFetching) {
      return;
    }

    setIsError(false);
    setIsFetching(true);

    try {
      let newData;
      if (type === "User") {
        newData = await fetchUsers();
      } else {
        newData = await fetchProjects();
      }

      setData([...data, ...newData]);
    } catch (err) {
      setIsError(true);
    }

    setIsFetching(false);
  };

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 140,
    },
    {
      field: "id",
      headerName: `${type} ID`,
      width: 360,
      sortable: false,
    },
    {
      field: "oldValue",
      headerName: `Old Value`,
      width: 260,
      sortable: false,
    },
    {
      field: "newValue",
      headerName: `New Value`,
      width: 260,
      sortable: false,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} data-testid="table">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sortingOrder={["asc", "desc"]}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />

      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 24px;
        `}
      >
        <Button variant="contained" onClick={onLoadMoreClick}>
          Load more
        </Button>

        {isFetching && <CircularProgress />}
        {isError && (
          <Typography
            variant="p"
            style={{ color: "red" }}
            data-testid="error-msg"
          >
            We had problems fetching your data. Please try again.
          </Typography>
        )}

        <Typography data-testid="nr-items">
          There are {data.length} items
        </Typography>
      </div>
    </div>
  );
};
