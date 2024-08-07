import { s } from 'ajv-ts';
import { AjvVehicleSchema } from './vehicle';

export const AjvTruckSchema = s
  .object({
    commercialCapacity: s.number(),
    forwardCabin: s.boolean(),
    wheels: s.number(),
  })
  .merge(AjvVehicleSchema);

export type AjvTruck = s.infer<typeof AjvTruckSchema>;
