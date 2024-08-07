import { z } from 'zod';
import { ZodVehicleSchema } from './vehicle';

/**
 * ZodCarSchema represents the schema for a car object.
 * It includes properties for seating capacity and boot size.
 * This schema is merged with ZodVehicleSchema.
 */
export const ZodCarSchema = z
  .object({
    seatingCapacity: z.number(),
    bootSize: z.number(),
  })
  .merge(ZodVehicleSchema);

/**
 * Represents a car schema defined using Zod.
 */
export type ZodCar = z.infer<typeof ZodCarSchema>;
