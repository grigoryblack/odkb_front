import React, {useState} from 'react';
import {useLocalState} from "../../utils/useLocalState";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {diagnosisSelect, diagnosisSelectTitle, mainSyndromesAdmissionSelect} from "../Consts/consts";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


function DiseaseData() {

    const filter = createFilterOptions();

    const [diseaseHistory,setDiseaseHistory] = useLocalState('','diseaseHistory');
    const [diseaseDynamics,setDiseaseDynamics] = useLocalState('','diseaseDynamics');
    const [mainSyndromesAdmission,setMainSyndromesAdmission] = useLocalState('','mainSyndromesAdmission');

    const [diagnosisMain,setDiagnosisMain] = useLocalState('','diagnosisMain');
    const [diagnosisMainExtra,setDiagnosisMainExtra] = useLocalState('','diagnosisMainExtra');
    const [diagnosisMainComplication,setDiagnosisMainComplication] = useLocalState('','diagnosisMainComplication');
    const [diagnosisBackground,setDiagnosisBackground] = useLocalState('','diagnosisBackground');
    const [diagnosisRelated,setDiagnosisRelated] = useLocalState('','diagnosisRelated');
    const [diagnosisGeneral,setDiagnosisGeneral] = useLocalState('','diagnosisGeneral');

    const [diagnosisAdmissionMain,setDiagnosisAdmissionMain] = useLocalState('','diagnosisAdmissionMain');
    const [diagnosisAdmissionMainExtra,setDiagnosisAdmissionMainExtra] = useLocalState('','diagnosisAdmissionMainExtra');
    const [diagnosisAdmissionMainComplication,setDiagnosisAdmissionMainComplication] = useLocalState('','diagnosisAdmissionMainComplication');
    const [diagnosisAdmissionBackground,setDiagnosisAdmissionBackground] = useLocalState('','diagnosisAdmissionBackground');
    const [diagnosisAdmissionRelated,setDiagnosisAdmissionRelated] = useLocalState('','diagnosisAdmissionRelated');
    const [diagnosisAdmissionGeneral,setDiagnosisAdmissionGeneral] = useLocalState('','diagnosisAdmissionGeneral');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    const [diagnosisAdmissionCheck,setDiagnosisAdmissionCheck] = useLocalState(false,'diagnosisAdmissionCheck');
    const [diagnosisCheck,setDiagnosisCheck] = useLocalState(false,'diagnosisCheck');

    return (
        <div>
            <div className="initial_container_title">Данные о заболевании</div>
            <div className="information_container">
                <TextField
                    id="outlined-multiline-static"
                    label="Анамнез заболевания"
                    multiline
                    rows={6}
                    sx={{width:1148,marginTop:3}}
                    onChange={event => setDiseaseHistory(event.target.value)} defaultValue={diseaseHistory}
                    disabled={isEnabled}
                />
            </div>
            <div className="information_container">
                <TextField
                    id="outlined-multiline-static"
                    label="Динамика заболевания"
                    multiline
                    rows={6}
                    sx={{width:1148,marginTop:3}}
                    onChange={event => setDiseaseDynamics(event.target.value)} defaultValue={diseaseDynamics}
                    disabled={isEnabled}
                />
            </div>
            <div className="subtitle_card_container">Диагноз при поступлении</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <Autocomplete
                            disabled={isEnabled}
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={mainSyndromesAdmissionSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Основные синдромы при поступлении"
                                />
                            )}
                            onChange={(event, newStatus) => setMainSyndromesAdmission(newStatus)} defaultChecked={mainSyndromesAdmission}
                        />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={diagnosisSelect}
                        renderInput={(params) => <TextField {...params} label="Основное заболевание " />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setDiagnosisAdmissionMain(newStatus)} value={diagnosisAdmissionMain || null}
                    />
                    <FormControlLabel sx={{marginTop:"15px"}} control={<Checkbox disabled={isEnabled} checked={diagnosisAdmissionCheck}
                        onClick={()=>setDiagnosisAdmissionCheck(!diagnosisAdmissionCheck)}
                    />} label="Комбинированное основное заболевание" />
                </div>
                <div className="section_container">
                    {diagnosisAdmissionCheck === true &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={diagnosisSelect}
                            renderInput={(params) => <TextField {...params} label="Дополнительно:" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setDiagnosisAdmissionMainExtra(newStatus)} value={diagnosisAdmissionMainExtra || null}
                        />
                    }
                    {diagnosisAdmissionCheck === true &&
                        <Autocomplete
                            value={diagnosisAdmissionMainComplication || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisAdmissionMainComplication({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisAdmissionMainComplication({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisAdmissionMainComplication(newValue);
                                }
                                setDiagnosisAdmissionMainComplication(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Осложнение основного заболевания" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
                <div className="section_container">
                    {diagnosisAdmissionCheck === true &&
                        <Autocomplete
                            value={diagnosisAdmissionBackground || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisAdmissionBackground({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisAdmissionBackground({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisAdmissionBackground(newValue);
                                }
                                setDiagnosisAdmissionBackground(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Фоновое заболевание" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                    {diagnosisAdmissionCheck === true &&
                        <Autocomplete
                            value={diagnosisAdmissionRelated || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisAdmissionRelated({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisAdmissionRelated({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisAdmissionRelated(newValue);
                                }
                                setDiagnosisAdmissionRelated(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Сопутствующее заболевание" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
                <div className="section_container">
                    {diagnosisAdmissionCheck === true &&
                        <Autocomplete
                            value={diagnosisAdmissionGeneral || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisAdmissionGeneral({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisAdmissionGeneral({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisAdmissionGeneral(newValue);
                                }
                                setDiagnosisAdmissionGeneral(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Общее осложнение" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
            </div>
            <div className="subtitle_card_container">Диагноз</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={diagnosisSelect}
                        renderInput={(params) => <TextField {...params} label="Основное заболевание " />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setDiagnosisMain(newStatus)} value={diagnosisMain || null}
                    />
                    <FormControlLabel sx={{marginTop:"15px"}} control={<Checkbox disabled={isEnabled} checked={diagnosisCheck}
                        onClick={()=>setDiagnosisCheck(!diagnosisCheck)}
                    />} label="Комбинированное основное заболевание" />
                </div>
                <div className="section_container">
                    {diagnosisCheck === true &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={diagnosisSelect}
                            renderInput={(params) => <TextField {...params} label="Дополнительно:" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setDiagnosisMainExtra(newStatus)} value={diagnosisMainExtra || null}
                        />
                    }
                    {diagnosisCheck === true &&
                        <Autocomplete
                            value={diagnosisMainComplication || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisMainComplication({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisMainComplication({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisMainComplication(newValue);
                                }
                                setDiagnosisMainComplication(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Осложнение основного заболевания" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
                <div className="section_container">
                    {diagnosisCheck === true &&
                        <Autocomplete
                            value={diagnosisBackground || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisBackground({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisBackground({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisBackground(newValue);
                                }
                                setDiagnosisBackground(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Фоновое заболевание" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                    {diagnosisCheck === true &&
                        <Autocomplete
                            value={diagnosisRelated || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisRelated({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisRelated({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisRelated(newValue);
                                }
                                setDiagnosisRelated(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Сопутствующее заболевание" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
                <div className="section_container">
                    {diagnosisCheck === true &&
                        <Autocomplete
                            value={diagnosisGeneral || null}
                            onChange={(event, newValue ) => {
                                if (typeof newValue === 'string') {
                                    setDiagnosisGeneral({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setDiagnosisGeneral({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setDiagnosisGeneral(newValue);
                                }
                                setDiagnosisGeneral(newValue)
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
                            options={diagnosisSelectTitle}
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
                                <TextField {...params} label="Общее осложнение" />
                            )}
                            className="input_style_card"
                            disabled={isEnabled}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default DiseaseData;