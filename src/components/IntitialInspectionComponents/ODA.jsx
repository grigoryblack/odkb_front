import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {
    clavicleCornSelect,
    clavicleSelect,
    jointsSelect,
    skeletonBonesSelect,
    skullBonesSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";

function Oda() {

    const [skeletonBones,setSkeletonBones] = useLocalState('','skeletonBones');
    const [skullBones,setSkullBones] = useLocalState('','skullBones');
    const [clavicle,setClavicle] = useLocalState('','clavicle');
    const [clavicleCorn,setClavicleCorn] = useLocalState('','clavicleCorn');
    const [clavicleCornSize,setClavicleCornSize] = useLocalState('','clavicleCornSize');
    const [clavicleCornLocation,setClavicleCornLocation] = useLocalState('','clavicleCornLocation');
    const [joints,setJoints] = useLocalState('','joints');
    const [additionallyJoints,setAdditionallyJoints] = useLocalState('','additionallyJoints');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">ОДА</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={skeletonBonesSelect}
                        renderInput={(params) => <TextField {...params} label="Кости скелета" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSkeletonBones(newStatus)} value={skeletonBones || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={skullBonesSelect}
                        renderInput={(params) => <TextField {...params} label="Кости черепа" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSkullBones(newStatus)} value={skullBones || null}
                    />
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={clavicleSelect}
                        renderInput={(params) => <TextField {...params} label="Ключицы"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setClavicle(newStatus)} value={clavicle || null}
                    />
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={clavicleCornSelect}
                        renderInput={(params) => <TextField {...params} label="Костная мозоль" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setClavicleCorn(newStatus)} value={clavicleCorn || null}
                    />
                    {clavicleCorn==="Да" && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Локализация" variant="outlined"  size="small"
                                   onChange={event => setClavicleCornLocation(event.target.value)} defaultValue={clavicleCornLocation} disabled={isEnabled}
                                   />
                    </div>}
                    {clavicleCorn==="Да" && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Размеры" placeholder="См * См" variant="outlined"  size="small"
                                   onChange={event => setClavicleCornSize(event.target.value)} defaultValue={clavicleCornSize} disabled={isEnabled}
                                   />
                    </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={jointsSelect}
                        renderInput={(params) => <TextField {...params} label="Суставы" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setJoints(newStatus)} value={joints || null}
                    />
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно суставы:" variant="outlined"  size="small"
                                   onChange={event => setAdditionallyJoints(event.target.value)} defaultValue={additionallyJoints} disabled={isEnabled}
                                   />
                    </div>
                </div>
                <div className="section_container">
                </div>
            </div>
        </div>
    );
}

export default Oda;