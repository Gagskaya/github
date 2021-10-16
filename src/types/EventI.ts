export interface EventI {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
  signedUp: boolean;
}
export interface EventsI {
  items: EventI[];
  signedUpItems: EventI[];
}
