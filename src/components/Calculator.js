import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import { useEffect } from "react"; 

const Calculator = (props) => {

    const {getBmiValue}=props
    const [heightunit,setHeightUnit]=useState('cm')
    const [weightunit,setWeightUnit]=useState('kg')
    const [unit,setUnit]=useState('Metric')
    const [count,setCount]=useState({
        heightCount:'0',
        inchesCount:'0',
        weightCount:'0'
    })
    const {heightCount,inchesCount,weightCount}=count
    const onChangeInput=(e)=>{  
        const {name,value}=e.target
        setCount(
            {
               ...count, [name]:value
            }
        )
    }
    const metricBMI=(height,weight)=>{
        if(height>0 && weight>0){
            const heightToMeter=height/100
            const bmi=weight/(heightToMeter*heightToMeter)
            getBmiValue((bmi))
        }
    }
    const imperialBmi=(height,weight,inches)=>{
        if(height>0 && weight>0 && inches>0){
            const heightToInches=(height*12)+parseInt(inches)
            const bmi=703* (weight/(heightToInches*heightToInches))
            getBmiValue((bmi))
        }
    }
    useEffect(()=>{ 
        metricBMI(heightCount,weightCount)
        imperialBmi(heightCount,weightCount,inchesCount)
    },[heightCount,weightCount,inchesCount])
    const onSelectTag=(e)=>{
        setUnit(e.target.value);
        if(e.target.value==='Metric'){
            setHeightUnit('cm')
            setWeightUnit('kg')
        }else{
            setHeightUnit('ft')
            setWeightUnit('lbs')
        }
    }

    const resetData=e=>{
        e.preventDefault()
        getBmiValue(0)
        setUnit('Metric')
        setCount({
            heightCount:'',
            inchesCount:'',
            weightCount:''
        })
        setWeightUnit('kg')
        setHeightUnit('cm')
    }
    return ( 
        <>
            <div className="bmi-inputs">
                <div className="input-fields">
                    <div>
                        <span className="label-unit">Unit</span>
                        <div className="unit">
                            <select
                            name="unit"
                            value={unit}
                            onChange={onSelectTag}
                            className="form-control form-control-sm"
                             >
                                <option value="Metric">Metric</option>
                                <option value="Imperial">Imperial</option>
                            </select>
                        </div>
                    </div>
                    <FormInput 
                    type="text"
                    name="heightCount"
                    title={`Height (${heightunit})`}
                    value={heightCount}
                    onChange={onChangeInput}
                    />
                    {
                        unit==='Imperial'?
                        <FormInput 
                        type="text"
                        name="inchesCount"
                        title={`(in)`}
                        value={inchesCount}
                        onChange={onChangeInput}
                        />:''
                    } 
                    <FormInput 
                    type="text"
                    name="weightCount"
                    title={`Weight (${weightunit})`}
                    value={weightCount}
                    onChange={onChangeInput}
                    />
                </div>
                <button
                onClick={resetData}
                className="button" type="submit">
                    Reset
                </button>
            </div>
        </>
     );
}
 
export default Calculator; 