export interface EventI {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
}
export interface EventsI {
  items: EventI[];
}
