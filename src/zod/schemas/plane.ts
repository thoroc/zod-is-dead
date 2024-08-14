import { z } from 'zod';

import { ZodCommercialVehicleSchema, ZodPassengerVehicleSchema, ZodVehicleSchema } from './vehicle';

/**
 * ZodPlaneSchema represents the schema for a plane object.
 * It defines the properties 'wingspan' and 'engines' as numbers.
 */
export const ZodPlaneSchema = z
  .object({
    wingspan: z.number(),
    engines: z.number(),
  })
  .merge(ZodVehicleSchema);

/**
 * Represents a plane defined by the ZodPlaneSchema.
 */
export type ZodPlane = z.infer<typeof ZodPlaneSchema>;

/**
 * ZodCargoPlaneSchema represents the schema for a cargo plane in the Zod library.
 * It includes the cargo capacity of the plane.
 */
export const ZodCargoPlaneSchema = ZodCommercialVehicleSchema.merge(ZodPlaneSchema);

/**
 * Represents a ZodCargoPlane.
 */
export type ZodCargoPlane = z.infer<typeof ZodCargoPlaneSchema>;

/**
 * ZodPassengerPlaneSchema represents a schema for a passenger plane.
 * It is a merge of ZodPlaneSchema and ZodPassengerVehicleSchema.
 */
export const ZodPassengerPlaneSchema = ZodPlaneSchema.merge(ZodPassengerVehicleSchema);

/**
 * Represents a ZodPassengerPlane.
 */
export type ZodPassengerPlane = z.infer<typeof ZodPassengerPlaneSchema>;
