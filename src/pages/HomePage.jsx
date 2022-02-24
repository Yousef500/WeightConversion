import {useState} from "react";
import {Grid, InputAdornment, TextField} from "@mui/material";

function HomePage() {
    const [kg, setKg] = useState();
    const [pound, setPound] = useState();
    const [ounce, setOunce] = useState();


    const handleInputChange = (e) => {
        const val = e.target.value;
        switch (e.target.name) {
            case "kg":
                setKg(val);
                setPound(val / 0.45359237);
                setOunce(val / 0.02834952);
                break;
            case "pound":
                setPound(val);
                setKg(val * 0.45359237);
                setOunce(val * 16);
                break;
            case "ounce":
                setOunce(val);
                setKg(val * 0.02834952);
                setPound(val / 16);
                break;
            default:
        }
    };
    return (
        <Grid container direction={"row"} justifyContent="center" spacing={4}>
            <Grid item xs={12}/>

            <Grid item xs={12}>
                <TextField
                    onChange={handleInputChange}
                    autoComplete={"off"}
                    value={kg || ""}
                    name="kg"
                    fullWidth
                    autoFocus
                    variant={"outlined"}
                    color={"primaryDark"}
                    label={"Weight in Kg"}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    onChange={handleInputChange}
                    autoComplete={"off"}
                    value={pound || ""}
                    name="pound"
                    fullWidth
                    variant={"outlined"}
                    color={"primaryDark"}
                    label={"Weight in Pounds"}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Lbs</InputAdornment>
                    }}
                />
            </Grid>

            <Grid item xs={12} color={"primaryLight"}>
                <TextField
                    onChange={handleInputChange}
                    autoComplete={"off"}
                    value={ounce || ""}
                    name="ounce"
                    fullWidth
                    variant={"outlined"}
                    color={"primaryDark"}
                    label={"Weight in Ounces"}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Oz</InputAdornment>
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default HomePage;
