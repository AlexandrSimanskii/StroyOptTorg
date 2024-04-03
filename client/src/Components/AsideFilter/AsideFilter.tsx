import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RangeInput from "./RangeInput";

import AsideCategory from "./AsideCategory";
import AsideBrand from "./AsideBrand";
import { AsideFilterProps } from "../../types/types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";

const AsideFilter = ({
  limit,
  sort,
  price,
  setPrice,
  category,
  setCategory,
  label,
  setLabel,
  setProducts,
  setCountPages,
}: AsideFilterProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams({
        price: price.join(","),
        label: label.join(","),
        sort: sort.split("_")[0],
        order: sort.split("_")[1],
        category: category,
        limit: limit.toString(),
      }).toString();

      const res = await fetch(`/api/products/get?${params}`);
      const data = await res.json();

      setProducts(data.products);
      setCountPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="aside">
      <form className="form" onSubmit={handleSubmit}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="price"
            sx={{ fontSize: "18px", fontWeight: "550" }}
          >
            Цена, ₽
          </AccordionSummary>
          <AccordionDetails>
            <div className="range-value-group">
              <div className="range-value">
                <span>от</span> {}
                {price[0]}
              </div>
              <div className="range-value">
                <span>от </span>
                {}
                {price[1]}
              </div>
            </div>{" "}
            <RangeInput price={price} setPrice={setPrice} />
          </AccordionDetails>
        </Accordion>
        <AsideCategory category={category} setCategory={setCategory} />

        <AsideBrand label={label} setLabel={setLabel} />

        <Button type="submit" variant="contained" sx={{ marginTop: "30px" }}>
          Применить фильтры
        </Button>
      </form>
    </aside>
  );
};

export default AsideFilter;
