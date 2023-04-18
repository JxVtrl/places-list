import styled from "styled-components/native";
import tokens from "../../utils/tokens";
import SelectDropdown from 'react-native-select-dropdown'

export const Select = styled(SelectDropdown)`
  width: 100%;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`;

export const Label = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding-left: 3px;
  padding-bottom: 7px;
  
`;

export const LabelText = styled.Text`
/* font-family: ${tokens.fonts.family}; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color:${tokens.colors.label};
`

export const MessageError = styled.Text`
  position: absolute;
  color: ${tokens.colors.errorSecondary};
  font-size: 13px;
  margin-left: 5px;
  margin-top: 50px;
`;
