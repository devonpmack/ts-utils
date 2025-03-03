/**
 * Extracts a union of all the characters in a string
 *
 * @example
 * ```typescript
 * ExtractCharacters<"Hello">; // "H" | "e" | "l" | "l" | "o"
 * ```
 */
export type ExtractCharacters<T extends string> = Exclude<ExtractCharactersRecursive<T>, ''>

type ExtractCharactersRecursive<T extends string> =
  T extends `${infer Left}${infer Right}` ? Left | ExtractCharactersRecursive<Right> : T;

  /**
 * Check if a string only includes characters from a given string
 * @example
 * ```typescript
 * StringOnlyIncludes<"Hello", "0123456789-()">; // false
 * StringOnlyIncludes<"123-456-7890", "0123456789-()">; // true
 * ```
 */
export type StringOnlyIncludes<
  T extends string,
  Allowed extends string
> = ExtractCharacters<T> extends ExtractCharacters<Allowed> ? true : false;

/**
 * Check if a string is alphanumeric
 *
 * @example
 * ```typescript
 * IsAlphaNumeric<"Hello">; // true
 * IsAlphaNumeric<"$^1fa">; // false
 * ```
 */
export type IsAlphanumeric<T extends string> = StringOnlyIncludes<
  Lowercase<T>,
  "abcdefghijklmnopqrstuvwxyz0123456789-_"
>;
