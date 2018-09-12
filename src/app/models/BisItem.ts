export class BisItem {
  constructor(
    public name: string,
    public ilvl: number,
    public mastery: number,
    public crit: number,
    public haste: number,
    public versatility: number,
    public procSpeed: boolean,
    public procChasse: boolean,
    public dropBy: string,
    public dungeonOrRaid: {'dungeon', 'raid' }
    ) {}
}
