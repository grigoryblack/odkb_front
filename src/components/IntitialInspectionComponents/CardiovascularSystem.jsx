import React from 'react';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {
    childBloodTypeSelect,
    heartRateSelect,
    heartSoundsSelect,
    hemodynamicsSelect,
    noiseExtraSelect,
    noiseSelect, paleSpotSymptomSelect,
    pulseDeterminedSelect,
} from "../Consts/consts";
import TextField from "@mui/material/TextField";

function CardiovascularSystem() {

    const filter = createFilterOptions();

    const [hemodynamics,setHemodynamics] = useLocalState('','hemodynamics');
    const [heartSounds,setHeartSounds] = useLocalState('','heartSounds');
    const [heartRate,setHeartRate] = useLocalState('','heartRate');
    const [noise,setNoise] = useLocalState('','noise');
    const [noiseExtra,setNoiseExtra] = useLocalState('','noiseExtra');
    const [pulseDetermined,setPulseDetermined] = useLocalState('','pulseDetermined');
    const [paleSpotSymptom,setPaleSpotSymptom] = useLocalState('','paleSpotSymptom');
    const [childBloodType,setChildBloodType]= useLocalState('','childBloodType');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">Сердечно-сосудистая система</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={hemodynamicsSelect}
                        renderInput={(params) => <TextField {...params} label="Гемодинамика" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHemodynamics(newStatus)} value={hemodynamics || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={heartSoundsSelect}
                        renderInput={(params) => <TextField {...params} label="Тоны сердца" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHeartSounds(newStatus)} value={heartSounds || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={heartRateSelect}
                        renderInput={(params) => <TextField {...params} label="Ритм сердечных сокращений" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHeartRate(newStatus)} value={heartRate || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={noiseSelect}
                        renderInput={(params) => <TextField {...params} label="Шум" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setNoise(newStatus)} value={noise || null}
                    />
                    {noise === "Есть" &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={noiseExtraSelect}
                            renderInput={(params) => <TextField {...params} label="Тип шума" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setNoiseExtra(newStatus)} value={noiseExtra || null}
                        />}
                </div>
                <div className="section_container">
                    <Autocomplete
                        value={pulseDetermined || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setPulseDetermined({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setPulseDetermined({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setPulseDetermined(newValue);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const { inputValue } = params;
                            // Suggest the creation of a new value
                            const isExisting = options.some((option) => inputValue === option.title);
                            if (inputValue !== '' && !isExisting) {
                                filtered.push({
                                    inputValue,
                                    title: `Добавить "${inputValue}"`,
                                });
                            }

                            return filtered;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id="free-solo-with-text-demo"
                        options={pulseDeterminedSelect}
                        size="small"
                        getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                            if (typeof option === 'string') {
                                return option;
                            }
                            // Add "xxx" option created dynamically
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            // Regular option
                            return option.title;
                        }}
                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                        sx={{ width: 300 }}
                        freeSolo
                        renderInput={(params) => (
                            <TextField {...params} label='Пульс определяется' />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={paleSpotSymptomSelect}
                        renderInput={(params) => <TextField {...params} label="Симптом бледного пятна" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPaleSpotSymptom(newStatus)} value={paleSpotSymptom || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={childBloodTypeSelect}
                        renderInput={(params) => <TextField {...params} label="Группа крови ребенка" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setChildBloodType(newStatus)} value={childBloodType || null}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardiovascularSystem;