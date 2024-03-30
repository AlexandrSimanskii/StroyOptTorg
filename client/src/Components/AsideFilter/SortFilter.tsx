import {
  Typography,
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  ButtonGroup,
  SelectChangeEvent,
} from "@mui/material";

import { SortFilterProps } from "../../types/types";

const SortFilter = ({ limit, setLimit, setSort }: SortFilterProps) => {
  const handleButtonClick = async (buttonName: number) => {
    setLimit(buttonName);
  };

  const handleChangeSort = async (event: SelectChangeEvent<string>) => {
    setSort(event.target.value);
  };

  return (
    <div className="sort-form">
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          fullWidth
          sx={{
            flexDirection: "row",
            alignItems: "center",
            color: "rgb(0, 0, 0 )",
          }}
        >
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{
              position: "relative",
              transformOrigin: "center",

              fontSize: "18px",
              fontWeight: 500,
              color: "rgb(0, 0, 0)",
            }}
          >
            Сортировка:
          </InputLabel>
          <Select
            defaultValue={"price_asc"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              fontSize: "15px",
              width: "242px",
              transform: "translateY(-2px)",
              "& .MuiSelect-select": {
                padding: "11px 20px",
              },
            }}
            onChange={handleChangeSort}
          >
            <MenuItem sx={{ fontSize: "15px" }} value={"price_asc"}>
              По возрастанию
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"price_desc"}>
              По убыванию
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"ABC_asc"}>
              По алфавиту A-Я{" "}
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"ABC_desc"}>
              По алфавиту Я-А{" "}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "15px", color: "rgb(65, 68, 70)" }}
        >
          Показывать по:
        </Typography>
        <ButtonGroup sx={{ display: "flex", gap: "6px" }}>
          <button
            className={
              limit === 9 ? "sort-button sort-button--active" : "sort-button"
            }
            onClick={() => handleButtonClick(9)}
          >
            9
          </button>
          <button
            className={
              limit === 12 ? "sort-button sort-button--active" : "sort-button"
            }
            onClick={() => handleButtonClick(12)}
          >
            12
          </button>
          <button
            className={
              limit === 18 ? "sort-button sort-button--active" : "sort-button"
            }
            onClick={() => handleButtonClick(18)}
          >
            18
          </button>
          <button
            className={
              limit === 24 ? "sort-button sort-button--active" : "sort-button"
            }
            onClick={() => handleButtonClick(24)}
          >
            24
          </button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default SortFilter;
