// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
const spec_identifier = {__proto__:null,bool:50, byte:52, sbyte:54, short:56, ushort:58, int:60, uint:62, long:64, ulong:66, double:68, float:70, decimal:72, string:74, char:76, void:78, null:80, true:82, false:84, if:86, else:88, while:90, for:92, do:94, switch:96, case:98, default:100, break:102, continue:104, return:106, const:108, var:110, dynamic:112}
export const parser = LRParser.deserialize({
  version: 14,
  states: "$OQ]QPOOP&rOPOOO&zQPO'#CaO'RQPO'#CdOOQO'#Ce'#CeOOQO'#Dg'#DgOOQO'#Dh'#DhOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Cj'#CjOOQO'#Cs'#CsOOQO'#Cm'#CmQ]QPOOOOQO'#Cf'#CfPOOO'#C]'#C]POOO)C>e)C>eOOQO,58{,58{O'YQPO,58{OOQO,59O,59OO'aQPO,59OOOQO-E6k-E6kOOQO1G.g1G.gOOQO1G.j1G.j",
  stateData: "'h~OdOSePQfPQ~OSQOVROZTO[TO]TOhSOi]Oj]Ok]Ol]Om]On]Oo]Op]Oq]Or]Os]Ot]Ou]Ov]Ow]Ox]Oy]Oz]O{]O|]O}]O!O]O!P]O!Q]O!R]O!S]O!T]O!U]O!V]O!W]O!X]O!Y]O!]UO!^UO!_UO!`UO!aUO!bUO!cUO!dUO!eVO!fVO!gVO!hVO!iVO!jVO!kVO!lVO!mVO!nVO!oVO!pVO!qWO!rWO!sWO!tWO!uWO!vWO!wWO!xWO!yWO!zWO!{WO!|WO!}WO#OWO#PWO#QWO#RWO#SWO#TWO#UWO#VWO#WWO#XWO#YWO#ZWO~Oe^Of^O~OR`O~P]OUbO~P]OReO~P]OUfO~P]O",
  goto: "#X!]P!^PPP!aPP!a!a!aPPP!a!i!i!qPPPPP#PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!a!iR_P]YOQR[ac]XOQR[acQ[OQaQQcRVd[ac]ZOQR[ac",
  nodeNames: "⚠ Comment Root Punctuation Punctuation Block Punctuation Punctuation Group Identifier Keyword String Number Char Punctuation Assignment Operator",
  maxTerm: 103,
  nodeProps: [
    ["openedBy", -2,3,6,"Punctuation"],
    ["closedBy", -2,4,7,"Punctuation"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 1,
  tokenData: "3o~R!RX^$[pq$[qr%Prs%ftu&]uv&tvw'Rwx'hxy(byz(gz{(l{|(y|})`}!O)e!O!P)z!P!Q*|!Q!R,a!R![,x![!].Z!]!^.`!^!_.e!_!`/S!`!a/i!a!b0W!c!}&]!}#O0u#P#Q0z#Q#R1P#R#S&]#T#o&]#o#p1^#p#q1c#q#r1x#r#s1}#y#z$[$f$g$[$g#BY&]#BY#BZ2S#BZ$IS&]$IS$I_2S$I_$I|&]$I|$JO2S$JO$JT&]$JT$JU2S$JU$KV&]$KV$KW2S$KW&FU&]&FU&FV2S&FV~&]~$aYd~X^$[pq$[#y#z$[$f$g$[#BY#BZ$[$IS$I_$[$I|$JO$[$JT$JU$[$KV$KW$[&FU&FV$[~%UQ!q~!O!P%[!_!`%a~%aO!`~~%fO!{~~%kUZ~OY%fZr%frs%}s#O%f#O#P&S#P~%f~&SOZ~~&VQOY%fZ~%f~&bUh~tu&]!Q![&]!c!}&]#R#S&]#T#o&]$g~&]~&yP!w~!_!`&|~'RO!j~~'WQ#P~vw'^!_!`'c~'cO#T~~'hO!l~~'kTOY'zZw'zx#O'z#O#P(X#P~'z~(PP]~wx(S~(XO]~~([QOY'zZ~'z~(gOV~~(lOU~~(qP!s~!_!`(t~(yO!f~~)OQ!u~{|)U!_!`)Z~)ZO#Y~~)`O!h~~)eO!b~~)jQ!v~}!O)p!_!`)u~)uO#Z~~)zO!i~~*PP!a~!Q![*S~*XR[~!Q![*S!g!h*b#X#Y*b~*eR{|*n}!O*n!Q![*t~*qP!Q![*t~*yP[~!Q![*t~+RR!t~z{+[!P!Q,P!_!`,[~+_ROz+[z{+h{~+[~+kTOz+[z{+h{!P+[!P!Q+z!Q~+[~,POf~~,UQe~OY,PZ~,P~,aO!g~~,fU[~!O!P*S!Q![,x!g!h*b#U#V-Z#X#Y*b#l#m-o~,}S[~!O!P*S!Q![,x!g!h*b#X#Y*b~-^Q!Q!R-d!R!S-d~-iQ[~!Q!R-d!R!S-d~-rR!Q![-{!c!i-{#T#Z-{~.QR[~!Q![-{!c!i-{#T#Z-{~.`O#X~~.eO!c~~.jQ!x~!^!_.p!_!`.}~.uP#S~!_!`.x~.}O!o~~/SO!}~~/XQ!e~!_!`/_!`!a/d~/dO!z~~/iO!d~~/nQ!y~!_!`/t!`!a/y~/yO!|~~0OP#R~!_!`0R~0WO!n~~0]Q#W~!O!P0c!a!b0h~0hO!_~~0mP#V~!_!`0p~0uO!p~~0zO!]~~1PO!^~~1UP#O~!_!`1X~1^O!k~~1cOS~~1hQ#Q~!_!`1n#p#q1s~1sO!m~~1xO#U~~1}OR~~2SO!r~~2Zfh~d~X^$[pq$[tu&]!Q![&]!c!}&]#R#S&]#T#o&]#y#z$[$f$g$[$g#BY&]#BY#BZ2S#BZ$IS&]$IS$I_2S$I_$I|&]$I|$JO2S$JO$JT&]$JT$JU2S$JU$KV&]$KV$KW2S$KW&FU&]&FU&FV2S&FV~&]",
  tokenizers: [0],
  topRules: {"Root":[0,2]},
  specialized: [{term: 24, get: value => spec_identifier[value] || -1}],
  tokenPrec: 0
})
