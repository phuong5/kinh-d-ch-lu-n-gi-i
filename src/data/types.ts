export type TrigramKey = 'Can' | 'Kham' | 'Can2' | 'Chan' | 'Ton' | 'Ly' | 'Khon' | 'Doai';

export interface Trigram {
  key: TrigramKey;
  name: string;        // Càn, Khảm, Cấn, Chấn, Tốn, Ly, Khôn, Đoài
  natureName: string;  // Thiên (Trời), Thủy (Nước), Sơn (Núi), Lôi (Sấm), Phong (Gió), Hỏa (Lửa), Địa (Đất), Trạch (Đầm)
  symbol: string;      // ☰, ☵, ☶, ☳, ☴, ☲, ☷, ☱
  lines: [number, number, number]; // bottom to top
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  hanzi: string;
  direction: string;
  meaning: string;
}

export type HexagramNature = 'Đại Cát' | 'Cát' | 'Cát Hanh' | 'Thứ Cát' | 'Bình' | 'Bình Cát' | 'Tiểu Cát' | 'Tiểu Hung' | 'Hung' | 'Đại Hung';

export interface LineInterpretation {
  position: number;    // 1 (Sơ) to 6 (Thượng)
  name: string;        // Sơ Cửu / Sơ Lục, v.v.
  type: 'Dương' | 'Âm';
  meaning: string;
  advice: string;
  original?: string;
  hanViet?: string;
  dichNghia?: string;
  tieuTuong?: {
    hanViet: string;
    dichNghia: string;
  };
  giangGiai?: string;
}

export interface Hexagram {
  id: number;                          // 1 - 64
  name: string;                        // Tên quẻ chuẩn (ví dụ: Bát Thuần Kiền, Thủy Lôi Truân...)
  altName: string;                     // Tên gọi khác (ví dụ: Thiên Vi Càn, Thuần Càn...)
  hanzi: string;                       // Chữ Hán (乾, 屯...)
  unicodeChar?: string;                // Ký tự unicode (䷀...)
  upperTrigram: TrigramKey;            // Ngoại quái (Thượng quái)
  lowerTrigram: TrigramKey;            // Nội quái (Hạ quái)
  lines: [number, number, number, number, number, number]; // 1 = Yang (—), 0 = Yin (--), Hào 1 đáy đến Hào 6 trên cùng
  nature: HexagramNature;              // Tính chất Cát / Hung
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'; // Ngũ hành cung quẻ
  omen: string;                        // Điềm quẻ (VD: Khốn Long Đắc Thủy, Ngạ Hổ Đắc Thực...)
  omenMeaning: string;                 // Ý nghĩa điềm quẻ
  summary: string;                     // Khái quát ngắn gọn
  trieuDoan?: string;                  // Thơ triệu đoán quẻ
  thoanTu: {
    original?: string;
    hanViet: string;
    dichNghia: string;
    giangGiai?: string;
  };
  thoanTruyen?: {
    hanViet: string;
    dichNghia: string;
    giangGiai?: string;
  };
  daiTuong: {
    hanViet: string;
    dichNghia: string;
    giangGiai?: string;
  };
  vanNgon?: {
    hanViet: string;
    dichNghia: string;
  };
  dichLy: string;                      // Luận giải Dịch lý sâu sắc
  aspects: {
    career: string;                    // Công danh, sự nghiệp, thi cử
    wealth: string;                    // Tài lộc, tiền tài, làm ăn
    love: string;                      // Tình cảm, hôn nhân, gia đạo
    health: string;                    // Sức khỏe, bệnh tật
    travel: string;                    // Xuất hành, di chuyển, cầu việc
    advice: string;                    // Lời khuyên hành sự cho người quân tử
  };
  sixLines: LineInterpretation[];      // Luận giải 6 hào
  tongKet?: string;                    // Tổng kết triết lý & Đạo xử thế
}
