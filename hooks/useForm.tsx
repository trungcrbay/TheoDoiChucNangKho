
import { useState } from 'react'

export default function useFormInput(initialValue : string) {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e : any) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}