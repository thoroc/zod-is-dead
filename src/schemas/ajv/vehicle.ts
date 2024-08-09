import { s } from 'ajv-ts';

/**
 * AjvVehicleSchema represents the schema for a vehicle object.
 * It defines the properties make, model, and year.
 */
export const AjvVehicleSchema = s.object({
  make: s.string(),
  model: s.string(),
  year: s.number(),
  travelsOver: s.enum(['land', 'sea', 'air']),
});

/**
 * Represents a vehicle defined by the AjvVehicleSchema.
 */
export type AjvVehicle = s.infer<typeof AjvVehicleSchema>;

/**
 * AjvPassengerVehicleSchema is a schema for validating passenger vehicles using Ajv.
 * It extends the AjvVehicleSchema and adds a seatingCapacity property.
 */
export const AjvPassengerVehicleSchema = AjvVehicleSchema.extend({
  seatingCapacity: s.number(),
});

/**
 * Represents a passenger vehicle inferred from the AjvPassengerVehicleSchema.
 */
export type AjvPassengerVehicle = s.infer<typeof AjvPassengerVehicleSchema>;

/**
 * Represents a schema for a commercial vehicle.
 */
export const AjvCommercialVehicleSchema = AjvVehicleSchema.extend({
  cargoCapacity: s.number(),
});

/**
 * Represents a commercial vehicle as defined by the AjvCommercialVehicleSchema.
 */
export type AjvCommercialVehicle = s.infer<typeof AjvCommercialVehicleSchema>;
