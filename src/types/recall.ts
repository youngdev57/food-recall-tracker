export type RawRecallItem = {
  RTRVLDSUSE_SEQ: string; // 회수/판매중지 일련번호
  PRDTNM: string; // 제품명
  BSSHNM: string; // 제조업체명
  RTRVLPRVNS: string; // 회수사유
  IMG_FILE_PATH: string; // 제품사진URL
  DISTBTMLMT: string; // 유통/소비기한
};

export type RecallItem = {
  recallSeq: string;
  productName: string;
  brandName: string;
  recallReason: string;
  imageUrl?: string;
  distLimitDate: string;
};
