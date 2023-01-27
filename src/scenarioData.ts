import Scenario from './redux/interfaces/Scenario'
import { ShutterMode, AlarmMode, LampMode } from './components/resultsPanelComponents/ActiveScenario'

const lampMood: LampMode = {
    on: 'on',
    off: 'off'
  }

  const shutterMood: ShutterMode = {
    open: 'open',
    close: 'close',
    half : 'half'
    }

    const alarmMood: AlarmMode = {
        home: 'home',
        outside: 'outside'
        }

       


var getDatas = (): Scenario[] => {

return  [

    {   
        id: 1,
        type: "lamp",
        label : "Garaj 2",
        icon : "./lamp.png",
        buttonType: "lamp",
        status: "passive",
        selectedMode :  "off"
       
    },

    {
        id: 2,
        type: "lamp",
        label: "lamba",
        icon: "./lamp.png",
        buttonType: "alarm",
        status: "passive",
        selectedMode : "on"
       
    },

    {
        id: 4,
        type: "valve",
        label: "vana",
        icon: "./valve.png",
        status: "active",
        buttonType: "valve",
        selectedMode : "off"

    },

    {
        id: 5,
        type: "alarm",
        label: "Alarm",
        icon: "./bell.png",
        status: "active",
        buttonType: "alarm",
        selectedMode :  "home"
    },

    {
        id: 6,
        type: "shutter",
        label: "perde1",
        icon: "./curt.png",
        status: "active",
        buttonType: "shutter",
        selectedMode : "open",
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
        selectedMode : "off",
    },
    {
        id: 9,
        type: "shutter",
        label: "perde4",
        icon: "./curt.png",
        status: "passive",
        buttonType: "shutter",
        selectedMode : "open"
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
]

}

export default getDatas


