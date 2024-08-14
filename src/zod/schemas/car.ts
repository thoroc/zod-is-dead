import { z } from 'zod';

import { ZodPassengerVehicleSchema } from './vehicle';

/**
 * ZodCarSchema represents the schema for a car object.
 * It includes properties for seating capacity and boot size.
 * This schema is merged with ZodVehicleSchema.
 */
export const ZodCarSchema = z
  .object({
    bootSize: z.number(),
  })
  .merge(ZodPassengerVehicleSchema);

/**
 * Represents a car schema defined using Zod.
 */
export type ZodCar = z.infer<typeof ZodCarSchema>;
