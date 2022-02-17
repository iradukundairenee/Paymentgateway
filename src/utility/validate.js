import { Validator } from 'class-validator';
import { isEmpty } from 'class-validator';

export default function validateInput(data){
    let errors={};

    if(Validator.isEmpty(data.email)){
        errors.email='thus field is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password='this field is required';
    }

   
    return{
        errors,
        isValid:isEmpty(errors)
    }


}