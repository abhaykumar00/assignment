import { Toaster } from "sonner";
import { AppProvidersWrapper } from "./components";
import AllRoutes from "./routes/Routes";
import { configureFakeBackend } from "@/common";

// styles
import "@/assets/css/style.css";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AllRoutes />
      
      
    </AppProvidersWrapper>
  );
};

export default App;
