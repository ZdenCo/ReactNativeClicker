import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from "react-native-toast-notifications";
import { store, persistor } from "@/store/testStore";
import App from "@/components/App";

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <StatusBar style="auto" />
          <App />
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}
