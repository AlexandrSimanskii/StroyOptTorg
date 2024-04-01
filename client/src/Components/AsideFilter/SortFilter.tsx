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

import { SortFilterProps, Product } from "../../types/types";

const SortFilter = ({
  limit,
  sort,
  setLimit,
  setSort,
  products,
  setProducts,
  price,
  brand,
  category,
  startIndex,
}: SortFilterProps) => {
  const handleButtonClick = async (buttonName: number) => {
    if (buttonName < limit) {
      setProducts((prev) => prev.filter((item, id) => id < buttonName));
    } else if (buttonName > limit) {
      try {
        const params = new URLSearchParams({
          startIndex: startIndex.toString(),
          price: price.join(","),
          brand: brand.join(","),
          sort: sort,
          category: category,
          limit: buttonName.toString(),
        }).toString();

        const res = await fetch(`/api/products/get?${params}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    setLimit(buttonName);
  };

  const handleChangeSort = async (event: SelectChangeEvent<string>) => {
    const sortData = event.target.value.split("_");
    let sortedProducts: Product[] = [];

    if (sortData[0] === "regularPrice") {
      sortedProducts = products.sort((a, b) => {
        const priceA =
          a.discountPrice !== undefined ? a.discountPrice : a.regularPrice;
        const priceB =
          b.discountPrice !== undefined ? b.discountPrice : b.regularPrice;

        return sortData[1] === "asc" ? priceA - priceB : priceB - priceA;
      });
    }

    if (sortData[0] === "az") {
      sortedProducts = [...products].sort((a, b) =>
        sortData[1] === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }

    setProducts(sortedProducts);
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
            defaultValue={"regularPrice_asc"}
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
            <MenuItem sx={{ fontSize: "15px" }} value={"regularPrice_asc"}>
              По возрастанию
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"regularPrice_desc"}>
              По убыванию
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"az_asc"}>
              По алфавиту A-Я{" "}
            </MenuItem>
            <MenuItem sx={{ fontSize: "15px" }} value={"az_desc"}>
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
