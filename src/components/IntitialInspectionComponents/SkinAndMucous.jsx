import React from 'react';
import {useLocalState} from "../../utils/useLocalState";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {
    cordRemnantSelect,
    damageSelect, edemaSelect, edemaTypeSelect, elasticitySelect,
    hematomasSelect, pathologicalFormationsSelect, peelingSelect,
    rashesProgresSelect,
    skinColorSelect,
    skinColorTypeSelect, turgorSelect, umbilicalWoundSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";

function SkinAndMucous() {
    
    const filter = createFilterOptions();

    const [skinColor,setSkinColor] = useLocalState('','skinColor');
    const [skinColorType,setSkinColorType] = useLocalState('','skinColorType');
    const [damage,setDamage] = useLocalState('','damage');
    const [additionallyDamage,setAdditionallyDamage] = useLocalState('','additionallyDamage');
    const [hematomas,setHematomas] = useLocalState('','hematomas');
    const [additionallyHematomas,setAdditionallyHematomas] = useLocalState('','additionallyHematomas');
    const [rashes,setRashes] = useLocalState('','rashes');
    const [rashesLocation,setRashesLocation] = useLocalState('','rashesLocation');
    const [rashesProgres,setRashesProgres] = useLocalState('','rashesProgres');
    const [pathologicalFormations,setPathologicalFormations] = useLocalState('','pathologicalFormations');
    const [pathologicalFormationsLocation,setPathologicalFormationsLocation] = useLocalState('','pathologicalFormationsLocation');
    const [pathologicalFormationsType,setPathologicalFormationsType] = useLocalState('','pathologicalFormationsType');
    const [additionallyPathologicalFormations,setAdditionallyPathologicalFormations] = useLocalState('','additionallyPathologicalFormations');
    const [peeling,setPeeling] = useLocalState('','peeling');
    const [peelingLocation,setPeelingLocation] = useLocalState('','peelingLocation');
    const [peelingDescription,setPeelingDescription] = useLocalState('','peelingDescription');
    const [edema,setEdema] = useLocalState('','edema');
    const [additionallyEdema,setAdditionallyEdema] = useLocalState('','additionallyEdema');
    const [edemaType,setEdemaType] = useLocalState('','edemaType');
    const [elasticity,setElasticity] = useLocalState('','elasticity');
    const [turgor,setTurgor] = useLocalState('','turgor');
    const [cordRemnant,setCordRemnant] = useLocalState('','cordRemnant');
    const [umbilicalWound,setUmbilicalWound] = useLocalState('','umbilicalWound');
    const [mucous,setMucous] = useLocalState('','mucous');
    const [mucousHumidity,setMucousHumidity] = useLocalState('','mucousHumidity');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">Кожный покров и слизистые</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={skinColorSelect}
                        renderInput={(params) => <TextField {...params} label="Цвет кожи" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSkinColor(newStatus)} value={skinColor || null}
                    />
                    {skinColor === "Истеричность" &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={skinColorTypeSelect}
                            renderInput={(params) => <TextField {...params} label="Тип истеричности" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setSkinColorType(newStatus)} value={skinColorType || null}
                        />
                    }
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={damageSelect}
                        renderInput={(params) => <TextField {...params} label="Повреждения" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setDamage(newStatus)} value={damage || null}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Уточнение повреждений:" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyDamage(event.target.value)} defaultValue={additionallyDamage} disabled={isEnabled}
                                   />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={hematomasSelect}
                        renderInput={(params) => <TextField {...params} label="Гематомы" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHematomas(newStatus)} value={hematomas || null}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Уточнение гематом:" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyHematomas(event.target.value)} defaultValue={additionallyHematomas} disabled={isEnabled}
                                   />
                    </div>
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Тип высыпания" variant="outlined"  size="small"
                                   onChange={event => setRashes(event.target.value)} defaultValue={rashes} disabled={isEnabled}
                                   />
                    </div>
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Локализация высыпаний" variant="outlined"  size="small"
                                   onChange={event => setRashesLocation(event.target.value)} defaultValue={rashesLocation} disabled={isEnabled}
                                   />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={rashesProgresSelect}
                        renderInput={(params) => <TextField {...params} label="Прогресс высыпаний" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setRashesProgres(newStatus)} value={rashesProgres || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={pathologicalFormationsSelect}
                        renderInput={(params) => <TextField {...params} label="Патологические образования" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPathologicalFormations(newStatus)} value={pathologicalFormations || null}
                    />
                    {pathologicalFormations === "Другое" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Образование:" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyPathologicalFormations(event.target.value)} defaultValue={additionallyPathologicalFormations} disabled={isEnabled}
                                   />
                    </div>}
                    {pathologicalFormations === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Локализация образований" variant="outlined"  size="small"
                                   onChange={event => setPathologicalFormationsLocation(event.target.value)} defaultValue={pathologicalFormationsLocation} disabled={isEnabled}
                                   />
                    </div> }
                    {pathologicalFormations === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Тип образований" variant="outlined"  size="small"
                                   onChange={event => setPathologicalFormationsType(event.target.value)} defaultValue={pathologicalFormationsType} disabled={isEnabled}
                                   />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={peelingSelect}
                        renderInput={(params) => <TextField {...params} label="Шелушения" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPeeling(newStatus)} value={peeling || null}
                    />
                    {peeling === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Локализация шелушений" variant="outlined"  size="small"
                                   onChange={event => setPeelingLocation(event.target.value)} defaultValue={peelingLocation} disabled={isEnabled}
                                   />
                    </div>}
                    {peeling === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Описание шелушений" variant="outlined"  size="small"
                                   onChange={event => setPeelingDescription(event.target.value)} defaultValue={peelingDescription} disabled={isEnabled}
                                   />
                    </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={edemaSelect}
                        renderInput={(params) => <TextField {...params} label="Отеки" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setEdema(newStatus)} value={edema || null}
                    />
                    {edema === "Другое" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Описание отеков" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyEdema(event.target.value)} defaultValue={additionallyEdema} disabled={isEnabled}
                                   />
                    </div>}
                    {(edema === "Другое" || edema === "Пастозность" || edema === "Распространенные") &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={edemaTypeSelect}
                            renderInput={(params) => <TextField {...params} label="Прогресс отеков:" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setEdemaType(newStatus)} value={edemaType || null}
                        />}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={elasticitySelect}
                        renderInput={(params) => <TextField {...params} label="Эластичность" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setElasticity(newStatus)} value={elasticity || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={turgorSelect}
                        renderInput={(params) => <TextField {...params} label="Тургор" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setTurgor(newStatus)} value={turgor || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={cordRemnantSelect}
                        renderInput={(params) => <TextField {...params} label="Пуповинный остаток" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setCordRemnant(newStatus)} value={cordRemnant || null}
                    />
                    <Autocomplete
                        value={umbilicalWound || null}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setUmbilicalWound({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setUmbilicalWound({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setUmbilicalWound(newValue);
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
                        options={umbilicalWoundSelect}
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
                            <TextField {...params} label='Пупочная ранка:' />
                        )}
                        className="input_style_card"
                        disabled={isEnabled}
                    />
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Цвет слизистой" variant="outlined"  size="small"
                                   onChange={event => setMucous(event.target.value)} defaultValue={mucous} disabled={isEnabled}
                                   />
                    </div>
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Влажность слизистой" variant="outlined"  size="small"
                                   onChange={event => setMucousHumidity(event.target.value)} defaultValue={mucousHumidity} disabled={isEnabled}
                                   />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkinAndMucous;