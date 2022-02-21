import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import RootNavigation from './RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
