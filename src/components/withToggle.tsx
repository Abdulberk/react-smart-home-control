
import React, { useState,useEffect } from 'react';

const withToggle = (ButtonComponent: React.ComponentType<any>) => {
  
    const NewComponent = (props: any) => {

        const [selectedButton, setSelectedButton] = useState<string | null>(null);

  useEffect(() => { 
    setSelectedButton(props.selectedMode);
  }, [props.selectedMode]);


  const handleClick = (id: string | number, mode: any): void => {
    if (selectedButton === mode) return;
    setSelectedButton(mode);
    props.onUpdate(id, mode);
    

  };
     return (
        <ButtonComponent
        {...props}
        onClick={() => handleClick(props.id, props.mode)}
        style={{
            backgroundColor: props.mode === selectedButton ? "#3a5460" : "transparent",
            
        }}
        />

        );

    };
    
    return NewComponent;
};


export default withToggle;


