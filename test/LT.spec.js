const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('LT', async () => {
  it('should verify LT_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFOXNYTSFDHJI8Y0PBTOTVM O9NA7U 2XF6LR5XW9G81OGI4OP+9BM*4FGMU ACV4*XUA2PSGH.+H$NI4L6HUC%UG/YL WO*Z7ON1.-LDJ8ON1HQ1+Z9/HQESOXHQM47/972CL395J4I-B5ET42HPPEPHCRSV8%DPAC5ADN%9S8L6IWMW KAHA508XIORW6%5LJL0GG1M69721+V5O$97KPM*0A$FZM9IG9NXUGL2/IE%TE6UG+ZEVB8W107G67PPDFPVX1R270:6NEQ0R6AOMUF5LDCPF5RBQ746B46O1N646RM93O5RF6$T61R63B0 %PPRA5TI *9336TOJ%PD.ZJI7JSTNB95+6M:54BT5H35IZ6VRMGFPRYBQDTX-UC.U2U76*PVJA9DLEJC8.C2KC4JBSC9HAG-BJDCI-TL-VC4SLW HPOJZ0K PIS$S0O29T2*ZE6WUAKEG%5TW5A 6YO67N65VC899E.B%87 SUHU0KZ6I5H0PSFZV5INL1C$6GU4E5 IVRU1SIWOUIUIWC0T6F.1AV0D73P//F7TRWKVI%E9A6E9SGC2/70*ZLYMBCP6GGL21V.5UD9BMOQHBHX1HU+HOUHY*68$BG 1*Z7PEK-5T7N4EM8%ROLXL1/TO:HSX1%:QQ6EN5DC*R20D+ZON4KCPCFLVX9S/KISVDM.VTVESMU+*87BMDLH5OIC+A0AA8YNXIV0+O3*PKF4+*Q.1GXX7ZRB+*6U1VFG0R06XK2LLRASFB.BF4T%AP69CL0AOR5.VOX8U$%VX4WIW65N85-P6+1 S384BE.MBZ99:6RDMYN2+CS0C9$AOX$F.:NBTJ-92KTP9PB68H+0D.AUKZ8I%7D%H1LL7.5K$2B05J%6F-PV3012GE0';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Pavardenytė-Pavardenė', 'fnt': 'PAVARDENYTE<PAVARDENE', 'gn': 'Birutė-Marija', 'gnt': 'BIRUTE<MARIJA'}, 'dob': '2000-10-03', 'v': [{'tg': '840539006', 'vp': '1119349007', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-04-21', 'co': 'LT', 'is': 'Ministry of Health of The Republic of Lithuania', 'ci': 'URN:UVCI:01:LT:00034343989123'}]});
  });

  it('should verify LT_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXNYTSFDHJI8Y0PBTOTVM O9NA7U 2TF6LR5XW9G81OGI4OP+9BM*4FGMG.QAN9I6T5XH3E2%E30$4*2DQ79U*0CEBQ/GXQFY73OMB+WGEDB:437DJ0JB4DJ0$499TK E3ZC45B8ZVV5TN%2UP20J5/5LEBFD-48YI6AGD84TGLOD85W0PB9*JJC64V1A%B9NED1.BFJC9.BAFB:OC5FM6VMQDJGGIBI9AKCP.BLEE+.CFJCHFEP*GYHILIIX2MBIHJIKCCHVHHYHIN+IHHGXGGTB85IAMLEBC9L0D.LQNNVSFJU399:23R4A0LRG5905O8TVO5//CN%21%SMXK.+KI3J6/2/3TVO523LXTC36DVPTFLTD-I/2DBAJDAJCNB-43 X41Q2EG3RA3/43.F0DS9WC5OFU946+967KQ1C9AKPCPPRB0ZQT3I3KD3025RZ4E%5MK9/J5Q59TM9RH910QQQ5NG6B03HA7.W73X7N8Q2WMQO2TTT-8BWIJ8DJC0J3HA%ES:3T4.SWQTBC34IDGRC+*4KCTG%SMDFU GAV0+W3OU7PR3UVPQRHIY1%8G:RHSWCPS7%7A*/4VUBDKBD%O--4OYT5HJPXHU7T9CVPDQ-ATRC4I/V+*CPPKGPG123*K5ZXTK7JRS8.8BLEI84Q.QNF0NFQL8O3PCWBATC8J4560WOD-V7V8J IE0PVOFWNEAD9825%AO -4%UTP:E1-1U*PG%F0+69ZUDVIQSRMTK.EPAZR-5R+6FTGCYQH%RAN/VASN5TMP8H 4M7EWG9N.1GLIL1CAS.L%%Q1M76PT8ZF4K1P2VCFAB4HZR3QSH1AH0-H%38WU8ACA$-ST.SACPLP2BGBM7O.DCMSS.GC*PT5RN8STZJEG:56 BJVCY.ONXT-FH-BV5O4B 7B2KIB636F1SFW%BYXBHIRXTB7U52EW+JUPI8X79NQBHR3$0V/1L39DC:V9MFI.HW-9PKGH20V8S50';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Pavardenytė-Pavardenė', 'fnt': 'PAVARDENYTE<PAVARDENE', 'gn': 'Birutė-Marija', 'gnt': 'BIRUTE<MARIJA'}, 'dob': '2000-10-03', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'nm': 'SARS-COV-2 diagnostika', 'sc': '2021-04-13T14:20:00.000Z', 'tr': '260415000', 'tc': 'Viešoji įstaiga Kauno miesto greitosios medicin...', 'co': 'LT', 'is': 'Ministry of Health of The Republic of Lithuania', 'ci': 'URN:UVCI:01:LT:9834759845'}]});
  });

  it('should verify LT_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXNYTSFDHJI8Y0PBTOTVM O9NA7U 2HF6%%5XW9G81OGI4OP+9BM*4FGM*.QAN9I6T5XHMF2CG3V.4*2DQ79U*0CEBQ/GXQFY73OMB+WG%IJ96BERJ3QBVLJV.499TK EE.K6ZCY73JC3KD34LT183/-K7I874TY-BY8286Q:36IWMJK81:6G16IFNPCL694F$9DK4LC6*O4BZO3KPXXA:G9C45SSPMR9 NU5G64G6MN2*E6-RI PQVW5/O16%HAT1Z%PPRA5TI04TV63MD3IFTI23/9TL4T.B9 UP.-1:Q5/Q5%E9ZSLHA7QYBU2P F6R95:16AC58BL0U4XSJGZI1-I ZJY1B+H3T63R63+USI-22SSCJ0UTN8ALW.ITH74$0MB0Y FQQG$+NZUIQJAZGA2:UG%U:D4VA3T5N/N7KPQ2DL  C57WSXQR8MBNVHKD*Z5PLJ8S3%T9-QPDAW 8N8ZR*VLHZM5 MCS2.S7LHAIYH24VTALPOHDQQR+14AMVKB*9EJ6E Q8J6E5CS+WLG4VCBV KUM6JOASKVGN5TDFUE3W03V49T/75HTD%KG93CFQ58K1GQQ9R5* DU8K.WAKZK5TSZLH+9NMDNMCLH1E.W7KB9KTP5PHK4MXRMG810:J8METBWE:DA/JP*UZH5AVTTY2C%I5089X0MR84-PORFR5P-/LVM116Q78E.%L7S08V6TJT038O3T66F36Q+5OAZS$3EQ1CFWEXDR0MBLSPNANBVLEQVR8S%-2XLAU2KRA5*3AR32T+B1EJZ43.YQ85FSDS-ED6IJYAJKYON/ST:IW0U6*3-HNW00QJSW3';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Pavardenytė-Pavardenė', 'fnt': 'PAVARDENYTE<PAVARDENE', 'gn': 'Birutė-Marija', 'gnt': 'BIRUTE<MARIJA'}, 'dob': '2000-10-03', 'r': [{'tg': '840539006', 'fr': '2021-02-01', 'co': 'LT', 'is': 'Ministry of Health of The Republic of Lithuania', 'df': '2021-02-20', 'du': '2021-07-20', 'ci': 'URN:UVCI:01:LT:7493438573'}]});
  });

});

