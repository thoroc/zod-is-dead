import { s } from 'ajv-ts';

import { AjvCarSchema } from './car';
import { AjvCargoPlaneSchema, AjvPassengerPlaneSchema } from './plane';
import { AjvTruckSchema } from './truck';

// --------------------------------------------------
// Transportation Schema
// --------------------------------------------------

export const AjvTransportSchema = s.object({
  vehicle: s.union(AjvCarSchema, AjvTruckSchema, AjvPassengerPlaneSchema, AjvCargoPlaneSchema),
});

export type AjvTransport = s.infer<typeof AjvTransportSchema>;
