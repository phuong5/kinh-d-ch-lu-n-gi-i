import { Hexagram } from './types';

export const HEXAGRAMS_1_16: Hexagram[] = [
  {
    id: 1,
    name: 'Bát Thuần Kiền',
    altName: 'Thiên Vi Càn (Thuần Càn)',
    hanzi: '乾',
    unicodeChar: '䷀',
    upperTrigram: 'Can',
    lowerTrigram: 'Can',
    lines: [1, 1, 1, 1, 1, 1],
    nature: 'Đại Cát',
    element: 'Kim',
    omen: 'Khốn Long Đắc Thủy',
    omenMeaning: 'Rồng gặp lúc ngặt nghèo nay được về với sông lớn, thời cơ vàng son đã đến, mọi sự hanh thông rực rỡ.',
    summary: 'Biểu tượng của Trời, mang tính thuần dương cương kiện, sáng tạo không ngừng. Tượng trưng cho người quân tử tự cường bất tức, gặp thời khai vận đại phát.',
    trieuDoan: 'Rồng lặn nước sâu đã đến thì, Vươn mình bay lượn ngút trời mây. Công danh toại nguyện cầu chi được, Vận hội hanh thông phước lộc đầy.',
    thoanTu: {
      original: '乾: 元, 亨, 利, 貞.',
      hanViet: 'Càn: Nguyên, Hanh, Lợi, Trinh.',
      dichNghia: 'Quẻ Càn có đủ bốn đức lớn: Nguyên (khởi đầu vĩ đại, chí thiện), Hanh (thông suốt, phát triển thuận lợi), Lợi (hài hòa, bổ ích cho muôn vật), Trinh (chính đính, kiên cố bền bỉ đến cùng).'
    },
    daiTuong: {
      hanViet: 'Thiên hành kiện, quân tử dĩ tự cường bất tức.',
      dichNghia: 'Trời vận hành mạnh mẽ không ngừng, người quân tử noi theo đó mà tự lực tự cường, phấn đấu không ngưng nghỉ.'
    },
    dichLy: 'Quẻ Thuần Càn gồm sáu hào toàn dương, tượng trưng cho ánh sáng, năng lượng sáng tạo nguyên thủy của vũ trụ. Đây là quẻ khởi đầu của 64 quẻ, thể hiện sức mạnh tối thượng nhưng đồng thời cũng răn dạy người quân tử phải biết tùy thời: từ lúc rồng còn ẩn mình nơi vực sâu (Sơ cửu) đến khi rồng bay trên trời (Cửu ngũ) và cần tránh tự phụ kiêu căng để không rơi vào thế rồng hối hận (Thượng cửu).',
    aspects: {
      career: 'Vận thế đang lên rất mạnh, có cơ hội thăng tiến vượt bậc, được cấp trên nâng đỡ, thi cử đỗ đạt cao. Cần nắm bắt cơ hội nhưng luôn giữ sự khiêm nhường.',
      wealth: 'Tài lộc dồi dào, đầu tư kinh doanh gặp thời sinh sôi nảy nở. Tiền bạc đổ về thuận lợi theo đà danh tiếng.',
      love: 'Tình cảm nồng thắm, đôi bên hòa hợp. Người độc thân dễ gặp nhân duyên lý tưởng xứng lứa vừa đôi.',
      health: 'Thể lực sung mãn, tinh thần phấn chấn. Lưu ý các bệnh do hỏa vượng, huyết áp hoặc làm việc quá sức.',
      travel: 'Xuất hành vô cùng thuận lợi, đi xa gặp quý nhân tương trợ, trăm sự đều tốt lành.',
      advice: 'Hành động với lòng chính trực, kiên định tự cường nhưng tuyệt đối không được kiêu ngạo, độc đoán. Đỉnh cao danh vọng luôn cần sự cẩn trọng gìn giữ.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Tiềm long vật dụng (Rồng lặn dưới nước, chớ vội hành động).', advice: 'Tài năng còn non trẻ hoặc chưa đúng thời thế, nên kiên nhẫn ẩn nhẫn tu dưỡng bản thân, không hấp tấp.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Hiện long tại điền, lợi kiến đại nhân (Rồng hiện trên cánh đồng, có lợi khi gặp bậc đại nhân đức độ).', advice: 'Tài năng bắt đầu tỏa sáng, nên tìm người thầy giỏi, minh chủ hoặc đối tác uy tín để nương tựa hợp tác.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Quân tử chung nhật càn càn, tịch dịch nhược, lệ vô cữu (Quân tử suốt ngày nỗ lực không ngừng, đêm về vẫn thận trọng tự xét, dẫu nguy nan cũng không lỗi).', advice: 'Giai đoạn thử thách gay gắt, cần tập trung làm việc hết mình và luôn khiêm nhường tự kiểm điểm.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Hoặc dược tại uyên, vô cữu (Hoặc nhảy vọt lên cao, hoặc ẩn sâu đáy vực, không có lỗi).', advice: 'Đứng trước bước ngoặt lớn, linh hoạt xem xét hoàn cảnh để tiến thoái đúng nhịp, tự chủ quyết định.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Phi long tại thiên, lợi kiến đại nhân (Rồng bay giữa tầng mây xanh, lợi khi gặp người đức hạnh).', advice: 'Thời kỳ đỉnh cao của công danh sự nghiệp, tài đức vẹn toàn, hãy phát huy tối đa lòng nhân từ ban phước cho mọi người.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Kháng long hữu hối (Rồng bay quá cao tất có điều hối tiếc).', advice: 'Đã lên tới tột đỉnh quyền lực danh vọng, nếu tiếp tục tham lam hiếu thắng sẽ chuốc lấy thất bại, cần biết điểm dừng.' }
    ]
  },
  {
    id: 2,
    name: 'Bát Thuần Khôn',
    altName: 'Địa Vi Khôn (Thuần Khôn)',
    hanzi: '坤',
    unicodeChar: '䷁',
    upperTrigram: 'Khon',
    lowerTrigram: 'Khon',
    lines: [0, 0, 0, 0, 0, 0],
    nature: 'Đại Cát',
    element: 'Thổ',
    omen: 'Ngạ Hổ Đắc Thực',
    omenMeaning: 'Cọp đói lâu ngày nay kiếm được con mồi béo tốt, thỏa lòng mong ước bấy lâu, bền gan tất có kết quả vẻ vang.',
    summary: 'Biểu tượng của Đất mẹ bao la, mang tính thuần âm nhu thuận, dung nạp vạn vật. Đề cao đức tính kiên nhẫn, điềm đạm, nâng đỡ và chở che.',
    trieuDoan: 'Cọp đói năm dài lạc chốn nao, Nay gặp mồi ngon thỏa dạ trào. Tài lộc dồi dào lòng mãn ý, Gian nan lùi bước đón thanh tao.',
    thoanTu: {
      original: '坤: 元, 亨, 利牝馬之貞. 君子有攸往, 先迷後得主, 利.',
      hanViet: 'Khôn: Nguyên, Hanh, Lợi tẫn mã chi trinh. Quân tử hữu du vãng, tiên mê hậu đắc chủ, lợi.',
      dichNghia: 'Quẻ Khôn khởi đầu rộng lớn, hanh thông, bền bỉ và thuận theo như ngựa cái. Người quân tử có việc làm, đi trước thì lầm lạc, đi sau thì tìm được chủ và có lợi.'
    },
    daiTuong: {
      hanViet: 'Địa thế khôn, quân tử dĩ hậu đức tải vật.',
      dichNghia: 'Thế đất dày dặn chở che, người quân tử noi theo đó mà lấy đức dày bao dung nâng đỡ muôn loài.'
    },
    dichLy: 'Quẻ Thuần Khôn gồm sáu hào toàn âm, đối trọng hoàn hảo với quẻ Càn. Nếu Càn là người sáng tạo lãnh đạo thì Khôn là người chấp hành, phụng sự và nuôi dưỡng. Đạo của Khôn lấy nhu thắng cương, lấy tĩnh chế động, không tranh giành đi trước mà đi sau để thâu tóm thành công vững chắc.',
    aspects: {
      career: 'Thích hợp với vai trò phò tá, hỗ trợ, quản lý nội bộ hoặc hợp tác đồng hành. Tránh đơn thương độc mã xốc nổi. Thành công đến từ sự bền chí và trung thực.',
      wealth: 'Tài lộc ổn định vững vàng, tích tiểu thành đại. Đầu tư vào đất đai, nông nghiệp hoặc dịch vụ bền vững rất đắc lợi.',
      love: 'Gia đình êm ấm, vợ chồng hòa thuận tương kính như tân. Phụ nữ gặp quẻ này rất vượng phu ích tử.',
      health: 'Cần chú ý hệ tiêu hóa, tỳ vị hoặc các chứng hàn lạnh, suy nhược khí huyết. Nên tĩnh dưỡng bồi bổ.',
      travel: 'Xuất hành hướng Tây Nam có lợi, đi về hướng Đông Bắc gặp cản trở. Nên đi cùng bạn hữu.',
      advice: 'Hãy giữ tâm thế nhu thuận, bao dung như đất mẹ. Không vội vàng đứng mũi chịu sào, tích lũy công đức âm thầm, thành công tự khắc bền lâu.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Lý sương, kiên băng chí (Dẫm lên sương mai thì biết băng dày mùa đông sắp tới).', advice: 'Thấy điềm nhỏ phải biết phòng ngừa hậu quả lớn, cẩn thận từ những chi tiết ban đầu.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Trực, phương, đại, bất tập vô bất lợi (Ngay thẳng, vuông vức, rộng lớn, chẳng cần học đòi toan tính mà việc gì cũng lợi).', advice: 'Giữ lòng thuần khiết chân thật tự nhiên, không mưu mô thủ đoạn thì mọi việc tự khắc thành tựu.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Hàm chương khả trinh, hoặc tòng vương sự, vô thành hữu chung (Ngậm chứa vẻ đẹp có thể giữ được bền lâu, dẫu theo việc vua dẫu không lập công đầu nhưng có kết cục trọn vẹn).', advice: 'Không tranh công, khiêm tốn giấu tài, hết lòng phụng sự trách nhiệm thì sau cùng sẽ được đền đáp.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Quát nang, vô cữu vô dự (Buộc chặt miệng túi, không lầm lỗi cũng chẳng mong khen ngợi).', advice: 'Gặp thời thế nhạy cảm phức tạp, nên kín miệng giữ mình, cẩn trọng lời ăn tiếng nói để tránh họa.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Hoàng thường, nguyên cát (Mặc xiêm áo màu vàng, rất tốt lành).', advice: 'Giữ đức trung chính dung hòa từ bên trong phát lộ ra ngoài, đức độ tự nhiên được muôn người kính phục.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Long chiến vu dã, kỳ huyết huyền hoàng (Rồng đánh nhau ngoài đồng hoang, máu đổ rách nát sắc đen vàng).', advice: 'Tính âm phát triển quá độ tới chỗ tranh đoạt quyền lực với dương tất dẫn đến đổ vỡ tổn thương cả hai bên.' }
    ]
  },
  {
    id: 3,
    name: 'Thủy Lôi Truân',
    altName: 'Quẻ Truân',
    hanzi: '屯',
    unicodeChar: '䷂',
    upperTrigram: 'Kham',
    lowerTrigram: 'Chan',
    lines: [1, 0, 0, 0, 1, 0],
    nature: 'Hung',
    element: 'Thủy',
    omen: 'Loạn Ti Vô Đầu',
    omenMeaning: 'Như cuộn tơ vướng rối bời không tìm thấy đầu mối, buổi đầu vạn sự khởi đầu nan, trắc trở muôn phần.',
    summary: 'Trên là Nước (Khảm - hiểm nạn), dưới là Sấm (Chấn - động). Mầm cây mới nhú còn vướng đất đá chưa trồi lên được, gian nan bước đầu cần sự kiên nhẫn.',
    trieuDoan: 'Cuộn tơ rối rắm chẳng tìm manh, Việc mới khởi đầu bước gập ghềnh. Bình tĩnh lần mò tìm manh mối, Chớ manh động ẩu uổng công trình.',
    thoanTu: {
      original: '屯: 元, 亨, 利, 貞, 勿用有攸往, 利建侯.',
      hanViet: 'Truân: Nguyên, Hanh, Lợi, Trinh, vật dụng hữu du vãng, lợi kiến hầu.',
      dichNghia: 'Quẻ Truân tuy có đức nguyên, hanh, lợi, trinh nhưng chớ vội tiến tới mạo hiểm; lúc này chỉ nên củng cố lực lượng, lập chư hầu hỗ trợ.'
    },
    daiTuong: {
      hanViet: 'Vân lôi truân, quân tử dĩ kinh luân.',
      dichNghia: 'Mây nước cùng sấm chớp tạo thế Truân trắc trở, người quân tử noi theo đó mà chỉnh đốn, tổ chức kinh luân sự nghiệp.'
    },
    dichLy: 'Quẻ Truân tượng trưng cho giai đoạn sơ khai của vạn vật. Khi sấm động dưới nước sâu, sinh khí bắt đầu phát khởi nhưng chưa thoát khỏi hiểm nạn bao vây. Bài học của quẻ Truân là "vạn sự khởi đầu nan", không nản chí, không manh động liều lĩnh mà phải biết tìm người hiền tài trợ giúp.',
    aspects: {
      career: 'Khởi nghiệp, công việc mới gặp nhiều cản trở, áp lực dồn dập. Không nên hấp tấp mở rộng quy mô, cần kiên trì sắp xếp tổ chức nội bộ.',
      wealth: 'Tài chính eo hẹp, phát sinh nhiều khoản chi tiêu ngoài dự tính. Cần quản lý chặt chẽ ngân sách, tránh vay mượn liều lĩnh.',
      love: 'Tình cảm có sự ngập ngừng, bất đồng ý kiến hoặc bị gia đình ngăn cản. Đừng ép buộc, hãy cho nhau thời gian tìm hiểu sâu sắc hơn.',
      health: 'Dễ suy nhược cơ thể, căng thẳng thần kinh do lo âu. Cần nghỉ ngơi điều độ, ăn uống đủ chất.',
      travel: 'Không nên xuất hành xa vào lúc này, dễ gặp trục trặc phương tiện hoặc thời tiết xấu.',
      advice: 'Nhẫn nại gỡ từng mối chỉ rối. Tìm kiếm sự cố vấn từ người có kinh nghiệm, chuẩn bị kỹ lưỡng trước khi hành động.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Bàn hoàn, lợi cư trinh, lợi kiến hầu (Lúng túng quanh quẩn, nên giữ sự chính đính, lợi khi dựng nghiệp xây nền).', advice: 'Bước đầu tuy gian nan nhưng có chí hướng đúng đắn, nên tìm người hiền tài cùng chí hướng hợp sức.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Truân như chuyên như, ban mã như, phỉ khấu hôn cấu, nữ tử trinh bất tự, thập niên nãi tự (Ngập ngừng tiến thoái, ngựa quay vòng, chẳng phải giặc cướp mà là người cầu hôn, nàng giữ tiết chẳng chịu, mười năm sau mới gả).', advice: 'Giữ lòng chung thủy kiên trinh với nguyên tắc của mình, dẫu muộn màng nhưng tương lai sẽ viên mãn.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Tức lộc vô ngu, duy nhập vu lâm trung, quân tử cơ bất như xả, vãng lận (Đuổi hươu không có người dẫn đường, lạc vào rừng sâu; người quân tử biết cơ suy tính bỏ đi, tiến tới chuốc lấy hối tiếc).', advice: 'Thiếu người am hiểu dẫn lối thì không nên tham lam mù quáng, biết dừng đúng lúc mới tránh tai họa.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Thừa mã ban như, cầu hôn cấu, vãng cát, vô bất lợi (Cưỡi ngựa dùng dằng, tìm nơi phối hợp kết duyên, tiến đi tốt lành, không gì là không lợi).', advice: 'Chủ động hạ mình tìm kiếm sự trợ giúp từ người có năng lực, mọi nút thắt sẽ được tháo gỡ.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Truân kỳ cao, tiểu trinh cát, đại trinh hung (Ân trạch chưa ban phát rộng rãi, giữ việc nhỏ thì tốt, làm việc lớn ồn ào thì hung).', advice: 'Uy tín chưa đủ bao quát, chỉ nên giải quyết việc nhỏ ổn thỏa trước, không vội vàng tung đòn quyết định.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Thừa mã ban như, khấp huyết liên như (Cưỡi ngựa bế tắc quay vòng, nước mắt rớm máu tuôn trào).', advice: 'Bế tắc cùng cực do cô lập, cần tỉnh ngộ dừng bước, buông bỏ chấp niệm để tìm con đường khác.' }
    ]
  },
  {
    id: 4,
    name: 'Sơn Thủy Mông',
    altName: 'Quẻ Mông',
    hanzi: '蒙',
    unicodeChar: '䷃',
    upperTrigram: 'Can2',
    lowerTrigram: 'Kham',
    lines: [0, 1, 0, 0, 0, 1],
    nature: 'Bình',
    element: 'Hỏa',
    omen: 'Đồng Mông Cầu Ngã',
    omenMeaning: 'Đứa trẻ thơ ngây đến tìm thầy học chữ, cần khai sáng mở mang trí tuệ, cầu học với lòng thành kính.',
    summary: 'Trên là Núi (Cấn - ngăn trở), dưới là Nước (Khảm - hiểm sâu). Tượng trưng cho sự mờ tối chưa thông tỏ, cần sự dạy dỗ, chỉ bảo của bậc minh triết.',
    trieuDoan: 'Trẻ thơ chưa rõ nẻo trần ai, Cần bậc minh sư dẫn dắt tài. Thành kính học đòi thông đạo lý, Mai này rạng rỡ đức tương lai.',
    thoanTu: {
      original: '蒙: 亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三瀆, 瀆則不告. 利貞.',
      hanViet: 'Mông: Hanh. Phỉ ngã cầu đồng mông, đồng mông cầu ngã. Sơ thệ cáo, tái tam độc, độc tắc bất cáo. Lợi trinh.',
      dichNghia: 'Quẻ Mông hanh thông. Không phải ta cầu kẻ đồng mông mà chính kẻ đồng mông tìm đến ta cầu học. Lần bói đầu thì báo, hỏi đi hỏi lại hai ba lần là nhờn nhờn thì không dạy bảo nữa. Lợi ở sự kiên trinh.'
    },
    daiTuong: {
      hanViet: 'Sơn hạ xuất tuyền, mông, quân tử dĩ quả hạnh dục đức.',
      dichNghia: 'Dưới chân núi có dòng suối chảy ra tượng quẻ Mông, người quân tử noi theo đó mà rèn giũa phẩm hạnh quả quyết, bồi dưỡng đức tính sâu dày.'
    },
    dichLy: 'Mông là mông muội, non nớt nhưng ẩn chứa tiềm năng to lớn như dòng suối nguồn dưới chân núi rồi sẽ tụ thành sông lớn. Muốn thoát mông muội phải biết khiêm tốn cầu thị, một lòng tôn kính người thầy khai tâm mở trí.',
    aspects: {
      career: 'Chưa đủ kinh nghiệm để tự ý quyết định đại sự. Nên lắng nghe cấp trên, tham vấn chuyên gia và không ngừng học hỏi nghiệp vụ.',
      wealth: 'Đầu tư mù mờ theo phong trào dễ mất trắng. Hãy trang bị kiến thức tài chính kỹ lưỡng trước khi dốc vốn.',
      love: 'Đôi bên còn thiếu thấu hiểu, tính cách bồng bột ngây thơ. Cần thành thật trò chuyện và học cách tôn trọng đối phương.',
      health: 'Lưu ý các chứng mờ mắt, đau đầu, chóng mặt hoặc bệnh đường ruột do thói quen ăn uống tùy tiện.',
      travel: 'Đi đường lạ cần có người dẫn đường uy tín hoặc bản đồ chỉ dẫn chi tiết, tránh đi tắt liều lĩnh.',
      advice: 'Học tập là chìa khóa duy nhất để phá tan bóng tối của sự ngu muội. Hãy mở lòng tiếp thu điều hay lẽ phải với thái độ chân thành.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Phát mông, lợi dụng hình nhân, dĩ thoát cốc tấn, dĩ vãng lận (Khai phá sự mờ tối, dùng kỷ luật nghiêm minh để tháo xiềng xích, nếu dung túng sẽ hối tiếc).', advice: 'Cần nghiêm khắc uốn nắn bản thân ngay từ ngày đầu, thiết lập kỷ cương phép tắc chặt chẽ.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Bao mông cát, nạp phụ cát, tử khắc gia (Bao dung người mông muội thì tốt lành, cưới vợ hòa thuận, con cái gánh vác được việc nhà).', advice: 'Làm người dẫn dắt cần có lòng bao dung nhẫn nại, đối đãi ôn hòa với cấp dưới và người học việc.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Vật dụng thủ nữ, kiến kim phu, bất hữu cung, vô du lợi (Chớ vội lấy người con gái thấy người giàu liền mê đắm, không giữ được nết na, chẳng có lợi gì).', advice: 'Cảnh giác với sự tham lam phù phiếm trước mắt, đừng đánh mất nhân cách và nguyên tắc đạo đức.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Khốn mông, lận (Khốn đốn vì sự u tối mông muội, đáng tiếc thay).', advice: 'Xa rời minh sư, tự giam mình trong thành kiến hẹp hòi tất chuốc lấy bế tắc, cần tỉnh táo tìm kiếm tri thức.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Đồng mông, cát (Đứa trẻ ngây thơ thành tâm cầu học, rất tốt lành).', advice: 'Giữ tâm thế khiêm cung của chiếc ly rỗng, thật lòng cầu thị sẽ được quý nhân nhiệt tình nâng đỡ.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Kích mông, bất lợi vi khấu, lợi ngữ khấu (Đánh thức kẻ mông muội, không nên quá khắt khe như kẻ cướp, mà chỉ nên phòng ngừa ngăn chặn lỗi lầm).', advice: 'Dạy dỗ chỉ bảo cần có chừng mực, vừa có nghiêm khắc vừa có từ tâm, tránh đẩy người khác vào đường cùng.' }
    ]
  },
  {
    id: 5,
    name: 'Thủy Thiên Nhu',
    altName: 'Quẻ Nhu',
    hanzi: '需',
    unicodeChar: '䷄',
    upperTrigram: 'Kham',
    lowerTrigram: 'Can',
    lines: [1, 1, 1, 0, 1, 0],
    nature: 'Cát',
    element: 'Kim',
    omen: 'Minh Châu Xuất Thổ',
    omenMeaning: 'Viên ngọc sáng vùi dưới bùn lầy nay lộ ra, qua thời chờ đợi ắt gặt hái vinh quang xán lạn.',
    summary: 'Trên là Nước (Khảm - mây mưa tích tụ), dưới là Trời (Càn - sức mạnh). Nhu là chờ đợi thời cơ chín muồi, nuôi dưỡng năng lượng chuẩn bị đón rước đại sự.',
    trieuDoan: 'Ngọc quý vùi sâu dưới đất dày, Nay thời phát lộ sáng trời mây. Kiên gan chờ đợi thời cơ đến, Phúc lộc công danh rạng rỡ đây.',
    thoanTu: {
      original: '需: 有孚, 光亨, 貞吉. 利涉大川.',
      hanViet: 'Nhu: Hữu phu, quang hanh, trinh cát. Lợi thiệp đại xuyên.',
      dichNghia: 'Quẻ Nhu có lòng chí thành tin tưởng thì quang minh hanh thông, giữ vững chính đạo tất tốt lành. Thuận lợi cho việc vượt sông lớn.'
    },
    daiTuong: {
      hanViet: 'Vân thượng vu thiên, nhu, quân tử dĩ ẩm thực yến lạc.',
      dichNghia: 'Mây bốc lên trên trời thành quẻ Nhu, người quân tử noi theo đó mà vui vẻ ăn uống nghỉ ngơi, bồi dưỡng sinh lực.'
    },
    dichLy: 'Mây tụ đầy trời chưa thành mưa, chưa thể cưỡng cầu mà phải chờ đợi đúng lúc. Người quân tử trong thế Nhu tuy trong lòng có sức mạnh cương kiện (Càn) nhưng trước mặt là vực thẳm hiểm nguy (Khảm), không dại dột lao vào mà thong dong tĩnh tại, giữ vững niềm tin, chờ đợi thiên thời địa lợi nhân hòa.',
    aspects: {
      career: 'Cơ hội tốt đang đến gần nhưng chưa phải lúc bộc lộ toàn bộ át chủ bài. Hãy tích lũy chuyên môn, hoàn thiện hồ sơ và chuẩn bị tâm thế vững vàng.',
      wealth: 'Tiền bạc sắp về, các khoản đầu tư đang trong kỳ sinh lãi. Tránh sốt ruột rút vốn sớm hoặc đổi hướng vội vã.',
      love: 'Tình cảm phát triển chậm mà chắc. Cần kiên nhẫn bồi đắp kỷ niệm và chia sẻ thật lòng, duyên lành sẽ kết trái ngọt.',
      health: 'Nên chú trọng nghỉ ngơi, bồi bổ dinh dưỡng hợp lý, tránh thức khuya làm việc kiệt sức.',
      travel: 'Có thể đi xa vượt sông lớn nếu chuẩn bị chu đáo, chuyến đi mang lại nhiều trải nghiệm bổ ích.',
      advice: 'Kiên nhẫn là đức tính cao quý nhất của người quân tử. Đừng nóng vội gượng ép hoàn cảnh, khi thời cơ tới tự nhiên nước chảy thành sông.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Nhu vu giao, lợi dụng hằng, vô cữu (Chờ đợi ở nơi đồng nội xa hiểm nạn, giữ lòng kiên định thường hằng thì không lỗi).', advice: 'Hiểm nguy còn ở xa, hãy an phận tập trung vào bổn phận hàng ngày, chớ lo nghĩ viển vông.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Nhu vu sa, tiểu hữu ngôn, chung cát (Chờ đợi bên bãi cát, dẫu có chút lời dèm pha nhưng kết cục tốt lành).', advice: 'Đối diện với thị phi đồn thổi hãy bình thản mỉm cười, thời gian sẽ chứng minh sự thật.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Nhu vu nê, trí khấu chí (Chờ đợi nơi vũng bùn lầy lội, rước kẻ cướp kéo đến).', advice: 'Tiến quá sát hiểm nguy do nóng vội, cần tỉnh táo lùi lại phòng thủ trước khi quá muộn.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Nhu vu huyết, xuất tự huyệt (Chờ đợi nơi hố máu hiểm nghèo, may nhờ nhu thuận mà thoát khỏi hang tối).', advice: 'Rơi vào tình thế nguy nan hãy giữ sự mềm mỏng, hòa hoãn khéo léo để thoát hiểm an toàn.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Nhu vu tửu thực, trinh cát (Chờ đợi bên rượu ngon thức ăn bổ dưỡng, giữ vững chính đạo tất tốt lành).', advice: 'Thời cơ đắc lợi đã đến, thong dong tận hưởng thành quả xứng đáng cùng gia đình và bè bạn.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Nhập vu huyệt, hữu bất tốc chi khách tam nhân lai, kính chi chung cát (Rơi vào hang tối, bỗng có ba người khách không mời mà đến, biết cung kính đối đãi thì sau cùng tốt lành).', advice: 'Gặp sự cố bất ngờ ngoài kế hoạch, hãy tiếp đón với thái độ cởi mở và chân thành, họa sẽ hóa phúc.' }
    ]
  },
  {
    id: 6,
    name: 'Thiên Thủy Tụng',
    altName: 'Quẻ Tụng',
    hanzi: '訟',
    unicodeChar: '䷅',
    upperTrigram: 'Can',
    lowerTrigram: 'Kham',
    lines: [0, 1, 0, 1, 1, 1],
    nature: 'Hung',
    element: 'Hỏa',
    omen: 'Nhị Nhân Tranh Lộ',
    omenMeaning: 'Hai người tranh nhau một lối đi hẹp, chẳng ai nhường ai dẫn đến xô xát kiện tụng, hao tổn tiền bạc tinh thần.',
    summary: 'Trên là Trời (Càn - hướng lên), dưới là Nước (Khảm - chảy xuống). Ý chí trái ngược, bất đồng quan điểm sinh ra tranh chấp, kiện cáo, mâu thuẫn đối kháng.',
    trieuDoan: 'Hai người chen chúc một đường con, Chẳng chịu nhường nhau cãi cọ dồn. Kiện cáo phen này hao tổn trí, Dừng cương quay ngựa giữ bình yên.',
    thoanTu: {
      original: '訟: 有孚, 窒. 惕中吉, 終凶. 利見大人, 不利涉大川.',
      hanViet: 'Tụng: Hữu phu, trất. Dịch trung cát, chung hung. Lợi kiến đại nhân, bất lợi thiệp đại xuyên.',
      dichNghia: 'Quẻ Tụng có lòng tin nhưng bị tắc nghẽn. Biết lo sợ dè dặt giữa đường thì tốt, theo đuổi kiện cáo tới cùng ắt hung. Lợi khi gặp bậc đại nhân phân xử công minh, không lợi cho việc vượt sông lớn mạo hiểm.'
    },
    daiTuong: {
      hanViet: 'Thiên dữ thủy vi hành, tụng, quân tử dĩ tác sự mưu thủy.',
      dichNghia: 'Trời và nước chuyển động ngược chiều nhau tạo thành quẻ Tụng, người quân tử noi theo đó mà làm việc gì cũng phải tính toán thận trọng ngay từ đầu.'
    },
    dichLy: 'Tính chất của Trời là bay bổng lên cao, tính chất của Nước là chảy dồn xuống trũng, hai bên ngược hướng xa rời nhau. Trong nhân sinh, khi hai bên không cùng tiếng nói mà đều ôm lòng tự cao ắt sinh tranh giành. Quẻ Tụng răn dạy "dĩ hòa vi quý", tranh thắng trong kiện tụng rốt cuộc chỉ đem lại tổn hại, giải hòa là thượng sách.',
    aspects: {
      career: 'Nội bộ công ty dễ xảy ra tranh giành quyền lực, kiện tụng hợp đồng, bất đồng đối tác. Cần xem xét kỹ các điều khoản pháp lý, nhượng bộ ôn hòa.',
      wealth: 'Dễ hao tài tán của vì tranh chấp, phạt tiền hoặc chi phí kiện tụng. Không nên cho vay mượn mạo hiểm trong thời gian này.',
      love: 'Vợ chồng khắc khẩu, cãi vã triền miên vì những chuyện nhỏ nhặt. Cần một người biết nhường nhịn làm dịu bầu không khí.',
      health: 'Căng thẳng thần kinh, mất ngủ, huyết áp tăng do tức giận ức chế. Nên tập thiền định, buông xả.',
      travel: 'Tránh đi xa vì dễ va chạm giao thông hoặc nảy sinh tranh cãi dọc đường.',
      advice: 'Thắng một cuộc cãi vã nhưng mất đi một mối thâm giao là cái thua lớn nhất. Hãy nhường một bước để trời cao biển rộng.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Bất vĩnh sở sự, tiểu hữu ngôn, chung cát (Không kéo dài tranh chấp, dẫu có chút lời qua tiếng lại nhưng kết cục tốt lành).', advice: 'Sớm dập tắt mâu thuẫn từ lúc mới nhen nhóm, không cố chấp bám riết lấy đúng sai nhỏ mọn.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Bất khắc tụng, quy nhi tị kỳ ấp nhân tam bách hộ, vô sảnh (Tranh kiện không thắng nổi, quay về ẩn nhẫn nơi ấp làng ba trăm hộ, không mắc tai họa).', advice: 'Gặp đối thủ thế lực quá lớn, biết lượng sức mình rút lui nhẫn nhịn là người khôn ngoan.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Thực cựu đức, trinh lệ, chung cát, hoặc tòng vương sự, vô thành (Nương nhờ phúc đức tổ tiên để lại, giữ mình nghiêm cẩn dẫu hiểm nguy sau cũng tốt, dẫu theo việc vua cũng không tranh công lập danh).', advice: 'Dựa vào giá trị cội nguồn chân chính, làm tròn bổn phận mà không cầu danh lợi cá nhân.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Bất khắc tụng, phục tức mệnh, du an trinh, cát (Không theo đuổi tranh kiện, phục tùng thiên mệnh đổi ý, an phận giữ đạo chính, tốt lành).', advice: 'Kịp thời tỉnh ngộ quay đầu, từ bỏ sự tranh chấp vô ích để tìm lại sự an định trong tâm hồn.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Tụng, nguyên cát (Được bậc chí công phân xử kiện tụng, rất tốt lành).', advice: 'Tâm sáng dạ ngay, có bậc minh quân hoặc pháp luật công minh bảo vệ lẽ phải.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Hoặc tứ chi bàng đới, chung triêu tam tức chi (Dẫu có được ban thưởng đai da quý giá vì thắng kiện, nhưng trong một buổi sáng bị tước đoạt đến ba lần).', advice: 'Chiến thắng bằng tranh đoạt kiện tụng chỉ là hư danh tạm bợ, mang lại nhục nhã và oán thù dài lâu.' }
    ]
  },
  {
    id: 7,
    name: 'Địa Thủy Sư',
    altName: 'Quẻ Sư',
    hanzi: '師',
    unicodeChar: '䷆',
    upperTrigram: 'Khon',
    lowerTrigram: 'Kham',
    lines: [0, 1, 0, 0, 0, 0],
    nature: 'Thứ Cát',
    element: 'Thủy',
    omen: 'Mã Đáo Thành Công',
    omenMeaning: 'Đoàn quân ra trận có tướng giỏi cầm quân, kỷ luật nghiêm minh ắt thắng trận khải hoàn.',
    summary: 'Trên là Đất (Khôn - nhu thuận, nâng đỡ), dưới là Nước (Khảm - hiểm sâu, tiềm ẩn quân lực). Tượng trưng cho đạo dùng binh, tập hợp lực lượng, kỷ cương và lãnh đạo.',
    trieuDoan: 'Chiêng trống vang lừng xuất trận tiền, Tướng tài thao lược trí mưu chuyên. Ba quân một dạ theo mệnh lệnh, Mã đáo thành công phúc vẹn tuyền.',
    thoanTu: {
      original: '師: 貞, 丈人, 吉無咎.',
      hanViet: 'Sư: Trinh, trượng nhân, cát vô cữu.',
      dichNghia: 'Quẻ Sư phải giữ chính đạo, được bậc trượng nhân đức độ cầm quân chỉ huy thì tốt lành, không có lỗi lầm.'
    },
    daiTuong: {
      hanViet: 'Địa trung hữu thủy, sư, quân tử dĩ dung dân súc chúng.',
      dichNghia: 'Trong lòng đất chứa nguồn nước ngầm tạo nên quẻ Sư, người quân tử noi theo đó mà bao dung nuôi dưỡng dân chúng, tích lũy lực lượng quân ngũ.'
    },
    dichLy: 'Nước ẩn tàng trong lòng đất như sức mạnh tiềm tàng của nhân dân. Khi xuất quân lâm trận, điều cốt tử không phải là vũ khí bạo lực mà là chính nghĩa và người thống soái có tài đức (trượng nhân). Quẻ Sư răn dạy về kỷ luật, đoàn kết một lòng và đức độ của người lãnh đạo.',
    aspects: {
      career: 'Cần siết chặt kỷ luật tập thể, phân công nhiệm vụ rõ ràng và tin tưởng trao quyền cho người có năng lực thật sự. Cơ hội mở rộng địa bàn kinh doanh.',
      wealth: 'Cần kế hoạch tài chính bài bản và nghiêm ngặt. Tránh chi tiêu tùy tiện hoặc đầu tư phân tán thiếu kiểm soát.',
      love: 'Cần sự thẳng thắn, tôn trọng và có trách nhiệm với lời hứa. Tránh áp đặt độc đoán lên người bạn đời.',
      health: 'Lưu ý các bệnh về máu huyết, thận hoặc đau mỏi xương khớp do lao động áp lực cao.',
      travel: 'Đi công tác hoặc xuất hành theo đoàn thể rất thuận lợi, công việc đạt kết quả như ý.',
      advice: 'Kỷ luật là sức mạnh tối cao. Hãy làm gương về đạo đức và sự công tâm, bạn sẽ thu phục được nhân tâm của muôn người.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Sư xuất dĩ luật, phủ tang hung (Xuất quân phải có kỷ luật phép tắc, nếu không nghiêm tất chuốc lấy hung bại).', advice: 'Bắt đầu bất kỳ dự án nào cũng phải thiết lập quy chế rõ ràng, nghiêm khắc chấp hành.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Tại sư trung, cát vô cữu, vương tam tích mệnh (Ở giữa hàng ngũ quân sĩ, tốt lành không lỗi, được vua ba lần ban tặng ân thưởng mệnh lệnh).', advice: 'Được cấp trên tin cậy giao phó trọng trách, hãy đồng cam cộng khổ cùng anh em cấp dưới.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Sư hoặc dư thi, hung (Quân sĩ chở theo xe đầy xác chết, hung hiểm).', advice: 'Thiếu người chỉ huy tài ba mà lắm kẻ chen ngang lãnh đạo ắt dẫn đến thất bại thảm hại.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Sư tả thứ, vô cữu (Quân đội tạm thời rút về đóng giữ bên cánh trái, không có lỗi lầm).', advice: 'Biết lui binh bảo toàn lực lượng khi thế trận chưa thuận là hành động sáng suốt của tướng tài.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Điền hữu cầm, lợi chấp ngôn, vô cữu, trưởng tử soái sư, đệ tử dư thi, trinh hung (Trên đồng có thú muông phá hoại, bắt lấy nói lý không lỗi; để con trưởng cầm quân thì tốt, để đứa em kém tài xen vào chở xác thì dẫu chính cũng hung).', advice: 'Dùng người đúng sở trường, trao trọn quyền chỉ huy cho người tài giỏi, không nghe lời xúi giục non nớt.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Đại quân hữu mệnh, khai quốc thừa gia, tiểu nhân vật dụng (Vua lớn ban mệnh luận công thưởng phạt, phong vương dựng ấp, kẻ tiểu nhân chớ dùng vào việc nước).', advice: 'Thắng lợi sau trận đánh lớn cần ban thưởng công minh, nhưng tuyệt đối không trao quyền quản trị cho kẻ tiểu nhân tư lợi.' }
    ]
  },
  {
    id: 8,
    name: 'Thủy Địa Tỷ',
    altName: 'Quẻ Tỷ',
    hanzi: '比',
    unicodeChar: '䷇',
    upperTrigram: 'Kham',
    lowerTrigram: 'Khon',
    lines: [0, 0, 0, 0, 1, 0],
    nature: 'Cát',
    element: 'Thổ',
    omen: 'Thuyền Đắc Thuận Phong',
    omenMeaning: 'Thuyền căng buồm gặp đúng ngọn gió thuận, lướt êm trên sóng nước, mọi người cùng chung lưng đấu cật gắn kết bền chặt.',
    summary: 'Trên là Nước (Khảm), dưới là Đất (Khôn). Nước thấm vào đất làm cho đất phì nhiêu, đất ôm lấy nước giữ cho dòng chảy yên bình. Tượng trưng cho sự thân thiện, đoàn kết, tương trợ.',
    trieuDoan: 'Thuyền nan giương cánh đón gió xuôi, Lướt sóng ra khơi dạ thảnh thơi. Bè bạn tương thân cùng gắn bó, Công thành danh toại rạng muôn nơi.',
    thoanTu: {
      original: '比: 吉. 原筮, 元永貞, 無咎. 不寧方來, 後夫凶.',
      hanViet: 'Tỷ: Cát. Nguyên thệ, nguyên vĩnh trinh, vô cữu. Bất ninh phương lai, hậu phu hung.',
      dichNghia: 'Quẻ Tỷ tốt lành. Hãy xem xét lại lòng mình xem có đủ đức cả, bền bỉ và chính đính không thì sẽ không có lỗi. Những kẻ bất an dần tìm về quy phục, kẻ đến sau trễ tràng tất chuốc lấy hung.'
    },
    daiTuong: {
      hanViet: 'Địa thượng hữu thủy, tỷ, tiên vương dĩ kiến vạn quốc, thân chư hầu.',
      dichNghia: 'Trên mặt đất có nguồn nước chan hòa tạo nên quẻ Tỷ, các bậc tiên vương noi theo đó mà dựng nên muôn nước, gắn bó thân tình với chư hầu.'
    },
    dichLy: 'Nếu quẻ Sư là dùng binh kỷ luật thì quẻ Tỷ là sự hòa hợp thân tình sau thời chiến. Một hào dương Cửu Ngũ ở ngôi chí tôn được năm hào âm kính ngưỡng quy phục. Muốn người khác gắn kết với mình, trước hết bản thân phải có lòng thành tín, đức độ và sẵn lòng sẻ chia.',
    aspects: {
      career: 'Hợp tác làm ăn, liên doanh liên kết đạt kết quả rực rỡ. Được đồng nghiệp và cấp trên tin yêu ủng hộ hết lòng.',
      wealth: 'Tài lộc cùng nhau sinh sôi nảy nở. Hưởng lợi từ các mối quan hệ xã giao chân thành và các dự án nhóm.',
      love: 'Tình cảm mặn nồng keo sơn gắn bó. Tìm được người bạn tri kỷ hoặc tiến tới hôn nhân hạnh phúc viên mãn.',
      health: 'Sức khỏe dồi dào, tinh thần sảng khoái an vui trong vòng tay yêu thương của người thân bè bạn.',
      travel: 'Xuất hành tìm bạn bè, kết giao đối tác rất may mắn, đi đâu cũng được tiếp đón nồng hậu.',
      advice: 'Hãy sống chân thành, mở rộng lòng kết giao và tương trợ mọi người. Chớ chậm trễ nghi ngờ làm lỡ mất nhân duyên tốt đẹp.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Hữu phu tỷ chi, vô cữu, hữu phu doanh phẫu, chung lai tha cát (Có lòng thành tín kết giao thì không lỗi, như bình gốm chứa đầy nước trong, sau cùng nhận phúc lành bất ngờ).', advice: 'Gặp gỡ ban đầu hãy lấy lòng chân thật đối đãi, không vụ lợi toan tính thì tình cảm sẽ bền sâu.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Tỷ chi tự nội, trinh cát (Gắn kết thân tình xuất phát tự đáy lòng từ bên trong, giữ chính đạo tất tốt lành).', advice: 'Sự gắn kết chân thật nhất là từ tâm cảm thông, giữ vững phẩm chất đoan chính của mình.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Tỷ chi phỉ nhân (Kết giao lầm với kẻ bất lương, người chẳng ra gì).', advice: 'Chọn bạn mà chơi, cẩn trọng tránh xa những kẻ cơ hội, đạo đức giả để khỏi rước họa vào thân.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Ngoại tỷ chi, trinh cát (Hướng ra ngoài gắn kết với người hiền tài, giữ vững chính đạo tất tốt lành).', advice: 'Chủ động học hỏi, liên kết với những người giỏi giang đức độ ở bên ngoài để cùng tiến bộ.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Hiển tỷ, vương dụng tam khu, thất tiền cầm, ấp nhân bất giới, cát (Gắn kết quang minh rộng mở, như vua đi săn vây ba mặt thả mở một mặt, muông thú phía trước chạy thoát mà dân làng chẳng lo sợ, tốt lành).', advice: 'Lấy lòng bao dung thu phục lòng người, đến thì hoan nghênh, đi thì tùy duyên, không cưỡng ép ràng buộc.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Tỷ chi vô thủ, hung (Gắn kết mà không có đầu mối khởi xướng hoặc trễ tràng không quy phục ai, hung hiểm).', advice: 'Cô độc kiêu kỳ, không chịu hòa mình vào tập thể sớm muộn cũng bị đào thải bơ vơ.' }
    ]
  },
  {
    id: 9,
    name: 'Phong Thiên Tiểu Súc',
    altName: 'Quẻ Tiểu Súc',
    hanzi: '小畜',
    unicodeChar: '䷈',
    upperTrigram: 'Ton',
    lowerTrigram: 'Can',
    lines: [1, 1, 1, 0, 1, 1],
    nature: 'Bình',
    element: 'Mộc',
    omen: 'Mật Vân Bất Vũ',
    omenMeaning: 'Mây đen dầy đặc khắp trời nhưng gió thổi chưa thể hóa mưa rào, sức tích lũy còn nhỏ bé, cần chờ thêm tích góp.',
    summary: 'Trên là Gió (Tốn), dưới là Trời (Càn). Gió thổi lướt trên bầu trời, tạo mây tụ lại nhưng chưa đủ độ ẩm trút hạt mưa. Tượng trưng cho sự tích lũy nhỏ, tạm thời chưa bùng nổ lớn được.',
    trieuDoan: 'Mây đen kìn kịt phủ trời cao, Nhưng gió còn lay hạt giọt nào. Chờ đợi tích thêm nguồn nội lực, Thời cơ vừa chín phước dâng trào.',
    thoanTu: {
      original: '小畜: 亨. 密雲不雨, 自我西郊.',
      hanViet: 'Tiểu Súc: Hanh. Mật vân bất vũ, tự ngã tây giao.',
      dichNghia: 'Quẻ Tiểu Súc hanh thông. Mây dầy đặc chưa mưa, từ vùng đồng cỏ phía Tây của ta bay tới.'
    },
    daiTuong: {
      hanViet: 'Phong hành thiên thượng, tiểu súc, quân tử dĩ ý văn đức.',
      dichNghia: 'Gió lướt bay trên bầu trời tạo thành quẻ Tiểu Súc, người quân tử noi theo đó mà chau chuốt vẻ đẹp văn hóa, bồi dưỡng đức hạnh tinh tế.'
    },
    dichLy: 'Chỉ có một hào âm Lục Tứ mềm mỏng gánh vác, kiềm chế năm hào dương cương mãnh. Sức lực hiện thời chỉ đủ để kìm hãm và tích trữ những việc nhỏ, chưa thể làm nên biến đổi long trời lở đất. Cần kiên nhẫn tích tiểu thành đại, hoàn thiện chi tiết nhỏ.',
    aspects: {
      career: 'Chưa nên mở rộng kế hoạch hoành tráng. Tập trung giải quyết công việc hiện tại, trau dồi kỹ năng chuyên môn và xây dựng mối quan hệ vi mô.',
      wealth: 'Thu nhập túc tắc, tích lũy từng khoản nhỏ. Tránh tham lam lướt sóng hoặc đầu tư mạo hiểm lớn.',
      love: 'Có chút hiểu lầm giận dỗi vu vơ như mây thoảng qua. Hãy dùng lời lẽ dịu dàng, quan tâm chu đáo để hóa giải.',
      health: 'Lưu ý bệnh hô hấp, cảm mạo do gió máy hoặc chứng khó tiêu nhẹ.',
      travel: 'Đi lại gần gũi thì tốt, đi xa nhiều thủ tục giấy tờ cần kiểm tra kỹ.',
      advice: 'Tích gió thành bão, góp từng giọt nước thành đại dương. Đừng nóng lòng thấy việc nhỏ mà bỏ qua, đại sự bắt đầu từ những điều giản dị.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Phục tự đạo, hà kỳ cữu, cát (Quay về với chính đạo của mình, có lỗi gì đâu, tốt lành).', advice: 'Thấy thời chưa thuận thì quay về củng cố nội lực, trung thành với lý tưởng ban đầu.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Khi牵 phục, cát (Dắt tay nhau cùng quay về giữ đạo trung chính, tốt lành).', advice: 'Cùng đồng nghiệp bạn hữu đồng lòng giữ vững nguyên tắc, tương trợ lẫn nhau.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Dư thuyết bức, phu thê phản mục (Xe bị tuột mất trục hoa, vợ chồng trừng mắt nhìn nhau bất hòa).', advice: 'Tiến nóng vội dẫn đến đổ vỡ phương tiện, nội bộ lục đục, cần lập tức kiềm chế cơn nóng giận.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Hữu phu, huyết khứ dịch xuất, vô cữu (Có lòng chí thành, xua tan tai họa đổ máu, bớt âu lo, không có lỗi).', advice: 'Lấy sự mềm mỏng, chân thành hóa giải hiểm nguy, đoàn kết mọi người bằng lòng nhân hậu.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Hữu phu luyên như, phú dĩ kỳ lân (Có lòng thành gắn kết bền chặt, cùng chia sẻ giàu sang với xóm giềng bè bạn).', advice: 'Có địa vị và của cải biết chia sẻ nâng đỡ mọi người xung quanh thì phúc lành càng bền vững.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Ký vũ ký xứ, thượng đức tải, phụ trinh lệ, nguyệt kỷ vọng, quân tử chinh hung (Mưa đã rơi, vạn vật an định, đức chứa chan đầy ắp; phụ nữ cố chấp quá sẽ nguy, trăng gần tròn vẹn, người quân tử tiến hành vội ắt hung).', advice: 'Tích lũy đã đủ và gặt hái kết quả, nên biết đủ mà dừng lại nghỉ ngơi, tiếp tục ham hố ắt gặp họa.' }
    ]
  },
  {
    id: 10,
    name: 'Thiên Trạch Lý',
    altName: 'Quẻ Lý',
    hanzi: '履',
    unicodeChar: '䷉',
    upperTrigram: 'Can',
    lowerTrigram: 'Doai',
    lines: [1, 1, 0, 1, 1, 1],
    nature: 'Cát Hanh',
    element: 'Thổ',
    omen: 'Hổ Lang Đang Đạo',
    omenMeaning: 'Dẫm lên đuôi cọp dữ mà cọp không cắn người, nhờ có lễ nghĩa khiêm nhường, thận trọng tuyệt đối mà biến nguy thành an.',
    summary: 'Trên là Trời (Càn - tôn quý, cương kiện), dưới là Đầm (Đoài - hòa duyệt, vui vẻ nhu thuận). Lý là lễ phép, là bước đi đúng đạo lý, trật tự tôn ti phân minh.',
    trieuDoan: 'Dẫm đuôi cọp dữ bước không màng, Nhờ giữ khuôn vàng mực thước đoan. Cọp chẳng cắn người tâm bất biến, Nguy nan hóa cát phúc hân hoan.',
    thoanTu: {
      original: '履: 履虎尾, 不咥人, 亨.',
      hanViet: 'Lý: Lý hổ vĩ, bất điệt nhân, hanh.',
      dichNghia: 'Quẻ Lý: Dẫm lên đuôi cọp mà cọp không cắn người, hanh thông.'
    },
    daiTuong: {
      hanViet: 'Thượng thiên hạ trạch, lý, quân tử dĩ biện thượng hạ, định dân chí.',
      dichNghia: 'Trên là trời dưới là đầm nước tạo nên quẻ Lý, người quân tử noi theo đó mà phân định rõ trên dưới, ổn định chí hướng của muôn dân.'
    },
    dichLy: 'Đoài vui vẻ đi sau Càn cương kiện, như kẻ dưới thuận theo người trên với thái độ tôn kính chân thành. Khi bước đi trong môi trường quyền lực đầy hiểm nguy (đuôi cọp), chỉ có giữ trọn chữ Lễ, chuẩn mực quy tắc và sự điềm đạm mới bảo đảm an toàn tuyệt đối.',
    aspects: {
      career: 'Làm việc bên cạnh lãnh đạo khó tính hoặc đối tác khắt khe, cần tuân thủ nghiêm ngặt quy trình làm việc, lễ phép và cẩn ngôn cẩn hạnh.',
      wealth: 'Tài chính cần minh bạch giấy tờ chứng từ, không lách luật hay làm ăn mờ ám kẻo rước họa pháp lý.',
      love: 'Gia đạo trên dưới kính nhường, ứng xử có văn hóa lễ độ thì tình cảm vợ chồng ngày càng sâu sắc.',
      health: 'Lưu ý an toàn khi đi lại, cẩn thận trơn trượt hoặc chấn thương chân cẳng.',
      travel: 'Xuất hành phải tôn trọng phong tục tập quán địa phương và luật lệ giao thông, ắt bình an.',
      advice: 'Biết mình biết người, tôn trọng trật tự và giữ gìn lễ nghĩa. Sự lịch thiệp và khiêm tốn chính là chiếc áo giáp kiên cố nhất trước mọi hiểm nguy.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Tố lý, vãng vô cữu (Bước đi mộc mạc giản dị, tiến tới không có lỗi).', advice: 'Giữ lòng trong sạch mộc mạc, làm theo lẽ phải tự nhiên, không a dua xu nịnh.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Lý đạo thản thản, u nhân trinh cát (Bước đi trên con đường thênh thang bằng phẳng, người ẩn dật giữ đạo chính tất tốt lành).', advice: 'Không màng danh lợi bon chen, giữ tâm thế an nhiên tự tại thì con đường trước mắt luôn rộng mở.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Diệu năng thị, bỉ năng lý, lý hổ vĩ, điệt nhân, hung, võ nhân vi vu đại quân (Mắt chột đòi nhìn rõ, chân thọt đòi bước nhanh, dẫm đuôi cọp bị cọp cắn, hung; kẻ võ phu đòi làm tướng soái quân vương).', advice: 'Tài hèn sức mọn nhưng tự phụ kiêu ngạo, hành động liều lĩnh tất chuốc lấy kết cục thảm khốc.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Lý hổ vĩ, tố tố chung cát (Dẫm lên đuôi cọp, biết nơm nớp lo sợ giữ gìn thì sau cùng tốt lành).', advice: 'Ở gần người quyền thế luôn giữ sự kính cẩn thận trọng từng li từng tí, ắt được bình an thăng tiến.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Quyết lý, trinh lệ (Quyết đoán trong bước đi, giữ chính đạo nhưng phải luôn cảnh giác nguy nan).', advice: 'Nắm quyền quyết định tối cao phải có dũng khí nhưng không được chủ quan khinh suất.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Thị lý khảo tường, kỳ toàn nguyên cát (Xem xét lại từng bước đường đã qua, nếu chu toàn trọn vẹn thì rất tốt lành).', advice: 'Nhìn lại cả chặng đường tu thân lập nghiệp, nếu không hổ thẹn với lương tâm thì đón nhận phúc lộc trọn vẹn.' }
    ]
  },
  {
    id: 11,
    name: 'Địa Thiên Thái',
    altName: 'Quẻ Thái',
    hanzi: '泰',
    unicodeChar: '䷊',
    upperTrigram: 'Khon',
    lowerTrigram: 'Can',
    lines: [1, 1, 1, 0, 0, 0],
    nature: 'Đại Cát',
    element: 'Thổ',
    omen: 'Hỷ Báo Tam Nguyên',
    omenMeaning: 'Tin vui đỗ đầu ba kỳ thi rạng rỡ (Tam nguyên đỗ đạt), âm dương giao hòa, thái bình thịnh trị, vạn sự hanh thông như ý.',
    summary: 'Trên là Đất (Khôn - khí hạ xuống), dưới là Trời (Càn - khí bốc lên). Khí của Trời và Đất gặp gỡ giao hòa sinh sôi vạn vật. Thời vận cực thịnh, thuận hòa từ trong ra ngoài.',
    trieuDoan: 'Bảng vàng ghi dấu đỗ tam khôi, Phúc ấm ngàn năm rạng rỡ rồi. Trời đất giao hòa xuân phơi phới, Thái bình thịnh trị khắp nơi nơi.',
    thoanTu: {
      original: '泰: 小往大來, 吉亨.',
      hanViet: 'Thái: Tiểu vãng đại lai, cát hanh.',
      dichNghia: 'Quẻ Thái: Kẻ nhỏ (âm) đi ra, người lớn (dương) đi vào, tốt lành hanh thông rực rỡ.'
    },
    daiTuong: {
      hanViet: 'Thiên địa giao, thái, hậu dĩ tài thành thiên địa chi đạo, phụ tướng thiên địa chi nghi, dĩ tả hữu dân.',
      dichNghia: 'Trời đất giao cảm tạo thành quẻ Thái, đấng quân vương noi theo đó mà vun vén cho đạo trời đất được vẹn toàn, giúp đỡ muôn dân an cư lạc nghiệp.'
    },
    dichLy: 'Trời ở dưới Đất là thế hạ mình, Đất ở trên Trời là thế bao dung. Hai bên tương giao tương hợp. Người quân tử ở ngôi cao làm việc nghĩa, kẻ tiểu nhân lui về hậu trường. Đây là thời kỳ hoàng kim, mọi mâu thuẫn được giải tỏa, thời cơ gặt hái thành công tột bậc.',
    aspects: {
      career: 'Sự nghiệp thăng hoa, mưu sự đại thành, cấp trên tin yêu đồng nghiệp đồng lòng. Cơ hội mở rộng kinh doanh quy mô lớn.',
      wealth: 'Tài lộc dồi dào, tiền vào như nước, buôn bán sinh lời đậm đà, các khoản đầu tư đều thắng lợi rực rỡ.',
      love: 'Gia đình hạnh phúc, vợ chồng hòa thuận thấu hiểu nhau, dễ có tin vui cưới hỏi hoặc sinh quý tử.',
      health: 'Thân tâm an lạc, khí huyết lưu thông điều hòa, bệnh tật nếu có sẽ mau chóng bình phục.',
      travel: 'Xuất hành vô cùng cát lợi, đi đâu cũng gặp may mắn, kết thêm nhiều mối thâm giao quý giá.',
      advice: 'Đang ở thời vận đỉnh cao càng phải chăm lo làm việc phúc đức, chia sẻ thành quả và phòng xa lúc suy thoái (lo lúc chưa nguy).'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Bạt mao như, dĩ kỳ vĩ, chinh cát (Nhổ chùm cỏ tranh bám rễ đan xen cùng nhau, tiến đi tốt lành).', advice: 'Tập hợp bạn bè đồng chí hướng cùng tiến bước, đoàn kết tạo nên sức mạnh vô địch.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Bao hoang, dụng phùng hà, bất hà di, bằng vong, đắc thượng vu trung hành (Bao dung kẻ thô lậu, dũng cảm lội qua sông sâu, chẳng bỏ quên nơi xa xôi, không bè phái tư lợi, đắc đạo trung dung).', advice: 'Lòng dạ khoáng đạt bao dung vạn sự, không tư lợi bè phái, việc lớn tất thành.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Vô bình bất pha, vô vãng bất phục, gian trinh vô cữu, vật sầu kỳ phu, vu thực hữu phúc (Chẳng có đầm nào phẳng mãi mà không dốc, chẳng có đi mà không có lại, gian nan giữ vững chính đạo thì không lỗi, chớ buồn rầu vì lòng tin tưởng, ăn uống tận hưởng sẽ có phúc).', advice: 'Đang thời thịnh vượng hãy nhớ quy luật bĩ cực thái lai, kiên định với lẽ phải để giữ phúc dài lâu.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Phiêu phiêu bất phú, dĩ kỳ lân, bất giới dĩ phu (Nhẹ nhàng bay xuống không màng phú quý xa hoa, cùng láng giềng chân thành tin tưởng gắn bó).', advice: 'Không dùng tiền tài ép người mà lấy đức khiêm nhường kết nối lòng người, ai nấy đều mến phục.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Đế Ất quy muội, dĩ chỉ nguyên cát (Vua Đế Ất gả em gái cho người hiền, nhờ đức nhu thuận mà được phúc lớn rất tốt lành).', advice: 'Hạ mình kết duyên hoặc hợp tác với người hiền tài, đôi bên cùng có lợi lâu bền.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Thành phục vu quới, vật dụng sư, tự ấp cáo mệnh, trinh lận (Thành lũy đổ sụp xuống hào sâu, chớ vội động binh, từ ấp làng ban bố mệnh lệnh tự chấn chỉnh, cố chấp ắt hối tiếc).', advice: 'Thời Thái sắp qua, thời Bĩ sắp tới, không thể cưỡng cầu thời cuộc, hãy quay về tự bảo toàn phòng ngự.' }
    ]
  },
  {
    id: 12,
    name: 'Thiên Địa Bĩ',
    altName: 'Quẻ Bĩ',
    hanzi: '否',
    unicodeChar: '䷋',
    upperTrigram: 'Can',
    lowerTrigram: 'Khon',
    lines: [0, 0, 0, 1, 1, 1],
    nature: 'Đại Hung',
    element: 'Kim',
    omen: 'Hổ Lạc Hãm Kanh',
    omenMeaning: 'Mãnh hổ sẩy chân rơi vào hố bẫy sâu, thời vận bế tắc, tiểu nhân đắc chí, người quân tử phải ẩn nhẫn chờ thời.',
    summary: 'Trên là Trời (Càn - bay lên cao), dưới là Đất (Khôn - chìm sâu xuống). Trời đất không giao hòa, cách biệt muôn trùng. Bĩ là bế tắc, suy đồi, thời kỳ tiểu nhân lấn lướt.',
    trieuDoan: 'Cọp dữ sa chân rớt đáy hầm, Vùng vẫy sao thoát mối nguy thâm. Nhẫn nhục chờ thời qua vận hạn, Giữ trọn lòng son dạ sắt cầm.',
    thoanTu: {
      original: '否: 否之匪人, 不利君子貞, 大往小來.',
      hanViet: 'Bĩ: Bĩ chi phỉ nhân, bất lợi quân tử trinh, đại vãng tiểu lai.',
      dichNghia: 'Quẻ Bĩ: Đạo người bế tắc chẳng thông, không lợi cho người quân tử giữ việc lớn. Người lớn (dương) ra đi, kẻ nhỏ (âm) kéo vào.'
    },
    daiTuong: {
      hanViet: 'Thiên địa bất giao, bĩ, quân tử dĩ kiệm đức tị nạn, bất khả vinh dĩ lộc.',
      dichNghia: 'Trời đất không giao cảm tạo thành quẻ Bĩ, người quân tử noi theo đó mà thu vén tiết kiệm đức hạnh để lánh nạn, không màng bổng lộc vinh hoa.'
    },
    dichLy: 'Trái ngược hoàn toàn với quẻ Thái, quẻ Bĩ tượng trưng cho giai đoạn bế tắc cực độ của hoàn cảnh. Lòng người ly tán, kẻ cơ hội lộng hành, lời ngay thẳng bị vùi dập. Người quân tử lúc này không nên đương đầu trực diện mà phải biết giữ mình trong sạch, ẩn nhẫn tu đức chờ ngày bĩ cực thái lai.',
    aspects: {
      career: 'Công việc đình trệ, gặp tiểu nhân hãm hại hoặc cơ chế bế tắc. Không nên khởi sự dự án mới, hãy tạm lui về phòng thủ.',
      wealth: 'Tài chính thất thoát, dễ bị lừa đảo hoặc thua lỗ nặng nề. Tuyệt đối không cho vay tiền hay dốc vốn mạo hiểm.',
      love: 'Gia đạo lạnh nhạt, vợ chồng đồng sàng dị mộng, bất đồng quan điểm sâu sắc. Tránh đối đầu gay gắt.',
      health: 'Khí huyết ứ trệ, dễ mắc các chứng tắc nghẽn, trầm cảm, mệt mỏi suy nhược kéo dài.',
      travel: 'Không nên đi xa, dễ gặp sự cố trắc trở hoặc mắc kẹt nơi xa lạ.',
      advice: 'Học cách nhẫn nại trong nghịch cảnh. Giữ vững phẩm giá và sự liêm khiết, không thỏa hiệp với cái xấu; qua đêm đen trời sẽ lại sáng.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Bạt mao như, dĩ kỳ vĩ, trinh cát, hanh (Nhổ chùm cỏ tranh bám rễ đan xen, giữ đạo chính thì tốt lành, hanh thông).', advice: 'Cùng những người bạn chân chính rút lui giữ mình, không sa vào bẫy danh lợi của thời loạn.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Bao thừa, tiểu nhân cát, đại nhân bĩ, hanh (Bao dung a dua thì tiểu nhân tốt, bậc đại nhân chịu bế tắc nhưng hanh thông về sau).', advice: 'Chấp nhận chịu thiệt thòi trước mắt chứ không a dua xu nịnh kẻ xấu, khí tiết ấy sẽ được đền đáp.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Bao tu (Ngậm mối nhục nhã vì việc bất chính).', advice: 'Nhận thức được sai lầm và sự ô nhục của việc mưu mô, hãy sớm dừng bước ăn năn sửa mình.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Hữu mệnh vô cữu, trù ly chỉ (Có thiên mệnh soi đường thì không lỗi, cùng bạn bè chung chí hướng hưởng phúc lành).', advice: 'Thời cơ chuyển biến bắt đầu le lói, đứng lên hành động vì nghĩa lớn sẽ có đồng minh tương trợ.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Hưu bĩ, đại nhân cát, kỳ vong kỳ vong, hệ vu bao tang (Làm dứt thời bế tắc, bậc đại nhân rất tốt lành, luôn lo sợ nguy mất mà gắn chặt vào gốc dâu bền vững).', advice: 'Xóa tan khó khăn khôi phục lại trật tự, nhưng luôn giữ tâm thế cảnh giác đề phòng nguy cơ tái phát.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Khuynh bĩ, tiên bĩ hậu hỷ (Lật đổ sự bế tắc, trước bế tắc sau mừng vui rạng rỡ).', advice: 'Đã đến lúc bĩ cực thái lai, vận đen qua đi vận đỏ ùa về, đón nhận niềm vui thắng lợi rực rỡ.' }
    ]
  },
  {
    id: 13,
    name: 'Thiên Hỏa Đồng Nhân',
    altName: 'Quẻ Đồng Nhân',
    hanzi: '同人',
    unicodeChar: '䷌',
    upperTrigram: 'Can',
    lowerTrigram: 'Ly',
    lines: [1, 0, 1, 1, 1, 1],
    nature: 'Đại Cát',
    element: 'Kim',
    omen: 'Tiên Nhân Chỉ Lộ',
    omenMeaning: 'Được bậc tiên nhân hiền trí chỉ đường dẫn lối, cùng chung chí hướng với bạn bè thiên hạ, việc lớn dễ thành.',
    summary: 'Trên là Trời (Càn - rộng lớn vô cùng), dưới là Lửa (Ly - quang minh rực rỡ). Lửa sáng bốc lên chiếu rọi cùng trời cao. Đồng Nhân là cùng chung lòng người, đại đồng, đoàn kết và minh bạch.',
    trieuDoan: 'Tiên nhân giáng thế chỉ đường quang, Lối bước thênh thang rực ánh vàng. Bằng hữu bốn phương chung chí hướng, Đồng tâm hiệp lực rạng giang san.',
    thoanTu: {
      original: '同人: 同人于野, 亨. 利涉大川, 利君子貞.',
      hanViet: 'Đồng Nhân: Đồng nhân vu dã, hanh. Lợi thiệp đại xuyên, lợi quân tử trinh.',
      dichNghia: 'Quẻ Đồng Nhân: Hòa đồng với mọi người nơi đồng nội rộng lớn, hanh thông. Thuận lợi cho việc vượt sông lớn, có lợi khi người quân tử giữ vững chính đạo.'
    },
    daiTuong: {
      hanViet: 'Thiên dữ hỏa, đồng nhân, quân tử dĩ loại tộc biện vật.',
      dichNghia: 'Trời cùng với lửa tạo nên quẻ Đồng Nhân, người quân tử noi theo đó mà phân định rõ từng dòng họ chủng loại, thấu tỏ vạn vật.'
    },
    dichLy: 'Chỉ có một hào âm Lục Nhị đắc trung đắc chính, ứng hợp với Cửu Ngũ chí tôn. Đồng Nhân là tinh thần hòa hợp vô tư, không phân biệt ranh giới cục bộ, bè phái nhỏ nhen. Người lãnh đạo có tầm nhìn rộng mở, công khai minh bạch tất thu phục được hiền tài bốn bể quy tụ chung tay kiến tạo sự nghiệp.',
    aspects: {
      career: 'Hợp tác liên minh rộng rãi, dự án cộng đồng hoặc khởi nghiệp nhóm đạt thành tựu vang dội. Môi trường làm việc cởi mở, đồng nghiệp tương trợ.',
      wealth: 'Tài lộc đến từ việc kinh doanh chung, cổ phần minh bạch hoặc mở rộng thị trường ra ngoài tỉnh/quốc tế.',
      love: 'Tình yêu tìm thấy tiếng nói chung tri kỷ, không vụ lợi tính toán. Đôi bên cùng nâng đỡ nhau thăng tiến trong cuộc sống.',
      health: 'Sức khỏe tốt, tinh thần phấn chấn lạc quan nhờ sống hòa đồng vui vẻ với mọi người.',
      travel: 'Xuất hành rất tốt lành, đi công tác xa gặp được đối tác tâm đầu ý hợp, mở rộng tầm nhìn.',
      advice: 'Hãy dẹp bỏ thành kiến hẹp hòi, mở rộng tấm lòng đón nhận mọi người. Làm việc gì cũng minh bạch công khai, bạn sẽ có cả thiên hạ đồng hành.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Đồng nhân vu môn, vô cữu (Hòa đồng với mọi người ngay từ ngoài cửa ngõ, không có lỗi).', advice: 'Giao tiếp cởi mở không thiên vị ngay từ bước đầu, giữ tâm thế công bằng với tất cả.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Đồng nhân vu tông, lận (Chỉ hòa đồng trong phạm vi tông tộc dòng họ của mình, chuốc lấy hối tiếc).', advice: 'Tránh thói cục bộ bè phái dòng họ hẹp hòi, phải biết mở rộng tầm nhìn ra cộng đồng rộng lớn.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Phục nhung vu mãng, thăng kỳ cao lăng, tam tuế bất hưng (Phục binh trong bụi rậm, trèo lên gò cao dòm ngó, ba năm chẳng dám dấy binh).', advice: 'Lòng ôm mưu mô nghi kỵ, toan tính rình rập đối phương chỉ làm tiêu hao thời gian và chuốc lấy bế tắc.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Thừa kỳ dong, phỉ khắc công, cát (Trèo lên tường thành định đánh úp, nhưng thấy lý không thuận liền dừng lại không tấn công, tốt lành).', advice: 'Kịp thời dừng lại trước hành vi sai trái, biết phục thiện nghe theo lẽ phải thì giữ được an lành.' },
      { position: 5, name: 'Cửu Ngũ', type: 'Dương', meaning: 'Đồng nhân, tiên hào khiêu nhi hậu tiếu, đại sư khắc tương ngộ (Đồng lòng chung chí, trước khóc lóc than thở sau cười vui rạng rỡ, quân lớn đánh tan cách trở mới gặp được nhau).', advice: 'Trải qua muôn vàn thử thách gian nan đôi bên mới thấu hiểu và đoàn kết bền chặt, nụ cười chiến thắng sau cùng.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Đồng nhân vu giao, vô hối (Hòa đồng ở nơi ngoại ô xa xôi, không có gì phải hối tiếc).', advice: 'Dẫu chưa đạt tới mức đại đồng thân thiết tột cùng, nhưng giữ được sự hòa nhã bình yên không tranh chấp.' }
    ]
  },
  {
    id: 14,
    name: 'Hỏa Thiên Đại Hữu',
    altName: 'Quẻ Đại Hữu',
    hanzi: '大有',
    unicodeChar: '䷍',
    upperTrigram: 'Ly',
    lowerTrigram: 'Can',
    lines: [1, 1, 1, 1, 0, 1],
    nature: 'Đại Cát',
    element: 'Kim',
    omen: 'Kim Ngọc Mãn Đường',
    omenMeaning: 'Vàng ngọc đầy nhà, của cải dư thừa, tài lộc dồi dào tột đỉnh, thời vận huy hoàng rực rỡ.',
    summary: 'Trên là Lửa (Ly - mặt trời chiếu sáng), dưới là Trời (Càn - bao la). Mặt trời ở giữa đỉnh trời rọi sáng vạn vật. Đại Hữu là sở hữu lớn, giàu có thịnh vượng cả về vật chất lẫn tinh thần.',
    trieuDoan: 'Vàng ngọc đầy kho phước lộc tràn, Mặt trời rực rỡ chiếu trần gian. Công danh phú quý đều viên mãn, Phúc trạch bền lâu rạng vẻ vang.',
    thoanTu: {
      original: '大有: 元亨.',
      hanViet: 'Đại Hữu: Nguyên hanh.',
      dichNghia: 'Quẻ Đại Hữu: Khởi đầu rộng lớn và hanh thông vô cùng.'
    },
    daiTuong: {
      hanViet: 'Hỏa tại thiên thượng, đại hữu, quân tử dĩ át ác dương thiện, thuận thiên hưu mệnh.',
      dichNghia: 'Lửa ở trên bầu trời tạo thành quẻ Đại Hữu, người quân tử noi theo đó mà ngăn chặn điều ác, biểu dương điều thiện, thuận theo mệnh tốt lành của trời cao.'
    },
    dichLy: 'Một hào âm Lục Ngũ nhu thuận ở ngôi tôn quý, được năm hào dương cương kiện quy phục nâng đỡ. Như người có đức độ khiêm nhường nắm giữ nguồn tài sản khổng lồ. Đại Hữu dạy rằng: Giàu có chân chính không phải là tích trữ bo bo cho riêng mình, mà là biết chia sẻ, bài trừ cái xấu, cổ vũ điều thiện để tạo phúc cho đời.',
    aspects: {
      career: 'Thời kỳ đỉnh cao của sự nghiệp, danh tiếng vang xa, được mọi người kính trọng nể phục. Đạt được vị thế lãnh đạo cao nhất.',
      wealth: 'Tài chính cực thịnh, tiền tài sinh sôi nảy nở, của nả dồi dào tích tụ bền vững.',
      love: 'Gia đình viên mãn hạnh phúc, vợ chồng hòa thuận thủy chung, con cái thành đạt ngoan ngoãn.',
      health: 'Sức khỏe dồi dào tráng kiện, tinh thần hưng phấn. Chú ý giữ chế độ ăn uống thanh đạm, tránh thừa chất.',
      travel: 'Xuất hành vô cùng đại cát, đi đâu cũng có quý nhân đón rước, vinh quy bái tổ.',
      advice: 'Phú quý sinh lễ nghĩa. Khi nắm giữ của cải danh vọng lớn trong tay, hãy dùng nó để giúp đỡ người nghèo khó và gieo trồng phước đức lâu dài.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Cửu', type: 'Dương', meaning: 'Vô giao hại, phỉ cữu, gian tắc vô cữu (Chưa qua lại dính líu đến điều hại, chẳng có lỗi gì, giữ lòng thận trọng gian nan thì không lỗi).', advice: 'Mới giàu có hoặc bắt đầu thành công, tránh xa thói khoe khoang phù phiếm để phòng ngừa tai họa.' },
      { position: 2, name: 'Cửu Nhị', type: 'Dương', meaning: 'Đại xa dĩ tải, hữu du vãng, vô cữu (Xe lớn chở nặng của cải, có nơi để đi tới, không lỗi lầm).', advice: 'Có thực lực và phương tiện vững vàng, hãy mạnh dạn gánh vác việc lớn có ích cho xã hội.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Công hầu dụng hanh vu thiên tử, tiểu nhân phất khắc (Bậc công hầu dâng lễ phẩm lên thiên tử, kẻ tiểu nhân chẳng thể làm nổi điều này).', advice: 'Dùng tài sản vào việc nghĩa cả phụng sự xã hội, kẻ ích kỷ hẹp hòi sẽ không bao giờ hiểu được phước đức này.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Phỉ kỳ bành, vô cữu (Không kiêu căng tự phụ với sự giàu sang của mình thì không có lỗi).', advice: 'Ở vị trí cao cận kề đỉnh cao, luôn giữ thái độ khiêm nhường không khoe khoang để tránh sự ghen ghét.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Quyết phu giao như, uy như, cát (Lấy lòng thành tín đối đãi với mọi người, có uy nghiêm tự nhiên, tốt lành).', advice: 'Lấy đức độ và sự chân thành thu phục lòng người, tự khắc tạo nên uy tín và quyền uy tuyệt đối.' },
      { position: 6, name: 'Thượng Cửu', type: 'Dương', meaning: 'Tự thiên hữu chi, cát vô bất lợi (Được trời cao che chở ban phúc, tốt lành không gì là không thuận lợi).', advice: 'Đức năng thắng số, thuận theo thiên lý và sống trọn vẹn với nhân tâm thì phúc lộc đời đời bền vững.' }
    ]
  },
  {
    id: 15,
    name: 'Địa Sơn Khiêm',
    altName: 'Quẻ Khiêm',
    hanzi: '謙',
    unicodeChar: '䷎',
    upperTrigram: 'Khon',
    lowerTrigram: 'Can2',
    lines: [0, 0, 1, 0, 0, 0],
    nature: 'Đại Cát',
    element: 'Kim',
    omen: 'Nhị Nhân Phân Kim',
    omenMeaning: 'Hai người bạn cùng đào được thỏi vàng quý, nhường nhịn nhau chia đôi công bằng, tình nghĩa sắt son phước lộc nhân đôi.',
    summary: 'Trên là Đất (Khôn), dưới là Núi (Cấn). Núi cao sừng sững mà chịu nép mình ẩn tàng dưới lòng đất bao la. Khiêm là khiêm tốn, hạ mình nhường nhịn, quẻ duy nhất trong 64 quẻ có cả 6 hào đều tốt lành.',
    trieuDoan: 'Đào được vàng ròng dạ chẳng tham, Nhường nhau chia sớt nghĩa tương hòa. Khiêm cung nhún nhường người yêu mến, Phúc lộc ngàn thu rạng mái nhà.',
    thoanTu: {
      original: '謙: 亨, 君子有終.',
      hanViet: 'Khiêm: Hanh, quân tử hữu chung.',
      dichNghia: 'Quẻ Khiêm hanh thông, người quân tử giữ trọn đạo khiêm nhường ắt có kết cục tốt đẹp trọn vẹn đến cùng.'
    },
    daiTuong: {
      hanViet: 'Địa trung hữu sơn, khiêm, quân tử dĩ bẫu đa ích quả, xưng vật bình thi.',
      dichNghia: 'Trong lòng đất chứa ngọn núi cao tạo nên quẻ Khiêm, người quân tử noi theo đó mà bớt chỗ nhiều bù chỗ ít, cân đo muôn vật san sẻ công bằng.'
    },
    dichLy: 'Quy luật trời đất: Đầy thì vơi, vơi thì đầy; trăng tròn rồi khuyết, nước đầy ắt tràn. Đạo trời ghét kẻ kiêu ngạo, ban phúc cho người khiêm tốn. Quẻ Khiêm là viên ngọc quý nhất của Kinh Dịch, bất luận ai bốc được quẻ này, chỉ cần giữ trọn đức khiêm hạ thì đi đâu cũng gặp may mắn, muôn người kính phục.',
    aspects: {
      career: 'Rất được lòng lãnh đạo và đồng nghiệp. Công danh tiến bước vững chắc, tài cao mà không khoe khoang nên không ai đố kỵ ghen ghét.',
      wealth: 'Tài chính ổn định, sinh lời dài hạn, buôn bán giữ chữ tín và giá cả công bằng nên khách hàng đông đúc trung thành.',
      love: 'Gia đạo êm đềm ấm cúng. Vợ chồng kính trọng nhường nhịn nhau, tình nghĩa mặn nồng son sắt suốt đời.',
      health: 'Tâm tính điềm đạm thanh thản, sống thọ và ít bệnh tật.',
      travel: 'Xuất hành vạn sự bình an, đi đến đâu cũng gặp người tốt tương trợ nhiệt tình.',
      advice: 'Càng tài giỏi càng phải biết cúi đầu như bông lúa chín. Khiêm nhường không phải là tự ti yếu hèn, mà là đỉnh cao của bản lĩnh và trí tuệ.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Khiêm khiêm quân tử, dụng thiệp đại xuyên, cát (Người quân tử khiêm tốn nhún nhường hết mực, dùng đức ấy vượt sông lớn vẫn tốt lành).', advice: 'Giữ đức khiêm cung từ sâu thẳm nội tâm, đối diện với gian nguy bằng sự bình tĩnh khiêm hòa.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Minh khiêm, trinh cát (Tiếng khiêm tốn vang xa tự đáy lòng, giữ đạo chính tất tốt lành).', advice: 'Đức tính khiêm nhường toát ra tự nhiên từ phẩm hạnh bên trong, được xã hội ca tụng quý mến.' },
      { position: 3, name: 'Cửu Tam', type: 'Dương', meaning: 'Lao khiêm quân tử, vạn dân phục, cát (Người quân tử có công lao to lớn mà vẫn giữ lòng khiêm nhường, muôn dân quy phục, tốt lành).', advice: 'Lập được đại công nhưng không kể công khoe mẽ, lòng người tự khắc khắc ghi tôn kính mãi mãi.' },
      { position: 4, name: 'Lục Tứ', type: 'Âm', meaning: 'Vô bất lợi, huy khiêm (Không gì là không lợi, phát huy đức khiêm nhường đúng lúc đúng chỗ).', advice: 'Hành xử khéo léo, phát huy sự nhún nhường vừa phải phù hợp với địa vị của mình.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Bất phú dĩ kỳ lân, lợi dụng xâm phạt, vô bất lợi (Không cậy giàu sang áp chế láng giềng, khi cần thiết dùng uy lực trừng phạt kẻ ngang ngược thì không gì là không lợi).', advice: 'Khiêm nhường nhưng không nhu nhược, khi cần bảo vệ lẽ phải phải có uy lực quyết đoán.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Minh khiêm, lợi dụng hành sư, chinh ấp quốc (Tiếng khiêm nhường vang xa, lợi khi dùng kỷ luật chỉnh đốn lại ấp ấp lãnh địa của chính mình).', advice: 'Dùng đức khiêm tốn để tự kiểm điểm uốn nắn bản thân và nội bộ trước khi yêu cầu người khác.' }
    ]
  },
  {
    id: 16,
    name: 'Lôi Địa Dự',
    altName: 'Quẻ Dự',
    hanzi: '豫',
    unicodeChar: '䷏',
    upperTrigram: 'Chan',
    lowerTrigram: 'Khon',
    lines: [0, 0, 0, 1, 0, 0],
    nature: 'Cát',
    element: 'Mộc',
    omen: 'Thanh Long Đắc Vị',
    omenMeaning: 'Rồng xanh về đúng chốn vẫy vùng, niềm vui ùa tới, lòng người phấn khởi, dự bị chu đáo đón mừng thành công.',
    summary: 'Trên là Sấm (Chấn - rung động phấn phát), dưới là Đất (Khôn - nhu thuận). Tiếng sấm mùa xuân vang lên đánh thức muôn loài trong lòng đất đâm chồi nảy lộc. Dự là hân hoan, vui vẻ và chuẩn bị chu đáo.',
    trieuDoan: 'Rồng xanh gặp nước thỏa vẫy vùng, Trời đất vào xuân ngát sắc hồng. Hỷ sự tưng bừng vui phấn khởi, Lo xa giữ vững nghiệp hưng long.',
    thoanTu: {
      original: '豫: 利建侯行師.',
      hanViet: 'Dự: Lợi kiến hầu hành sư.',
      dichNghia: 'Quẻ Dự: Thuận lợi cho việc lập chư hầu trợ giúp và xuất quân hành binh.'
    },
    daiTuong: {
      hanViet: 'Lôi xuất địa phấn, dự, tiên vương dĩ tác nhạc sùng đức, ân tiến chi thượng đế, dĩ phối tổ khảo.',
      dichNghia: 'Sấm nổ bốc lên khỏi lòng đất tạo niềm phấn khởi quẻ Dự, các bậc tiên vương noi theo đó mà tấu nhạc ca ngợi công đức, dâng lễ tế Thượng đế và phối hưởng tổ tiên.'
    },
    dichLy: 'Một hào dương Cửu Tứ nắm quyền chỉ huy, năm hào âm vui vẻ hưởng ứng tùng phục. Khi lòng người đồng thuận thì việc khó mấy cũng hoàn thành với tinh thần hăng say. Tuy nhiên, quẻ Dự cũng cảnh báo: Vui chơi nhưng không được sa đọa, phải biết lo trước cái lo của thiên hạ, chuẩn bị dự phòng chu đáo.',
    aspects: {
      career: 'Thời kỳ khởi sắc, công việc diễn ra suôn sẻ, tràn ngập năng lượng tích cực và sự hào hứng. Nhận được sự đồng thuận lớn từ tập thể.',
      wealth: 'Tài chính dồi dào, tiền bạc chi tiêu thoải mái cho các hoạt động vui chơi giải trí hoặc đầu tư sinh lời.',
      love: 'Tình duyên nở hoa, những buổi hẹn hò ngập tràn tiếng cười và lãng mạn. Gia đình có nhiều tin vui tụ họp.',
      health: 'Tinh thần sảng khoái, thể lực dồi dào. Tránh vui chơi quá đà thức khuya uống rượu làm tổn hại sức khỏe.',
      travel: 'Xuất hành đi du lịch, lễ hội hoặc giao lưu văn hóa vô cùng hứng khởi và nhiều kỷ niệm đẹp.',
      advice: 'Hân hoan tận hưởng niềm vui nhưng đừng quên phòng ngừa rủi ro. "Vui thôi đừng vui quá", hãy luôn giữ sự tỉnh táo và kế hoạch dự phòng.'
    },
    sixLines: [
      { position: 1, name: 'Sơ Lục', type: 'Âm', meaning: 'Minh dự, hung (Vui mừng khoe khoang quá sớm, chuốc lấy hung họa).', advice: 'Chưa làm được gì đã vội tự mãn khoe mẽ ắt rước lấy thất bại và sự chê cười.' },
      { position: 2, name: 'Lục Nhị', type: 'Âm', meaning: 'Giới vu thạch, bất chung nhật, trinh cát (Kiên định vững vàng như đá tảng, không để trọn một ngày trôi qua uổng phí, giữ chính đạo tất tốt lành).', advice: 'Sáng suốt nhìn thấu trước mọi cám dỗ, thấy điềm vui không buông thả, giữ mình vững vàng.' },
      { position: 3, name: 'Lục Tam', type: 'Âm', meaning: 'Duy dự, hối, trì hữu hối (Ngửa mặt trông chờ người khác ban vui, hối tiếc; nếu chậm trễ thức tỉnh thì càng ân hận).', advice: 'Tránh thói ỷ lại lười biếng chờ đợi người khác mang lại niềm vui cho mình, phải tự lập.' },
      { position: 4, name: 'Cửu Tứ', type: 'Dương', meaning: 'Do dự, đại hữu đắc, vật nghi, bằng hạp bằng (Nguồn phát sinh niềm vui lớn, gặt hái thành quả to lớn, chớ nghi ngờ bè bạn tề tựu đông đủ).', advice: 'Là hạt nhân gắn kết niềm vui và năng lượng tập thể, hãy tự tin dẫn dắt mọi người cùng thắng lợi.' },
      { position: 5, name: 'Lục Ngũ', type: 'Âm', meaning: 'Trinh tật, hằng bất tử (Mắc bệnh triền miên dẫu nguy nhưng chẳng chết).', advice: 'Đang chịu áp lực gánh nặng giữa thời vui vẻ, hãy kiên trì giữ gìn sức khỏe rồi sẽ vượt qua.' },
      { position: 6, name: 'Thượng Lục', type: 'Âm', meaning: 'Minh dự, thành hữu du, vô cữu (Mê muội đắm chìm trong lạc thú, nếu biết kịp thời thức tỉnh thay đổi thì không có lỗi).', advice: 'Đã trót sa đà vào ăn chơi hưởng lạc, mau chóng tỉnh ngộ quay về với kỷ luật thì vẫn kịp cứu vãn.' }
    ]
  }
];
