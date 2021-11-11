const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('HR', async () => {
  it('should verify HR_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFOXNEG2NBJ5*H:QOY0P*WETNRNFWNAQU 2O%RMOOP-I2$IL069VAILM+6G:R4W34F/8X*G3M9FQH+4JZW4%+AN4JX:S:+IZW4PHBO33KDF%GBZ%8.68NKM5C9-JE+7A6IAFKBYHIYHIK3MYIIBIK6IACB5V4D%PDX1L5AD*XI5Q09L6%V9FQ5CVU2+PFQ51C5EWAC1A.GUQ$9WC5O59+E93ZM$96PZ6+Q6X469/9L:9CRT3364E5UQK*%NH$RSC9FFFT:DQC8R3HF1W0WBBPI3$U8KGK F+4AIN9 UPPIPOB9-NG/UI2YUGJA2I2C1GF%CD 810H% 0NY0A 1J3G5BJ*.V/KFICPBYPVLTYBUK$F8DVR9PCSFVWOE8TKMOIGA 1G:+E8NCASE3ET2M1H1SW56D-52QR5K5X0ENUICTB497K-OAKP8PR87EPJE';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'r': [{'ci': 'urn:uvci:01:HR:MZ0000000314', 'co': 'HR', 'df': '2020-12-15', 'du': '2021-06-13', 'fr': '2020-12-01', 'is': 'Ministry of Health', 'tg': '840539006'}], 'dob': '2000-01-01', 'nam': {'fn': 'FERNÁNDEZ', 'gn': 'RAMÓN', 'fnt': 'FERNANDEZ', 'gnt': 'RAMON'}, 'ver': '1.0.0'});
  });

  it('should verify HR_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXNEG2NBJ5*H:QOY0P*WETNRNFWNAQU 2 G6O:5-RI5AB$3LXG4: CBUUAD6PN4 NI4EFSYSC%OW4PYE9*FJFSQAZ8-.A2*CEHJ5$0-*AVB8V2OMY0O8C7:DJZI9.1$7KGIA3A41VCSWC%PD:NKLTCTJCB6C3/8VZ0958AC59GN1:6G16IFNPCL694F$9DK4LC6QP4UHLYA342KD$S0Z85/3038LK4K6SSD1G6WK8A5WML3CIQCUI8I8L*VL1PC0D9E2LBHHGKLO-K%FG5IAMEADII-GGUJKD7054G3:GQBGZHHBIH$C9ZI9$JAQJK3.KR0MIEQK S*%NH$RSC9VFFUC49:HI2ILF9-DF%/HM98-T3PR3XZQOJ95SO9NTUU4:OUT*QGTA4W7.Y7N312.R7$6QEUIM3$77Y5W.07J+G9.7EOFZDACK3HNLY3B00K5QT%VLX4GP0O8*R$BR9V7RQPJ7G5%VS7MA61CVB$/1V1W%Q0OW7X.644UK00/$DM4';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'t': [{'ci': 'urn:uvci:01:HR:MZ0000000371', 'co': 'HR', 'dr': '2021-04-25T00:00:00+02:00', 'is': 'Ministry of Health', 'sc': '2021-04-25T00:00:00+02:00', 'tc': 'KLINIČKI BOLNIČKI CENTAR RIJEKA', 'tg': '840539006', 'tr': '260415000', 'tt': 'LP6464-4'}], 'dob': '1996-11-03', 'nam': {'fn': 'TKALAC', 'gn': 'ADRIJANA', 'fnt': 'TKALAC', 'gnt': 'ADRIJANA'}, 'ver': '1.0.0'});
  });

  it('should verify HR_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXNEG2NBJ5*H:QOY0P*WETNRNFWNAQU 2HWFMOOP-IRW9XN79VAILM+6G:R4W34F/8X*G3M9JUPY0BZW4%+AN4JX:S:+IZW4PHBO33KDF%GBZ%8.68NKMRB8-JE+7A6IAN$36IASD9YHILIIX2MBIH9GGYIA3GEX3E1.BLEELEACI8:NJC19BJC%B9.IAHLCV5GVWNF94-L6N-L.IA.C8KRDL4O54O4IGUJKJGI0JAXD15IAXMFU*GSHGRKMXGG6DBYCBMQN:HG5PAHGG8KES/F-1J3.KO.KBEG%12/9TL4T.B9GYPKN1ULE6WUZ EY46QK9-L96DEXZ1Y46B/9BL536HQ05KCT$ZK9YGUVPQRHIY1VS11O12T3N3G9MJI$BAY6C2RQ2HH13JSEZ1D6 IVK5AJ9OGQ%9B7SB.7M$CGI%1U85DYB 8IGKRGNR-KU6BC27U98IE*R625Q%B5XMVEA M9ZN2L1N.QE';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'v': [{'ci': 'urn:uvci:01:HR:MZ0000000310', 'co': 'HR', 'dn': 2, 'dt': '2021-04-05', 'is': 'Ministry of Health', 'ma': 'ORG-100030215', 'mp': 'EU/1/20/1528', 'sd': 2, 'tg': '840539006', 'vp': 'J07BX03'}], 'dob': '1969-02-02', 'nam': {'fn': 'PREZIME01', 'gn': 'TEST01', 'fnt': 'PREZIME', 'gnt': 'TEST'}, 'ver': '1.0.0'});
  });

  it('should verify HR_2DCode_raw_4', async () => {
    const HC1 = 'HC1:NCFOXNEG2NBJ5*H:QOY0P*WETNRNFWNAQU 26I67X5-RI5ABG0EXG4: CBUUAD6PN4 NI4EFSYSC%O66PYE9*FJFSQAZ8-.A2*CEHJ5$0-*AVB8V2OMY0O8C0:DJZI9.1$7KGIA3A41VCSWC%PD:NKBTCTJCB6C3/8VZ0958AC59GN1:6G16IFNPCL694F$9DK4LC6QP4L956D6XHQ1EPD95O7N5SOYVQB87Z8QYJ8+KRA+PE$85FQ2JOG%BM95F77647$8K/Y4EU2/DALHC- 5/DA:D1::HK2GVD16%5::HVIOLHCOH12KOK1MANF+1WZ%J*PGL3WYNGOYB53IBT1QCE$$U-G9+E93ZM$96PZ6+Q6X46%E5EPPQF67460R6P00PEB8/SG8C49D:8DDIK.ZJ5OI9YI:8D4:CWND$T87LPMIH-O92UQ*SQX FRQGN7I7Y4HBTNIV-IF.8FMSV+*431T%ZK9:O/UI2YU262F%CD 810H% 0NY0X 1Q96E/6ZCQJ U70F3MLGJ6134AUVO03QUVBQF5ALZ5K-%C*46JQC6/N+XQXF5DHFBAW:IDNVI%QNC8W$ FQ%ER*HWEUB6DO0F5K6V50R23ZPI';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'t': [{'ci': 'urn:uvci:01:HR:MZ0000000378', 'co': 'HR', 'dr': '2021-04-20T00:00:00+02:00', 'is': 'Ministry of Health', 'ma': '1223', 'nm': 'BIOSYNEX COVID-19 Ag BSS', 'sc': '2021-04-20T00:00:00+02:00', 'tc': 'ZAVOD ZA JAVNO ZDRAVSTVO OSJEČKO-BARANJSKE ŽUPANIJ', 'tg': '840539006', 'tr': '260415000', 'tt': 'LP217198-3'}], 'dob': '1963-03-01', 'nam': {'fn': 'KLASIĆ', 'gn': 'LJILJANA', 'fnt': 'KLASIC', 'gnt': 'LJILJANA'}, 'ver': '1.0.0'});
  });

});

