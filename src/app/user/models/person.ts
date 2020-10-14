export interface IUserResponse {
  data: IPerson;
  status: number;
}

export interface IPerson {
    name: IName;
    gender: string;
    profession: string;
    knowFor: string;
}

export interface IName {
    first: string;
    last: string;
}
