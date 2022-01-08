const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('SE', async () => {
  it('should verify SE_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-HVN8J7UQMJ4/3RZLH62V2G1PC9CMSRH+QKFNTAVD3B19*AJCBMF6.UCOMIN6R%E5BD7HG8CU6O8QGU68ORJSPAEQOIR+SPCVO.28DDQHQ1BW9XX7ZY7NTICZU1*8X/KQ96/-KKTCY73JC3KD3LWT HB3ZC64JX7JQ1LK$2965VMFD-48YI 3533LC4TZ0BR/S09T./0ZYTS P-$0R:67PPDFPVX1R270:6C$Q0R6EOMUF5LDCPF5RBQ746B46O1N646RM9AL5CBVW566LH 469/9-3AKI6%T6LEQ-P6UQK*%NH$RSC9FFFW+7H9N$W2JO2C6S3UJ92KEST.ZJ-8B ZJ83B 2TAAUZZ2LH2%EUBUJZ0KZPIR145%T0YIF0JEYI1DLNCK1627ACW-T%NSY18KT911GL.EHNTI+SB-5A-ARUQNFW$ 2:.NU6W/CU8WDTFVG:BG3JFCSAVH-4V:HP4$0/.D9OV-RM60R7Z3B8PXICK+L/S1P*O:FG';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Lövström', 'fnt': 'LOEVSTROEM', 'gn': 'Oscar', 'gnt': 'OSCAR'}, 'dob': '1958-11-11', 'v': [{'tg': '840539006', 'vp': 'J07BX03', 'mp': 'EU/1/21/1529', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-03-18', 'co': 'SE', 'is': 'Swedish eHealth Agency', 'ci': 'URN:UVCI:01:SE:EHM/V100000024GI5HM'}]});
  });

  it('should verify SE_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-HFN4TTC4 SJWKZ*9-AH R61RO1T2-OPP-ITQB20J4G5EXN52CF/8X*G3M9BM9Z0BZW46+AY GNNVR*G0C7PHBO33RW05LBPOF9TTW37NNVS7B7DJSLJVI02 U$*SRAKVD9/.O2NOFHLZJJK734HLLJL4A7K7303I5JLZLP:C9VJNEF81JPTGL5-73LT3Z45.I1D7YW8T GG3QUE9SIPQH5I$HWVH+ZE5%P3W1XF8G*PHQ1YXLQ.H:ZH6XH-.P%OKAJ9VO5HR3.IEAYU*C2JP3:PH TUJG9*$J/UPSMAEYJ2YUQCGH23D-I/2DBAJDAJCNB-43 X41Q2EG3RA3/43KD3F23.+IIYC6Q0ZIJPKJ+LJ5AL5:4A934NJIFT/C3FDA.-B97U: KMZN*8KGZRXLHHKH:5EVY9C9Q$:UL+9/Q5B/94O53WUC2F+H1QB1J7FZY9U:03WS$.T$43WVBDKBYLDN4DE1D3LSROR LEROLA9SDRJ/U184GL9MP*031WG9BK8P.ARW0F*P7V93FRGFI9C1MN-RT*N4ZUD:IFAU/7GIZ9A9JAIA:EL-Z4.TFZXJ.39Z+DF301GE45';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Lövström', 'fnt': 'LOEVSTROEM', 'gn': 'Oscar', 'gnt': 'OSCAR'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'nm': 'Roche LightCycler qPCR', 'sc': new Date('2021-06-02T06:02:13.262564Z'), 'tr': '260415000', 'tc': 'Arlanda Airport Covid Center 1', 'co': 'SE', 'is': 'Swedish eHealth Agency', 'ci': 'URN:UVCI:01:SE:EHM/TARN89875439877'}]});
  });

  it('should verify SE_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-HFN4TTC4 SJWKZ*9-AH-R61RO1T2-OPP-ITQB20J4G5EXN308F/8X*G3M9BM9Z0BZW46+AY GNNVR*G0C7PHBO33RW05LBPOF9TTW37NNVS7B7DJSLJVI02 U$*SRAKVD9/.O2NOFHLZJJK734HLLJL4A7K7303I5JLZLP:C9VJNEF81JPTGL5-73LT3Z45.I1D7YW8T GG3QUE9.IPAQQVZ0K1HI 0CNN/%8I 0H*A6+8W1HRKF$-CS1L:$45B9.IPVLE X83HHDB52F1.GJ:X0GX8LG1ZNVEGJLG15JL-V4KMA-RI PQVW5/O16%HAT1Z%P2J9QH6 ZPSR9FX9ON1AMI4H9LUFA$PA$PSVEJMI:TU+MMWW5QX5BT1YEGEA7IB65C94JB.2JJMS/%C1W437HR/S /KA:KW-2G.49Y431TJYC0KVJ.G43HVPV3SV55LS3U/.1P-E0H9UM97H98$QJEQ8BH4670*CUI7A.AM8J9O1GUP%DWK%M3XA%ZJW-F+-SG7BAW5.IK/JR:XR.5SYE7$4S2AVPZL1$ODI6KOQU%C 03R9VTL5J6V%JL-BOY9UG20OW2N5';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Lövström', 'fnt': 'LOEVSTROEM', 'gn': 'Oscar', 'gnt': 'OSCAR'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'nm': 'Roche LightCycler qPCR', 'sc': '2021-06-02T06:02:13.262564Z', 'tr': '260415000', 'tc': 'Arlanda Airport Covid Center 1', 'co': 'SE', 'is': 'Swedish eHealth Agency', 'ci': 'URN:UVCI:01:SE:EHM/TARN89875439877'}]});
  });

  it('should verify SE_2DCode_raw_4', async () => {
    const HC1 = 'HC1:NCF880*80T9WTWGSLKC 4W696XE090D0PIXPFBBPG3*70WNAFN0DAC1A3WY09ACKU4D97TK0F90IECSHGWJC0FD.34AIA%G7X+AQB9746 G7$X86Y84Y9WTAETA$6B3:6UW6AL6SG6UPCGJCWY8+ED6/EA4FAVCOQED44%69AECAWEM3493D:.DOFFB$D:TCQF6SG6JQE.EOWJ3846Y96C463W5EG6A464G72A6-96Z$5K%6KA7+:64KC%PCKC8: CIQE5$CN3DU440XOYKEKPCG/DVKEQVD9WEQDD+Q6TW6FA7C464KC*KETF6A46.96646B56MWEWJDA6A:961A6Q47FM6GVC*JC1A6YW64W5Y96%96TPCBEC7ZKW.CWJDHXO%/EKWEHXOC$DI3DF CJQEGECLPCG/DWJD/0A4-AVTA/0ABZ9I3D7WEC1ARM8VIAO/EZKEZ96446156S78QO4H*9Y+002I0.I8MQT0D*LA$PUL-V+ZA0XCZQ5RNPXG09 LETIYJQVBQ0Z13K58M3-5PVOOT5CF49K39$$309N3BF*%ER5M5PL91';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Lövström', 'fnt': 'LOEVSTROEM', 'gn': 'Oscar', 'gnt': 'OSCAR'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP217198-3', 'ma': '1232', 'sc': new Date('2021-06-02T04:31:14.168957Z'), 'tr': '260415000', 'tc': 'Axelsbergs vårdcentral', 'co': 'SE', 'is': 'Swedish eHealth Agency', 'ci': 'URN:UVCI:01:SE:EHM/TSTAX67554312'}]});
  });

  it('should verify SE_2DCode_raw_5', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-HFN4TTC4 SJWKZ*9GBH. MU965HRLX8DGAM*U/+69 GRJ5*P5-FJLF6CB93KD62KKYJF84:H3J1D1I3-*TW C57D.*T/2T NSQ/3MEDA/DS.CSVD0DJ WJO*Q9ZIQ0J1VCSWC%PDX1LJ9CZXI:G1LGBND3%*4-U22HFVON%*8ZJJ*%CN1TTB5C-OTF1J*3TFH2V42F1COT$HFC*IUZ4+FJE 4Y3LL/II 0HJP7NVDEB12JD*2D0HH78$ZJ*DJWP42W5:YPHJUTRM8OI9YO LE3UQ5MA1TH8L2CPIGSUHPMU+VAWO2O8U+VH*FYZQ H992W %JMSGUVPQRHIY1VS11O1VQ3CVD**G/GBPG510U00NJQ15NSQO1YWQJ25P+BM-RCNR09AGWUI.TW$2H.J83U8FV8J044UD A..7/:U0-G-VNG2UK06O-FQ2C0FIT20SAGU1';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Lövström', 'fnt': 'LOEVSTROEM', 'gn': 'Oscar', 'gnt': 'OSCAR'}, 'dob': '1958-11-11', 'r': [{'tg': '840539006', 'fr': '2021-05-22', 'co': 'SE', 'is': 'Swedish eHealth Agency', 'df': '2021-06-02', 'du': '2021-08-31', 'ci': 'URN:UVCI:01:SE:EHM/R987765321'}]});
  });

});

