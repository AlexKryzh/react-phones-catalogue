import { AppStoreType, AppStore } from './store';

export interface IStoreHelper {
    setIsLoading(status: boolean): void;
}

export class StoreHelper implements IStoreHelper {

  public setIsLoading(status: boolean): void {
    AppStore.dispatch({
        type: AppStoreType.SET_ISLOADING,
        payload: status
    });
  }
}
