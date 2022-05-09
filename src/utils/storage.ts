class Storage {
  static get(key: string) {
    const data = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }

    return null;
  }

  static set(key: string, value: any) {
    return localStorage.setItem(key, value);
  }
}

export default Storage;
