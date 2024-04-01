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
  brand,
  setBrand,
  setProducts,
}: AsideFilterProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams({
        price: price.join(","),
        brand: brand.join(","),
        sort: sort,
        category: category,
        limit: limit.toString(),
      }).toString();

      const res = await fetch(`/api/products/get?${params}`);
      const data = await res.json();
      setProducts(data);
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

        <AsideBrand brand={brand} setBrand={setBrand} />

        <Button type="submit" variant="contained" sx={{ marginTop: "30px" }}>
          Применить фильтры
        </Button>
      </form>
    </aside>
  );
};

export default AsideFilter;
