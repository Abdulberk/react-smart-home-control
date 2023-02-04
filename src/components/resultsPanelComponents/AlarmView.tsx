import styled from "styled-components";


export const AlarmBox = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  background-color: #3a5460;
  color: white;
  font-size: 18px;
  width: 45px;
  height: 45px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
 
`;

const AlarmView = ({ selectedMode }: any) => {

  return (
    <div>

      {selectedMode === "home" ? <AlarmBox>EV</AlarmBox> : <AlarmBox>DIŞ</AlarmBox>}

    

    </div>
  );
};

export default AlarmView;
