import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {useLocalState} from "../../utils/useLocalState";
import {IMaskInput} from "react-imask";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
    adrenalinSelect,
    firstHelpSelect, firstHelpTypeSelect,
    genderSelect, heartMassageSelect, intubationSelect,
    methodDeliverySelect,
    methodDeliveryTypeSelect,
    presentationSelect, salineSelect, ventilationSelect, ventilationTypeSelect,
    watersSelect
} from "../Consts/consts";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";


const TextMaskCustomApgar = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="#/#/#"
            definitions={{
                '#': /[0-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustomApgar.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function ChildbirthCourse() {

    const [gestationalAge,setGestationalAge] = useLocalState('','gestationalAge');
    const [featuresCourseChildbirth,setFeaturesCourseChildbirth] = useLocalState('','featuresCourseChildbirth');
    const [presentation,setPresentation] = useLocalState('','presentation');
    const [headPresentation,setHeadPresentation] = useLocalState('','headPresentation');
    const [methodDelivery,setMethodDelivery] = useLocalState('','methodDelivery');
    const [methodDeliveryType,setMethodDeliveryType] = useLocalState('','methodDeliveryType');
    const [durationLabor,setDurationLabor] = useLocalState('','durationLabor');
    const [strainingPeriod,setStrainingPeriod] = useLocalState('','strainingPeriod');
    const [anhydrousPeriod,setAnhydrousPeriod] = useLocalState('','anhydrousPeriod');
    const [waters,setWaters] = useLocalState('','waters');
    const [watersVolume,setWatersVolume] = useLocalState('','watersVolume');
    const [gender,setGender] = useLocalState('','gender');
    const [birthWeight,setBirthWeight] = useLocalState('','birthWeight');
    const [lengthBody,setLengthBody] = useLocalState('','lengthBody');
    const [headCircumference,setHeadCircumference] = useLocalState('','headCircumference');
    const [chestCircumference,setChestCircumference] = useLocalState('','chestCircumference');
    const [apgarScore,setApgarScore] = useLocalState('',{
        textmask: '',
    });
    const [amountAssistanceDeliveryRoom,setAmountAssistanceDeliveryRoom] = useLocalState('','amountAssistanceDeliveryRoom');
    const [firstHelp,setFirstHelp] = useLocalState('','firstHelp');
    const [firstHelpType,setFirstHelpType] = useLocalState('','firstHelpType');
    const [anotherFirstHelp,setAnotherFirstHelp] = useLocalState('','anotherFirstHelp');
    const [ventilation,setVentilation] = useLocalState('','ventilation');
    const [ventilationType,setVentilationType] = useLocalState('','ventilationType');
    const [ventilationTime,setVentilationTime] = useLocalState('','ventilationTime');
    const [ventilationInfo,setVentilationInfo] = useLocalState('','ventilationInfo');
    const [intubation,setIntubation] = useLocalState('','intubation');
    const [intubationTime,setIntubationTime] = useLocalState('','intubationTime');
    const [heartMassage,setHeartMassage] = useLocalState('','heartMassage');
    const [heartMassageTime,setHeartMassageTime] = useLocalState('','heartMassageTime');
    const [heartMassageInfo,setHeartMassageInfo] = useLocalState('','heartMassageInfo');
    const [adrenalin,setAdrenalin] = useLocalState('','adrenalin');
    const [adrenalinTime,setAdrenalinTime] = useLocalState('','adrenalinTime');
    const [adrenalinCount,setAdrenalinCount] = useLocalState('','adrenalinCount');
    const [saline,setSaline] = useLocalState('','saline');
    const [salineTime,setSalineTime] = useLocalState('','salineTime');
    const [salineCount,setSalineCount] = useLocalState('','salineCount');

    const [isEnabled, setIsEnabled] = useLocalState(false, 'isEnabled');

    const handleChangeApgar = (event) => {
        setApgarScore({
            ...apgarScore,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <div className="initial_container_title">Течение родов</div>
            <div className="information_container">
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField
                            label="Срок гестации"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Недель</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setGestationalAge(event.target.value)} defaultValue={gestationalAge}
                            disabled={isEnabled}
                        />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={presentationSelect}
                        renderInput={(params) => <TextField {...params} label="Предлежание" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setPresentation(newStatus)} value={presentation || null}
                    />
                    {presentation ==="Головное" &&
                        <div className="margin_text_filed">
                            <TextField id="outlined-basic" className="input_style_card" label="Головное предлежание" variant="outlined"  size="small"
                                       onChange={event => setHeadPresentation(event.target.value)} defaultValue={headPresentation} disabled={isEnabled} />
                        </div>
                    }
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={methodDeliverySelect}
                        renderInput={(params) => <TextField {...params} label="Способ родоразрешения" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setMethodDelivery(newStatus)} value={methodDelivery || null}
                    />
                    {methodDelivery === "Оперативные" &&
                        <Autocomplete
                            disabled={isEnabled}
                            size="small"
                            id="combo-box-demo"
                            options={methodDeliveryTypeSelect}
                            renderInput={(params) => <TextField {...params} label="Выбор:" />}
                            className="input_style_card"
                            onChange={(event, newStatus) => setMethodDeliveryType(newStatus)} value={methodDeliveryType || null}
                        />
                    }
                    <div className="margin_text_filed">
                        <TextField type="time" className="input_style_card" label="Продолжительность родов" defaultValue={'00:00'} size="small" inputProps={{
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
                                           width:270,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setDurationLabor(event.target.value)} defaultValue={durationLabor} disabled={isEnabled} />
                    </div>
                </div>


                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField type="time" className="input_style_card" label="Потужной период" defaultValue={'00:00'} size="small" inputProps={{
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
                                           width:185,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setStrainingPeriod(event.target.value)} defaultValue={strainingPeriod} disabled={isEnabled}
                                   />
                    </div>
                    <div className="margin_text_filed">
                        <TextField type="time" className="input_style_card" label="Безводный промежуток" defaultValue={'00:00'} size="small" inputProps={{
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
                                           width:240,
                                           backgroundColor: "#ffffff",
                                       },
                                       shrink: true
                                   }}
                                   onChange={event => setAnhydrousPeriod(event.target.value)} defaultValue={anhydrousPeriod} disabled={isEnabled}
                                   />
                    </div>
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={watersSelect}
                        renderInput={(params) => <TextField {...params} label="Воды" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setWaters(newStatus)} value={waters || null}
                    />
                    {waters ==="Многоводие" &&
                        <div className="margin_text_filed">
                            <TextField id="outlined-basic" className="input_style_card" label="Данные о количестве" variant="outlined"  size="small"
                                       onChange={event => setWatersVolume(event.target.value)} defaultValue={watersVolume} disabled={isEnabled} />
                        </div>
                    }
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={genderSelect}
                        renderInput={(params) => <TextField {...params} label="Пол ребенка:" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setGender(newStatus)} value={gender || null}
                    />
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <TextField
                            label="Вес при рождении"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">гр.</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setBirthWeight(event.target.value)} defaultValue={birthWeight}
                            disabled={isEnabled}
                        />
                    </div>
                    <div className="margin_text_filed">
                        <TextField
                            label="Окружность головы"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">см.</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setHeadCircumference(event.target.value)} defaultValue={headCircumference}
                            disabled={isEnabled}
                        />
                    </div>

                    <div className="margin_text_filed">
                        <TextField
                            label="Окружность груди"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">см.</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setChestCircumference(event.target.value)} defaultValue={chestCircumference}
                            disabled={isEnabled}
                        />
                    </div>
                    <div className="margin_text_filed">
                        <TextField
                            label="Длина тела при рождении"
                            id="outlined-start-adornment"
                            sx={{width:'28.3ch'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">см.</InputAdornment>,
                            }}
                            size="small"
                            onChange={event => setLengthBody(event.target.value)} defaultValue={lengthBody}
                            disabled={isEnabled}
                        />
                    </div>
                </div>
                <div className="section_container">
                    <div className="margin_text_filed">
                        <FormControl size="small" sx={{width:'28.3ch'}}>
                            <InputLabel htmlFor="formatted-text-mask-input" sx={{background:"white"}}>Оценка по Апгар</InputLabel>
                            <OutlinedInput
                                value={apgarScore.textmask}
                                onChange={handleChangeApgar}
                                name="textmask"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustomApgar}
                                placeholder="_ / _ / _"
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="information_container">
                <TextField
                    className="input_style_card"
                    id="outlined-multiline-static"
                    label="Особенности родов"
                    multiline
                    rows={7}
                    sx={{width:1148,marginTop:3}}
                    onChange={event => setFeaturesCourseChildbirth(event.target.value)} defaultValue={featuresCourseChildbirth}
                    disabled={isEnabled}
                />
            </div>
            <div className="title_card_container">Помощь в родовом зале (объем реанимации)</div>
            <div className="information_container">
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={firstHelpSelect}
                        renderInput={(params) => <TextField {...params} label="Начальные шаги" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setFirstHelp(newStatus)} value={firstHelp || null}
                    />
                    {firstHelp === "Да" && <div className="margin_text_filed">
                        <Autocomplete
                            disabled={isEnabled}
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={firstHelpTypeSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Вид помощи"
                                    placeholder="Помощь"
                                />
                            )}
                            onChange={(event, newStatus) => setFirstHelpType(newStatus)} defaultChecked={firstHelpType}
                        />
                    </div>
                    }
                    {firstHelp === "Да" &&
                        <div className="margin_text_filed">
                            <TextField id="outlined-basic" className="input_style_card" label="Другой вид помощи" variant="outlined"  size="small"
                                       onChange={event => setAnotherFirstHelp(event.target.value)} defaultValue={anotherFirstHelp} disabled={isEnabled}
                                       />
                        </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={ventilationSelect}
                        renderInput={(params) => <TextField {...params} label="Вентиляция с положительным давлением" />}
                        className="input_style_card"
                        onChange={(event, newStatus) => setVentilation(newStatus)} value={ventilation || null}
                    />
                    {ventilation === "Да" &&  <div className="margin_text_filed">
                        <Autocomplete
                            disabled={isEnabled}
                            sx={{width:"28.3ch"}}
                            size="small"
                            multiple
                            id="tags-outlined"
                            options={ventilationTypeSelect}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Вид вентиляции"
                                    placeholder="Вентиляция"
                                />
                            )}
                            onChange={(event, newStatus) => setVentilationType(newStatus)} defaultChecked={ventilationType}
                        />
                    </div>}
                    {ventilation === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Длительность" variant="outlined"  size="small"
                                   onChange={event => setVentilationTime(event.target.value)} defaultValue={ventilationTime} disabled={isEnabled}
                                   />
                    </div>}
                    {ventilation === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно" variant="outlined"  size="small"
                                   onChange={event => setVentilationInfo(event.target.value)} defaultValue={ventilationInfo} disabled={isEnabled}
                                   />
                    </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={intubationSelect}
                        renderInput={(params) => <TextField {...params} label="Интубация трахеи"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setIntubation(newStatus)} value={intubation || null}
                    />
                    {intubation === "Да" && <div className="margin_text_filed">
                        <div className="help_text">На</div>
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">минуте</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setIntubationTime(event.target.value)} defaultValue={intubationTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={heartMassageSelect}/*select21*/
                        renderInput={(params) => <TextField {...params} label="Непрямой массаж сердца"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setHeartMassage(newStatus)} value={heartMassage || null}
                    />
                    {heartMassage === "Да" && <div className="margin_text_filed">
                        <div className="help_text">C </div>
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">минуты</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setHeartMassageTime(event.target.value)} defaultValue={heartMassageTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                    {heartMassage === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Дополнительно" variant="outlined"  size="small"
                                   onChange={event => setHeartMassageInfo(event.target.value)} defaultValue={heartMassageInfo} disabled={isEnabled}
                                   />
                    </div>}
                </div>
                <div className="section_container">
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={adrenalinSelect}/*select22*/
                        renderInput={(params) => <TextField {...params} label="Адреналин"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setAdrenalin(newStatus)} value={adrenalin || null}
                    />
                    {adrenalin==="Да" && <div className="margin_text_filed">
                        <div className="help_text">На</div>
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">минуте</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setAdrenalinTime(event.target.value)} defaultValue={adrenalinTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                    {adrenalin === "Да" &&  <div className="margin_text_filed">
                        <TextField id="outlined-basic" className="input_style_card" label="Количество введений" variant="outlined"  size="small"
                                   onChange={event => setAdrenalinCount(event.target.value)} defaultValue={adrenalinCount} disabled={isEnabled}
                                   />
                    </div>}
                    <Autocomplete
                        disabled={isEnabled}
                        size="small"
                        id="combo-box-demo"
                        options={salineSelect} /*Select23*/
                        renderInput={(params) => <TextField {...params} label="Физраствор"/>}
                        className="input_style_card"
                        onChange={(event, newStatus) => setSaline(newStatus)} value={saline || null}
                    />
                    {saline ==="Да" && <div className="margin_text_filed">
                        <div className="help_text">На</div>
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">минуте</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setSalineTime(event.target.value)} defaultValue={salineTime}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                    {saline === "Да" &&  <div className="margin_text_filed">
                        <div className="help_text">Объем</div>
                        <FormControl sx={{ width: '28.3ch' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">мг.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                onChange={event => setSalineCount(event.target.value)} defaultValue={salineCount}
                                disabled={isEnabled}
                            />
                        </FormControl>
                    </div>}
                </div>
                <div className="section_container"></div>
            </div>
            <div className="information_container">
                <TextField
                    className="input_style_card"
                    id="outlined-multiline-static"
                    label="Дополнительно"
                    multiline
                    rows={7}
                    sx={{width:1148,marginTop:3}}
                    onChange={event => setAmountAssistanceDeliveryRoom(event.target.value)} defaultValue={amountAssistanceDeliveryRoom} disabled={isEnabled}
                />
            </div>
        </div>
    );
}

export default ChildbirthCourse;