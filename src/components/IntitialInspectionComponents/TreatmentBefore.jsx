import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {hypothermiaSelect, phototherapySelect, respiratorySupportSelect, venousAccessSelect} from "../Consts/consts";
import TextField from "@mui/material/TextField";
import {useLocalState} from "../../utils/useLocalState";


function TreatmentBefore() {
    
    const [respiratorySupport,setRespiratorySupport] = useLocalState('','respiratorySupport');
    const [respiratorySupportStart,setRespiratorySupportStart] = useLocalState('','respiratorySupportStart');
    const [respiratorySupportEnd,setRespiratorySupportEnd] = useLocalState('','respiratorySupportEnd');
    const [drugTherapy,setDrugTherapy] = useLocalState('','drugTherapy');
    const [venousAccess,setVenousAccess] = useLocalState('','venousAccess');
    const [venousAccessStart,setVenousAccessStart] = useLocalState('','venousAccessStart');
    const [venousAccessEnd,setVenousAccessEnd] = useLocalState('','venousAccessEnd');
    const [venousAccessExtra,setVenousAccessExtra] = useLocalState('','venousAccessExtra');
    const [phototherapy,setPhototherapy] = useLocalState('','phototherapy');
    const [phototherapyStart,setPhototherapyStart] = useLocalState('','phototherapyStart');
    const [phototherapyEnd,setPhototherapyEnd] = useLocalState('','phototherapyEnd');
    const [hypothermia,setHypothermia] = useLocalState('','hypothermia');
    const [hypothermiaStart,setHypothermiaStart] = useLocalState('','hypothermiaStart');
    const [hypothermiaEnd,setHypothermiaEnd] = useLocalState('','hypothermiaEnd');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');


    return (
        <div>
            <div className="initial_container_title">До ОПН проведено лечение</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={respiratorySupportSelect}
                        renderInput={(params) => <TextField {...params} label="Респираторная поддержка"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setRespiratorySupport(newStatus)} value={respiratorySupport || null}
                    />
                    {(respiratorySupport === "ИВЛ" || respiratorySupport === "ВЧ ИВЛ"  || respiratorySupport === "СРАР" || respiratorySupport === "О2 усы" || respiratorySupport === "О2 воронка") && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Начало распираторной поддержки"  size="small" inputProps={{
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
                                           width:350,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setRespiratorySupportStart(event.target.value)} defaultValue={respiratorySupportStart} disabled={isEnabled}
                                  />
                    </div>}
                    {(respiratorySupport === "ИВЛ" || respiratorySupport === "ВЧ ИВЛ"  || respiratorySupport === "СРАР" || respiratorySupport === "О2 усы" || respiratorySupport === "О2 воронка")  && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Конец распираторной поддержки"  size="small" inputProps={{
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
                                           width:340,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setRespiratorySupportEnd(event.target.value)} defaultValue={respiratorySupportEnd} disabled={isEnabled}
                                  />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={phototherapySelect}
                        renderInput={(params) => <TextField {...params} label="Фототерапия"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPhototherapy(newStatus)} value={phototherapy || null}
                    />
                    {phototherapy === "Проводилась" && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Начало Фототерапии"  size="small" inputProps={{
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
                                           width:210,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setPhototherapyStart(event.target.value)} defaultValue={phototherapyStart} disabled={isEnabled}
                                  />
                    </div>}
                    {phototherapy === "Проводилась" && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Конец Фототерапии"  size="small" inputProps={{
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
                                   onChange={event => setPhototherapyEnd(event.target.value)} defaultValue={phototherapyEnd} disabled={isEnabled}
                                  />
                    </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={hypothermiaSelect}
                        renderInput={(params) => <TextField {...params} label="Гипотермия"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHypothermia(newStatus)} value={hypothermia || null}
                    />
                    {hypothermia === "Проводилась" && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Начало Гипотермии"  size="small" inputProps={{
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
                                   onChange={event => setHypothermiaStart(event.target.value)} defaultValue={hypothermiaStart} disabled={isEnabled}
                                  />
                    </div>}
                    {hypothermia === "Проводилась" && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Конец Гипотермии"  size="small" inputProps={{
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
                                           width:190,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setHypothermiaEnd(event.target.value)} defaultValue={hypothermiaEnd} disabled={isEnabled}
                                  />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={venousAccessSelect}
                        renderInput={(params) => <TextField {...params} label="Венозный доступ"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setVenousAccess(newStatus)} value={venousAccess || null}
                    />
                    {(venousAccess === "Пупочный катетер" || venousAccess === "Глубокая венозная линия" || venousAccess === "Премикат" || venousAccess === "Венфлон") && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Начало:"  size="small" inputProps={{
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
                                           width:80,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setVenousAccessStart(event.target.value)} defaultValue={venousAccessStart} disabled={isEnabled}
                                  />
                    </div>}
                    {(venousAccess === "Пупочный катетер" || venousAccess === "Глубокая венозная линия" || venousAccess === "Премикат" || venousAccess === "Венфлон") && <div className="margin_text_filed">
                        <TextField type="date" className="input_style_card" label="Конец:"  size="small" inputProps={{
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
                                           width:80,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setVenousAccessEnd(event.target.value)} defaultValue={venousAccessEnd} disabled={isEnabled}
                                  />
                    </div>}
                    {(venousAccess === "Пупочный катетер" || venousAccess === "Глубокая венозная линия" || venousAccess === "Премикат" || venousAccess === "Венфлон") && <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно венозный допступ" variant="outlined"  size="small"
                                   onChange={event => setVenousAccessExtra(event.target.value)} defaultValue={venousAccessExtra} disabled={isEnabled}
                                  />
                    </div>}
                </div>
                <div className="section_container">
                </div>
                <div className="section_container">
                </div>
            </div>
        </div>
    );
}

export default TreatmentBefore;