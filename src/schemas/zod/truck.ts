import { z } from 'zod';
import { ZodVehicleSchema } from './vehicle';

/**
 * ZodTruckSchema represents the schema for a truck object.
 *
 * @remarks
 * This schema includes properties such as commercialCapacity, forwardCabin, and wheels.
 * It also merges with the ZodVehicleSchema.
 */
export const ZodTruckSchema = z
  .object({
    commercialCapacity: z.number(),
    forwardCabin: z.boolean(),
    wheels: z.number(),
  })
  .merge(ZodVehicleSchema);

/**
 * Represents a truck schema defined using Zod.
 */
export type ZodTruck = z.infer<typeof ZodTruckSchema>;
