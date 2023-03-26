import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {surveyPlanSelect} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import {useLocalState} from "../../utils/useLocalState";

function SurveyPlan() {
    
    const [surveyPlan,setSurveyPlan] = useLocalState('','surveyPlan');
    const [surveyPlanExtra,setSurveyPlanExtra] = useLocalState('','surveyPlanExtra');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');
    
    return (
        <div>
            <div className="initial_container_title">План обследования</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <Autocomplete
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={surveyPlanSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="План ухода"
                                />
                            )}
                            onChange={(event, newStatus) => setSurveyPlan(newStatus)} defaultChecked={surveyPlan} disabled={isEnabled}
                        />
                    </div>
                    <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно план ухода" variant="outlined"  size="small"
                                   onChange={event => setSurveyPlanExtra(event.target.value)} defaultValue={surveyPlanExtra} disabled={isEnabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SurveyPlan;