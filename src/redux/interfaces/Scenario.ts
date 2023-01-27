import { ShutterMode  } from "../../components/resultsPanelComponents/ActiveScenario"
import { AlarmMode } from "../../components/resultsPanelComponents/ActiveScenario"
import { LampMode } from "../../components/resultsPanelComponents/ActiveScenario"


export default interface Scenario {

    id: number,
    label: string,
    buttonType: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve',
    status: 'active' | 'passive',
    icon: string,
    type: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve',
    selectedMode: 'on' | 'off' | 'open' | 'close' | 'half' | 'home' | 'outside' 

    
}

