import {useState} from 'react'

const useForm = (getFreshModelObject) => {
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setValues({...values, [name]: value });
        setErrors({...errors, [name]: null});
    }

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors
  }
}

export default useForm