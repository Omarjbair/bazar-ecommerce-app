import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store , persistor} from './store/index'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { app } from './firebase.config';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store} app={app}>
        <PersistGate loading={"loading"} persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );