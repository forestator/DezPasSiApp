export class BisItem {
  constructor(
    public id: number,
    public spe: string,
    public slot: string,
    public name: string,
    public bonus: string,
    public dropBy: string,
    public dungeonOrRaid: {'dungeon', 'raid' }
    ) {}
}
