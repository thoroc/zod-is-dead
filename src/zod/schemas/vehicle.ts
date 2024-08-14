import { z } from 'zod';

import { TravelType } from '../../common';
import { getEnumValues } from '../utils';

/**
 * ZodVehicleSchema represents the schema for a vehicle object.
 * It defines the properties make, model, and year.
 */
export const ZodVehicleSchema = z.object({
  make: z.string(),
  model: z.string(),
  year: z.number(),
  travelsOver: z.enum(getEnumValues(TravelType)),
});

/**
 * Represents a ZodVehicle.
 */
export type ZodVehicle = z.infer<typeof ZodVehicleSchema>;

/**
 * ZodPassengerVehicleSchema is a schema for representing a passenger vehicle.
 * It extends the ZodVehicleSchema and adds a seating capacity property.
 */
export const ZodPassengerVehicleSchema = ZodVehicleSchema.extend({
  seatingCapacity: z.number(),
});

/**
 * Represents a passenger vehicle defined by the ZodPassengerVehicleSchema.
 */
export type ZodPassengerVehicle = z.infer<typeof ZodPassengerVehicleSchema>;

/**
 * Represents a schema for a commercial vehicle.
 */
export const ZodCommercialVehicleSchema = ZodVehicleSchema.extend({
  cargoCapacity: z.number(),
});

/**
 * Represents a commercial vehicle as defined by the ZodCommercialVehicleSchema.
 */
export type ZodCommercialVehicle = z.infer<typeof ZodCommercialVehicleSchema>;
