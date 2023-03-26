import React from 'react';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {
    bigFontanelSelect,
    bulbarDisordersSelect, cephalhematomasLocalSelect, cephalhematomasSelect,
    convulsionsSelect, convulsionsTypeSelect, meningealSymptomsSelect, muscleToneSelect,
    reactionInspectionSelect, reflexesNewbornSelect,
    severityDueSelect, skullShapeSelect, skullSuturesSelect,
    statusAtAdmissionSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";

function InspectionStandard() {

    const filter = createFilterOptions();

    const [statusAtAdmission,setStatusAtAdmission] = useLocalState('','statusAtAdmission');
    const [severityDue,setSeverityDue] = useLocalState('','severityDue');
    const [reactionInspection,setReactionInspection] = useLocalState('','reactionInspection');
    const [additionallyReactionInspection,setAdditionallyReactionInspection] = useLocalState('','additionallyReactionInspection');
    const [convulsions,setConvulsions] = useLocalState('','convulsions');
    const [convulsionsType,setConvulsionsType] = useLocalState('','convulsionsType');
    const [muscleTone,setMuscleTone] = useLocalState('','muscleTone');
    const [additionallyMuscleTone,setAdditionallyMuscleTone] = useLocalState('','additionallyMuscleTone');
    const [reflexesNewborn,setReflexesNewborn] = useLocalState('','reflexesNewborn');
    const [bulbarDisorders,setBulbarDisorders] = useLocalState('','bulbarDisorders');
    const [skullShape,setSkullShape] = useLocalState('','skullShape');
    const [additionallySkullShape,setAdditionallySkullShape] = useLocalState('','additionallySkullShape');
    const [cephalhematomas,setCephalhematomas] = useLocalState('','cephalhematomas');
    const [cephalhematomasSize,setCephalhematomasSize] = useLocalState('','cephalhematomasSize');
    const [cephalhematomasLocation,setCephalhematomasLocation] = useLocalState('','cephalhematomasLocation');
    const [skullSutures,setSkullSutures] = useLocalState('','skullSutures');
    const [additionallySkullSutures,setAdditionallySkullSutures] = useLocalState('','additionallySkullSutures');
    const [bigFontanel,setBigFontanel] = useLocalState('','bigFontanel');
    const [bigFontanelSize,setBigFontanelSize] = useLocalState('','bigFontanelSize');
    const [meningealSymptoms,setMeningealSymptoms] = useLocalState('','meningealSymptoms');
    const [additionallyMeningealSymptoms,setAdditionallyMeningealSymptoms] = useLocalState('','additionallyMeningealSymptoms');
    const [statusAtAdmissionOther,setStatusAtAdmissionOther] = useLocalState('','statusAtAdmissionOther');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');


    return (
        <div>
            <div className="initial_container_title">Стандарт осмотра</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={statusAtAdmissionSelect}
                        renderInput={(params) => <TextField {...params} label="Состояние при поступлении" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setStatusAtAdmission(newStatus)} value={statusAtAdmission || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        sx={{width:"28.3ch"}}
                        size="small"
                        multiple
                        id="tags-outlined"
                        options={severityDueSelect}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Тяжесть обусловлена"
                            />
                        )}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSeverityDue(newStatus)} defaultChecked={severityDue}
                    />
                </div>
                <div className="section_container">
                </div>
                <div className="section_container">
                </div>
            </div>

            <div className="title_card_container">Общие данные</div>

            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        value={reactionInspection || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setReactionInspection({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setReactionInspection({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setReactionInspection(newValue);
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
                        options={reactionInspectionSelect}
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
                            <TextField {...params} label='Реакция на осмотр ' />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно реация на осмотр" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyReactionInspection(event.target.value)} defaultValue={additionallyReactionInspection} disabled={isEnabled}
                                  />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={convulsionsSelect}
                        renderInput={(params) => <TextField {...params} label="Судороги" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setConvulsions(newStatus)} value={convulsions || null}
                    />
                    {convulsions === 'Есть' &&
                        <Autocomplete
                            value={ convulsionsType || null}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setConvulsionsType({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setConvulsionsType({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setConvulsionsType(newValue);
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
                            options={convulsionsTypeSelect}
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
                                <TextField {...params} label='Тип судорог:' />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        /> }
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={muscleToneSelect}
                        renderInput={(params) => <TextField {...params} label="Мышечный тонус" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setMuscleTone(newStatus)} value={muscleTone || null}
                    />
                    {(muscleTone === "Нормальный для гестационного возраста" || muscleTone === "Повышен"  || muscleTone === "Снижен") &&
                        <div className="margin_text_filed">
                            <TextField id="outlined-basic" className="input_style_card" label="Дополнительно мышечный тонус" variant="outlined"  size="small"
                                       onChange={event => setAdditionallyMuscleTone(event.target.value)} defaultValue={additionallyMuscleTone} disabled={isEnabled}
                                      />
                        </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={reflexesNewbornSelect}
                        renderInput={(params) => <TextField {...params} label="Рефлексы новорожденного" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setReflexesNewborn(newStatus)} value={reflexesNewborn || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={bulbarDisordersSelect}
                        renderInput={(params) => <TextField {...params} label="Бульбарные нарушения" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setBulbarDisorders(newStatus)} value={bulbarDisorders || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={skullShapeSelect}
                        renderInput={(params) => <TextField {...params} label="Форма черепа" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSkullShape(newStatus)} value={skullShape || null}
                    />
                    {(skullShape === "Долихоцефалическая" || skullShape === "Брахицефалическая" || skullShape === "Симметричная" || skullShape === "Асимметричная"  )&&<div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно форма черепа" variant="outlined"  size="small"
                                   onChange={event => setAdditionallySkullShape(event.target.value)} defaultValue={additionallySkullShape} disabled={isEnabled}
                                  />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={cephalhematomasSelect}
                        renderInput={(params) => <TextField {...params} label="Кефалогематома" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setCephalhematomas(newStatus)} value={cephalhematomas || null}
                    />
                    {cephalhematomas ==="Есть" &&
                        <div className="margin_text_filed">
                            <TextField id="outlined-basic" className="input_style_card" label="Размер"  placeholder="См * См" variant="outlined"  size="small"
                                       onChange={event => setCephalhematomasSize(event.target.value)} defaultValue={cephalhematomasSize} disabled={isEnabled}
                                      />
                        </div>}
                    {cephalhematomas ==="Есть" &&
                        <Autocomplete
                            value={cephalhematomasLocation || null}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setCephalhematomasLocation({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setCephalhematomasLocation({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setCephalhematomasLocation(newValue);
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
                            options={cephalhematomasLocalSelect}
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
                                <TextField {...params} label='Локализация:' />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={skullSuturesSelect}
                        renderInput={(params) => <TextField {...params} label="Швы черепа" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSkullSutures(newStatus)} value={skullSutures || null}
                    />
                    {(skullSutures==='Расхождение' || skullSutures==='Захождение') && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно швы черепа" variant="outlined"  size="small"
                                   onChange={event => setAdditionallySkullSutures(event.target.value)} defaultValue={additionallySkullSutures} disabled={isEnabled}
                                  />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={bigFontanelSelect}
                        renderInput={(params) => <TextField {...params} label="Большой родничок" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setBigFontanel(newStatus)} value={bigFontanel || null}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Размер родничка" placeholder="См * См" variant="outlined"  size="small"
                                   onChange={event => setBigFontanelSize(event.target.value)} defaultValue={bigFontanelSize} disabled={isEnabled}
                                  />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={meningealSymptomsSelect}
                        renderInput={(params) => <TextField {...params} label="Менингеальные симптомы" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setMeningealSymptoms(newStatus)} value={meningealSymptoms || null}
                    />
                    {meningealSymptoms==="Определяются" && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно менингеальные симптомы" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyMeningealSymptoms(event.target.value)} defaultValue={additionallyMeningealSymptoms} disabled={isEnabled}
                                  />
                    </div>}
                </div>
                <div className="section_container">
                </div>
            </div>
            <div className="information_container">
                <TextField
                    className="input_style_card"
                    id="outlined-multiline-static"
                    label="Другое"
                    multiline
                    rows={7}
                    sx={{width:1148,marginTop:3}}
                    onChange={event => setStatusAtAdmissionOther(event.target.value)} defaultValue={statusAtAdmissionOther}
                    disabled={isEnabled}
                />
            </div>
        </div>
    );
}

export default InspectionStandard;