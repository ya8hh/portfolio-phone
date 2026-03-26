import { AppProvider } from './hooks/useAppContext';
import IPhoneFrame from './components/IPhoneFrame';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <AppProvider>
      <IPhoneFrame>
        <HomeScreen />
      </IPhoneFrame>
    </AppProvider>
  );
}
