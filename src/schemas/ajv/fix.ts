export const purgeUnknowProperties = (properties: unknown) => {
  // remove properties that are undefined
  Object.keys(properties as Record<string, unknown>).forEach((key) => {
    if ((properties as Record<string, unknown>)[key] === undefined) {
      delete (properties as Record<string, unknown>)[key];
    }
  });
};
