import { Button, FilledInput, InputAdornment } from "@mui/material";
import { useState } from "react";

export default function InvEditBtn(props) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({
    weight: props.amount,
    weightRange: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function handleEditStat() {
    setEditing(!editing);
  }

  return (
    <div>
      {editing ? (
        <>
          <FilledInput
            id="filled-adornment-weight"
            value={values.weight}
            onChange={handleChange("weight")}
            endAdornment={
              <InputAdornment position="end">{props.measure}</InputAdornment>
            }
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <Button variant="contained" color="success">
            Save
          </Button>{" "}
          <Button variant="outlined" color="error" onClick={handleEditStat}>
            Cancel
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleEditStat}>
          Edit
        </Button>
      )}
    </div>
  );
}
