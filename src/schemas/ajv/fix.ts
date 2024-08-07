/**
 * Removes properties that are undefined from the given object.
 *
 * @param properties - The object containing properties to be purged.
 */
export const purgeUnknowProperties = (properties: unknown) => {
  // remove properties that are undefined
  Object.keys(properties as Record<string, unknown>).forEach((key) => {
    if ((properties as Record<string, unknown>)[key] === undefined) {
      delete (properties as Record<string, unknown>)[key];
    }
  });
};
