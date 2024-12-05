import { store, persistor } from "@/store/testStore";
import { Provider } from "react-redux";
import App from "@/components/App";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from "react-native-toast-notifications";

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}
