import { useState } from 'react'

export default (type) => {
  const [ value, setValue ] = useState('')
  const onChange = (event) => setValue(event.target.value)

  return [
    { value, onChange, type },
    setValue
  ]
}