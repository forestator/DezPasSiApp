import {Classe} from './Classe';

export class Member {
  constructor(
    public name: string,
    public classe: Classe,
    public spec : string,
    public rank: string) {}
}
