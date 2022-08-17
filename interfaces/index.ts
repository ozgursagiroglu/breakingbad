export type StackParams = {
  Home: any;
  Detail: {id: number};
};

export interface ICharacter {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: any[];
}
