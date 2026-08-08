import type { KaloKhataRepository } from "./kalokhata-repository";
import { LocalKaloKhataRepository } from "./local-kalokhata-repository";

export function createKaloKhataRepository(): KaloKhataRepository {
  return new LocalKaloKhataRepository();
}
