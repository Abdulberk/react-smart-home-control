import Scenario from './redux/interfaces/Scenario'

import { ShutterMode, AlarmMode, LampMode } from './components/resultsPanelComponents/ActiveScenario'




var getDatas = (): Scenario[] => {

return  [

    {   
        id: 1,
        type: "lamp",
        label : "Garaj 2",
        icon : "./lamp.png",
        buttonType: "lamp",
        status: "active",
        selectedMode :  "off",
       
       

       
    },

    {
        id: 2,
        type: "lamp",
        label: "lamba",
        icon: "./lamp.png",
        buttonType: "lamp",
        status: "active",
        selectedMode : "on",
     
       
       
    },

    {
        id: 4,
        type: "valve",
        label: "vana",
        icon: "./valve.png",
        status: "active",
        buttonType: "valve",
        selectedMode : "off",
       


    },

    {
        id: 5,
        type: "alarm",
        label: "Alarm",
        icon: "./bell.png",
        status: "active",
        buttonType: "alarm",
        selectedMode :  "home",
     

       

    },

    {
        id: 6,
        type: "thermo",
        label: "kombi",
        icon: "./thermo.png",
        status: "active",
        buttonType: "thermo",
        selectedMode : "off",
        degree : 20,
        
       
    },
    {
        id: 7,
        type: "shutter",
        label: "perde2",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
        selectedMode : "half",
      


      

        
    },
    {
        id: 8,
        type: "shutter",
        label: "perde3",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
        selectedMode : "open",
       
        
    },
    {
        id: 9,
        type: "shutter",
        label: "perde4",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
        selectedMode : "open",
      

        
    },
    {
        id: 10,
        type: "shutter",
        label: "perde5",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
        selectedMode : "close",
        
        
    },
    {
        id: 11,
        type: "thermo",
        label: "termometre",
        icon: "./thermo.png",
        status: "active",
        buttonType: "thermo",
        degree : 2,
        
       

    
    }
]

}

export default getDatas


