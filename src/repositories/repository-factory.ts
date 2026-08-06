import type { BlackSheepRepository } from "./black-sheep-repository";
import { MockBlackSheepRepository } from "./mock-black-sheep-repository";

export function createBlackSheepRepository(): BlackSheepRepository {
  return new MockBlackSheepRepository();
}
