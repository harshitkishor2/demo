import React from "react";
import { SplashScreen } from "./views";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@app/store";
import CombineContextProvider from "@app/store/root/CombineContextProvider";


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CombineContextProvider>
          <SplashScreen />
        </CombineContextProvider>
      </PersistGate>
    </Provider>
  );
};


export default App;
