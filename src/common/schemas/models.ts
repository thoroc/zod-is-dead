export const TravelType = {
  Land: 'land',
  Sea: 'sea',
  Air: 'air',
};

export type TravelType = (typeof TravelType)[keyof typeof TravelType];
