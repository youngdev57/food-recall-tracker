import type { RawRecallItem, RecallItem } from "@/types/recall";

export function normalizeRecallItem(item: RawRecallItem): RecallItem {
  return {
    productName: item.PRDTNM,
    brandName: item.BSSHNM,
    recallReason: item.RTRVLPRVNS,
    imageUrl: item.IMG_FILE_PATH,
    recallSeq: item.RTRVLDSUSE_SEQ,
    distLimitDate: item.DISTBTMLMT,
  };
}
