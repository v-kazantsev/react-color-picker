import React from 'react';

const Picker = ({color, updateColor}) => {
     return (
      <input
       name="color"
       type="text"
       value={color}
       onChange={updateColor}
       />
    ) 
 };

export default Picker;