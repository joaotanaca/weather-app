/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto-js';

const HASH = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;
const PREFIX = import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX;

const CYPHER_ENCRYPT = crypto.AES.encrypt;
const CYPHER_DECRYPT = crypto.AES.decrypt;

const options: any = { iv: { sigBytes: 16, words: [0, 0, 0, 0] } };

export default {
  /* The `get` function is retrieving a value from the local storage. */
  get(name: string) {
    const nameEcrypt = crypto.HmacSHA1(name, HASH);
    let value: string | crypto.lib.WordArray | null = localStorage.getItem(`${PREFIX}.${nameEcrypt}`);
    if (!value) {
      return null;
    }
    value = CYPHER_DECRYPT(value as string, HASH, options);
    value = value.toString(crypto.enc.Utf8);
    return value;
  },
  /* The `set` function is used to store a value in the local storage. */
  set(name: string, value: unknown) {
    const nameEcrypt = crypto.HmacSHA1(name, HASH);
    let valueEcrypt = typeof value === 'object' ? JSON.stringify(value) : `${value}`;
    valueEcrypt = CYPHER_ENCRYPT(valueEcrypt, HASH, options).toString();
    localStorage.setItem(`${PREFIX}.${nameEcrypt}`, valueEcrypt);
  },
  /* The `remove` function is used to remove a value from the local storage. */
  remove(name: string) {
    const nameEcrypt = crypto.HmacSHA1(name, HASH);
    localStorage.removeItem(`${PREFIX}.${nameEcrypt}`);
  },
};
