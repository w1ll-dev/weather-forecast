class StorageError extends Error {
  constructor() {
    super('StorageError');
    this.name = 'StorageError';
  }
}

export default StorageError;
