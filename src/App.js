import './App.css';
import styled from 'styled-components';
import ToDo from './ToDo/ToDo';

const AppContainer = styled.div`
  width: 100%;
`;

export default function App() {
  return (
    <AppContainer>
      <ToDo></ToDo>
    </AppContainer>
  );
}
