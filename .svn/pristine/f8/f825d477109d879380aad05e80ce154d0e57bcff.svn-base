import {useState} from 'react';

function useInputs(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event);
        setValue( 
            {
            ...value,
            [event.target.name] : event.target.value
            }
            );     
    };

    return [ value, onChange ];
}

export default useInputs;