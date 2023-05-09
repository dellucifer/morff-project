import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Navbar from './components/Navbar/Navbar';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Navbar />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
