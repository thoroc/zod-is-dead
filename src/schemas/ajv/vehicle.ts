import { s } from 'ajv-ts';

/**
 * AjvVehicleSchema represents the schema for a vehicle object.
 * It defines the properties make, model, and year.
 */
export const AjvVehicleSchema = s.object({
  make: s.string(),
  model: s.string(),
  year: s.number(),
});

/**
 * Represents a vehicle defined by the AjvVehicleSchema.
 */
export type AjvVehicle = s.infer<typeof AjvVehicleSchema>;
