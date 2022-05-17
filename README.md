# ts-utils

 Extracts a union of all the characters in a string

 @example
 ```typescript
 ExtractCharacters<"Hello">; // "H" | "e" | "l" | "l" | "o"
 ```


 Check if a string only includes characters from a given string
 @example
 ```typescript
 StringOnlyIncludes<"Hello", "0123456789-()">; // false
 StringOnlyIncludes<"123-456-7890", "0123456789-()">; // true
 ```


 Check if a string is alphanumeric

 @example
 ```typescript
 IsAlphaNumeric<"Hello">; // true
 IsAlphaNumeric<"$^1fa">; // false
 ```


 Typed version of Object.keys, returning strongly typed keys

 @example
 ```typescript
 const keys = keysOf({ a: 1, b: 2 }); // ["a", "b"]
 typeof keys[0]; // "a" | "b"
 ```

