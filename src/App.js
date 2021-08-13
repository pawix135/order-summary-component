import './App.css'
import Summary from './components/Summary';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
`

function App() {
  return (
    <Wrapper>
      <Summary />
    </Wrapper>
  );
}

export default App;
