import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({ providedIn: 'root' })
export class AppStorageService {

  constructor(@Inject(LOCAL_STORAGE) private readonly storage: StorageService) {
  }

  get(key: string): any {  // tslint:disable-line:no-any
    return this.storage.get(key);
  }

  set(key: string, value: any): void { // tslint:disable-line:no-any
    this.storage.set(key, value);
  }

  remove(key: string): void {
    this.storage.remove(key);
  }
}
