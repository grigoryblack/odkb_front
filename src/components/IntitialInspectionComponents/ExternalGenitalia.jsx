import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {
    structureExternalGenitaliaExtraSelect,
    structureExternalGenitaliaGenderSelect,
    structureExternalGenitaliaSelect
} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import {useLocalState} from "../../utils/useLocalState";

function ExternalGenitalia() {

    const [structureExternalGenitalia,setStructureExternalGenitalia] = useLocalState('','structureExternalGenitalia');
    const [structureExternalGenitaliaGender,setStructureExternalGenitaliaGender] = useLocalState('','structureExternalGenitaliaGender');
    const [structureExternalGenitaliaExtra,setStructureExternalGenitaliaExtra] = useLocalState('','structureExternalGenitaliaExtra');
    const [externalGenitalsFeatures,setExternalGenitalsFeatures] = useLocalState('','externalGenitalsFeatures');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="title_card_container">Наружные половые органы</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={structureExternalGenitaliaSelect}
                        renderInput={(params) => <TextField {...params} label="Строение наружных половых органов" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setStructureExternalGenitalia(newStatus)} value={structureExternalGenitalia || null}
                    />
                    {structureExternalGenitalia === "По мужскому типу" &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={structureExternalGenitaliaGenderSelect}
                            renderInput={(params) => <TextField {...params} label="Яички" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setStructureExternalGenitaliaGender(newStatus)} value={structureExternalGenitaliaGender || null}
                        />
                    }
                    {structureExternalGenitaliaGender === "Не определяютя" &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={structureExternalGenitaliaExtraSelect}
                            renderInput={(params) => <TextField {...params} label="Локализация" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setStructureExternalGenitaliaExtra(newStatus)} value={structureExternalGenitaliaExtra || null}
                        />
                    }
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Особенности" variant="outlined"  size="small"
                                   onChange={event => setExternalGenitalsFeatures(event.target.value)} defaultValue={externalGenitalsFeatures}  disabled={isEnabled}
                                   />
                    </div>
                </div>
                <div className="section_container"></div>
                <div className="section_container"></div>
            </div>
        </div>
    );
}

export default ExternalGenitalia;