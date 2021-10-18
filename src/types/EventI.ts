export interface EventI {
  id: number;
  image: string;
  date: string;
  description: string;
  title: string;
  signedUp: boolean;
  user?: {
    firstName: string | null;
    secondName: string | null;
  };
}
export interface EventsI {
  items: EventI[];
  filterByYear: number;
  filterByMonth: { index: number; month: string };
}
