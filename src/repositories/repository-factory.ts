import type { BlackSheepRepository } from "./black-sheep-repository";
import { LocalBlackSheepRepository } from "./local-black-sheep-repository";

export function createBlackSheepRepository(): BlackSheepRepository {
  return new LocalBlackSheepRepository();
}
