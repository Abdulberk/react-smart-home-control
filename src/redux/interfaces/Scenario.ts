export default interface Scenario {

    id: number,
    label: string,
    buttonType: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve';
    status: 'active' | 'passive',
    icon: string,
    type: 'alarm' | 'thermo' | 'shutter' | 'lamp' | 'valve',

}


