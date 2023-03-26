import React, {useState} from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {
    bowelMovementSelect,
    feedingSelect, feedingTypeSelect, feedNameSelect,
    liverSelect,
    peristalsisSelect,
    spleenSelect,
    stomachSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

function DigestiveSystem() {

    const [stomach,setStomach] = useLocalState('','stomach');
    const [peristalsis,setPeristalsis] = useLocalState('','peristalsis');
    const [liver,setLiver] = useLocalState('','liver');
    const [liverSize,setLiverSize] = useLocalState('','liverSize');
    const [spleen,setSpleen] = useLocalState('','spleen');
    const [bowelMovement,setBowelMovement] = useLocalState('','bowelMovement');
    const [bowelMovementCount,setBowelMovementCount] = useLocalState('','bowelMovementCount');
    const [bowelMovementType,setBowelMovementType] = useLocalState('','bowelMovementType');
    const [feeding,setFeeding] = useLocalState('','feeding');
    const [feedName,setFeedName] = useLocalState('','feedName');
    const [feedingCount,setFeedingCount] = useLocalState('','feedingCount');
    const [feedingTime,setFeedingTime] = useLocalState('','feedingTime');
    const [feedingType,setFeedingType] = useLocalState('','feedingType');
    const [feedingTypeTime,setFeedingTypeTime] = useLocalState('','feedingTypeTime');
    const [regurgitation,setRegurgitation] = useLocalState('','regurgitation');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">Пищеварительная система</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <Autocomplete
                            disabled={isEnabled}
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={stomachSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Живот"
                                />
                            )}
                            onChange={(event, newStatus) => setStomach(newStatus)} defaultChecked={stomach}
                        />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={peristalsisSelect}
                        renderInput={(params) => <TextField {...params} label="Перистальтика" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPeristalsis(newStatus)} value={peristalsis || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={liverSelect}
                        renderInput={(params) => <TextField {...params} label="Печень" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setLiver(newStatus)} value={liver || null}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Размер печени" placeholder="См * См" variant="outlined"  size="small"
                                   onChange={event => setLiverSize(event.target.value)} defaultValue={liverSize} disabled={isEnabled}
                        />
                    </div>
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={spleenSelect}
                        renderInput={(params) => <TextField {...params} label="Селезенка" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSpleen(newStatus)} value={spleen || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={bowelMovementSelect}
                        renderInput={(params) => <TextField {...params} label="Стул" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setBowelMovement(newStatus)} value={bowelMovement || null}
                    />
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">раз в сутки</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                placeholder="Стул кол-во раз"
                                onChange={event => setBowelMovementCount(event.target.value)} defaultValue={bowelMovementCount}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Цвет и консистенция стула" placeholer="См * См" variant="outlined"  size="small"
                                   onChange={event => setBowelMovementType(event.target.value)} defaultValue={bowelMovementType} disabled={isEnabled}
                        />
                    </div>
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <Autocomplete
                            disabled={isEnabled}
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={feedingSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Кормление"
                                />
                            )}
                            onChange={(event, newStatus) => setFeeding(newStatus)} defaultChecked={feeding}
                        />
                    </div>
                    {feeding?.[0] === 'Смесь' &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={feedNameSelect}
                            renderInput={(params) => <TextField {...params} label="Вид смеси" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setFeedName(newStatus)} value={feedName || null}
                        />}
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">мл.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setFeedingCount(event.target.value)} defaultValue={feedingCount}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                    <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">раз в сутки</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setFeedingTime(event.target.value)} defaultValue={feedingTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={feedingTypeSelect}
                        renderInput={(params) => <TextField {...params} label="Способ кормления" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setFeedingType(newStatus)} value={feedingType || null}
                    />
                    {feedingType==="Через зонд за:" && <div className="margin_text_filed">
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">часа</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setFeedingTypeTime(event.target.value)} defaultValue={feedingTypeTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Срыгивания" variant="outlined"  size="small"
                                   onChange={event => setRegurgitation(event.target.value)} defaultValue={regurgitation} disabled={isEnabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigestiveSystem;