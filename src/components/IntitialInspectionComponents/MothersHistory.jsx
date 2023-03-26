import React from 'react';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import TextField from "@mui/material/TextField";
import {
    erythrocyteBodySelect,
    familyStatusSelect, HIVTesting,
    maternalInfectiousHistorySelect,
    motherBloodGroupSelect
} from "../Consts/consts";

function MothersHistory() {

    const filter = createFilterOptions();

    const [motherDateBirth,setMotherDateBirth] = useLocalState('', 'motherDateBirth');
    const [familyStatus,setFamilyStatus] = useLocalState('', 'familyStatus');
    const [maternalIllnesses,setMaternalIllnesses] = useLocalState('', 'maternalIllnesses');
    const [motherBloodGroup,setMotherBloodGroup] = useLocalState('', 'motherBloodGroup');
    const [erythrocyteBody,setErythrocyteBody] = useLocalState('', 'erythrocyteBody');
    const [HIVTestingMother,setHIVTestingMother] = useLocalState('', 'HIVTestingMother');
    const [HIVTestingFather,setHIVTestingFather] = useLocalState('', 'HIVTestingFather');
    const [maternalInfectiousHistory,setMaternalInfectiousHistory] = useLocalState('', 'maternalInfectiousHistory');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    return (
        <div>
            <div className="initial_container_title">Анамнез матери</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Дата рождения матери" size="small" disabled={isEnabled}  onChange={event => setMotherDateBirth(event.target.value)} defaultValue={motherDateBirth} inputProps={{
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
                                           width:230,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                    />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        freeSolo
                        options={familyStatusSelect}
                        renderInput={(params) => <TextField {...params} label="Семейное положение матери" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setFamilyStatus(newStatus)} value={familyStatus || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        value={maternalInfectiousHistory || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setMaternalInfectiousHistory({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setMaternalInfectiousHistory({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setMaternalInfectiousHistory(newValue);
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
                        options={maternalInfectiousHistorySelect}
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
                            <TextField {...params} label="Инфекционный анамнез матери" />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        freeSolo
                        options={motherBloodGroupSelect}
                        renderInput={(params) => <TextField {...params} label="Группа крови матери" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setMotherBloodGroup(newStatus)} value={motherBloodGroup || null}
                    />
                    {(motherBloodGroup === '0(I)Rh +(пол)' || motherBloodGroup === '0(I)Rh –(отр)' || motherBloodGroup === 'А(II)Rh –(отр)' || motherBloodGroup === 'B(III)Rh –(отр)' || motherBloodGroup === 'АB(IV)Rh –(отр)') &&
                        <div className="margin_text_filed">
                            <Autocomplete
                                disabled={isEnabled}
                                size="small"
                                id="combo-box-demo"
                                options={erythrocyteBodySelect}
                                renderInput={(params) => <TextField {...params} label="Наличие антиэритроцитарных антител" />}
                                className="input_style_card"
                                onChange={(event, newStatus) => setErythrocyteBody(newStatus)} value={erythrocyteBody || null}
                            />
                        </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={HIVTesting}
                        renderInput={(params) => <TextField {...params} label="ВИЧ статус отца" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHIVTestingFather(newStatus)} value={HIVTestingFather || null}
                    />
                    {(HIVTestingFather === 'Положительный' || HIVTestingFather === 'Неизвестен' ) && <div className="notification_hiv"> Проверить оформление отказа от АРВТ!</div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={HIVTesting}
                        renderInput={(params) => <TextField {...params} label="ВИЧ статус матери" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHIVTestingMother(newStatus)} value={HIVTestingMother || null}
                    />
                    {(HIVTestingMother === 'Положительный' || HIVTestingMother === 'Неизвестен' ) && <div className="notification_hiv"> Проверить оформление отказа от АРВТ!</div>}
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField
                            id="outlined-multiline-static"
                            label="Заболевания матери "
                            multiline
                            rows={4}
                            sx={{width:390}}
                             onChange={event => setMaternalIllnesses(event.target.value)} defaultValue={maternalIllnesses}
                            disabled={isEnabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MothersHistory;