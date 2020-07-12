import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [ (event.target as HTMLInputElement).name ]: (event.target as HTMLInputElement).value
        });

    }

    return [ values, handleInputChange, reset ];

}