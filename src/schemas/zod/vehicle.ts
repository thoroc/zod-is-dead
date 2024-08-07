import { z } from 'zod';

/**
 * ZodVehicleSchema represents the schema for a vehicle object.
 * It defines the properties make, model, and year.
 */
export const ZodVehicleSchema = z.object({
  make: z.string(),
  model: z.string(),
  year: z.number(),
});

/**
 * Represents a ZodVehicle.
 */
export type ZodVehicle = z.infer<typeof ZodVehicleSchema>;
