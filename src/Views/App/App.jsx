import { AppProvider } from "../../Context/index";
import AppUI from "./AppUI";

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
