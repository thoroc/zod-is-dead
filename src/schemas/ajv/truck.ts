import { s } from 'ajv-ts';

import { AjvCommercialVehicleSchema } from './vehicle';

/**
 * AjvTruckSchema represents the schema for a truck.
 * It includes properties such as commercialCapacity, forwardCabin, and wheels.
 * This schema is merged with AjvVehicleSchema and provides an error message if parsing fails.
 */
export const AjvTruckSchema = s
  .object({
    forwardCabin: s.boolean(),
    wheels: s.number(),
  })
  .merge(AjvCommercialVehicleSchema);

/**
 * Represents a truck schema defined using Ajv.
 */
export type AjvTruck = s.infer<typeof AjvTruckSchema>;
