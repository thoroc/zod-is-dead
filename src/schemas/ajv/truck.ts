import { s } from 'ajv-ts';
import { AjvVehicleSchema } from './vehicle';

export const AjvTruckSchema = s
  .object({
    commercialCapacity: s.number(),
    forwardCabin: s.boolean(),
    wheels: s.number(),
  })
  .merge(AjvVehicleSchema)
  .error('Could not parse the Truck schema');

export type AjvTruck = s.infer<typeof AjvTruckSchema>;
