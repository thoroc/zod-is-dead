/**
 * Retrieves the values of an enum-like object.
 *
 * @template T - The type of the enum-like object.
 * @param obj - The enum-like object.
 * @returns An array containing the values of the enum-like object.
 */
export const getEnumValues = <T extends Record<string, unknown>>(obj: T) => {
  return Object.values(obj) as [(typeof obj)[keyof T]];
};
