import { s } from 'ajv-ts';

import { AjvPassengerVehicleSchema } from './vehicle';

export const AjvCarSchema = s
  .object({
    seatingCapacity: s.number(),
    bootSize: s.number(),
  })
  .merge(AjvPassengerVehicleSchema);

export type AjvCar = s.infer<typeof AjvCarSchema>;
