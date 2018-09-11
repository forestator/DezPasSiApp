import {Character} from './Character';

export class Member {
  constructor(
    public name: string,
    public rank: string,
    public listCharacters: Array<Character>,
    public created_at: string) {}
}
