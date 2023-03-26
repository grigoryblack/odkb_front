import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {kidneysSelect, stimulationDiuresisSelect} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import {useLocalState} from "../../utils/useLocalState";

function UrinarySystem() {

    const [kidneys,setKidneys] = useLocalState('','kidneys');
    const [diuresisMl,setDiuresisMl] = useLocalState('','diuresisMl');
    const [diuresisKg,setDiuresisKg] = useLocalState('','diuresisKg');
    const [diuresisH,setDiuresisH] = useLocalState('','diuresisH');
    const [stimulationDiuresis,setStimulationDiuresis] = useLocalState('','stimulationDiuresis');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    return (
        <div>
            <div className="title_card_container">Мочевыделительная система</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={kidneysSelect}
                        renderInput={(params) => <TextField {...params} label="Почки" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setKidneys(newStatus)} value={kidneys || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={stimulationDiuresisSelect}
                        renderInput={(params) => <TextField {...params} label="Стимуляция диуреза" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setStimulationDiuresis(newStatus)} value={stimulationDiuresis || null}
                    />
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">мг.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                placeholder="Диурез"
                                onChange={event => setDiuresisMl(event.target.value)} defaultValue={diuresisMl}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">кг.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                placeholder="Диурез"
                                onChange={event => setDiuresisKg(event.target.value)} defaultValue={diuresisKg}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">час</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                placeholder="Диурез"
                                onChange={event => setDiuresisH(event.target.value)} defaultValue={diuresisH}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="section_container">
                </div>
            </div>
        </div>
    );
}

export default UrinarySystem;