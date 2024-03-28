import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CategoryInputProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const AsideCategory: React.FC<CategoryInputProps> = ({
  category,
  setCategory,
}) => {
  const handleChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="category"
        sx={{ fontSize: "18px", fontWeight: "550" }}
      >
        Категория
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Сантехника"
            value={"Сантехника"}
            checked={category === "Сантехника"}
            onChange={() => handleChange("Сантехника")}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Отделочные материалы"
            value="Отделочные материалы"
            checked={category === "Отделочные материалы"}
            onChange={() => handleChange("Отделочные материалы")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Электротовары"
            value="Электротовары"
            checked={category === "Электротовары"}
            onChange={() => handleChange("Электротовары")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Инструменты"
            value="Инструменты"
            checked={category === "Инструменты"}
            onChange={() => handleChange("Инструменты")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Столярные изделия"
            value="Столярные изделия"
            checked={category === "Столярные изделия"}
            onChange={() => handleChange("Столярные изделия")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Общестроительные материалы"
            value="Общестроительные материалы"
            checked={category === "Общестроительные материалы"}
            onChange={() => handleChange("Общестроительные материалы")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Для бань и саун"
            value="Для бань и саун"
            checked={category === "Для бань и саун"}
            onChange={() => handleChange("Для бань и саун")}
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AsideCategory;
