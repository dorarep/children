import { createStore }                  from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage                          from 'redux-persist/es/storage';
import allReducer                       from 'children/src/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export default configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
