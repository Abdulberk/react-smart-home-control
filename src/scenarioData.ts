import Scenario from './redux/interfaces/Scenario'

var getDatas = (): Scenario[] => {

return  [

    {   
        id: 1,
        type: "lamp",
        label : "Garaj 2",
        icon : "./lamp.png",
        buttonType: "lamp",
        status: "passive",
       
    },

    {
        id: 2,
        type: "thermo",
        label: "Kombi",
        icon: "./thermo.png",
        buttonType: "thermo",
        status: "passive",
       
    },

    {
        id: 3,
        type: "thermo",
        label: "panel kombi",
        icon: "./thermo.png",
        status: "passive",
        buttonType: "thermo",
    },

    {
        id: 4,
        type: "valve",
        label: "vana",
        icon: "./valve.png",
        status: "passive",
        buttonType: "valve",
    },

    {
        id: 5,
        type: "alarm",
        label: "Alarm",
        icon: "./bell.png",
        status: "passive",
        buttonType: "alarm",
    },

    {
        id: 6,
        type: "shutter",
        label: "perde",
        icon: "./curt.png",
        status: "passive",
        buttonType: "shutter",
    },
    {
        id: 7,
        type: "shutter",
        label: "perde",
        icon: "./curt.png",
        status: "passive",
        buttonType: "shutter",
    },
    {
        id: 8,
        type: "shutter",
        label: "perde",
        icon: "./curt.png",
        status: "passive",
        buttonType: "shutter",
    },
    {
        id: 9,
        type: "shutter",
        label: "perde",
        icon: "./curt.png",
        status: "passive",
        buttonType: "shutter",
    },
    {
        id: 10,
        type: "shutter",
        label: "perde",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
    },
]

}

export default getDatas


