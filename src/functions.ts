/**
 * Typed version of Object.keys, returning strongly typed keys
 *
 * @example
 * ```typescript
 * const keys = keysOf({ a: 1, b: 2 }); // ["a", "b"]
 * typeof keys[0]; // "a" | "b"
 * ```
 */
export function keysOf<T extends object, TKeys extends Extract<keyof T, string>[]>(
  obj: T
): TKeys {
  return Object.keys(obj) as TKeys;
}
