import { s } from 'ajv-ts';
import { AjvVehicleSchema } from './vehicle';

export const AjvCarSchema = s
  .object({
    seatingCapacity: s.number(),
    bootSize: s.number(),
  })
  .merge(AjvVehicleSchema);

export type AjvCar = s.infer<typeof AjvCarSchema>;
