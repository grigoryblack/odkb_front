import React from 'react';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import TextField from "@mui/material/TextField";
import {
    bornSelect,
    comeFurtherTreatmentAndExaminationSelect,
    comesFromSelect,
    EPIDNumberDiagnosisSelect
} from "../Consts/consts";

function PassportData() {

    const filter = createFilterOptions();

    const [fullNameChild,setFullNameChild] = useLocalState('', 'fullNameChild' );
    const [comeFurtherTreatmentAndExamination,setComeFurtherTreatmentAndExamination] = useLocalState('','comeFurtherTreatmentAndExamination');
    const [born,setBorn] = useLocalState('','born');
    const [admissionAge,setAdmissionAge] = useLocalState('','admissionAge');
    const [comesFrom,setComesFrom] = useLocalState('','comesFrom');
    const [EPIDNumber,setEPIDNumber] = useLocalState('','EPIDNumber');
    const [EPIDNumberDate,setEPIDNumberDate] = useLocalState('','EPIDNumberDate');
    const [EPIDNumberDiagnosis,setEPIDNumberDiagnosis] = useLocalState('','EPIDNumberDiagnosis');
    const [receiptDate,setReceiptDate] = useLocalState('','receiptDate');
    const [arrivalTime,setArrivalTime] = useLocalState('','arrivalTime');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    return (
        <div>
            <div className="initial_container_title">Паспортные данные</div>

            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="	Фамилия Имя Отчество" variant="outlined"  size="small"
                                   onChange={event => setFullNameChild(event.target.value)} defaultValue={fullNameChild} disabled={isEnabled}
                        />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        freeSolo
                        options={comeFurtherTreatmentAndExaminationSelect}
                        renderInput={(params) => <TextField {...params}  label="Экстренность поступления в ОПН"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setComeFurtherTreatmentAndExamination(newStatus)} value={comeFurtherTreatmentAndExamination || null}
                    />
                    <Autocomplete
                        value={born || null}
                        onChange={(event, newValue ) => {
                            if (typeof newValue === 'string') {
                                setBorn({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setBorn({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setBorn(newValue);
                            }
                            setBorn(newValue)
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
                        options={bornSelect}
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
                            <TextField {...params} label="Родился в:" />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Дата рождения ребенка" size="small" inputProps={{
                            style: {
                                fontSize: "15px",
                                fontFamily: ['Montserrat'],
                                fontWeight: '450'
                            }
                        }}
                                   InputLabelProps={{
                                       style: {
                                           fontSize: "18px",
                                           fontFamily: ['Montserrat'],
                                           fontWeight: '450',
                                           width:245,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setAdmissionAge(event.target.value)} defaultValue={admissionAge}
                                   disabled={isEnabled}
                        />
                    </div>
                    <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Дата поступления в ОПН" size="small" disabled={isEnabled}  onChange={event => setReceiptDate(event.target.value)} defaultValue={receiptDate} inputProps={{
                            style: {
                                fontSize: "15px",
                                fontFamily: ['Montserrat'],
                                fontWeight: '450'
                            }
                        }}
                                   InputLabelProps={{
                                       style: {
                                           fontSize: "18px",
                                           fontFamily: ['Montserrat'],
                                           fontWeight: '450',
                                           width:245,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true

                                   }}
                                    />
                    </div>
                    <div className="margin_text_filed">
                        <TextField type="time" className="input_style_card" label="Время поступления" size="small" disabled={isEnabled} onChange={event => setArrivalTime(event.target.value)} defaultValue={arrivalTime} inputProps={{
                            style: {
                                fontSize: "15px",
                                fontFamily: ['Montserrat'],
                                fontWeight: '450'
                            }
                        }}
                                   InputLabelProps={{
                                       style: {
                                           fontSize: "18px",
                                           fontFamily: ['Montserrat'],
                                           fontWeight: '450',
                                           width:200,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                    />
                    </div>
                    <Autocomplete
                        value={comesFrom || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setComesFrom({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setComesFrom({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setComesFrom(newValue);
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
                        options={comesFromSelect}
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
                            <TextField {...params} label="Кем направлен в ОПН" />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Эпидномер" variant="outlined"  size="small"
                                    onChange={event => setEPIDNumber(event.target.value)} defaultValue={EPIDNumber} disabled={isEnabled} />
                    </div>
                    <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Дата" size="small" inputProps={{
                            style: {
                                fontSize: "15px",
                                fontFamily: ['Montserrat'],
                                fontWeight: '450'
                            }
                        }}
                                   InputLabelProps={{
                                       style: {
                                           fontSize: "18px",
                                           fontFamily: ['Montserrat'],
                                           fontWeight: '450',
                                           width:50,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setEPIDNumberDate(event.target.value)} defaultValue={EPIDNumberDate} disabled={isEnabled}  />
                    </div>
                    <div className="margin_text_filed">
                        <Autocomplete
                            value={EPIDNumberDiagnosis || null}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setEPIDNumberDiagnosis({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setEPIDNumberDiagnosis({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setEPIDNumberDiagnosis(newValue);
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
                            options={EPIDNumberDiagnosisSelect}
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
                                <TextField {...params} label="Диагноз" />
                            )}
                            disabled={isEnabled}
                        />
                    </div>
                </div>
                <div className="section_container">
                </div>
            </div>
        </div>
    );
}

export default PassportData;