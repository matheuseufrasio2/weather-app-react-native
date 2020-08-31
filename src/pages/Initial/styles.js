import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #e5ecf4;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #7d7d7d24;
`;

export const InputCity = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #303644;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const IconSearch = styled(Icon)`
  color: #303644;
  margin-right: 0;
  font-size: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
