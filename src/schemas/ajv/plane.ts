import { s } from 'ajv-ts';

import { AjvCommercialVehicleSchema, AjvPassengerVehicleSchema, AjvVehicleSchema } from './vehicle';

/**
 * AjvPlaneSchema represents the schema for a plane object.
 * It defines the properties 'wingspan' and 'engines' as numbers.
 */
export const AjvPlaneSchema = s
  .object({
    wingspan: s.number(),
    engines: s.number(),
  })
  .merge(AjvVehicleSchema);

/**
 * Represents a plane defined by the AjvPlaneSchema.
 */
export type AjvPlane = s.infer<typeof AjvPlaneSchema>;

/**
 * AjvCargoPlaneSchema represents the schema for a cargo plane in the Ajv library.
 * It includes the cargo capacity of the plane.
 */
export const AjvCargoPlaneSchema = AjvCommercialVehicleSchema.merge(AjvPlaneSchema);

/**
 * Represents a AjvCargoPlane.
 */
export type AjvCargoPlane = s.infer<typeof AjvCargoPlaneSchema>;

/**
 * AjvPassengerPlaneSchema represents a schema for a passenger plane.
 * It is a merge of AjvPlaneSchema and AjvPassengerVehicleSchema.
 */
export const AjvPassengerPlaneSchema = AjvPlaneSchema.merge(AjvPassengerVehicleSchema);

/**
 * Represents a AjvPassengerPlane.
 */
export type AjvPassengerPlane = s.infer<typeof AjvPassengerPlaneSchema>;
