import { ShutterMode, ValveMode  } from "../../components/resultsPanelComponents/ActiveScenario"
import { AlarmMode } from "../../components/resultsPanelComponents/ActiveScenario"
import { LampMode } from "../../components/resultsPanelComponents/ActiveScenario"


export default interface Scenario {

    id: number | string,
    label: string,
    buttonType: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve',
    status: 'active' | 'passive',
    icon: string,
    type: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve',
    selectedMode?:  'home' | 'outside' | 'off' | 'on' | 'open' | 'close' | 'half',
    degree?: number | null,
    order?: number,
    

    
}

