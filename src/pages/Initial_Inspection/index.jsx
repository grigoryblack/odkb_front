import React, {useState} from 'react';
import './Initial_Inspection.css';
import Header from "../../components/header/Header";
import {useLocalState} from "../../utils/useLocalState";
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PassportData from "../../components/IntitialInspectionComponents/PassportData";
import MothersHistory from "../../components/IntitialInspectionComponents/MothersHistory";
import PregancyCourse from "../../components/IntitialInspectionComponents/PregancyCourse";
import ChildbirthCourse from "../../components/IntitialInspectionComponents/ChildbirthCourse";
import InspectionStandard from "../../components/IntitialInspectionComponents/InspectionStandard";
import Oda from "../../components/IntitialInspectionComponents/ODA";
import SkinAndMucous from "../../components/IntitialInspectionComponents/SkinAndMucous";
import RespiratorySystem from "../../components/IntitialInspectionComponents/RespiratorySystem";
import CardiovascularSystem from "../../components/IntitialInspectionComponents/CardiovascularSystem";
import DigestiveSystem from "../../components/IntitialInspectionComponents/DigestiveSystem";
import UrinarySystem from "../../components/IntitialInspectionComponents/UrinarySystem";
import ExternalGenitalia from "../../components/IntitialInspectionComponents/ExternalGenitalia";
import TreatmentBefore from "../../components/IntitialInspectionComponents/TreatmentBefore";
import DiseaseData from "../../components/IntitialInspectionComponents/DiseaseData";
import SurveyPlan from "../../components/IntitialInspectionComponents/SurveyPlan";
import { saveAs } from 'file-saver';


