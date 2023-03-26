import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {
    auscultatoryPictureExtraSelect,
    auscultatoryPictureSelect,
    biomechanicsRespirationSelect,
    breathingThroughNoseSelect,
    chestShapeSelect,
    oxygenDependenceSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";


function RespiratorySystem() {

    const [oxygenDependence,setOxygenDependence] = useLocalState('','oxygenDependence');
    const [chestShape,setChestShape] = useLocalState('','chestShape');
    const [chestShapeExtra,setChestShapeExtra] = useLocalState('','chestShapeExtra');
    const [breathingThroughNose,setBreathingThroughNose] = useLocalState('','breathingThroughNose');
    const [biomechanicsRespiration,setBiomechanicsRespiration] = useLocalState('','biomechanicsRespiration');
    const [auscultatoryPicture,setAuscultatoryPicture] = useLocalState('','auscultatoryPicture');
    const [auscultatoryPictureExtra,setAuscultatoryPictureExtra] = useLocalState('','auscultatoryPictureExtra');
    const [auscultatoryPictureExtraText,setAuscultatoryPictureExtraText] = useLocalState('','auscultatoryPictureExtraText');
    const [wheezing,setWheezing] = useLocalState('','wheezing');
    const [crepitus,setCrepitus] = useLocalState('','crepitus');
    const [respirationRate,setRespirationRate] = useLocalState('','respirationRate');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">Дыхательная сиситема</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={oxygenDependenceSelect}
                        renderInput={(params) => <TextField {...params} label="Кислородозависимость" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setOxygenDependence(newStatus)} value={oxygenDependence || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={chestShapeSelect}
                        renderInput={(params) => <TextField {...params} label="Форма грудной клетки" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setChestShape(newStatus)} value={chestShape || null}
                    />
                    {chestShape === "Асимметрия" && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Асимметрия дополнительно" variant="outlined"  size="small"
                                   onChange={event => setChestShapeExtra(event.target.value)} defaultValue={chestShapeExtra} disabled={isEnabled}
                                   />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={breathingThroughNoseSelect}
                        renderInput={(params) => <TextField {...params} label="Дыхание через нос" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setBreathingThroughNose(newStatus)} value={breathingThroughNose || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={biomechanicsRespirationSelect}
                        renderInput={(params) => <TextField {...params} label="Биомеханика дыхания" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setBiomechanicsRespiration(newStatus)} value={biomechanicsRespiration || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={auscultatoryPictureSelect}
                        renderInput={(params) => <TextField {...params} label="Аускультативная картина" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setAuscultatoryPicture(newStatus)} value={auscultatoryPicture || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={auscultatoryPictureExtraSelect}
                        renderInput={(params) => <TextField {...params} label="Проведение аускультивной картины:" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setAuscultatoryPictureExtra(newStatus)} value={auscultatoryPictureExtra || null}
                    />
                    {auscultatoryPictureExtra === "Ослаблено" && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Проведение аускультивной картины дополнительно" variant="outlined"  size="small"
                                   onChange={event => setAuscultatoryPictureExtraText(event.target.value)} defaultValue={auscultatoryPictureExtraText} disabled={isEnabled}
                                   />
                    </div>}
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Хрипы" variant="outlined"  size="small"
                                   onChange={event => setWheezing(event.target.value)} defaultValue={wheezing} disabled={isEnabled}
                                   />
                    </div>
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Крепитация" variant="outlined"  size="small"
                                   onChange={event => setCrepitus(event.target.value)} defaultValue={crepitus} disabled={isEnabled}
                                   />
                    </div>
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">раз в минуту</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setRespirationRate(event.target.value)} defaultValue={respirationRate}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="section_container"> </div>
            </div>
        </div>
    );
}

export default RespiratorySystem;