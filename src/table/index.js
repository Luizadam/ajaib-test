import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { GetApi } from "../services/api";

const ListTable = () => {
  const [listData, setListData] = React.useState(null);
  const [filterText, setFilterText] = React.useState(null);
  const [state, setState] = React.useState({
    keyword: "",
    page: 1,
    results: 11,
    shortBy: "",
    gender: "",
  });
  const asArray = Object.entries(state);
  const filtered = asArray.filter(([key, value]) => value !== "");
  const stateFinal = Object.fromEntries(filtered);
  const columns = [
    {
      name: "Name",
      cell: (row) => <div>{row.name.first + " " + row.name.last}</div>,
      sortable: true,
      sortField: "name",
    },
    {
      name: "Email",
      cell: (row) => <div>{row.email}</div>,
      sortable: true,
      sortField: "email",
    },
    {
      name: "Gender",
      cell: (row) => <div>{row.gender}</div>,
      sortable: true,
      sortField: "gender",
    },
  ];

  const handleValSearch = (e) => {
    const { value } = e.target;
    setFilterText(value);
  };

  const fetchValSearch = async () => {
    setState((prev) => ({
      ...prev,
      keyword: filterText,
    }));
  };

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    };
  });

  const changeGender = (e) => {
    setState((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const createColumns = () => {
    return [...mergedColumns];
  };

  const handleSort = async (column) => {
    setState((prev) => ({
      ...prev,
      shortBy: column.sortField,
    }));
  };

  const fetchListUser = async () => {
    let { res } = await GetApi(stateFinal);
    if (res) {
      setListData(res);
    }
  };

  const nextPage = async (e) => {
    setState((prev) => ({
      ...prev,
      page: e,
    }));
  };
  useEffect(() => {
    fetchListUser();
  }, [state]);

  useEffect(() => {
    fetchListUser();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row mt-3">
        <div className="input-group mb-3 col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
            onChange={handleValSearch}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={fetchValSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group mb-3 col-md-3">
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(e) => changeGender(e)}
          >
            <option value="">Choose...</option>
            <option value="All">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
      </div>
      <DataTable
        columns={createColumns()}
        data={listData?.results}
        onSort={handleSort}
        pagination
        paginationServer
        paginationComponentOptions={{ noRowsPerPage: true }}
        //   paginationTotalRows={listData?.info?.result}
        onChangePage={nextPage}
        noHeader={true}
      />
    </div>
  );
};

export default ListTable;