function Initial_Inspection(){

    const [fullName,setFullName] = useLocalState('','fullName');

    const [jwt, setJwt] = useLocalState('', 'jwt')
   /* Кнопка сохранения*/
    const actions = [
        { icon: <PrintIcon />,
            name: 'Word',
            runFunction: () => {
                handleCreateDoc()
            }
        },
        { icon: <SaveIcon />,
            name: 'Save',
            runFunction: () => {
                Save()
            }
        },
        { icon: <EditIcon />,
            name: 'Edit',
            runFunction: () => {
                toggleEnabled()
            }
        },

    ];

    const [enable, setEnable] = useState(false)

    const [isEnabled, setIsEnabled] = useLocalState({enable}, 'isEnabled');
    function toggleEnabled(){
        console.log(isEnabled)
        setIsEnabled(!isEnabled)
        window.location.reload();
    }

    function Save(){
        console.log(isEnabled)
        let disabled = true;
        setIsEnabled(disabled)
        window.location.reload();
    }

    /* Паспортные данные*/

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

    /*Анамнез матери*/

    const [motherDateBirth,setMotherDateBirth] = useLocalState('', 'motherDateBirth');
    const [familyStatus,setFamilyStatus] = useLocalState('', 'familyStatus');
    const [maternalIllnesses,setMaternalIllnesses] = useLocalState('', 'maternalIllnesses');
    const [motherBloodGroup,setMotherBloodGroup] = useLocalState('', 'motherBloodGroup');
    const [erythrocyteBody,setErythrocyteBody] = useLocalState('', 'erythrocyteBody');
    const [HIVTestingMother,setHIVTestingMother] = useLocalState('', 'HIVTestingMother');
    const [HIVTestingFather,setHIVTestingFather] = useLocalState('', 'HIVTestingFather');
    const [maternalInfectiousHistory,setMaternalInfectiousHistory] = useLocalState('', 'maternalInfectiousHistory');

    /*Течение беременности*/

    const [pregnancy,setPregnancy] =  useLocalState('', 'pregnancy')
    const [childbirth,setChildbirth] =  useLocalState('', 'childbirth')
    const [previousPregnancies,setPreviousPregnancies] =  useLocalState('', 'previousPregnancies')
    const [dataSiblings,setDataSiblings] =  useLocalState('', 'dataSiblings')
    const [featuresCoursePregnancy,setFeaturesCoursePregnancy] =  useLocalState('', 'featuresCoursePregnancy')
    const [steroidProphylaxis,setSteroidProphylaxis] =  useLocalState('', 'steroidProphylaxis')

    /*Течение родов*/

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

    /*До опн проведено лечение*/

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

    /*Стандарт осмотра*/

    const [statusAtAdmission,setStatusAtAdmission] = useLocalState('','statusAtAdmission');
    const [severityDue,setSeverityDue] = useLocalState('','severityDue');
    const [reactionInspection,setReactionInspection] = useLocalState('','reactionInspection');
    const [additionallyReactionInspection,setAdditionallyReactionInspection] = useLocalState('','additionallyReactionInspection');
    const [convulsions,setConvulsions] = useLocalState('','convulsions');
    const [convulsionsType,setConvulsionsType] = useLocalState('','convulsionsType');
    const [muscleTone,setMuscleTone] = useLocalState('','muscleTone');
    const [additionallyMuscleTone,setAdditionallyMuscleTone] = useLocalState('','additionallyMuscleTone');
    const [reflexesNewborn,setReflexesNewborn] = useLocalState('','reflexesNewborn');
    const [bulbarDisorders,setBulbarDisorders] = useLocalState('','bulbarDisorders');
    const [skullShape,setSkullShape] = useLocalState('','skullShape');
    const [additionallySkullShape,setAdditionallySkullShape] = useLocalState('','additionallySkullShape');
    const [cephalhematomas,setCephalhematomas] = useLocalState('','cephalhematomas');
    const [cephalhematomasSize,setCephalhematomasSize] = useLocalState('','cephalhematomasSize');
    const [cephalhematomasLocation,setCephalhematomasLocation] = useLocalState('','cephalhematomasLocation');
    const [skullSutures,setSkullSutures] = useLocalState('','skullSutures');
    const [additionallySkullSutures,setAdditionallySkullSutures] = useLocalState('','additionallySkullSutures');
    const [bigFontanel,setBigFontanel] = useLocalState('','bigFontanel');
    const [bigFontanelSize,setBigFontanelSize] = useLocalState('','bigFontanelSize');
    const [meningealSymptoms,setMeningealSymptoms] = useLocalState('','meningealSymptoms');
    const [additionallyMeningealSymptoms,setAdditionallyMeningealSymptoms] = useLocalState('','additionallyMeningealSymptoms');
    const [statusAtAdmissionOther,setStatusAtAdmissionOther] = useLocalState('','statusAtAdmissionOther');

    /*ОДА*/

    const [skeletonBones,setSkeletonBones] = useLocalState('','skeletonBones');
    const [skullBones,setSkullBones] = useLocalState('','skullBones');
    const [clavicle,setClavicle] = useLocalState('','clavicle');
    const [clavicleCorn,setClavicleCorn] = useLocalState('','clavicleCorn');
    const [clavicleCornSize,setClavicleCornSize] = useLocalState('','clavicleCornSize');
    const [clavicleCornLocation,setClavicleCornLocation] = useLocalState('','clavicleCornLocation');
    const [joints,setJoints] = useLocalState('','joints');
    const [additionallyJoints,setAdditionallyJoints] = useLocalState('','additionallyJoints');

    /*КожныЙ покров и слизистые*/
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

    /*Дыхательная сиситема*/

    const [oxygenDependence,setOxygenDependence] = useLocalState('','oxygenDependence');
    const [chestShape,setChestShape] = useLocalState('','chestShape');
    const [chestShapeExtra,setChestShapeExtra] = useLocalState('','chestShapeExtra');
    const [breathingThroughNose,setBreathingThroughNose] = useLocalState('','breathingThroughNose');
    const [biomechanicsRespiration,setBiomechanicsRespiration] = useLocalState('','biomechanicsRespiration');
    const [auscultatoryPicture,setAuscultatoryPicture] = useLocalState('','auscultatoryPicture');
    const [auscultatoryPictureExtra,setAuscultatoryPictureExtra] = useLocalState('','auscultatoryPictureExtra');
    const [auscultatoryPictureExtraText,setAuscultatoryPictureExtraText] = useLocalState('','auscultatoryPictureExtraText');
    const [wheezing,setWheezing] = useLocalState('','wheezing');
    const [crepitus,setCrepitus] = useLocalState('','crepitus');
    const [respirationRate,setRespirationRate] = useLocalState('','respirationRate');

    /*Сердечно-сосудистая система*/

    const [hemodynamics,setHemodynamics] = useLocalState('','hemodynamics');
    const [heartSounds,setHeartSounds] = useLocalState('','heartSounds');
    const [heartRate,setHeartRate] = useLocalState('','heartRate');
    const [noise,setNoise] = useLocalState('','noise');
    const [noiseExtra,setNoiseExtra] = useLocalState('','noiseExtra');
    const [pulseDetermined,setPulseDetermined] = useLocalState('','pulseDetermined');
    const [paleSpotSymptom,setPaleSpotSymptom] = useLocalState('','paleSpotSymptom');
    const [childBloodType,setChildBloodType]= useLocalState('','childBloodType');

    /*Пищеварительная система*/

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

    /*Мочевидная система система*/

    const [kidneys,setKidneys] = useLocalState('','kidneys');
    const [diuresisMl,setDiuresisMl] = useLocalState('','diuresisMl');
    const [diuresisKg,setDiuresisKg] = useLocalState('','diuresisKg');
    const [diuresisH,setDiuresisH] = useLocalState('','diuresisH');
    const [stimulationDiuresis,setStimulationDiuresis] = useLocalState('','stimulationDiuresis');

    /*Наружные половые органы*/

    const [structureExternalGenitalia,setStructureExternalGenitalia] = useLocalState('','structureExternalGenitalia');
    const [structureExternalGenitaliaGender,setStructureExternalGenitaliaGender] = useLocalState('','structureExternalGenitaliaGender');
    const [structureExternalGenitaliaExtra,setStructureExternalGenitaliaExtra] = useLocalState('','structureExternalGenitaliaExtra');
    const [externalGenitalsFeatures,setExternalGenitalsFeatures] = useLocalState('','externalGenitalsFeatures');

    /*Данные о заболевании*/

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

    /* План обследования*/

    const [surveyPlan,setSurveyPlan] = useLocalState('','surveyPlan');
    const [surveyPlanExtra,setSurveyPlanExtra] = useLocalState('','surveyPlanExtra');

    let children = {

        fullName:fullName,

        /* Паспортные данные*/

        fullNameChild: fullNameChild,
        comeFurtherTreatmentAndExamination: comeFurtherTreatmentAndExamination,
        born:born?.title,
        admissionAge:admissionAge,
        comesFrom:comesFrom?.title,
        EPIDNumber:EPIDNumber,
        EPIDNumberDate:EPIDNumberDate,
        EPIDNumberDiagnosis:EPIDNumberDiagnosis?.title,

        /*Анамнез матери*/

        receiptDate:receiptDate,
        arrivalTime:arrivalTime,
        motherDateBirth:motherDateBirth,
        familyStatus:familyStatus,
        maternalIllnesses:maternalIllnesses,
        motherBloodGroup:motherBloodGroup,
        erythrocyteBody:erythrocyteBody,
        HIVTestingMother:HIVTestingMother,
        HIVTestingFather:HIVTestingFather,
        maternalInfectiousHistory:maternalInfectiousHistory?.title,

        /*Течение беременности*/

        pregnancy:pregnancy,
        childbirth:childbirth,
        previousPregnancies:previousPregnancies?.title,
        dataSiblings:dataSiblings,
        featuresCoursePregnancy:featuresCoursePregnancy,
        steroidProphylaxis:steroidProphylaxis,

        /*Течение родов*/

        gestationalAge:gestationalAge,
        featuresCourseChildbirth:featuresCourseChildbirth,
        presentation:presentation,
        headPresentation:headPresentation,
        methodDelivery:methodDelivery,
        methodDeliveryType:methodDeliveryType,
        durationLabor:durationLabor,
        strainingPeriod:strainingPeriod,
        anhydrousPeriod:anhydrousPeriod,
        waters:waters,
        watersVolume:watersVolume,
        gender:gender,
        birthWeight:birthWeight,
        length:lengthBody,
        headCircumference:headCircumference,
        chestCircumference:chestCircumference,
        apgarScore:apgarScore.textmask,

        /*Объем помощи*/

        firstHelp:firstHelp,
        firstHelpType:firstHelpType,
        anotherFirstHelp:anotherFirstHelp,
        ventilation:ventilation,
        ventilationType:ventilationType,
        ventilationTime:ventilationTime,
        ventilationInfo:ventilationInfo,
        intubation:intubation,
        intubationTime:intubationTime,
        heartMassage:heartMassage,
        heartMassageTime:heartMassageTime,
        heartMassageInfo:heartMassageInfo,
        adrenalin:adrenalin,
        adrenalinTime:adrenalinTime,
        adrenalinCount:adrenalinCount,
        saline:saline,
        salineTime:salineTime,
        salineCount:salineCount,
        amountAssistanceDeliveryRoom:amountAssistanceDeliveryRoom,

        /*До ОПН проведено лечение*/

        respiratorySupport:respiratorySupport,
        respiratorySupportStart:respiratorySupportStart,
        respiratorySupportEnd:respiratorySupportEnd,
        drugTherapy:drugTherapy,
        venousAccess:venousAccess,
        venousAccessStart:venousAccessStart,
        venousAccessEnd:venousAccessEnd,
        venousAccessExtra:venousAccessExtra,
        phototherapy:phototherapy,
        phototherapyStart:phototherapyStart,
        phototherapyEnd:phototherapyEnd,
        hypothermia:hypothermia,
        hypothermiaStart:hypothermiaStart,
        hypothermiaEnd:hypothermiaEnd,

        /*Стандарт осмотра*/

        statusAtAdmission:statusAtAdmission,
        severityDue:severityDue,
        reactionInspection:reactionInspection?.title,
        additionallyReactionInspection:additionallyReactionInspection,
        convulsions:convulsions,
        convulsionsType:convulsionsType?.title,
        muscleTone:muscleTone,
        additionallyMuscleTone:additionallyMuscleTone,
        reflexesNewborn:reflexesNewborn,
        bulbarDisorders:bulbarDisorders,
        skullShape:skullShape,
        additionallySkullShape:additionallySkullShape,
        cephalhematomas:cephalhematomas,
        cephalhematomasSize:cephalhematomasSize,
        cephalhematomasLocation:cephalhematomasLocation?.title,
        skullSutures:skullSutures,
        additionallySkullSutures:additionallySkullSutures,
        bigFontanel:bigFontanel,
        bigFontanelSize:bigFontanelSize,
        meningealSymptoms:meningealSymptoms,
        additionallyMeningealSymptoms:additionallyMeningealSymptoms,
        statusAtAdmissionOther:statusAtAdmissionOther,

        /*ОДА*/

        skeletonBones:skeletonBones,
        skullBones:skullBones,
        clavicle:clavicle,
        clavicleCorn:clavicleCorn,
        clavicleCornSize:clavicleCornSize,
        clavicleCornLocation:clavicleCornLocation,
        joints:joints,
        additionallyJoints:additionallyJoints,

        /*Кожный покров и слизистые*/

        skinColor:skinColor,
        skinColorType:skinColorType,
        damage:damage,
        additionallyDamage:additionallyDamage,
        hematomas:hematomas,
        additionallyHematomas:additionallyHematomas,
        rashes:rashes,
        rashesLocation:rashesLocation,
        rashesProgres:rashesProgres,
        pathologicalFormations:pathologicalFormations,
        pathologicalFormationsLocation:pathologicalFormationsLocation,
        pathologicalFormationsType:pathologicalFormationsType,
        additionallyPathologicalFormations:additionallyPathologicalFormations,
        peeling:peeling,
        peelingLocation:peelingLocation,
        peelingDescription:peelingDescription,
        edema:edema,
        additionallyEdema:additionallyEdema,
        edemaType:edemaType,
        elasticity:elasticity,
        turgor:turgor,
        cordRemnant:cordRemnant,
        umbilicalWound:umbilicalWound?.title,
        mucous:mucous,
        mucousHumidity:mucousHumidity,

        /*Дыхательная сиситема*/

        oxygenDependence:oxygenDependence,
        chestShape:chestShape,
        chestShapeExtra:chestShapeExtra,
        breathingThroughNose:breathingThroughNose,
        biomechanicsRespiration:biomechanicsRespiration,
        auscultatoryPicture:auscultatoryPicture,
        auscultatoryPictureExtra:auscultatoryPictureExtra,
        auscultatoryPictureExtraText:auscultatoryPictureExtraText,
        wheezing:wheezing,
        crepitus:crepitus,
        respirationRate:respirationRate,

        /*Сердечно-сосудистая система*/

        hemodynamics:hemodynamics,
        heartSounds:heartSounds,
        heartRate:heartRate,
        noise:noise,
        noiseExtra:noiseExtra,
        pulseDetermined:pulseDetermined?.title,
        paleSpotSymptom:paleSpotSymptom,
        childBloodType:childBloodType,

        /*Пищеварительная система*/

        stomach:stomach,
        peristalsis:peristalsis,
        liver:liver,
        liverSize:liverSize,
        spleen:spleen,
        bowelMovement:bowelMovement,
        bowelMovementCount:bowelMovementCount,
        bowelMovementType:bowelMovementType,
        feeding:feeding,
        feedName:feedName,
        feedingCount:feedingCount,
        feedingTime:feedingTime,
        feedingType:feedingType,
        feedingTypeTime:feedingTypeTime,
        regurgitation:regurgitation,

        /*Мочевидная система система*/

        kidneys:kidneys,
        diuresisMl:diuresisMl,
        diuresisKg:diuresisKg,
        diuresisH:diuresisH,
        stimulationDiuresis:stimulationDiuresis,

        /*Наружные половые органы*/

        structureExternalGenitalia:structureExternalGenitalia,
        structureExternalGenitaliaGender:structureExternalGenitaliaGender,
        structureExternalGenitaliaExtra:structureExternalGenitaliaExtra,
        externalGenitalsFeatures:externalGenitalsFeatures,

        /*Данные о заболевании*/

        diseaseHistory:diseaseHistory,
        diseaseDynamics:diseaseDynamics,
        mainSyndromesAdmission:mainSyndromesAdmission,

        diagnosisMain:diagnosisMain,
        diagnosisMainExtra:diagnosisMainExtra,
        diagnosisMainComplication:diagnosisMainComplication?.title,
        diagnosisBackground:diagnosisBackground?.title,
        diagnosisRelated:diagnosisRelated?.title,
        diagnosisGeneral:diagnosisGeneral?.title,

        diagnosisAdmissionMain:diagnosisAdmissionMain,
        diagnosisAdmissionMainExtra:diagnosisAdmissionMainExtra,
        diagnosisAdmissionMainComplication:diagnosisAdmissionMainComplication?.title,
        diagnosisAdmissionBackground:diagnosisAdmissionBackground?.title,
        diagnosisAdmissionRelated:diagnosisAdmissionRelated?.title,
        diagnosisAdmissionGeneral:diagnosisAdmissionGeneral?.title,

        /*План обследования*/

        surveyPlan:surveyPlan,
        surveyPlanExtra:surveyPlanExtra,

    };

    async function handleCreateDoc (){
        console.log(typeof severityDue)
        fetch("http://localhost:8080/api/docxDocuments/primaryExamination/fillDocument", {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer ' + jwt
        },
        method: "post",
            body: JSON.stringify(children)
    })
            .then((response) => {
                if (response.status === 200) {
                    console.log("OK");
                    return response.blob();
                } else {
                    return Promise.reject("Плохой запрос");
                }
            })
            .then((blob) => {
                console.log(blob)
                saveAs(blob, "file.docx");
            });
    }


    return(
            <>
                <div className="initial_inspection_container">
                    <Header/>
                    <div className="initial_container_content">
                        <div className="initial_container_title_main">Первичный осмотр</div>

                        {/*Паспортные данные*/}
                        <PassportData/>

                        {/*Анамнез матери*/}
                        <MothersHistory/>

                        {/*Течение беременности*/}
                        <PregancyCourse/>

                        {/*Течение родов*/}
                        <ChildbirthCourse/>

                        {/*Анамнез заболевания*/}

                        <div className="initial_container_title">Анамнез заболевания</div>
                        <div className="information_container">
                            <div className="section_container"></div>
                        </div>

                        {/*Стандарт осморта*/}
                        <InspectionStandard/>

                        <Oda/>

                        <SkinAndMucous/>

                        <RespiratorySystem/>

                        <CardiovascularSystem/>

                        <DigestiveSystem/>

                        <UrinarySystem/>

                        <ExternalGenitalia/>

                        {/*Лечение до поступления в ОПН*/}
                        <TreatmentBefore/>

                        {/*Данные о заболевании*/}
                        <DiseaseData/>

                        {/*План обследования*/}
                        <SurveyPlan/>


                        {isEnabled === false && <div className="edit_mode_notification"> Открыт режим редактирования!</div>}
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            icon={<SpeedDialIcon />}
                            className="speedDial"
                            direction="left"
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    onClick={() => {
                                        action.runFunction()
                                    }}
                                />
                            ))}

                        </SpeedDial>
                    </div>
                </div>
            </>

    )
}

export default Initial_Inspection;