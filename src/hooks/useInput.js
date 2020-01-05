import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    value, // VALUE
    { //BIND
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    },
    () => setValue(''), //RESET
    setValue //SET
  ];
};