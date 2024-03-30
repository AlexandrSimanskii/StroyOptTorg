import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface BrandInputProps {
  brand: string[];
  setBrand: React.Dispatch<React.SetStateAction<string[]>>;
}

const AsideBrand: React.FC<BrandInputProps> = ({ brand, setBrand }) => {
  const handleChange = (newBrand: string) => {
    const isChecked = brand.includes(newBrand);

    if (isChecked) {
      setBrand(brand.filter((item) => item !== newBrand));
    } else {
      setBrand([...brand, newBrand]);
    }
  };


  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="category"
        sx={{ fontSize: "18px", fontWeight: "550" }}
      >
        Бренд
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Makita"
            checked={brand.includes("Makita")}
            onChange={() => handleChange("Makita")}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Bosch"
            checked={brand.includes("Bosch")}
            onChange={() => handleChange("Bosch")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="DEWALT"
            checked={brand.includes("DEWALT")}
            onChange={() => handleChange("DEWALT")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="Dexp"
            checked={brand.includes("Dexp")}
            onChange={() => handleChange("Dexp")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="HUNTER"
            checked={brand.includes("HUNTER")}
            onChange={() => handleChange("HUNTER")}
          />{" "}
          <FormControlLabel
            control={<Checkbox sx={{ color: "rgb(223, 224, 226)" }} />}
            label="PECAHTA"
            checked={brand.includes("PECAHTA")}
            onChange={() => handleChange("PECAHTA")}
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AsideBrand;
