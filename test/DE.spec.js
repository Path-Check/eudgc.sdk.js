const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('DE', async () => {
  it('should verify DE_2DCode_raw_1', async () => {
    const HC1 = 'HC1:6BF+70790T9WJWG.FKY*4GO0.O1CV2 O5 N2FBBRW1*70HS8WY04AC*WIFN0AHCD8KD97TK0F90KECTHGWJC0FDC:5AIA%G7X+AQB9746HS80:54IBQF60R6$A80X6S1BTYACG6M+9XG8KIAWNA91AY%67092L4WJCT3EHS8XJC$+DXJCCWENF6OF63W5NW6WF6%JC QE/IAYJC5LEW34U3ET7DXC9 QE-ED8%E.JCBECB1A-:8$96646AL60A60S6Q$D.UDRYA 96NF6L/5QW6307KQEPD09WEQDD+Q6TW6FA7C466KCN9E%961A6DL6FA7D46JPCT3E5JDLA7$Q6E464W5TG6..DX%DZJC6/DTZ9 QE5$CB$DA/D JC1/D3Z8WED1ECW.CCWE.Y92OAGY8MY9L+9MPCG/D5 C5IA5N9$PC5$CUZCY$5Y$527B+A4KZNQG5TKOWWD9FL%I8U$F7O2IBM85CWOC%LEZU4R/BXHDAHN 11$CA5MRI:AONFN7091K9FKIGIY%VWSSSU9%01FO2*FTPQ3C3F';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'dob': '1964-08-12', 'nam': {'fn': 'Mustermann', 'fnt': 'MUSTERMANN', 'gn': 'Erika', 'gnt': 'ERIKA'}, 'v': [{'ci': 'URN:UVCI:01DE/IZ12345A/5CWLU12RNOB9RXSEOP6FG8#W', 'co': 'DE', 'dn': 2, 'dt': '2021-05-29', 'is': 'Robert Koch-Institut', 'ma': 'ORG-100031184', 'mp': 'EU/1/20/1507', 'sd': 2, 'tg': '840539006', 'vp': '1119349007'}], 'ver': '1.0.0'});
  });

  it('should verify DE_2DCode_raw_2', async () => {
    const HC1 = 'HC1:6BFR%BH:7*I0PS33NUA9HWP5PZ2CLJ*GH7WV-UNA1VZJKZ6HX.A/5R..9*CV6+LJ*F.UN7A2BT8B+6B897S69R48S1.R1VJO9Q1ZZO+CC$A9%T5X7RI25A8S57D JK-PQ+JR*FDTW3+1EC1JXLOQ58+KFL49ZMENAO.YOWR75PAH0HD6AIHCPWHJTF.RJ*JCSKEHL1N31HWEO67KJH8TIX-B3QB-+9*LCU:C:P2QEEQ7KF$V--4CW7JWILDWU%Q%IO0LAK70J$KW2JW56.KO8E2RHPH60ILI8T0N/7OEPD7P3+3IH9VZIVWP.44FX87QH5I97ZK0MK8OIGC3 3CQ6WO+9P9ECRSV%72M4L65 KAVKE*YPRHSIF1 89*4NDZ7FU6:F6NPJ1PHL059BGBB1%/C/J91R75Z5I7CWV0TREWYSY8ULK5HWPGEP$SI5B1$8HDOCH3JEBCL*8SE2AZT9SC+84JVGR39:2V*TR:KBW/4S:FK DOHF-1789MQ.18CV2C3YCN79OR176:1U:0CQVNGDJ0GUPO%CRT+QC/O$:D/WQY$3*5UR2M4YPFXK$DH';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'dob': '1964-08-12', 'nam': {'fn': 'Mustermann', 'fnt': 'MUSTERMANN', 'gn': 'Erika', 'gnt': 'ERIKA'}, 't': [{'ci': 'URN:UVCI:01DE/IZ12345A/5CWLU12RNOB9RXSEOP6FG8#W', 'co': 'DE', 'dr': '2021-05-30T10:30:15Z', 'is': 'Robert Koch-Institut', 'sc': '2021-05-30T10:12:22Z', 'tc': 'Testzentrum Köln Hbf', 'tg': '840539006', 'tr': '260415000', 'tt': 'LP217198-3'}], 'ver': '1.0.0'});
  });

  it('should verify DE_2DCode_raw_3', async () => {
    const HC1 = 'HC1:6BFOXN*TS0BI$ZD-PHQ7I9AD66V5B22CH9M9ESI9XBHXK-%69LQOGI.*V76GCV4*XUA2P-FHT-HNTI4L6N$Q%UG/YL WO*Z7ON15 BM0VM.JQ$F4W17PG4.VAS5EG4V*BRL0K-RDY5RWOOH6PO9:TUQJAJG9-*NIRICVELZUZM9EN9-O9:PICIG805CZKHKB-43.E3KD3OAJ6*K6ZCY73JC3KD3ZQTWD3E.KLC8M3LP-89B9K+KB2KK3M*EDZI9$JAQJKKIJX2MM+GWHKSKE MCAOI8%MCU5VTQDPIMQK9*O7%NC.UTWA6QK.-T3-SY$NCU5CIQ 52744E09TBOC.UKMI$8R+1A7CPFRMLNKNM8JI0JPGN:0K7OOBRLY667SYHJL9B7VPO:SWLH1/S4KQQK0$5REQT5RN1FR%SHPLRKWJO8LQ84EBC$-P4A0V1BBR5XWB3OCGEK:$8HHOLQOZUJ*30Q8CD1';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'dob': '1964-08-12', 'nam': {'fn': 'Mustermann', 'fnt': 'MUSTERMANN', 'gn': 'Erika', 'gnt': 'ERIKA'}, 'r': [{'ci': 'URN:UVCI:01DE/5CWLU12RNOB9RXSEOP6FG8#W', 'co': 'DE', 'df': '2021-05-29', 'du': '2021-06-15', 'fr': '2021-01-10', 'is': 'Robert Koch-Institut', 'tg': '840539006'}], 'ver': '1.0.0'});
  });

  it('should verify DE_2DCode_raw_4', async () => {
    const HC1 = 'HC1:6BF+70790T9WJWG.FKY*4GO0.O1CV2 O5 N2FBBRW1*70HS8WY04AC*WIFN0AHCD8KD97TK0F90KECTHGWJC0FDC:5AIA%G7X+AQB9746HS80:54IBQF60R6$A80X6S1BTYACG6M+9XG8KIAWNA91AY%67092L4WJCT3EHS8XJC +DXJCCWENF6OF63W5NW6WF6%JC QE/IAYJC5LEW34U3ET7DXC9 QE-ED8%E.JCBECB1A-:8$96646AL60A60S6Q$D.UDRYA 96NF6L/5QW6307KQEPD09WEQDD+Q6TW6FA7C466KCN9E%961A6DL6FA7D46JPCT3E5JDLA7$Q6E464W5TG6..DX%DZJC6/DTZ9 QE5$CB$DA/D JC1/D3Z8WED1ECW.CCWE.Y92OAGY8MY9L+9MPCG/D5 C5IA5N9$PC5$CUZCY$5Y$527BHB6*L8ARHDJL.Q7*2T7:SCNFZN70H6*AS6+T$D9UCAD97R8NIBO+/RJVE$9PAGPTBIZEP MO-Q0:R13IURRQ5MV93M9V3X2U:NDZSF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'dob': '1964-08-12', 'nam': {'fn': 'Mustermann', 'fnt': 'MUSTERMANN', 'gn': 'Erika', 'gnt': 'ERIKA'}, 'v': [{'ci': 'URN:UVCI:01DE/IZ12345A/5CWLU12RNOB9RXSEOP6FG8#W', 'co': 'DE', 'dn': 1, 'dt': '2021-05-29', 'is': 'Robert Koch-Institut', 'ma': 'ORG-100031184', 'mp': 'EU/1/20/1507', 'sd': 2, 'tg': '840539006', 'vp': '1119349007'}], 'ver': '1.0.0'});
  });

});

