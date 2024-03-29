import { debounce, Slider, Box, styled } from "@mui/material";

const Range = styled(Slider)({
  color: " rgb(24, 111, 212)",
  height: 2,

  "& .MuiSlider-thumb": {
    height: 19,
    width: 19,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
  },
});

export interface RangeInputProps {
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
}

const RangeInput: React.FC<RangeInputProps> = ({ price, setPrice }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Range
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={100}
          min={0}
          max={30000}
        />
      </Box>
    </div>
  );
};

export default RangeInput;
