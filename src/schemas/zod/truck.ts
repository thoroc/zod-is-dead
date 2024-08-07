import { z } from 'zod';
import { ZodCommercialVehicleSchema } from './vehicle';

/**
 * ZodTruckSchema represents the schema for a truck object.
 *
 * @remarks
 * This schema includes properties such as commercialCapacity, forwardCabin, and wheels.
 * It also merges with the ZodVehicleSchema.
 */
export const ZodTruckSchema = z
  .object({
    forwardCabin: z.boolean(),
    wheels: z.number(),
  })
  .merge(ZodCommercialVehicleSchema);

/**
 * Represents a truck schema defined using Zod.
 */
export type ZodTruck = z.infer<typeof ZodTruckSchema>;
