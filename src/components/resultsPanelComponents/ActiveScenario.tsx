import styled from "styled-components";

import LampView from "./LampView";
import ShutterView from "./ShutterView";
import AlarmView from "./AlarmView";
import ValveView from "./ValveView";
import ThermoView from "./ThermoView";
import FontStyles from "../../fontStyle/fontStyle";
import react from "react";
import { deactivateScenario } from "../../redux/slices/scenarioSlice";
import { useAppDispatch } from "../../redux/stores/store";
import Scenario from "../../redux/interfaces/Scenario";
import "../../styles/delete.css";

const ScenarioRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 120px;
  row-gap: 10px;
`;

const DelayTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: rgba(4, 26, 46, 0.5);
`;

const ActiveScenarioTableLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  height: 100%;
  padding-left: 10px;
`;

const ActiveScenarioTableRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  height: 100%;
  align-items: center;
  column-gap: 10px;
`;

const DelayInput = styled.input`
  height: 30px;
  width: 50px;
  border-radius: 5px;
  background-color: white;
  color: rgba(13, 14, 28, 1);
  text-align: center;

  border: none;
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  transition: 0.2s;

  :hover {
    background-color: hsl(0, 0%, 90%, 0.9);
    transition: 0.1s;
  }

  outline: none;

  :active {
    transform: scale(0.95);

    transition: 0.2s;
  }
`;

const DelayLabel = styled.label`
  color: turquoise;
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  
  
`;

const ScenarioLabel = styled.label`
  color: turquoise;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-left: 3px;
  width: 80px;
  min-width: 80px;
 



`;


const Button = styled.button`
  width: 50px;
  height: 100%;
  text-align: center;

  line-height: 0px;
  border: none;
  background-color: rgba(13, 14, 28, 0.6);
  transition: 0.3s;

  :hover {
    background-color: rgba(13, 14, 28, 1);
    transition: 0.3s;
  }

  :active {
    transform: scale(0.9);

    transition: 0.1s;
    border-radius: 5%;
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  src: ${(props) => props.src};
  pointer-events: none;
`;

const DelayCaption = styled.label`
  color: white;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
const ActiveScenarioTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;

  background-color: rgba(4, 26, 46, 0.5);
`;

export type LampMode = "on" | "off";

export type ShutterMode = "open" | "close" | "half";

export type AlarmMode = "home" | "outside";

export type ValveMode = "on" | "off";

export type ThermoMode = number | null | undefined;


type ActiveScenarioProps = {
  label: string;
  icon: string;
  selectedMode?: LampMode | ShutterMode | AlarmMode | ValveMode | ThermoMode | undefined;
  buttonType: string;
  degree?: number | null;
  id: Scenario["id"];
  onMoveUp: (id: Scenario["id"]) => void;
  onMoveDown: (id:Scenario["id"] ) => void;


};

const ActiveScenario = react.memo(
  ({
    label,
    icon,
    selectedMode,
    buttonType,
    degree,
    id,
    onMoveUp,
    onMoveDown,
  }: ActiveScenarioProps) => {
    const modeList: string[] = [
      "on",
      "off",
      "open",
      "close",
      "half",
      "home",
      "outside",
    ];
    const buttonTypeList: string[] = [
      "lamp",
      "valve",
      "shutter",
      "alarm",
      "thermo",
    ];

    const dispatch = useAppDispatch();

    const [delayTime, setDelayTime] = react.useState<number>(150);
    const [animate, setAnimate] = react.useState<boolean>(false);

    const deleteScenario = react.useCallback(
      (id: Scenario["id"]) => {
        setAnimate(true);
        const time = setTimeout(() => {
          dispatch(deactivateScenario(id));
        }, 300);

        return () => {
          clearTimeout(time);

          setAnimate(false);
        };
      },
      [dispatch]
    );

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
      const eventTarget = event.target as HTMLInputElement;
      const value = eventTarget.value;

      setDelayTime((prev) => prev + parseInt(value));
    };

    const ButtonType = () => {
      switch (buttonType) {
        case "lamp":
          return <LampView selectedMode={selectedMode} />;
        case "shutter":
          return <ShutterView selectedMode={selectedMode} />;
        case "alarm":
          return <AlarmView selectedMode={selectedMode} />;
        case "valve":
          return <ValveView selectedMode={selectedMode} />;
        case "thermo":
          return <ThermoView degree={degree} />;
        default:
          return <> </>;
      }
    };

    return (
      <>
      
        <ScenarioRow className={animate ? "delete" : ""}>
          <DelayTable>
            <DelayCaption>Gecikme Süresi</DelayCaption>
            <DelayInput onClick={clickHandler} type="button" value="10" />
            <DelayInput onClick={clickHandler} type="button" value="1" />
            <DelayLabel>{delayTime} sn</DelayLabel>
            <DelayInput onClick={clickHandler} type="button" value="-1" />
            <DelayInput onClick={clickHandler} type="button" value="-10" />
          </DelayTable>

          <ActiveScenarioTable>
            <ActiveScenarioTableLeftSide>
              <ScenarioLabel

              >
                {label}
              </ScenarioLabel>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/" + icon}
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <ButtonType />
            </ActiveScenarioTableLeftSide>
            <ActiveScenarioTableRightSide>
              <Button onClick={() => onMoveUp(id)}>
                <Icon src={process.env.PUBLIC_URL + "/assets/up-long.png"} />
              </Button>

              <Button onClick={() => onMoveDown(id)}>
                <Icon src={process.env.PUBLIC_URL + "/assets/down-long.png"} />
              </Button>

              <Button onClick={() => deleteScenario(id)}>
                <Icon src={process.env.PUBLIC_URL + "/assets/trash.png"} />
              </Button>
            </ActiveScenarioTableRightSide>
          </ActiveScenarioTable>
        </ScenarioRow>
      </>
    );
  }
);

export default ActiveScenario;
