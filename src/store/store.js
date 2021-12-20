import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';

const sagaMidleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMidleWare));

sagaMidleWare.run(sagas);

export {store};
