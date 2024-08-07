import { s } from 'ajv-ts';

export const AjvVehicleSchema = s.object({
  make: s.string(),
  model: s.string(),
  year: s.number(),
});

export type AjvVehicle = s.infer<typeof AjvVehicleSchema>;
