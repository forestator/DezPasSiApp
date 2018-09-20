export class PoidsDesStats {
  constructor(
    public classeName: string,
    public specName: string,
    public statsMono: string,
    public statsMulti: string,
    public dateDeModif: string) {
    this.dateDeModif = new Date().toLocaleDateString();
  }
}
