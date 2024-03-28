import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RangeInput from "./RangeInput";
import { useState } from "react";
import AsideCategory from "./AsideCategory";
import AsideBrand from "./AsideBrand";

const AsideFilter = () => {
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState<number[]>([20, 20007]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <aside className="filter">
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
