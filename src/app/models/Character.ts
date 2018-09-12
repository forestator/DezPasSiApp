import {Classe} from './Classe';

export class Character {
  constructor(
    public name: string,
    public classe: Classe,
    public level: number) {}
}
