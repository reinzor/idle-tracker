type IStorage = {
  idleState: chrome.idle.IdleState;
};

const defaultStorage: IStorage = {
  idleState: 'idle',
};

export const storage = {
  get: (): Promise<IStorage> => chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
  set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
