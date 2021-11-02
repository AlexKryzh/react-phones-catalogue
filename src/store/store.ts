import { createStore, ReducerType, useStore } from 'react-hookstore';
import { GenericPayload } from './';

const name = 'ROOT/APP';

enum Type {
  SET_ISLOADING = 'ROOT/APP/SET_ISLOADING'
}

type Payload = GenericPayload<Type>;

interface State {
  isLoading: boolean;
}

const defaultState: State = {
  isLoading: false
};

const reducers: ReducerType<State, Payload> = function (state: State, { type, payload }) {
  switch (type) {
    case Type.SET_ISLOADING:
      return { ...state, isLoading: payload };
    default:
      return { ...state };
  }
};

const store = createStore<State>(name, defaultState, reducers);

export const AppStore = store;
export const AppStoreType = Type;
export const useAppStore = () => useStore<State>(store);
