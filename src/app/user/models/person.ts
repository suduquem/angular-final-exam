export interface IPerson {
  data: {
    name: {
      first: string;
      last: string;
    };
    gender: string;
    profession: string;
    knowFor: string;
  };
  status: number;
}
