import { s } from 'ajv-ts';
import { AjvCarSchema } from './car';
import { AjvTruckSchema } from './truck';
import { AjvCargoPlaneSchema, AjvPassengerPlaneSchema } from './plane';

// --------------------------------------------------
// Transportation Schema
// --------------------------------------------------

export const AjvTransportSchema = s.object({
  vehicle: s.union(AjvCarSchema, AjvTruckSchema, AjvPassengerPlaneSchema, AjvCargoPlaneSchema),
});

export type AjvTransport = s.infer<typeof AjvTransportSchema>;
