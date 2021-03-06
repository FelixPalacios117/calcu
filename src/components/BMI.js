import React from "react";
import Calculator from "./Calculator";
import { useState } from "react";

const Bmi = () => {
    const [bmiValue,setBmiValue]=useState(0)

    const getBmiClass=bmi=>{
        if(bmi>=1 && bmi<=18.5)return 'Underweight'
        if(bmi>=18.5 && bmi<=24.9) return 'Normal Weight'
        if(bmi>=24.9 && bmi<=29.9) return 'Overweight'
        if(bmi>=30) return 'Obese'
    }
    const bmiBackgroundColor=bmi=>{
        if(bmi>=1 && bmi<=18.5)return '#FED888'
        if(bmi>=18.5 && bmi<=24.9) return '#80ff80'
        if(bmi>=24.9 && bmi<=29.9) return '#FF750'
        if(bmi>=30) return '#FF5411' 
    }
    const bmiCategory=getBmiClass(bmiValue) 
    let bmiClass=''
    if(bmiValue>0 && bmiCategory){
        bmiClass=bmiCategory.split(' ')[0].toLowerCase()
    }
    return ( 
        <>
           <div className="calculator"
           style={{backgroundColor: bmiBackgroundColor(bmiValue)}}
           >
                <h3>Inicio de la calculadora de masa corporal</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result">
                        <div className="bmi-result-number">
                            Body mass index (bmi)= {bmiValue}
                        </div>
                        <div className={`bmi-category ${bmiClass}`}>
                            {bmiCategory}
                        </div>
                    </div>
                </div>
                <Calculator getBmiValue={setBmiValue}/>
           </div>
        </>
     );
}
 
export default Bmi;