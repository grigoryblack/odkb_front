import React from 'react';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {previousPregnanciesSelect} from "../Consts/consts";

function PregancyCourse() {

    const filter = createFilterOptions();

    const [pregnancy,setPregnancy] =  useLocalState('', 'pregnancy')
    const [childbirth,setChildbirth] =  useLocalState('', 'childbirth')
    const [previousPregnancies,setPreviousPregnancies] =  useLocalState('', 'previousPregnancies')
    const [dataSiblings,setDataSiblings] =  useLocalState('', 'dataSiblings')
    const [featuresCoursePregnancy,setFeaturesCoursePregnancy] =  useLocalState('', 'featuresCoursePregnancy')
    const [steroidProphylaxis,setSteroidProphylaxis] =  useLocalState('', 'steroidProphylaxis')

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    return (
        <div>
            <div className="initial_container_title">Течение беременности</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField
                            label="Порядковый номер беременности"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">№</InputAdornment>,
                            }}
                            size="small"
                             onChange={event => setPregnancy(event.target.value)} defaultValue={pregnancy}
                             disabled={isEnabled}
                        />
                    </div>
                    <div className="margin_text_filed">
                        <TextField
                            label="Порядковый номер родов"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">№</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setChildbirth(event.target.value)} defaultValue={childbirth}
                            disabled={isEnabled}
                        />
                    </div>
                </div>
                <div className="section_container">
                    <Autocomplete
                        value={previousPregnancies || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setPreviousPregnancies({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setPreviousPregnancies({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setPreviousPregnancies(newValue);
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
                        options={previousPregnanciesSelect}
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
                            <TextField {...params} label='Исходы предыдущих беременностей' />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Стероидная профилактика" variant="outlined"  size="small"
                                    onChange={event => setSteroidProphylaxis(event.target.value)} defaultValue={steroidProphylaxis} disabled={isEnabled} />
                    </div>
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Данные о сибсах" variant="outlined"  size="small"
                                    onChange={event => setDataSiblings(event.target.value)} defaultValue={dataSiblings} disabled={isEnabled} />
                    </div>
                </div>
                <div className="section_container"></div>
            </div>
            <div className="input_container">
                <TextField
                    id="outlined-multiline-static"
                    label="Течение беременности"
                    multiline
                    rows={7}
                    sx={{width:1148,marginTop:3,marginBottom:'20px'}}
                    onChange={event => setFeaturesCoursePregnancy(event.target.value)} defaultValue={featuresCoursePregnancy}
                    disabled={isEnabled}
                />
            </div>
        </div>
    );
}

export default PregancyCourse;