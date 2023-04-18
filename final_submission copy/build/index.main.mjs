// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      16: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      19: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Dealer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Dealer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Dealer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v542], secs: v544, time: v543, didSend: v36, from: v541 } = txn1;
  ;
  const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
  stdlib.protect(ctc1, await interact.acceptWager(v542), {
    at: './index.rsh:92:25:application',
    fs: ['at ./index.rsh:91:14:application call to [unknown function] (defined at: ./index.rsh:91:18:function exp)'],
    msg: 'acceptWager',
    who: 'Dealer'
    });
  
  const v557 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
  
  const txn2 = await (ctc.sendrecv({
    args: [v541, v542, v553],
    evt_cnt: 0,
    funcNum: 1,
    lct: v543,
    onlyIf: true,
    out_tys: [],
    pay: [v557, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v560, time: v559, didSend: v47, from: v558 } = txn2;
      
      const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
      const v563 = stdlib.add(v542, v561);
      sim_r.txns.push({
        amt: v561,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v564 = stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '0');
      const v565 = stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0');
      const v566 = v559;
      const v573 = v563;
      
      if (await (async () => {
        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
        const v580 = v578 ? v579 : false;
        
        return v580;})()) {
        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        }
      else {
        
        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
        const v923 = stdlib.gt(v565, v564);
        const v924 = v923 ? v541 : v558;
        sim_r.txns.push({
          kind: 'from',
          to: v924,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v553],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v541, v542, v553],
      evt_cnt: 0,
      funcNum: 2,
      lct: v543,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v933, time: v932, didSend: v497, from: v931 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v541,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v933, time: v932, didSend: v497, from: v931 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:78:29:application',
      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Dealer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v560, time: v559, didSend: v47, from: v558 } = txn2;
    const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
    const v563 = stdlib.add(v542, v561);
    ;
    let v564 = stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '0');
    let v565 = stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0');
    let v566 = v559;
    let v573 = v563;
    
    let txn3 = txn2;
    while (await (async () => {
      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
      const v580 = v578 ? v579 : false;
      
      return v580;})()) {
      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
      await ctc.waitUntilTime(v587);
      stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
        at: './index.rsh:111:25:application',
        fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:31:function exp)'],
        msg: 'seeTallys',
        who: 'Dealer'
        });
      stdlib.protect(ctc1, await interact.resetView(), {
        at: './index.rsh:112:25:application',
        fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:31:function exp)'],
        msg: 'resetView',
        who: 'Dealer'
        });
      
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v595],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v541, v542, v558, v564, v565, v573, v587, v595],
          evt_cnt: 0,
          funcNum: 5,
          lct: v566,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v901, time: v900, didSend: v450, from: v899 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v558,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v901, time: v900, didSend: v450, from: v899 } = txn5;
        ;
        const v902 = stdlib.addressEq(v558, v899);
        const v903 = stdlib.addressEq(v541, v899);
        const v904 = v902 ? true : v903;
        stdlib.assert(v904, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:122:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Dealer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:122:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Dealer'
          });
        
        return;
        
        }
      else {
        const {data: [v609, v610], secs: v612, time: v611, didSend: v91, from: v608 } = txn4;
        ;
        const v613 = stdlib.addressEq(v541, v608);
        stdlib.assert(v613, {
          at: './index.rsh:121:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Dealer'
          });
        const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
        const v624 = stdlib.protect(ctc2, await interact.startGame(), {
          at: './index.rsh:127:53:application',
          fs: ['at ./index.rsh:126:16:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
          msg: 'startGame',
          who: 'Dealer'
          });
        const v625 = v624[stdlib.checkedBigNumberify('./index.rsh:127:53:application', stdlib.UInt_max, '0')];
        const v626 = v624[stdlib.checkedBigNumberify('./index.rsh:127:53:application', stdlib.UInt_max, '1')];
        const v629 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:128:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:126:16:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
          msg: 'random',
          who: 'Dealer'
          });
        const v630 = stdlib.digest([ctc0, ctc0], [v629, v625]);
        
        const txn5 = await (ctc.sendrecv({
          args: [v541, v542, v558, v564, v565, v573, v609, v610, v620, v630, v626],
          evt_cnt: 2,
          funcNum: 6,
          lct: v611,
          onlyIf: true,
          out_tys: [ctc3, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:136:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v633, v634], secs: v636, time: v635, didSend: v110, from: v632 } = txn5;
            
            ;
            
            const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
            const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
            const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
            const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v644;
            const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
            const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
            const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
            const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v648;
            const v650 = stdlib.safeAdd(v645, v649);
            const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
            const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
            const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
            const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v653;
            const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:150:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:152:decimal', stdlib.UInt_max, '0');
            const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:150:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:177:decimal', stdlib.UInt_max, '0');
            const v659 = stdlib.safeAdd(v656, v658);
            const v660 = stdlib.checkedBigNumberify('./index.rsh:150:181:decimal', stdlib.UInt_max, '0');
            const v661 = stdlib.checkedBigNumberify('./index.rsh:150:70:decimal', stdlib.UInt_max, '1');
            const v662 = v654;
            const v663 = stdlib.checkedBigNumberify('./index.rsh:150:187:decimal', stdlib.UInt_max, '0');
            const v664 = v659;
            const v665 = stdlib.checkedBigNumberify('./index.rsh:150:67:decimal', stdlib.UInt_max, '1');
            const v666 = v650;
            const v667 = stdlib.checkedBigNumberify('./index.rsh:150:184:decimal', stdlib.UInt_max, '0');
            const v668 = v635;
            const v675 = v573;
            
            if (await (async () => {
              const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
              const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
              const v682 = v680 ? true : v681;
              
              return v682;})()) {
              const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
              if (v683) {
                sim_r.isHalt = false;
                }
              else {
                const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                const v698 = v696 ? v697 : false;
                if (v698) {
                  const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                  if (v745) {
                    const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                    const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                    const v793 = v791 ? v792 : false;
                    const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                    const v795 = v793 ? true : v794;
                    if (v795) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                      const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                      const v802 = v800 ? v801 : false;
                      if (v802) {
                        sim_r.isHalt = false;
                        }
                      else {
                        const v809 = stdlib.lt(v662, v666);
                        const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                        const v811 = v809 ? v810 : false;
                        if (v811) {
                          const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.isHalt = false;
                          }}}}}}}
            else {
              
              const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
              const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
              const v865 = stdlib.gt(v662, v666);
              const v866 = v864 ? v865 : false;
              const v867 = v863 ? true : v866;
              const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
              const v869 = stdlib.gt(v666, v662);
              const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
              const v871 = v869 ? true : v870;
              const v872 = v868 ? v871 : false;
              const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
              
              const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
              if (v877) {
                const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                const cv564 = v564;
                const cv565 = v878;
                const cv566 = v668;
                const cv573 = v675;
                
                await (async () => {
                  const v564 = cv564;
                  const v565 = cv565;
                  const v566 = cv566;
                  const v573 = cv573;
                  
                  if (await (async () => {
                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                    const v580 = v578 ? v579 : false;
                    
                    return v580;})()) {
                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                    sim_r.isHalt = false;
                    }
                  else {
                    
                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                    const v923 = stdlib.gt(v565, v564);
                    const v924 = v923 ? v541 : v558;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v924,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              else {
                const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                if (v879) {
                  const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                  const cv564 = v880;
                  const cv565 = v565;
                  const cv566 = v668;
                  const cv573 = v675;
                  
                  await (async () => {
                    const v564 = cv564;
                    const v565 = cv565;
                    const v566 = cv566;
                    const v573 = cv573;
                    
                    if (await (async () => {
                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                      const v580 = v578 ? v579 : false;
                      
                      return v580;})()) {
                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                      sim_r.isHalt = false;
                      }
                    else {
                      
                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                      const v923 = stdlib.gt(v565, v564);
                      const v924 = v923 ? v541 : v558;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v924,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}
                else {
                  const cv564 = v564;
                  const cv565 = v565;
                  const cv566 = v668;
                  const cv573 = v675;
                  
                  await (async () => {
                    const v564 = cv564;
                    const v565 = cv565;
                    const v566 = cv566;
                    const v573 = cv573;
                    
                    if (await (async () => {
                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                      const v580 = v578 ? v579 : false;
                      
                      return v580;})()) {
                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                      sim_r.isHalt = false;
                      }
                    else {
                      
                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                      const v923 = stdlib.gt(v565, v564);
                      const v924 = v923 ? v541 : v558;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v924,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}}}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v620],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v541, v542, v558, v564, v565, v573, v609, v610, v620],
            evt_cnt: 0,
            funcNum: 7,
            lct: v611,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v883, time: v882, didSend: v416, from: v881 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v541,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v883, time: v882, didSend: v416, from: v881 } = txn6;
          ;
          const v884 = stdlib.addressEq(v558, v881);
          const v885 = stdlib.addressEq(v541, v881);
          const v886 = v884 ? true : v885;
          stdlib.assert(v886, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:137:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Dealer'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:78:29:application',
            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:137:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Dealer'
            });
          
          return;
          
          }
        else {
          const {data: [v633, v634], secs: v636, time: v635, didSend: v110, from: v632 } = txn5;
          ;
          const v637 = stdlib.addressEq(v558, v632);
          stdlib.assert(v637, {
            at: './index.rsh:136:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Dealer'
            });
          stdlib.protect(ctc1, await interact.updateCards(v610), {
            at: './index.rsh:144:27:application',
            fs: ['at ./index.rsh:143:16:application call to [unknown function] (defined at: ./index.rsh:143:20:function exp)'],
            msg: 'updateCards',
            who: 'Dealer'
            });
          
          const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v644;
          const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v648;
          const v650 = stdlib.safeAdd(v645, v649);
          const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v653;
          const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:150:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:152:decimal', stdlib.UInt_max, '0');
          const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:150:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:177:decimal', stdlib.UInt_max, '0');
          const v659 = stdlib.safeAdd(v656, v658);
          let v660 = stdlib.checkedBigNumberify('./index.rsh:150:181:decimal', stdlib.UInt_max, '0');
          let v661 = stdlib.checkedBigNumberify('./index.rsh:150:70:decimal', stdlib.UInt_max, '1');
          let v662 = v654;
          let v663 = stdlib.checkedBigNumberify('./index.rsh:150:187:decimal', stdlib.UInt_max, '0');
          let v664 = v659;
          let v665 = stdlib.checkedBigNumberify('./index.rsh:150:67:decimal', stdlib.UInt_max, '1');
          let v666 = v650;
          let v667 = stdlib.checkedBigNumberify('./index.rsh:150:184:decimal', stdlib.UInt_max, '0');
          let v668 = v635;
          let v675 = v573;
          
          let txn6 = txn5;
          while (await (async () => {
            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
            const v682 = v680 ? true : v681;
            
            return v682;})()) {
            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
            if (v683) {
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 9,
                out_tys: [ctc0],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v688], secs: v690, time: v689, didSend: v165, from: v687 } = txn7;
              ;
              const v691 = stdlib.addressEq(v541, v687);
              stdlib.assert(v691, {
                at: './index.rsh:165:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Dealer'
                });
              const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:168:24:decimal', stdlib.UInt_max, '1'));
              if (v692) {
                const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:169:35:decimal', stdlib.UInt_max, '10'));
                const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '1'));
                const cv660 = v660;
                const cv661 = v661;
                const cv662 = v662;
                const cv663 = v663;
                const cv664 = v694;
                const cv665 = v665;
                const cv666 = v693;
                const cv667 = v667;
                const cv668 = v689;
                const cv675 = v675;
                
                v660 = cv660;
                v661 = cv661;
                v662 = cv662;
                v663 = cv663;
                v664 = cv664;
                v665 = cv665;
                v666 = cv666;
                v667 = cv667;
                v668 = cv668;
                v675 = cv675;
                
                txn6 = txn7;
                continue;}
              else {
                const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:173:28:decimal', stdlib.UInt_max, '1'));
                const cv660 = v660;
                const cv661 = v661;
                const cv662 = v662;
                const cv663 = v663;
                const cv664 = v695;
                const cv665 = v665;
                const cv666 = v666;
                const cv667 = v667;
                const cv668 = v689;
                const cv675 = v675;
                
                v660 = cv660;
                v661 = cv661;
                v662 = cv662;
                v663 = cv663;
                v664 = cv664;
                v665 = cv665;
                v666 = cv666;
                v667 = cv667;
                v668 = cv668;
                v675 = cv675;
                
                txn6 = txn7;
                continue;}
              
              }
            else {
              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
              const v698 = v696 ? v697 : false;
              if (v698) {
                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                const txn7 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 1,
                  funcNum: 10,
                  out_tys: [ctc0],
                  timeoutAt: ['time', v705],
                  waitIfNotPresent: false
                  }));
                if (txn7.didTimeout) {
                  const txn8 = await (ctc.sendrecv({
                    args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v666, v675, v705],
                    evt_cnt: 0,
                    funcNum: 11,
                    lct: v668,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn8) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v729, time: v728, didSend: v216, from: v727 } = txn8;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v558,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v729, time: v728, didSend: v216, from: v727 } = txn8;
                  ;
                  const v730 = stdlib.addressEq(v558, v727);
                  const v731 = stdlib.addressEq(v541, v727);
                  const v732 = v730 ? true : v731;
                  stdlib.assert(v732, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:188:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Dealer'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:78:29:application',
                    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:188:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Dealer'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v711], secs: v713, time: v712, didSend: v182, from: v710 } = txn7;
                  ;
                  const v714 = stdlib.addressEq(v541, v710);
                  stdlib.assert(v714, {
                    at: './index.rsh:187:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Dealer'
                    });
                  stdlib.protect(ctc1, await interact.updateCards(v711), {
                    at: './index.rsh:192:31:application',
                    fs: ['at ./index.rsh:191:20:application call to [unknown function] (defined at: ./index.rsh:191:24:function exp)'],
                    msg: 'updateCards',
                    who: 'Dealer'
                    });
                  
                  const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:198:60:decimal', stdlib.UInt_max, '1'));
                  const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:198:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:198:68:decimal', stdlib.UInt_max, '1');
                  const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                  const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                  const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                  const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v721;
                  const v723 = stdlib.safeAdd(v666, v722);
                  let v725;
                  if (v719) {
                    const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:198:131:decimal', stdlib.UInt_max, '1'));
                    v725 = v726;
                    }
                  else {
                    v725 = v664;
                    }
                  const cv660 = v660;
                  const cv661 = stdlib.checkedBigNumberify('./index.rsh:198:72:decimal', stdlib.UInt_max, '1');
                  const cv662 = v662;
                  const cv663 = v663;
                  const cv664 = v725;
                  const cv665 = v718;
                  const cv666 = v723;
                  const cv667 = stdlib.checkedBigNumberify('./index.rsh:198:106:decimal', stdlib.UInt_max, '1');
                  const cv668 = v712;
                  const cv675 = v675;
                  
                  v660 = cv660;
                  v661 = cv661;
                  v662 = cv662;
                  v663 = cv663;
                  v664 = cv664;
                  v665 = cv665;
                  v666 = cv666;
                  v667 = cv667;
                  v668 = cv668;
                  v675 = cv675;
                  
                  txn6 = txn7;
                  continue;}
                
                }
              else {
                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                if (v745) {
                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                  const txn7 = await (ctc.sendrecv({
                    args: [v541, v542, v558, v564, v565, v651, v661, v662, v664, v665, v666, v667, v675, v752, v625],
                    evt_cnt: 1,
                    funcNum: 12,
                    lct: v668,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:210:16:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn7) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v757], secs: v759, time: v758, didSend: v240, from: v756 } = txn7;
                      
                      ;
                      const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                      const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                      const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                      const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v765;
                      const v767 = stdlib.safeAdd(v662, v766);
                      const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:220:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:81:decimal', stdlib.UInt_max, '0');
                      const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:220:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:106:decimal', stdlib.UInt_max, '0');
                      const v772 = stdlib.safeAdd(v769, v771);
                      const cv660 = v772;
                      const cv661 = v661;
                      const cv662 = v767;
                      const cv663 = stdlib.checkedBigNumberify('./index.rsh:220:59:decimal', stdlib.UInt_max, '1');
                      const cv664 = v664;
                      const cv665 = v665;
                      const cv666 = v666;
                      const cv667 = v667;
                      const cv668 = v758;
                      const cv675 = v675;
                      
                      await (async () => {
                        const v660 = cv660;
                        const v661 = cv661;
                        const v662 = cv662;
                        const v663 = cv663;
                        const v664 = cv664;
                        const v665 = cv665;
                        const v666 = cv666;
                        const v667 = cv667;
                        const v668 = cv668;
                        const v675 = cv675;
                        
                        if (await (async () => {
                          const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                          const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                          const v682 = v680 ? true : v681;
                          
                          return v682;})()) {
                          const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                          if (v683) {
                            sim_r.isHalt = false;
                            }
                          else {
                            const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                            const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                            const v698 = v696 ? v697 : false;
                            if (v698) {
                              const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                              if (v745) {
                                const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                                const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                                const v793 = v791 ? v792 : false;
                                const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                                const v795 = v793 ? true : v794;
                                if (v795) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                  const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                  const v802 = v800 ? v801 : false;
                                  if (v802) {
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v809 = stdlib.lt(v662, v666);
                                    const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                    const v811 = v809 ? v810 : false;
                                    if (v811) {
                                      const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      sim_r.isHalt = false;
                                      }}}}}}}
                        else {
                          
                          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                          const v865 = stdlib.gt(v662, v666);
                          const v866 = v864 ? v865 : false;
                          const v867 = v863 ? true : v866;
                          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                          const v869 = stdlib.gt(v666, v662);
                          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                          const v871 = v869 ? true : v870;
                          const v872 = v868 ? v871 : false;
                          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                          
                          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                          if (v877) {
                            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                            const cv564 = v564;
                            const cv565 = v878;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}
                          else {
                            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                            if (v879) {
                              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                              const cv564 = v880;
                              const cv565 = v565;
                              const cv566 = v668;
                              const cv573 = v675;
                              
                              await (async () => {
                                const v564 = cv564;
                                const v565 = cv565;
                                const v566 = cv566;
                                const v573 = cv573;
                                
                                if (await (async () => {
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                  const v923 = stdlib.gt(v565, v564);
                                  const v924 = v923 ? v541 : v558;
                                  sim_r.txns.push({
                                    kind: 'from',
                                    to: v924,
                                    tok: undefined /* Nothing */
                                    });
                                  sim_r.txns.push({
                                    kind: 'halt',
                                    tok: undefined /* Nothing */
                                    })
                                  sim_r.isHalt = true;
                                  }})();}
                            else {
                              const cv564 = v564;
                              const cv565 = v565;
                              const cv566 = v668;
                              const cv573 = v675;
                              
                              await (async () => {
                                const v564 = cv564;
                                const v565 = cv565;
                                const v566 = cv566;
                                const v573 = cv573;
                                
                                if (await (async () => {
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                  const v923 = stdlib.gt(v565, v564);
                                  const v924 = v923 ? v541 : v558;
                                  sim_r.txns.push({
                                    kind: 'from',
                                    to: v924,
                                    tok: undefined /* Nothing */
                                    });
                                  sim_r.txns.push({
                                    kind: 'halt',
                                    tok: undefined /* Nothing */
                                    })
                                  sim_r.isHalt = true;
                                  }})();}}}})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v752],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn7.didTimeout) {
                    const txn8 = await (ctc.sendrecv({
                      args: [v541, v542, v558, v564, v565, v651, v661, v662, v664, v665, v666, v667, v675, v752],
                      evt_cnt: 0,
                      funcNum: 13,
                      lct: v668,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn8) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v775, time: v774, didSend: v274, from: v773 } = txn8;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v541,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v775, time: v774, didSend: v274, from: v773 } = txn8;
                    ;
                    const v776 = stdlib.addressEq(v558, v773);
                    const v777 = stdlib.addressEq(v541, v773);
                    const v778 = v776 ? true : v777;
                    stdlib.assert(v778, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:211:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:78:29:application',
                      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:211:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Dealer'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v757], secs: v759, time: v758, didSend: v240, from: v756 } = txn7;
                    ;
                    const v760 = stdlib.addressEq(v558, v756);
                    stdlib.assert(v760, {
                      at: './index.rsh:210:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                    const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                    const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                    const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v765;
                    const v767 = stdlib.safeAdd(v662, v766);
                    const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:220:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:81:decimal', stdlib.UInt_max, '0');
                    const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:220:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:106:decimal', stdlib.UInt_max, '0');
                    const v772 = stdlib.safeAdd(v769, v771);
                    const cv660 = v772;
                    const cv661 = v661;
                    const cv662 = v767;
                    const cv663 = stdlib.checkedBigNumberify('./index.rsh:220:59:decimal', stdlib.UInt_max, '1');
                    const cv664 = v664;
                    const cv665 = v665;
                    const cv666 = v666;
                    const cv667 = v667;
                    const cv668 = v758;
                    const cv675 = v675;
                    
                    v660 = cv660;
                    v661 = cv661;
                    v662 = cv662;
                    v663 = cv663;
                    v664 = cv664;
                    v665 = cv665;
                    v666 = cv666;
                    v667 = cv667;
                    v668 = cv668;
                    v675 = cv675;
                    
                    txn6 = txn7;
                    continue;}
                  
                  }
                else {
                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                  const v793 = v791 ? v792 : false;
                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                  const v795 = v793 ? true : v794;
                  if (v795) {
                    const txn7 = await (ctc.sendrecv({
                      args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v666, v667, v675],
                      evt_cnt: 0,
                      funcNum: 14,
                      lct: v668,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('./index.rsh:228:18:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn7) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v798, time: v797, didSend: v298, from: v796 } = txn7;
                        
                        ;
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:231:32:decimal', stdlib.UInt_max, '0');
                        const cv662 = v662;
                        const cv663 = v663;
                        const cv664 = v664;
                        const cv665 = stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '0');
                        const cv666 = v666;
                        const cv667 = v667;
                        const cv668 = v797;
                        const cv675 = v675;
                        
                        await (async () => {
                          const v660 = cv660;
                          const v661 = cv661;
                          const v662 = cv662;
                          const v663 = cv663;
                          const v664 = cv664;
                          const v665 = cv665;
                          const v666 = cv666;
                          const v667 = cv667;
                          const v668 = cv668;
                          const v675 = cv675;
                          
                          if (await (async () => {
                            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                            const v682 = v680 ? true : v681;
                            
                            return v682;})()) {
                            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                            if (v683) {
                              sim_r.isHalt = false;
                              }
                            else {
                              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                              const v698 = v696 ? v697 : false;
                              if (v698) {
                                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                                if (v745) {
                                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                                  const v793 = v791 ? v792 : false;
                                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                                  const v795 = v793 ? true : v794;
                                  if (v795) {
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                    const v802 = v800 ? v801 : false;
                                    if (v802) {
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v809 = stdlib.lt(v662, v666);
                                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                      const v811 = v809 ? v810 : false;
                                      if (v811) {
                                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        sim_r.isHalt = false;
                                        }}}}}}}
                          else {
                            
                            const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                            const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                            const v865 = stdlib.gt(v662, v666);
                            const v866 = v864 ? v865 : false;
                            const v867 = v863 ? true : v866;
                            const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                            const v869 = stdlib.gt(v666, v662);
                            const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                            const v871 = v869 ? true : v870;
                            const v872 = v868 ? v871 : false;
                            const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                            
                            const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                            if (v877) {
                              const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                              const cv564 = v564;
                              const cv565 = v878;
                              const cv566 = v668;
                              const cv573 = v675;
                              
                              await (async () => {
                                const v564 = cv564;
                                const v565 = cv565;
                                const v566 = cv566;
                                const v573 = cv573;
                                
                                if (await (async () => {
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                  const v923 = stdlib.gt(v565, v564);
                                  const v924 = v923 ? v541 : v558;
                                  sim_r.txns.push({
                                    kind: 'from',
                                    to: v924,
                                    tok: undefined /* Nothing */
                                    });
                                  sim_r.txns.push({
                                    kind: 'halt',
                                    tok: undefined /* Nothing */
                                    })
                                  sim_r.isHalt = true;
                                  }})();}
                            else {
                              const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                              if (v879) {
                                const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                                const cv564 = v880;
                                const cv565 = v565;
                                const cv566 = v668;
                                const cv573 = v675;
                                
                                await (async () => {
                                  const v564 = cv564;
                                  const v565 = cv565;
                                  const v566 = cv566;
                                  const v573 = cv573;
                                  
                                  if (await (async () => {
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                    const v923 = stdlib.gt(v565, v564);
                                    const v924 = v923 ? v541 : v558;
                                    sim_r.txns.push({
                                      kind: 'from',
                                      to: v924,
                                      tok: undefined /* Nothing */
                                      });
                                    sim_r.txns.push({
                                      kind: 'halt',
                                      tok: undefined /* Nothing */
                                      })
                                    sim_r.isHalt = true;
                                    }})();}
                              else {
                                const cv564 = v564;
                                const cv565 = v565;
                                const cv566 = v668;
                                const cv573 = v675;
                                
                                await (async () => {
                                  const v564 = cv564;
                                  const v565 = cv565;
                                  const v566 = cv566;
                                  const v573 = cv573;
                                  
                                  if (await (async () => {
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                    const v923 = stdlib.gt(v565, v564);
                                    const v924 = v923 ? v541 : v558;
                                    sim_r.txns.push({
                                      kind: 'from',
                                      to: v924,
                                      tok: undefined /* Nothing */
                                      });
                                    sim_r.txns.push({
                                      kind: 'halt',
                                      tok: undefined /* Nothing */
                                      })
                                    sim_r.isHalt = true;
                                    }})();}}}})();
                        return sim_r;
                        }),
                      soloSend: true,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v798, time: v797, didSend: v298, from: v796 } = txn7;
                    ;
                    const v799 = stdlib.addressEq(v558, v796);
                    stdlib.assert(v799, {
                      at: './index.rsh:228:18:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:231:32:decimal', stdlib.UInt_max, '0');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v664;
                    const cv665 = stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '0');
                    const cv666 = v666;
                    const cv667 = v667;
                    const cv668 = v797;
                    const cv675 = v675;
                    
                    v660 = cv660;
                    v661 = cv661;
                    v662 = cv662;
                    v663 = cv663;
                    v664 = cv664;
                    v665 = cv665;
                    v666 = cv666;
                    v667 = cv667;
                    v668 = cv668;
                    v675 = cv675;
                    
                    txn6 = txn7;
                    continue;
                    
                    }
                  else {
                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                    const v802 = v800 ? v801 : false;
                    if (v802) {
                      const txn7 = await (ctc.sendrecv({
                        args: [v541, v542, v558, v564, v565, v651, v660, v661, v662, v663, v664, v665, v666, v667, v675],
                        evt_cnt: 0,
                        funcNum: 15,
                        lct: v668,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('./index.rsh:238:20:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn7) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v805, time: v804, didSend: v306, from: v803 } = txn7;
                          
                          ;
                          const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:241:37:decimal', stdlib.UInt_max, '10'));
                          const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:241:49:decimal', stdlib.UInt_max, '1'));
                          const cv660 = v808;
                          const cv661 = v661;
                          const cv662 = v807;
                          const cv663 = v663;
                          const cv664 = v664;
                          const cv665 = v665;
                          const cv666 = v666;
                          const cv667 = v667;
                          const cv668 = v804;
                          const cv675 = v675;
                          
                          await (async () => {
                            const v660 = cv660;
                            const v661 = cv661;
                            const v662 = cv662;
                            const v663 = cv663;
                            const v664 = cv664;
                            const v665 = cv665;
                            const v666 = cv666;
                            const v667 = cv667;
                            const v668 = cv668;
                            const v675 = cv675;
                            
                            if (await (async () => {
                              const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                              const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                              const v682 = v680 ? true : v681;
                              
                              return v682;})()) {
                              const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                              if (v683) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                                const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                                const v698 = v696 ? v697 : false;
                                if (v698) {
                                  const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                                  if (v745) {
                                    const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                                    const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                                    const v793 = v791 ? v792 : false;
                                    const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                                    const v795 = v793 ? true : v794;
                                    if (v795) {
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                      const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                      const v802 = v800 ? v801 : false;
                                      if (v802) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v809 = stdlib.lt(v662, v666);
                                        const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                        const v811 = v809 ? v810 : false;
                                        if (v811) {
                                          const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          sim_r.isHalt = false;
                                          }}}}}}}
                            else {
                              
                              const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                              const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                              const v865 = stdlib.gt(v662, v666);
                              const v866 = v864 ? v865 : false;
                              const v867 = v863 ? true : v866;
                              const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                              const v869 = stdlib.gt(v666, v662);
                              const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                              const v871 = v869 ? true : v870;
                              const v872 = v868 ? v871 : false;
                              const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                              const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                              
                              const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                              if (v877) {
                                const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                                const cv564 = v564;
                                const cv565 = v878;
                                const cv566 = v668;
                                const cv573 = v675;
                                
                                await (async () => {
                                  const v564 = cv564;
                                  const v565 = cv565;
                                  const v566 = cv566;
                                  const v573 = cv573;
                                  
                                  if (await (async () => {
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                    const v923 = stdlib.gt(v565, v564);
                                    const v924 = v923 ? v541 : v558;
                                    sim_r.txns.push({
                                      kind: 'from',
                                      to: v924,
                                      tok: undefined /* Nothing */
                                      });
                                    sim_r.txns.push({
                                      kind: 'halt',
                                      tok: undefined /* Nothing */
                                      })
                                    sim_r.isHalt = true;
                                    }})();}
                              else {
                                const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                                if (v879) {
                                  const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                                  const cv564 = v880;
                                  const cv565 = v565;
                                  const cv566 = v668;
                                  const cv573 = v675;
                                  
                                  await (async () => {
                                    const v564 = cv564;
                                    const v565 = cv565;
                                    const v566 = cv566;
                                    const v573 = cv573;
                                    
                                    if (await (async () => {
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                      const v923 = stdlib.gt(v565, v564);
                                      const v924 = v923 ? v541 : v558;
                                      sim_r.txns.push({
                                        kind: 'from',
                                        to: v924,
                                        tok: undefined /* Nothing */
                                        });
                                      sim_r.txns.push({
                                        kind: 'halt',
                                        tok: undefined /* Nothing */
                                        })
                                      sim_r.isHalt = true;
                                      }})();}
                                else {
                                  const cv564 = v564;
                                  const cv565 = v565;
                                  const cv566 = v668;
                                  const cv573 = v675;
                                  
                                  await (async () => {
                                    const v564 = cv564;
                                    const v565 = cv565;
                                    const v566 = cv566;
                                    const v573 = cv573;
                                    
                                    if (await (async () => {
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                      const v923 = stdlib.gt(v565, v564);
                                      const v924 = v923 ? v541 : v558;
                                      sim_r.txns.push({
                                        kind: 'from',
                                        to: v924,
                                        tok: undefined /* Nothing */
                                        });
                                      sim_r.txns.push({
                                        kind: 'halt',
                                        tok: undefined /* Nothing */
                                        })
                                      sim_r.isHalt = true;
                                      }})();}}}})();
                          return sim_r;
                          }),
                        soloSend: true,
                        timeoutAt: undefined /* mto */,
                        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v805, time: v804, didSend: v306, from: v803 } = txn7;
                      ;
                      const v806 = stdlib.addressEq(v558, v803);
                      stdlib.assert(v806, {
                        at: './index.rsh:238:20:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Dealer'
                        });
                      const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:241:37:decimal', stdlib.UInt_max, '10'));
                      const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:241:49:decimal', stdlib.UInt_max, '1'));
                      const cv660 = v808;
                      const cv661 = v661;
                      const cv662 = v807;
                      const cv663 = v663;
                      const cv664 = v664;
                      const cv665 = v665;
                      const cv666 = v666;
                      const cv667 = v667;
                      const cv668 = v804;
                      const cv675 = v675;
                      
                      v660 = cv660;
                      v661 = cv661;
                      v662 = cv662;
                      v663 = cv663;
                      v664 = cv664;
                      v665 = cv665;
                      v666 = cv666;
                      v667 = cv667;
                      v668 = cv668;
                      v675 = cv675;
                      
                      txn6 = txn7;
                      continue;
                      
                      }
                    else {
                      const v809 = stdlib.lt(v662, v666);
                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                      const v811 = v809 ? v810 : false;
                      if (v811) {
                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                        const v822 = stdlib.protect(ctc0, await interact.autoCard(), {
                          at: './index.rsh:249:61:application',
                          fs: ['at ./index.rsh:247:28:application call to [unknown function] (defined at: ./index.rsh:247:32:function exp)'],
                          msg: 'autoCard',
                          who: 'Dealer'
                          });
                        
                        const txn7 = await (ctc.sendrecv({
                          args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v665, v666, v667, v675, v818, v822],
                          evt_cnt: 1,
                          funcNum: 16,
                          lct: v668,
                          onlyIf: true,
                          out_tys: [ctc0],
                          pay: [stdlib.checkedBigNumberify('./index.rsh:251:24:decimal', stdlib.UInt_max, '0'), []],
                          sim_p: (async (txn7) => {
                            const sim_r = { txns: [], mapRefs: [], maps: [] };
                            let sim_txn_ctr = stdlib.UInt_max;
                            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                            
                            
                            const {data: [v824], secs: v826, time: v825, didSend: v321, from: v823 } = txn7;
                            
                            ;
                            const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                            const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                            const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                            const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v832;
                            const v834 = stdlib.safeAdd(v662, v833);
                            let v836;
                            if (v830) {
                              const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:260:119:decimal', stdlib.UInt_max, '1'));
                              v836 = v837;
                              }
                            else {
                              v836 = v660;
                              }
                            const cv660 = v836;
                            const cv661 = stdlib.checkedBigNumberify('./index.rsh:260:61:decimal', stdlib.UInt_max, '1');
                            const cv662 = v834;
                            const cv663 = v663;
                            const cv664 = v664;
                            const cv665 = v665;
                            const cv666 = v666;
                            const cv667 = v667;
                            const cv668 = v825;
                            const cv675 = v675;
                            
                            await (async () => {
                              const v660 = cv660;
                              const v661 = cv661;
                              const v662 = cv662;
                              const v663 = cv663;
                              const v664 = cv664;
                              const v665 = cv665;
                              const v666 = cv666;
                              const v667 = cv667;
                              const v668 = cv668;
                              const v675 = cv675;
                              
                              if (await (async () => {
                                const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                                const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                                const v682 = v680 ? true : v681;
                                
                                return v682;})()) {
                                const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                                if (v683) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                                  const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                                  const v698 = v696 ? v697 : false;
                                  if (v698) {
                                    const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                                    if (v745) {
                                      const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                                      const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                                      const v793 = v791 ? v792 : false;
                                      const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                                      const v795 = v793 ? true : v794;
                                      if (v795) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                        const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                        const v802 = v800 ? v801 : false;
                                        if (v802) {
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          const v809 = stdlib.lt(v662, v666);
                                          const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                          const v811 = v809 ? v810 : false;
                                          if (v811) {
                                            const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                            sim_r.isHalt = false;
                                            }
                                          else {
                                            sim_r.isHalt = false;
                                            }}}}}}}
                              else {
                                
                                const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                                const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                                const v865 = stdlib.gt(v662, v666);
                                const v866 = v864 ? v865 : false;
                                const v867 = v863 ? true : v866;
                                const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                                const v869 = stdlib.gt(v666, v662);
                                const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                                const v871 = v869 ? true : v870;
                                const v872 = v868 ? v871 : false;
                                const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                                const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                                
                                const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                                if (v877) {
                                  const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                                  const cv564 = v564;
                                  const cv565 = v878;
                                  const cv566 = v668;
                                  const cv573 = v675;
                                  
                                  await (async () => {
                                    const v564 = cv564;
                                    const v565 = cv565;
                                    const v566 = cv566;
                                    const v573 = cv573;
                                    
                                    if (await (async () => {
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                      const v923 = stdlib.gt(v565, v564);
                                      const v924 = v923 ? v541 : v558;
                                      sim_r.txns.push({
                                        kind: 'from',
                                        to: v924,
                                        tok: undefined /* Nothing */
                                        });
                                      sim_r.txns.push({
                                        kind: 'halt',
                                        tok: undefined /* Nothing */
                                        })
                                      sim_r.isHalt = true;
                                      }})();}
                                else {
                                  const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                                  if (v879) {
                                    const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                                    const cv564 = v880;
                                    const cv565 = v565;
                                    const cv566 = v668;
                                    const cv573 = v675;
                                    
                                    await (async () => {
                                      const v564 = cv564;
                                      const v565 = cv565;
                                      const v566 = cv566;
                                      const v573 = cv573;
                                      
                                      if (await (async () => {
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                        const v923 = stdlib.gt(v565, v564);
                                        const v924 = v923 ? v541 : v558;
                                        sim_r.txns.push({
                                          kind: 'from',
                                          to: v924,
                                          tok: undefined /* Nothing */
                                          });
                                        sim_r.txns.push({
                                          kind: 'halt',
                                          tok: undefined /* Nothing */
                                          })
                                        sim_r.isHalt = true;
                                        }})();}
                                  else {
                                    const cv564 = v564;
                                    const cv565 = v565;
                                    const cv566 = v668;
                                    const cv573 = v675;
                                    
                                    await (async () => {
                                      const v564 = cv564;
                                      const v565 = cv565;
                                      const v566 = cv566;
                                      const v573 = cv573;
                                      
                                      if (await (async () => {
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                        const v923 = stdlib.gt(v565, v564);
                                        const v924 = v923 ? v541 : v558;
                                        sim_r.txns.push({
                                          kind: 'from',
                                          to: v924,
                                          tok: undefined /* Nothing */
                                          });
                                        sim_r.txns.push({
                                          kind: 'halt',
                                          tok: undefined /* Nothing */
                                          })
                                        sim_r.isHalt = true;
                                        }})();}}}})();
                            return sim_r;
                            }),
                          soloSend: true,
                          timeoutAt: ['time', v818],
                          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                          waitIfNotPresent: false
                          }));
                        if (txn7.didTimeout) {
                          const txn8 = await (ctc.sendrecv({
                            args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v665, v666, v667, v675, v818],
                            evt_cnt: 0,
                            funcNum: 17,
                            lct: v668,
                            onlyIf: true,
                            out_tys: [],
                            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                            sim_p: (async (txn8) => {
                              const sim_r = { txns: [], mapRefs: [], maps: [] };
                              let sim_txn_ctr = stdlib.UInt_max;
                              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                              
                              
                              const {data: [], secs: v840, time: v839, didSend: v353, from: v838 } = txn8;
                              
                              ;
                              sim_r.txns.push({
                                kind: 'from',
                                to: v541,
                                tok: undefined /* Nothing */
                                });
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              
                              return sim_r;
                              }),
                            soloSend: false,
                            timeoutAt: undefined /* mto */,
                            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                            waitIfNotPresent: false
                            }));
                          const {data: [], secs: v840, time: v839, didSend: v353, from: v838 } = txn8;
                          ;
                          const v841 = stdlib.addressEq(v558, v838);
                          const v842 = stdlib.addressEq(v541, v838);
                          const v843 = v841 ? true : v842;
                          stdlib.assert(v843, {
                            at: 'reach standard library:197:11:dot',
                            fs: ['at ./index.rsh:252:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'sender correct',
                            who: 'Dealer'
                            });
                          ;
                          stdlib.protect(ctc1, await interact.informTimeout(), {
                            at: './index.rsh:78:29:application',
                            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:252:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'informTimeout',
                            who: 'Dealer'
                            });
                          
                          return;
                          
                          }
                        else {
                          const {data: [v824], secs: v826, time: v825, didSend: v321, from: v823 } = txn7;
                          ;
                          const v827 = stdlib.addressEq(v558, v823);
                          stdlib.assert(v827, {
                            at: './index.rsh:251:24:dot',
                            fs: [],
                            msg: 'sender correct',
                            who: 'Dealer'
                            });
                          const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                          const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                          const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                          const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v832;
                          const v834 = stdlib.safeAdd(v662, v833);
                          let v836;
                          if (v830) {
                            const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:260:119:decimal', stdlib.UInt_max, '1'));
                            v836 = v837;
                            }
                          else {
                            v836 = v660;
                            }
                          const cv660 = v836;
                          const cv661 = stdlib.checkedBigNumberify('./index.rsh:260:61:decimal', stdlib.UInt_max, '1');
                          const cv662 = v834;
                          const cv663 = v663;
                          const cv664 = v664;
                          const cv665 = v665;
                          const cv666 = v666;
                          const cv667 = v667;
                          const cv668 = v825;
                          const cv675 = v675;
                          
                          v660 = cv660;
                          v661 = cv661;
                          v662 = cv662;
                          v663 = cv663;
                          v664 = cv664;
                          v665 = cv665;
                          v666 = cv666;
                          v667 = cv667;
                          v668 = cv668;
                          v675 = cv675;
                          
                          txn6 = txn7;
                          continue;}
                        
                        }
                      else {
                        const txn7 = await (ctc.sendrecv({
                          args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v665, v666, v667, v675],
                          evt_cnt: 0,
                          funcNum: 18,
                          lct: v668,
                          onlyIf: true,
                          out_tys: [],
                          pay: [stdlib.checkedBigNumberify('./index.rsh:264:22:decimal', stdlib.UInt_max, '0'), []],
                          sim_p: (async (txn7) => {
                            const sim_r = { txns: [], mapRefs: [], maps: [] };
                            let sim_txn_ctr = stdlib.UInt_max;
                            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                            
                            
                            const {data: [], secs: v858, time: v857, didSend: v372, from: v856 } = txn7;
                            
                            ;
                            const cv660 = v660;
                            const cv661 = stdlib.checkedBigNumberify('./index.rsh:267:26:decimal', stdlib.UInt_max, '0');
                            const cv662 = v662;
                            const cv663 = v663;
                            const cv664 = v664;
                            const cv665 = v665;
                            const cv666 = v666;
                            const cv667 = v667;
                            const cv668 = v857;
                            const cv675 = v675;
                            
                            await (async () => {
                              const v660 = cv660;
                              const v661 = cv661;
                              const v662 = cv662;
                              const v663 = cv663;
                              const v664 = cv664;
                              const v665 = cv665;
                              const v666 = cv666;
                              const v667 = cv667;
                              const v668 = cv668;
                              const v675 = cv675;
                              
                              if (await (async () => {
                                const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                                const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                                const v682 = v680 ? true : v681;
                                
                                return v682;})()) {
                                const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                                if (v683) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                                  const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                                  const v698 = v696 ? v697 : false;
                                  if (v698) {
                                    const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                                    if (v745) {
                                      const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                                      const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                                      const v793 = v791 ? v792 : false;
                                      const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                                      const v795 = v793 ? true : v794;
                                      if (v795) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                        const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                        const v802 = v800 ? v801 : false;
                                        if (v802) {
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          const v809 = stdlib.lt(v662, v666);
                                          const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                          const v811 = v809 ? v810 : false;
                                          if (v811) {
                                            const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                            sim_r.isHalt = false;
                                            }
                                          else {
                                            sim_r.isHalt = false;
                                            }}}}}}}
                              else {
                                
                                const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                                const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                                const v865 = stdlib.gt(v662, v666);
                                const v866 = v864 ? v865 : false;
                                const v867 = v863 ? true : v866;
                                const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                                const v869 = stdlib.gt(v666, v662);
                                const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                                const v871 = v869 ? true : v870;
                                const v872 = v868 ? v871 : false;
                                const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                                const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                                
                                const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                                if (v877) {
                                  const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                                  const cv564 = v564;
                                  const cv565 = v878;
                                  const cv566 = v668;
                                  const cv573 = v675;
                                  
                                  await (async () => {
                                    const v564 = cv564;
                                    const v565 = cv565;
                                    const v566 = cv566;
                                    const v573 = cv573;
                                    
                                    if (await (async () => {
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                      const v923 = stdlib.gt(v565, v564);
                                      const v924 = v923 ? v541 : v558;
                                      sim_r.txns.push({
                                        kind: 'from',
                                        to: v924,
                                        tok: undefined /* Nothing */
                                        });
                                      sim_r.txns.push({
                                        kind: 'halt',
                                        tok: undefined /* Nothing */
                                        })
                                      sim_r.isHalt = true;
                                      }})();}
                                else {
                                  const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                                  if (v879) {
                                    const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                                    const cv564 = v880;
                                    const cv565 = v565;
                                    const cv566 = v668;
                                    const cv573 = v675;
                                    
                                    await (async () => {
                                      const v564 = cv564;
                                      const v565 = cv565;
                                      const v566 = cv566;
                                      const v573 = cv573;
                                      
                                      if (await (async () => {
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                        const v923 = stdlib.gt(v565, v564);
                                        const v924 = v923 ? v541 : v558;
                                        sim_r.txns.push({
                                          kind: 'from',
                                          to: v924,
                                          tok: undefined /* Nothing */
                                          });
                                        sim_r.txns.push({
                                          kind: 'halt',
                                          tok: undefined /* Nothing */
                                          })
                                        sim_r.isHalt = true;
                                        }})();}
                                  else {
                                    const cv564 = v564;
                                    const cv565 = v565;
                                    const cv566 = v668;
                                    const cv573 = v675;
                                    
                                    await (async () => {
                                      const v564 = cv564;
                                      const v565 = cv565;
                                      const v566 = cv566;
                                      const v573 = cv573;
                                      
                                      if (await (async () => {
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                        const v923 = stdlib.gt(v565, v564);
                                        const v924 = v923 ? v541 : v558;
                                        sim_r.txns.push({
                                          kind: 'from',
                                          to: v924,
                                          tok: undefined /* Nothing */
                                          });
                                        sim_r.txns.push({
                                          kind: 'halt',
                                          tok: undefined /* Nothing */
                                          })
                                        sim_r.isHalt = true;
                                        }})();}}}})();
                            return sim_r;
                            }),
                          soloSend: true,
                          timeoutAt: undefined /* mto */,
                          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                          waitIfNotPresent: false
                          }));
                        const {data: [], secs: v858, time: v857, didSend: v372, from: v856 } = txn7;
                        ;
                        const v859 = stdlib.addressEq(v558, v856);
                        stdlib.assert(v859, {
                          at: './index.rsh:264:22:dot',
                          fs: [],
                          msg: 'sender correct',
                          who: 'Dealer'
                          });
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:267:26:decimal', stdlib.UInt_max, '0');
                        const cv662 = v662;
                        const cv663 = v663;
                        const cv664 = v664;
                        const cv665 = v665;
                        const cv666 = v666;
                        const cv667 = v667;
                        const cv668 = v857;
                        const cv675 = v675;
                        
                        v660 = cv660;
                        v661 = cv661;
                        v662 = cv662;
                        v663 = cv663;
                        v664 = cv664;
                        v665 = cv665;
                        v666 = cv666;
                        v667 = cv667;
                        v668 = cv668;
                        v675 = cv675;
                        
                        txn6 = txn7;
                        continue;
                        
                        }}}}}}}
          stdlib.protect(ctc1, await interact.showLast(v609), {
            at: './index.rsh:277:24:application',
            fs: ['at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:20:function exp)'],
            msg: 'showLast',
            who: 'Dealer'
            });
          
          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
          const v865 = stdlib.gt(v662, v666);
          const v866 = v864 ? v865 : false;
          const v867 = v863 ? true : v866;
          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
          const v869 = stdlib.gt(v666, v662);
          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
          const v871 = v869 ? true : v870;
          const v872 = v868 ? v871 : false;
          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
          stdlib.protect(ctc1, await interact.seeOutcome(v862, v666, v662, v565, v564), {
            at: './index.rsh:284:26:application',
            fs: ['at ./index.rsh:283:9:application call to [unknown function] (defined at: ./index.rsh:283:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Dealer'
            });
          
          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
          if (v877) {
            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
            const cv564 = v564;
            const cv565 = v878;
            const cv566 = v668;
            const cv573 = v675;
            
            v564 = cv564;
            v565 = cv565;
            v566 = cv566;
            v573 = cv573;
            
            txn3 = txn6;
            continue;}
          else {
            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
            if (v879) {
              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
              const cv564 = v880;
              const cv565 = v565;
              const cv566 = v668;
              const cv573 = v675;
              
              v564 = cv564;
              v565 = cv565;
              v566 = cv566;
              v573 = cv573;
              
              txn3 = txn6;
              continue;}
            else {
              const cv564 = v564;
              const cv565 = v565;
              const cv566 = v668;
              const cv573 = v675;
              
              v564 = cv564;
              v565 = cv565;
              v566 = cv566;
              v573 = cv573;
              
              txn3 = txn6;
              continue;}}}
        
        }
      
      }
    stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
      at: './index.rsh:305:23:application',
      fs: ['at ./index.rsh:304:7:application call to [unknown function] (defined at: ./index.rsh:304:29:function exp)'],
      msg: 'seeTallys',
      who: 'Dealer'
      });
    
    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
    const v923 = stdlib.gt(v565, v564);
    const v924 = v923 ? v541 : v558;
    ;
    return;
    }
  
  
  
  };
export async function Player(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const v538 = stdlib.protect(ctc0, interact.wager, 'for Player\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v538],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:86:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v538, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v542], secs: v544, time: v543, didSend: v36, from: v541 } = txn1;
      
      sim_r.txns.push({
        amt: v542,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v542], secs: v544, time: v543, didSend: v36, from: v541 } = txn1;
  ;
  const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v553],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v541, v542, v553],
      evt_cnt: 0,
      funcNum: 2,
      lct: v543,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v933, time: v932, didSend: v497, from: v931 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v541,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v933, time: v932, didSend: v497, from: v931 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:78:29:application',
      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v560, time: v559, didSend: v47, from: v558 } = txn2;
    const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
    const v563 = stdlib.add(v542, v561);
    ;
    let v564 = stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '0');
    let v565 = stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0');
    let v566 = v559;
    let v573 = v563;
    
    let txn3 = txn2;
    while (await (async () => {
      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
      const v580 = v578 ? v579 : false;
      
      return v580;})()) {
      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
      await ctc.waitUntilTime(v587);
      stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
        at: './index.rsh:111:25:application',
        fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:31:function exp)'],
        msg: 'seeTallys',
        who: 'Player'
        });
      stdlib.protect(ctc1, await interact.resetView(), {
        at: './index.rsh:112:25:application',
        fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:31:function exp)'],
        msg: 'resetView',
        who: 'Player'
        });
      
      const v603 = stdlib.protect(ctc2, await interact.startGame(), {
        at: './index.rsh:117:62:application',
        fs: ['at ./index.rsh:116:16:application call to [unknown function] (defined at: ./index.rsh:116:20:function exp)'],
        msg: 'startGame',
        who: 'Player'
        });
      const v604 = v603[stdlib.checkedBigNumberify('./index.rsh:117:62:application', stdlib.UInt_max, '0')];
      const v605 = v603[stdlib.checkedBigNumberify('./index.rsh:117:62:application', stdlib.UInt_max, '1')];
      
      const txn4 = await (ctc.sendrecv({
        args: [v541, v542, v558, v564, v565, v573, v587, v595, v604, v605],
        evt_cnt: 2,
        funcNum: 4,
        lct: v566,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:121:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v609, v610], secs: v612, time: v611, didSend: v91, from: v608 } = txn4;
          
          ;
          const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v595],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v541, v542, v558, v564, v565, v573, v587, v595],
          evt_cnt: 0,
          funcNum: 5,
          lct: v566,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v901, time: v900, didSend: v450, from: v899 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v558,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v901, time: v900, didSend: v450, from: v899 } = txn5;
        ;
        const v902 = stdlib.addressEq(v558, v899);
        const v903 = stdlib.addressEq(v541, v899);
        const v904 = v902 ? true : v903;
        stdlib.assert(v904, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:122:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:122:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Player'
          });
        
        return;
        
        }
      else {
        const {data: [v609, v610], secs: v612, time: v611, didSend: v91, from: v608 } = txn4;
        ;
        const v613 = stdlib.addressEq(v541, v608);
        stdlib.assert(v613, {
          at: './index.rsh:121:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player'
          });
        const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc3, ctc0],
          timeoutAt: ['time', v620],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v541, v542, v558, v564, v565, v573, v609, v610, v620],
            evt_cnt: 0,
            funcNum: 7,
            lct: v611,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v883, time: v882, didSend: v416, from: v881 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v541,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v883, time: v882, didSend: v416, from: v881 } = txn6;
          ;
          const v884 = stdlib.addressEq(v558, v881);
          const v885 = stdlib.addressEq(v541, v881);
          const v886 = v884 ? true : v885;
          stdlib.assert(v886, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:137:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Player'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:78:29:application',
            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:137:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Player'
            });
          
          return;
          
          }
        else {
          const {data: [v633, v634], secs: v636, time: v635, didSend: v110, from: v632 } = txn5;
          ;
          const v637 = stdlib.addressEq(v558, v632);
          stdlib.assert(v637, {
            at: './index.rsh:136:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Player'
            });
          stdlib.protect(ctc1, await interact.updateCards(v634), {
            at: './index.rsh:141:27:application',
            fs: ['at ./index.rsh:140:16:application call to [unknown function] (defined at: ./index.rsh:140:20:function exp)'],
            msg: 'updateCards',
            who: 'Player'
            });
          
          const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v644;
          const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v648;
          const v650 = stdlib.safeAdd(v645, v649);
          const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
          const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
          const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
          const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v653;
          const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:150:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:152:decimal', stdlib.UInt_max, '0');
          const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:150:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:150:177:decimal', stdlib.UInt_max, '0');
          const v659 = stdlib.safeAdd(v656, v658);
          let v660 = stdlib.checkedBigNumberify('./index.rsh:150:181:decimal', stdlib.UInt_max, '0');
          let v661 = stdlib.checkedBigNumberify('./index.rsh:150:70:decimal', stdlib.UInt_max, '1');
          let v662 = v654;
          let v663 = stdlib.checkedBigNumberify('./index.rsh:150:187:decimal', stdlib.UInt_max, '0');
          let v664 = v659;
          let v665 = stdlib.checkedBigNumberify('./index.rsh:150:67:decimal', stdlib.UInt_max, '1');
          let v666 = v650;
          let v667 = stdlib.checkedBigNumberify('./index.rsh:150:184:decimal', stdlib.UInt_max, '0');
          let v668 = v635;
          let v675 = v573;
          
          let txn6 = txn5;
          while (await (async () => {
            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
            const v682 = v680 ? true : v681;
            
            return v682;})()) {
            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
            if (v683) {
              const v686 = stdlib.protect(ctc0, await interact.getAceValue(v664, v666), {
                at: './index.rsh:161:59:application',
                fs: ['at ./index.rsh:160:20:application call to [unknown function] (defined at: ./index.rsh:160:24:function exp)'],
                msg: 'getAceValue',
                who: 'Player'
                });
              
              const txn7 = await (ctc.sendrecv({
                args: [v541, v542, v558, v564, v565, v651, v660, v661, v662, v663, v664, v665, v666, v667, v675, v686],
                evt_cnt: 1,
                funcNum: 9,
                lct: v668,
                onlyIf: true,
                out_tys: [ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:165:16:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v688], secs: v690, time: v689, didSend: v165, from: v687 } = txn7;
                  
                  ;
                  const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:168:24:decimal', stdlib.UInt_max, '1'));
                  if (v692) {
                    const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:169:35:decimal', stdlib.UInt_max, '10'));
                    const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '1'));
                    const cv660 = v660;
                    const cv661 = v661;
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v694;
                    const cv665 = v665;
                    const cv666 = v693;
                    const cv667 = v667;
                    const cv668 = v689;
                    const cv675 = v675;
                    
                    await (async () => {
                      const v660 = cv660;
                      const v661 = cv661;
                      const v662 = cv662;
                      const v663 = cv663;
                      const v664 = cv664;
                      const v665 = cv665;
                      const v666 = cv666;
                      const v667 = cv667;
                      const v668 = cv668;
                      const v675 = cv675;
                      
                      if (await (async () => {
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                          const cv564 = v564;
                          const cv565 = v878;
                          const cv566 = v668;
                          const cv573 = v675;
                          
                          await (async () => {
                            const v564 = cv564;
                            const v565 = cv565;
                            const v566 = cv566;
                            const v573 = cv573;
                            
                            if (await (async () => {
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                              const v923 = stdlib.gt(v565, v564);
                              const v924 = v923 ? v541 : v558;
                              sim_r.txns.push({
                                kind: 'from',
                                to: v924,
                                tok: undefined /* Nothing */
                                });
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }})();}
                        else {
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                            const cv564 = v880;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}
                          else {
                            const cv564 = v564;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}}}})();}
                  else {
                    const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:173:28:decimal', stdlib.UInt_max, '1'));
                    const cv660 = v660;
                    const cv661 = v661;
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v695;
                    const cv665 = v665;
                    const cv666 = v666;
                    const cv667 = v667;
                    const cv668 = v689;
                    const cv675 = v675;
                    
                    await (async () => {
                      const v660 = cv660;
                      const v661 = cv661;
                      const v662 = cv662;
                      const v663 = cv663;
                      const v664 = cv664;
                      const v665 = cv665;
                      const v666 = cv666;
                      const v667 = cv667;
                      const v668 = cv668;
                      const v675 = cv675;
                      
                      if (await (async () => {
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                          const cv564 = v564;
                          const cv565 = v878;
                          const cv566 = v668;
                          const cv573 = v675;
                          
                          await (async () => {
                            const v564 = cv564;
                            const v565 = cv565;
                            const v566 = cv566;
                            const v573 = cv573;
                            
                            if (await (async () => {
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                              const v923 = stdlib.gt(v565, v564);
                              const v924 = v923 ? v541 : v558;
                              sim_r.txns.push({
                                kind: 'from',
                                to: v924,
                                tok: undefined /* Nothing */
                                });
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }})();}
                        else {
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                            const cv564 = v880;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}
                          else {
                            const cv564 = v564;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}}}})();}
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [v688], secs: v690, time: v689, didSend: v165, from: v687 } = txn7;
              ;
              const v691 = stdlib.addressEq(v541, v687);
              stdlib.assert(v691, {
                at: './index.rsh:165:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Player'
                });
              const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:168:24:decimal', stdlib.UInt_max, '1'));
              if (v692) {
                const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:169:35:decimal', stdlib.UInt_max, '10'));
                const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '1'));
                const cv660 = v660;
                const cv661 = v661;
                const cv662 = v662;
                const cv663 = v663;
                const cv664 = v694;
                const cv665 = v665;
                const cv666 = v693;
                const cv667 = v667;
                const cv668 = v689;
                const cv675 = v675;
                
                v660 = cv660;
                v661 = cv661;
                v662 = cv662;
                v663 = cv663;
                v664 = cv664;
                v665 = cv665;
                v666 = cv666;
                v667 = cv667;
                v668 = cv668;
                v675 = cv675;
                
                txn6 = txn7;
                continue;}
              else {
                const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:173:28:decimal', stdlib.UInt_max, '1'));
                const cv660 = v660;
                const cv661 = v661;
                const cv662 = v662;
                const cv663 = v663;
                const cv664 = v695;
                const cv665 = v665;
                const cv666 = v666;
                const cv667 = v667;
                const cv668 = v689;
                const cv675 = v675;
                
                v660 = cv660;
                v661 = cv661;
                v662 = cv662;
                v663 = cv663;
                v664 = cv664;
                v665 = cv665;
                v666 = cv666;
                v667 = cv667;
                v668 = cv668;
                v675 = cv675;
                
                txn6 = txn7;
                continue;}
              
              }
            else {
              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
              const v698 = v696 ? v697 : false;
              if (v698) {
                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                const v709 = stdlib.protect(ctc0, await interact.getCard(), {
                  at: './index.rsh:185:52:application',
                  fs: ['at ./index.rsh:184:20:application call to [unknown function] (defined at: ./index.rsh:184:24:function exp)'],
                  msg: 'getCard',
                  who: 'Player'
                  });
                
                const txn7 = await (ctc.sendrecv({
                  args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v666, v675, v705, v709],
                  evt_cnt: 1,
                  funcNum: 10,
                  lct: v668,
                  onlyIf: true,
                  out_tys: [ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn7) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v711], secs: v713, time: v712, didSend: v182, from: v710 } = txn7;
                    
                    ;
                    const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:198:60:decimal', stdlib.UInt_max, '1'));
                    const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:198:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:198:68:decimal', stdlib.UInt_max, '1');
                    const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                    const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                    const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                    const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v721;
                    const v723 = stdlib.safeAdd(v666, v722);
                    let v725;
                    if (v719) {
                      const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:198:131:decimal', stdlib.UInt_max, '1'));
                      v725 = v726;
                      }
                    else {
                      v725 = v664;
                      }
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:198:72:decimal', stdlib.UInt_max, '1');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v725;
                    const cv665 = v718;
                    const cv666 = v723;
                    const cv667 = stdlib.checkedBigNumberify('./index.rsh:198:106:decimal', stdlib.UInt_max, '1');
                    const cv668 = v712;
                    const cv675 = v675;
                    
                    await (async () => {
                      const v660 = cv660;
                      const v661 = cv661;
                      const v662 = cv662;
                      const v663 = cv663;
                      const v664 = cv664;
                      const v665 = cv665;
                      const v666 = cv666;
                      const v667 = cv667;
                      const v668 = cv668;
                      const v675 = cv675;
                      
                      if (await (async () => {
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:152:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:152:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:155:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:177:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:177:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
                          const cv564 = v564;
                          const cv565 = v878;
                          const cv566 = v668;
                          const cv573 = v675;
                          
                          await (async () => {
                            const v564 = cv564;
                            const v565 = cv565;
                            const v566 = cv566;
                            const v573 = cv573;
                            
                            if (await (async () => {
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                              const v923 = stdlib.gt(v565, v564);
                              const v924 = v923 ? v541 : v558;
                              sim_r.txns.push({
                                kind: 'from',
                                to: v924,
                                tok: undefined /* Nothing */
                                });
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }})();}
                        else {
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
                            const cv564 = v880;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}
                          else {
                            const cv564 = v564;
                            const cv565 = v565;
                            const cv566 = v668;
                            const cv573 = v675;
                            
                            await (async () => {
                              const v564 = cv564;
                              const v565 = cv565;
                              const v566 = cv566;
                              const v573 = cv573;
                              
                              if (await (async () => {
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:102:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:106:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
                                const v923 = stdlib.gt(v565, v564);
                                const v924 = v923 ? v541 : v558;
                                sim_r.txns.push({
                                  kind: 'from',
                                  to: v924,
                                  tok: undefined /* Nothing */
                                  });
                                sim_r.txns.push({
                                  kind: 'halt',
                                  tok: undefined /* Nothing */
                                  })
                                sim_r.isHalt = true;
                                }})();}}}})();
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v705],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn7.didTimeout) {
                  const txn8 = await (ctc.sendrecv({
                    args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v666, v675, v705],
                    evt_cnt: 0,
                    funcNum: 11,
                    lct: v668,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn8) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v729, time: v728, didSend: v216, from: v727 } = txn8;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v558,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v729, time: v728, didSend: v216, from: v727 } = txn8;
                  ;
                  const v730 = stdlib.addressEq(v558, v727);
                  const v731 = stdlib.addressEq(v541, v727);
                  const v732 = v730 ? true : v731;
                  stdlib.assert(v732, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:188:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Player'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:78:29:application',
                    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:188:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Player'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v711], secs: v713, time: v712, didSend: v182, from: v710 } = txn7;
                  ;
                  const v714 = stdlib.addressEq(v541, v710);
                  stdlib.assert(v714, {
                    at: './index.rsh:187:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Player'
                    });
                  const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:198:60:decimal', stdlib.UInt_max, '1'));
                  const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:198:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:198:68:decimal', stdlib.UInt_max, '1');
                  const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                  const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                  const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                  const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v721;
                  const v723 = stdlib.safeAdd(v666, v722);
                  let v725;
                  if (v719) {
                    const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:198:131:decimal', stdlib.UInt_max, '1'));
                    v725 = v726;
                    }
                  else {
                    v725 = v664;
                    }
                  const cv660 = v660;
                  const cv661 = stdlib.checkedBigNumberify('./index.rsh:198:72:decimal', stdlib.UInt_max, '1');
                  const cv662 = v662;
                  const cv663 = v663;
                  const cv664 = v725;
                  const cv665 = v718;
                  const cv666 = v723;
                  const cv667 = stdlib.checkedBigNumberify('./index.rsh:198:106:decimal', stdlib.UInt_max, '1');
                  const cv668 = v712;
                  const cv675 = v675;
                  
                  v660 = cv660;
                  v661 = cv661;
                  v662 = cv662;
                  v663 = cv663;
                  v664 = cv664;
                  v665 = cv665;
                  v666 = cv666;
                  v667 = cv667;
                  v668 = cv668;
                  v675 = cv675;
                  
                  txn6 = txn7;
                  continue;}
                
                }
              else {
                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:203:19:decimal', stdlib.UInt_max, '0'));
                if (v745) {
                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                  const txn7 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 12,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v752],
                    waitIfNotPresent: false
                    }));
                  if (txn7.didTimeout) {
                    const txn8 = await (ctc.sendrecv({
                      args: [v541, v542, v558, v564, v565, v651, v661, v662, v664, v665, v666, v667, v675, v752],
                      evt_cnt: 0,
                      funcNum: 13,
                      lct: v668,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn8) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v775, time: v774, didSend: v274, from: v773 } = txn8;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v541,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v775, time: v774, didSend: v274, from: v773 } = txn8;
                    ;
                    const v776 = stdlib.addressEq(v558, v773);
                    const v777 = stdlib.addressEq(v541, v773);
                    const v778 = v776 ? true : v777;
                    stdlib.assert(v778, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:211:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:78:29:application',
                      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:211:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Player'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v757], secs: v759, time: v758, didSend: v240, from: v756 } = txn7;
                    ;
                    const v760 = stdlib.addressEq(v558, v756);
                    stdlib.assert(v760, {
                      at: './index.rsh:210:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    stdlib.protect(ctc1, await interact.showLast(v757), {
                      at: './index.rsh:215:28:application',
                      fs: ['at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:24:function exp)'],
                      msg: 'showLast',
                      who: 'Player'
                      });
                    
                    const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                    const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                    const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                    const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v765;
                    const v767 = stdlib.safeAdd(v662, v766);
                    const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:220:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:81:decimal', stdlib.UInt_max, '0');
                    const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:220:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:220:106:decimal', stdlib.UInt_max, '0');
                    const v772 = stdlib.safeAdd(v769, v771);
                    const cv660 = v772;
                    const cv661 = v661;
                    const cv662 = v767;
                    const cv663 = stdlib.checkedBigNumberify('./index.rsh:220:59:decimal', stdlib.UInt_max, '1');
                    const cv664 = v664;
                    const cv665 = v665;
                    const cv666 = v666;
                    const cv667 = v667;
                    const cv668 = v758;
                    const cv675 = v675;
                    
                    v660 = cv660;
                    v661 = cv661;
                    v662 = cv662;
                    v663 = cv663;
                    v664 = cv664;
                    v665 = cv665;
                    v666 = cv666;
                    v667 = cv667;
                    v668 = cv668;
                    v675 = cv675;
                    
                    txn6 = txn7;
                    continue;}
                  
                  }
                else {
                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '0'));
                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:226:35:decimal', stdlib.UInt_max, '21'));
                  const v793 = v791 ? v792 : false;
                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:226:49:decimal', stdlib.UInt_max, '21'));
                  const v795 = v793 ? true : v794;
                  if (v795) {
                    const txn7 = await (ctc.recv({
                      didSend: false,
                      evt_cnt: 0,
                      funcNum: 14,
                      out_tys: [],
                      timeoutAt: undefined /* mto */,
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v798, time: v797, didSend: v298, from: v796 } = txn7;
                    ;
                    const v799 = stdlib.addressEq(v558, v796);
                    stdlib.assert(v799, {
                      at: './index.rsh:228:18:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:231:32:decimal', stdlib.UInt_max, '0');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v664;
                    const cv665 = stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '0');
                    const cv666 = v666;
                    const cv667 = v667;
                    const cv668 = v797;
                    const cv675 = v675;
                    
                    v660 = cv660;
                    v661 = cv661;
                    v662 = cv662;
                    v663 = cv663;
                    v664 = cv664;
                    v665 = cv665;
                    v666 = cv666;
                    v667 = cv667;
                    v668 = cv668;
                    v675 = cv675;
                    
                    txn6 = txn7;
                    continue;
                    
                    }
                  else {
                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:236:21:decimal', stdlib.UInt_max, '21'));
                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:236:35:decimal', stdlib.UInt_max, '0'));
                    const v802 = v800 ? v801 : false;
                    if (v802) {
                      const txn7 = await (ctc.recv({
                        didSend: false,
                        evt_cnt: 0,
                        funcNum: 15,
                        out_tys: [],
                        timeoutAt: undefined /* mto */,
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v805, time: v804, didSend: v306, from: v803 } = txn7;
                      ;
                      const v806 = stdlib.addressEq(v558, v803);
                      stdlib.assert(v806, {
                        at: './index.rsh:238:20:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Player'
                        });
                      const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:241:37:decimal', stdlib.UInt_max, '10'));
                      const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:241:49:decimal', stdlib.UInt_max, '1'));
                      const cv660 = v808;
                      const cv661 = v661;
                      const cv662 = v807;
                      const cv663 = v663;
                      const cv664 = v664;
                      const cv665 = v665;
                      const cv666 = v666;
                      const cv667 = v667;
                      const cv668 = v804;
                      const cv675 = v675;
                      
                      v660 = cv660;
                      v661 = cv661;
                      v662 = cv662;
                      v663 = cv663;
                      v664 = cv664;
                      v665 = cv665;
                      v666 = cv666;
                      v667 = cv667;
                      v668 = cv668;
                      v675 = cv675;
                      
                      txn6 = txn7;
                      continue;
                      
                      }
                    else {
                      const v809 = stdlib.lt(v662, v666);
                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '21'));
                      const v811 = v809 ? v810 : false;
                      if (v811) {
                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:62:18:decimal', stdlib.UInt_max, '20'));
                        const txn7 = await (ctc.recv({
                          didSend: false,
                          evt_cnt: 1,
                          funcNum: 16,
                          out_tys: [ctc0],
                          timeoutAt: ['time', v818],
                          waitIfNotPresent: false
                          }));
                        if (txn7.didTimeout) {
                          const txn8 = await (ctc.sendrecv({
                            args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v665, v666, v667, v675, v818],
                            evt_cnt: 0,
                            funcNum: 17,
                            lct: v668,
                            onlyIf: true,
                            out_tys: [],
                            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                            sim_p: (async (txn8) => {
                              const sim_r = { txns: [], mapRefs: [], maps: [] };
                              let sim_txn_ctr = stdlib.UInt_max;
                              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                              
                              
                              const {data: [], secs: v840, time: v839, didSend: v353, from: v838 } = txn8;
                              
                              ;
                              sim_r.txns.push({
                                kind: 'from',
                                to: v541,
                                tok: undefined /* Nothing */
                                });
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              
                              return sim_r;
                              }),
                            soloSend: false,
                            timeoutAt: undefined /* mto */,
                            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                            waitIfNotPresent: false
                            }));
                          const {data: [], secs: v840, time: v839, didSend: v353, from: v838 } = txn8;
                          ;
                          const v841 = stdlib.addressEq(v558, v838);
                          const v842 = stdlib.addressEq(v541, v838);
                          const v843 = v841 ? true : v842;
                          stdlib.assert(v843, {
                            at: 'reach standard library:197:11:dot',
                            fs: ['at ./index.rsh:252:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'sender correct',
                            who: 'Player'
                            });
                          ;
                          stdlib.protect(ctc1, await interact.informTimeout(), {
                            at: './index.rsh:78:29:application',
                            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:252:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'informTimeout',
                            who: 'Player'
                            });
                          
                          return;
                          
                          }
                        else {
                          const {data: [v824], secs: v826, time: v825, didSend: v321, from: v823 } = txn7;
                          ;
                          const v827 = stdlib.addressEq(v558, v823);
                          stdlib.assert(v827, {
                            at: './index.rsh:251:24:dot',
                            fs: [],
                            msg: 'sender correct',
                            who: 'Player'
                            });
                          stdlib.protect(ctc1, await interact.updateCards(v824), {
                            at: './index.rsh:256:39:application',
                            fs: ['at ./index.rsh:255:28:application call to [unknown function] (defined at: ./index.rsh:255:32:function exp)'],
                            msg: 'updateCards',
                            who: 'Player'
                            });
                          
                          const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:61:32:decimal', stdlib.UInt_max, '1'));
                          const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:61:46:decimal', stdlib.UInt_max, '10'));
                          const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:61:55:decimal', stdlib.UInt_max, '10');
                          const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:61:36:decimal', stdlib.UInt_max, '11') : v832;
                          const v834 = stdlib.safeAdd(v662, v833);
                          let v836;
                          if (v830) {
                            const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:260:119:decimal', stdlib.UInt_max, '1'));
                            v836 = v837;
                            }
                          else {
                            v836 = v660;
                            }
                          const cv660 = v836;
                          const cv661 = stdlib.checkedBigNumberify('./index.rsh:260:61:decimal', stdlib.UInt_max, '1');
                          const cv662 = v834;
                          const cv663 = v663;
                          const cv664 = v664;
                          const cv665 = v665;
                          const cv666 = v666;
                          const cv667 = v667;
                          const cv668 = v825;
                          const cv675 = v675;
                          
                          v660 = cv660;
                          v661 = cv661;
                          v662 = cv662;
                          v663 = cv663;
                          v664 = cv664;
                          v665 = cv665;
                          v666 = cv666;
                          v667 = cv667;
                          v668 = cv668;
                          v675 = cv675;
                          
                          txn6 = txn7;
                          continue;}
                        
                        }
                      else {
                        const txn7 = await (ctc.recv({
                          didSend: false,
                          evt_cnt: 0,
                          funcNum: 18,
                          out_tys: [],
                          timeoutAt: undefined /* mto */,
                          waitIfNotPresent: false
                          }));
                        const {data: [], secs: v858, time: v857, didSend: v372, from: v856 } = txn7;
                        ;
                        const v859 = stdlib.addressEq(v558, v856);
                        stdlib.assert(v859, {
                          at: './index.rsh:264:22:dot',
                          fs: [],
                          msg: 'sender correct',
                          who: 'Player'
                          });
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:267:26:decimal', stdlib.UInt_max, '0');
                        const cv662 = v662;
                        const cv663 = v663;
                        const cv664 = v664;
                        const cv665 = v665;
                        const cv666 = v666;
                        const cv667 = v667;
                        const cv668 = v857;
                        const cv675 = v675;
                        
                        v660 = cv660;
                        v661 = cv661;
                        v662 = cv662;
                        v663 = cv663;
                        v664 = cv664;
                        v665 = cv665;
                        v666 = cv666;
                        v667 = cv667;
                        v668 = cv668;
                        v675 = cv675;
                        
                        txn6 = txn7;
                        continue;
                        
                        }}}}}}}
          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '21'));
          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:27:33:decimal', stdlib.UInt_max, '22'));
          const v865 = stdlib.gt(v662, v666);
          const v866 = v864 ? v865 : false;
          const v867 = v863 ? true : v866;
          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:30:17:decimal', stdlib.UInt_max, '22'));
          const v869 = stdlib.gt(v666, v662);
          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:30:52:decimal', stdlib.UInt_max, '21'));
          const v871 = v869 ? true : v870;
          const v872 = v868 ? v871 : false;
          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
          stdlib.protect(ctc1, await interact.seeOutcome(v862, v666, v662, v565, v564), {
            at: './index.rsh:284:26:application',
            fs: ['at ./index.rsh:283:9:application call to [unknown function] (defined at: ./index.rsh:283:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Player'
            });
          
          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, '0'));
          if (v877) {
            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '1'));
            const cv564 = v564;
            const cv565 = v878;
            const cv566 = v668;
            const cv573 = v675;
            
            v564 = cv564;
            v565 = cv565;
            v566 = cv566;
            v573 = cv573;
            
            txn3 = txn6;
            continue;}
          else {
            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:292:22:decimal', stdlib.UInt_max, '1'));
            if (v879) {
              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:294:46:decimal', stdlib.UInt_max, '1'));
              const cv564 = v880;
              const cv565 = v565;
              const cv566 = v668;
              const cv573 = v675;
              
              v564 = cv564;
              v565 = cv565;
              v566 = cv566;
              v573 = cv573;
              
              txn3 = txn6;
              continue;}
            else {
              const cv564 = v564;
              const cv565 = v565;
              const cv566 = v668;
              const cv573 = v675;
              
              v564 = cv564;
              v565 = cv565;
              v566 = cv566;
              v573 = cv573;
              
              txn3 = txn6;
              continue;}}}
        
        }
      
      }
    stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
      at: './index.rsh:305:23:application',
      fs: ['at ./index.rsh:304:7:application call to [unknown function] (defined at: ./index.rsh:304:29:function exp)'],
      msg: 'seeTallys',
      who: 'Player'
      });
    
    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', stdlib.UInt_max, '2'), v542);
    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:21:20:decimal', stdlib.UInt_max, '5000000'));
    const v923 = stdlib.gt(v565, v564);
    const v924 = v923 ? v541 : v558;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_10((uint64,uint64))void`, `_reachp_11((uint64))void`, `_reachp_12((uint64,uint64))void`, `_reachp_13((uint64))void`, `_reachp_14((uint64))void`, `_reachp_15((uint64))void`, `_reachp_16((uint64,uint64))void`, `_reachp_17((uint64))void`, `_reachp_18((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,uint64,uint64))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,digest,uint64))void`, `_reachp_7((uint64))void`, `_reachp_9((uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_10((uint64,uint64))void`, `_reachp_11((uint64))void`, `_reachp_12((uint64,uint64))void`, `_reachp_13((uint64))void`, `_reachp_14((uint64))void`, `_reachp_15((uint64))void`, `_reachp_16((uint64,uint64))void`, `_reachp_17((uint64))void`, `_reachp_18((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,uint64,uint64))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,digest,uint64))void`, `_reachp_7((uint64))void`, `_reachp_9((uint64,uint64))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAiAQAKIAgLSFBxWWFpeYEBiQEVFBCRAQUDAg2ZAREHwJaxAg8TKBZYYGgmAwABAAEBMRhBCHooZEkjWzUBIQRbNQIpZCpkUIIRBBtu+VAEIRKmhQQ+j2qiBFJW/awEZ52eDwR1DuQGBIY0RmwEltawYASbCCFqBK5E8t8Ev/rwwATA3HJ1BNNJYqEE39kjKATiV8T5BOVhZ4ME6TMgpzYaAI4RB78HcgfKBycHUQepB7QHkweeB0YHZwfgB30HOwfVB4gHXAAxADUcNAsjWzUMNAshBFs1G4AErNEfwzQMFlA0GxZQsDQMiAqJNBuICpIyBiEQCDUONBw0GxZQNA4WUCEIr1AiMgY1AjUBKUsBVwB/ZypMV38iZyg0ARY0AhZQZzEZIxJEiArTNANAAAqABBUffHU0BFCwIkMxADUaIjQBEkSICqU0Cxc1DYAE1RUZFDQNFlCwNA2IChgyBjQODEQ0GyEaCEk1C4gKFSMjMgY0GzQLCDUMNR01GDUZNBghFAw0GSEUDBBBB2E0HSEVCEk1CyEQCDUPNBw0GxZQNBpQNBkWUDQYFlA0DBZQNAsWUDQPFlCBMa9QIRMyBkL/RyEFNAESRIgJ1DQLI1s1DDQLIQRbNR2ABJOl9jw0DBZQNB0WULA0DIgJiTIGNB4MRDQcMQASRDQdIhJJNQxBCU80EiIINQsiNAsiIzQdIgxNNBAkNB1JJAxNIQU0DE0IIjIGNQ41DzUQNRE1EjUVNBEiEkk1CzQVIhIRQQbHNBIjDUEG/zQcNBsWUDQaUDQZFlA0GBZQNBcWUQcIUDQWFlA0FRZQNBQWUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA0WUCQyBkL+gSEFNAESRIgJDjQLFzUMgAQQIyL/NAwWULA0DIgIzzIGNB4PRDQaMQASNBwxABIRRDQNNBqICMAxGSETEkSICTYjMgoyCYgKTEL+WCEWNAESRIgJ7DQLI1s1DDQLIQRbNR2ABMOqkME0DBZQNB0WULA0DIgIeDIGNB4MRDQaMQASRDQdIhI1CyMiNAtNIyI0F00INBQkNB1JJAxNIQU0C00IIjIGNQ41EzUUNRZC/vkhFjQBEkSICYg0Cxc1DIAE+HT3bjQMFlCwNAyICCAyBjQeD0Q0GjEAEjQcMQASEUQ0DTQciAgRQv9OIRs0ARJESVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUWSSEKWzUUSSELWzUTSSEIWzUSSSEMWzUQSSENWzUPIQ5bNQ00Cxc1DIAEZ92qFzQMFlCwNAyIB5w0GjEAEkQjIzIGNQ41ETUVQv5EIRE0ARJESVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUWSSEKWzUVSSELWzUUSSEIWzUTSSEMWzUSSSENWzURSSEOWzUQSSESWzUPIRdbNQ00Cxc1DIAE0scRyjQMFlCwNAyIBxU0GjEAEkQ0FiIJNBQkCTIGNQ41FDUWQv23IRg0ARJEiAfsNAsjWzUMNAshBFs1HYAEwoNtozQMFlA0HRZQsDQMiAbSMgY0HgxENBoxABJENB0iEkk1DEEEITQWIgg1CzQLIjQUJDQdSSQMTSEFNAxNCDIGNQ41FDUVNRZC/VIhGDQBEkSIB4c0Cxc1DIAEWZVlmjQMFlCwNAyIBnkyBjQeD0Q0GjEAEjQcMQASEUQ0DTQciAZqQv2nIRw0ARJESVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUWSSEKWzUUSSELWzUTSSEIWzUSSSEMWzURSSENWzUQSSEOWzUPIRJbNQ00Cxc1DIAEO006uDQMFlCwNAyIBe80GjEAEkQjMgY1DjUVQvyaIjQBEkSIBk80Cxc1DIAEl073FzQMFlCwNAyIBcIyBjQOD0Q0GzQciAW/Qvz8IRM0ARJEiAZzNA0jWzUONA0hBFs1IDQNIRFbNR+ABBIIgdw0DhZQNCAWUDQfFlCwNA6IBX0yBkk0Cw9ENA8MRDQcMQASRDIGIRAINR00HDQbFlA0GlA0GRZQNBgWUDQMFlA0IBZQNB8WUDQdFlCBKa9QIRkyBkL6zSETNAESRIgF+jQNFzUOgASBqprPNA4WULA0DogFGzIGNA8PRDQaMQASNBwxABIRRDQMNBqIBQxC/EkhGTQBEkSIBYs0CyNbNRc0CyEdWzUegASPB7JJNBcWUDQLVwggUDQeFlCwNBeIBM8yBjQdDEQ0GjEAEkQ0ICISNR00HyISNQs0HiISNRcjIiQ0HkkkDE0hBTQXTSMjIjQdTSMiNAtNCCIkNCBJJAxNIQU0HU0kNB9JJAxNIQU0C00IIzIGNAw1DTUONQ81EDURNRI1EzUUNRU1FkL7HCEZNAESRIgE7TQLFzUNgARxqLGjNA0WULA0DYgEQzIGNB0PRDQaMQASNBwxABIRRDQMNByIBDRC+3EkNAESRElXACA1HEklWzUbSVcoIDUaSSEGWzUZSSEHWzUYSVdYARc1F0khCVs1FkkhCls1FUkhC1s1FEkhCFs1E0khDFs1EkkhDVs1EUkhDls1EEkhEls1DyEXWzUNNAsjWzUMNAshBFs1HYAEqdlNPTQMFlA0HRZQsDQMiAOoNBwxABJENB0iEkEBBzQSIgk0ECQJMgY1DjUQNRJC+kOIA4GBoI0GNAYINQY2GgE1C0L4xogDbTYaATULQvkwiANiNhoBNQtC+auIA1c2GgE1C0L6ZogDTDYaATULQvqmiANBNhoBNQtC+v+IAzY2GgE1C0L7LogDKzYaATULQvueiAMgNhoBNQtC/CCIAxU2GgE1C0L8eogDCjYaATULQvypiAL/NhoBNQtC/RyIAvQ2GgE1DUL9PogC6TYaATUNQv2siALeNhoBNQtC/duIAtM2GgE1C0L+bogCyDYaATULQv6dIzE0EkQhFDE1EkQjMTYSRCMxNxJEiAKogaEBryMjQvg3MRkjEkRC+FY0FjULQvveNBIiCTIGNQ41EkL5QiEVNBsLIRoINBo0HDQYNBkNTYgCfEL5uSEVIzQQIR4MNBA0FA00FCEPDREQTSI0ECEPDTQUIR4MNBQ0EA0QEU1JNQtAAe40GCIINA40DTUMNR01GEL4OjQLNBAhDwwQQQBGNA4hEAg1HjQcNBsWUDQaUDQZFlA0GBZQNBcWUQcIUDQWFlA0FBZQNBMWUDQSFlA0EBZQNA0WUDQeFlAhEa9QIQUyBkL3czQTQABKNA4hEAg1HjQcNBsWUDQaUDQZFlA0GBZQNBcWUQcIUDQVFlA0FBZQNBIWUDQRFlA0EBZQNA8WUDQNFlA0HhZQIQSvUCEWMgZC9yQ0DyMSNBAhDxIQNBAhDw0RQQA/NBw0GxZQNBpQNBkWUDQYFlA0FxZRBwhQNBYWUDQUFlA0ExZQNBIWUDQQFlA0DxZQNA0WUCERr1AhGzIGQvbSNBQhDw00FiMNEEEAQzQcNBsWUDQaUDQZFlA0GBZQNBcWUQcIUDQWFlA0FRZQNBQWUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA0WUCERMgZC9oI0FDQQDDQUIQ8MEEEASjQOIRAINR40HDQbFlA0GlA0GRZQNBgWUDQXFlEHCFA0FhZQNBQWUDQTFlA0EhZQNBEWUDQQFlA0DxZQNA0WUDQeFlAhGDIGQvYqNBw0GxZQNBpQNBkWUDQYFlA0FxZRBwhQNBYWUDQUFlA0ExZQNBIWUDQRFlA0EBZQNA8WUDQNFlAhBK9QIRwyBkL15zQLIhJBABE0GSIINA40DTUMNR01GUL2RTQONA01DDUdQvY6I7IBIrIQsgeyCLOJNBI1C0L2sEiJTAlJNQYyCYgAG4kJSUH/7kk1BogAE4kiNQOJSSMSTDQCEhFEibFC/8IxFjQAIghJNQAJRwI4BzIKEkQ4ECISRDgIEkSJSVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUWSSEKWzUUSSELWzUTSSEIWzUSSSEMWzUQSSENWzUNIQ5bNR6JSVcAIDUcSSVbNRshHVs1Dok0BjQHSg9B/1NC/1tJVwAgNRxJJVs1G0lXKCA1GkkhBls1GUkhB1s1GEkhH1s1DEkhIFs1IEkhIVs1H4FwWzUdiUlXACA1HEklWzUbSVcoIDUaSSEGWzUZSSEHWzUYSSEfWzUMSSEgWzULISFbNQ+JSVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUWSSEKWzUUSSELWzUTSSEIWzUSSSEMWzURSSENWzUQSSEOWzUPSSESWzUNIRdbNR6JSVcAIDUcSSVbNRtJVyggNRpJIQZbNRlJIQdbNRhJV1gBFzUXSSEJWzUVSSEKWzUUSSELWzUSSSEIWzURSSEMWzUQSSENWzUPSSEOWzUNIRJbNR6JsbIJQv4j`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `554`,
    1001: `554`,
    1002: `555`,
    1003: `555`,
    1004: `555`,
    1005: `557`,
    1006: `557`,
    1007: `558`,
    1008: `558`,
    1009: `559`,
    101: `21`,
    1010: `560`,
    1011: `562`,
    1012: `563`,
    1013: `563`,
    1014: `563`,
    1015: `564`,
    1016: `564`,
    1017: `565`,
    1018: `566`,
    1019: `567`,
    102: `21`,
    1020: `568`,
    1021: `568`,
    1022: `569`,
    1023: `570`,
    1024: `570`,
    1025: `570`,
    1026: `571`,
    1027: `571`,
    1028: `572`,
    1029: `573`,
    103: `21`,
    1030: `573`,
    1031: `574`,
    1032: `575`,
    1033: `575`,
    1034: `576`,
    1035: `577`,
    1036: `577`,
    1037: `578`,
    1038: `579`,
    1039: `579`,
    104: `21`,
    1040: `580`,
    1041: `581`,
    1042: `581`,
    1043: `581`,
    1044: `582`,
    1045: `583`,
    1046: `583`,
    1047: `584`,
    1048: `585`,
    1049: `585`,
    105: `21`,
    1050: `586`,
    1051: `587`,
    1052: `587`,
    1053: `588`,
    1054: `589`,
    1055: `589`,
    1056: `590`,
    1057: `591`,
    1058: `591`,
    1059: `592`,
    106: `21`,
    1060: `593`,
    1061: `593`,
    1062: `594`,
    1063: `595`,
    1064: `595`,
    1065: `596`,
    1066: `597`,
    1067: `597`,
    1068: `598`,
    1069: `599`,
    107: `21`,
    1070: `599`,
    1071: `600`,
    1072: `601`,
    1073: `601`,
    1074: `602`,
    1075: `603`,
    1076: `603`,
    1077: `604`,
    1078: `605`,
    1079: `605`,
    108: `21`,
    1080: `606`,
    1081: `607`,
    1082: `607`,
    1083: `608`,
    1084: `609`,
    1085: `609`,
    1086: `610`,
    1087: `611`,
    1088: `611`,
    1089: `612`,
    109: `21`,
    1090: `613`,
    1091: `613`,
    1092: `614`,
    1093: `615`,
    1094: `615`,
    1095: `616`,
    1096: `616`,
    1097: `617`,
    1098: `618`,
    1099: `618`,
    11: `2`,
    110: `21`,
    1100: `619`,
    1101: `619`,
    1102: `620`,
    1103: `621`,
    1104: `621`,
    1105: `622`,
    1106: `622`,
    1107: `622`,
    1108: `622`,
    1109: `622`,
    111: `21`,
    1110: `622`,
    1111: `623`,
    1112: `623`,
    1113: `624`,
    1114: `625`,
    1115: `626`,
    1116: `628`,
    1117: `628`,
    1118: `629`,
    1119: `629`,
    112: `21`,
    1120: `629`,
    1121: `630`,
    1122: `630`,
    1123: `631`,
    1124: `631`,
    1125: `632`,
    1126: `633`,
    1127: `636`,
    1128: `636`,
    1129: `637`,
    113: `21`,
    1130: `638`,
    1131: `639`,
    1132: `639`,
    1133: `640`,
    1134: `641`,
    1135: `642`,
    1136: `642`,
    1137: `643`,
    1138: `643`,
    1139: `644`,
    114: `21`,
    1140: `644`,
    1141: `645`,
    1142: `645`,
    1143: `646`,
    1144: `646`,
    1145: `646`,
    1146: `648`,
    1147: `648`,
    1148: `649`,
    1149: `649`,
    115: `21`,
    1150: `650`,
    1151: `651`,
    1152: `652`,
    1153: `652`,
    1154: `652`,
    1155: `653`,
    1156: `653`,
    1157: `654`,
    1158: `655`,
    1159: `656`,
    116: `21`,
    1160: `656`,
    1161: `657`,
    1162: `657`,
    1163: `658`,
    1164: `658`,
    1165: `659`,
    1166: `660`,
    1167: `660`,
    1168: `661`,
    1169: `661`,
    117: `21`,
    1170: `661`,
    1171: `661`,
    1172: `661`,
    1173: `661`,
    1174: `662`,
    1175: `662`,
    1176: `663`,
    1177: `664`,
    1178: `665`,
    1179: `665`,
    118: `21`,
    1180: `666`,
    1181: `667`,
    1182: `668`,
    1183: `670`,
    1184: `670`,
    1185: `671`,
    1186: `671`,
    1187: `671`,
    1188: `672`,
    1189: `672`,
    119: `21`,
    1190: `673`,
    1191: `673`,
    1192: `674`,
    1193: `675`,
    1194: `676`,
    1195: `676`,
    1196: `677`,
    1197: `677`,
    1198: `678`,
    1199: `679`,
    12: `2`,
    120: `21`,
    1200: `682`,
    1201: `682`,
    1202: `683`,
    1203: `684`,
    1204: `685`,
    1205: `686`,
    1206: `686`,
    1207: `687`,
    1208: `687`,
    1209: `687`,
    121: `21`,
    1210: `688`,
    1211: `688`,
    1212: `689`,
    1213: `690`,
    1214: `691`,
    1215: `691`,
    1216: `693`,
    1217: `693`,
    1218: `694`,
    1219: `695`,
    122: `21`,
    1220: `695`,
    1221: `696`,
    1222: `697`,
    1223: `697`,
    1224: `698`,
    1225: `699`,
    1226: `700`,
    1227: `701`,
    1228: `702`,
    1229: `702`,
    123: `21`,
    1230: `703`,
    1231: `703`,
    1232: `704`,
    1233: `705`,
    1234: `706`,
    1235: `706`,
    1236: `707`,
    1237: `707`,
    1238: `708`,
    1239: `708`,
    124: `21`,
    1240: `709`,
    1241: `709`,
    1242: `710`,
    1243: `710`,
    1244: `711`,
    1245: `711`,
    1246: `711`,
    1247: `713`,
    1248: `713`,
    1249: `714`,
    125: `21`,
    1250: `714`,
    1251: `715`,
    1252: `716`,
    1253: `717`,
    1254: `717`,
    1255: `717`,
    1256: `718`,
    1257: `718`,
    1258: `719`,
    1259: `720`,
    126: `21`,
    1260: `720`,
    1261: `721`,
    1262: `721`,
    1263: `721`,
    1264: `721`,
    1265: `721`,
    1266: `721`,
    1267: `722`,
    1268: `722`,
    1269: `723`,
    127: `21`,
    1270: `724`,
    1271: `725`,
    1272: `727`,
    1273: `727`,
    1274: `728`,
    1275: `728`,
    1276: `728`,
    1277: `729`,
    1278: `729`,
    1279: `730`,
    128: `21`,
    1280: `730`,
    1281: `731`,
    1282: `732`,
    1283: `733`,
    1284: `733`,
    1285: `734`,
    1286: `734`,
    1287: `735`,
    1288: `736`,
    1289: `736`,
    129: `21`,
    1290: `737`,
    1291: `737`,
    1292: `738`,
    1293: `739`,
    1294: `740`,
    1295: `744`,
    1296: `744`,
    1297: `746`,
    1298: `746`,
    1299: `747`,
    13: `2`,
    130: `21`,
    1300: `747`,
    1301: `747`,
    1302: `748`,
    1303: `748`,
    1304: `748`,
    1305: `750`,
    1306: `750`,
    1307: `751`,
    1308: `751`,
    1309: `752`,
    131: `21`,
    1310: `753`,
    1311: `755`,
    1312: `756`,
    1313: `756`,
    1314: `756`,
    1315: `757`,
    1316: `757`,
    1317: `758`,
    1318: `759`,
    1319: `760`,
    132: `21`,
    1320: `761`,
    1321: `761`,
    1322: `762`,
    1323: `763`,
    1324: `763`,
    1325: `763`,
    1326: `764`,
    1327: `764`,
    1328: `765`,
    1329: `766`,
    133: `21`,
    1330: `766`,
    1331: `767`,
    1332: `768`,
    1333: `768`,
    1334: `769`,
    1335: `770`,
    1336: `770`,
    1337: `771`,
    1338: `772`,
    1339: `772`,
    134: `21`,
    1340: `773`,
    1341: `774`,
    1342: `774`,
    1343: `774`,
    1344: `775`,
    1345: `776`,
    1346: `776`,
    1347: `777`,
    1348: `778`,
    1349: `778`,
    135: `21`,
    1350: `779`,
    1351: `780`,
    1352: `780`,
    1353: `781`,
    1354: `782`,
    1355: `782`,
    1356: `783`,
    1357: `784`,
    1358: `784`,
    1359: `785`,
    136: `21`,
    1360: `786`,
    1361: `786`,
    1362: `787`,
    1363: `788`,
    1364: `788`,
    1365: `789`,
    1366: `790`,
    1367: `790`,
    1368: `791`,
    1369: `792`,
    137: `21`,
    1370: `792`,
    1371: `793`,
    1372: `794`,
    1373: `794`,
    1374: `795`,
    1375: `796`,
    1376: `796`,
    1377: `797`,
    1378: `798`,
    1379: `798`,
    138: `21`,
    1380: `799`,
    1381: `800`,
    1382: `800`,
    1383: `801`,
    1384: `802`,
    1385: `802`,
    1386: `803`,
    1387: `804`,
    1388: `804`,
    1389: `805`,
    139: `21`,
    1390: `805`,
    1391: `806`,
    1392: `807`,
    1393: `807`,
    1394: `808`,
    1395: `808`,
    1396: `809`,
    1397: `810`,
    1398: `810`,
    1399: `811`,
    14: `2`,
    140: `21`,
    1400: `811`,
    1401: `811`,
    1402: `811`,
    1403: `811`,
    1404: `811`,
    1405: `812`,
    1406: `812`,
    1407: `813`,
    1408: `814`,
    1409: `815`,
    141: `21`,
    1410: `817`,
    1411: `817`,
    1412: `818`,
    1413: `818`,
    1414: `818`,
    1415: `819`,
    1416: `819`,
    1417: `820`,
    1418: `820`,
    1419: `821`,
    142: `21`,
    1420: `822`,
    1421: `825`,
    1422: `826`,
    1423: `826`,
    1424: `827`,
    1425: `827`,
    1426: `828`,
    1427: `828`,
    1428: `829`,
    1429: `829`,
    143: `21`,
    1430: `829`,
    1431: `831`,
    1432: `832`,
    1433: `832`,
    1434: `833`,
    1435: `834`,
    1436: `835`,
    1437: `835`,
    1438: `835`,
    1439: `836`,
    144: `21`,
    1440: `836`,
    1441: `837`,
    1442: `838`,
    1443: `838`,
    1444: `839`,
    1445: `839`,
    1446: `839`,
    1447: `839`,
    1448: `839`,
    1449: `839`,
    145: `21`,
    1450: `840`,
    1451: `840`,
    1452: `841`,
    1453: `842`,
    1454: `843`,
    1455: `845`,
    1456: `845`,
    1457: `846`,
    1458: `846`,
    1459: `846`,
    146: `21`,
    1460: `847`,
    1461: `847`,
    1462: `848`,
    1463: `848`,
    1464: `849`,
    1465: `850`,
    1466: `851`,
    1467: `851`,
    1468: `853`,
    1469: `853`,
    147: `21`,
    1470: `854`,
    1471: `854`,
    1472: `854`,
    1473: `855`,
    1474: `855`,
    1475: `855`,
    1476: `857`,
    1477: `857`,
    1478: `858`,
    1479: `858`,
    148: `21`,
    1480: `859`,
    1481: `860`,
    1482: `861`,
    1483: `861`,
    1484: `861`,
    1485: `862`,
    1486: `862`,
    1487: `863`,
    1488: `864`,
    1489: `865`,
    149: `21`,
    1490: `865`,
    1491: `866`,
    1492: `866`,
    1493: `867`,
    1494: `867`,
    1495: `868`,
    1496: `869`,
    1497: `869`,
    1498: `870`,
    1499: `870`,
    15: `2`,
    150: `21`,
    1500: `871`,
    1501: `871`,
    1502: `872`,
    1503: `873`,
    1504: `873`,
    1505: `874`,
    1506: `874`,
    1507: `874`,
    1508: `874`,
    1509: `874`,
    151: `21`,
    1510: `874`,
    1511: `875`,
    1512: `875`,
    1513: `876`,
    1514: `877`,
    1515: `878`,
    1516: `878`,
    1517: `879`,
    1518: `880`,
    1519: `881`,
    152: `21`,
    1520: `881`,
    1521: `882`,
    1522: `883`,
    1523: `884`,
    1524: `886`,
    1525: `886`,
    1526: `887`,
    1527: `887`,
    1528: `887`,
    1529: `888`,
    153: `21`,
    1530: `888`,
    1531: `889`,
    1532: `890`,
    1533: `890`,
    1534: `891`,
    1535: `892`,
    1536: `893`,
    1537: `893`,
    1538: `894`,
    1539: `895`,
    154: `21`,
    1540: `896`,
    1541: `896`,
    1542: `897`,
    1543: `897`,
    1544: `898`,
    1545: `899`,
    1546: `902`,
    1547: `902`,
    1548: `903`,
    1549: `903`,
    155: `21`,
    1550: `904`,
    1551: `905`,
    1552: `905`,
    1553: `907`,
    1554: `907`,
    1555: `908`,
    1556: `908`,
    1557: `909`,
    1558: `910`,
    1559: `911`,
    156: `21`,
    1560: `911`,
    1561: `912`,
    1562: `913`,
    1563: `913`,
    1564: `914`,
    1565: `915`,
    1566: `916`,
    1567: `916`,
    1568: `917`,
    1569: `918`,
    157: `21`,
    1570: `919`,
    1571: `919`,
    1572: `920`,
    1573: `921`,
    1574: `922`,
    1575: `922`,
    1576: `923`,
    1577: `924`,
    1578: `925`,
    1579: `925`,
    158: `21`,
    1580: `926`,
    1581: `927`,
    1582: `928`,
    1583: `928`,
    1584: `929`,
    1585: `930`,
    1586: `931`,
    1587: `931`,
    1588: `932`,
    1589: `933`,
    159: `21`,
    1590: `934`,
    1591: `934`,
    1592: `935`,
    1593: `935`,
    1594: `936`,
    1595: `936`,
    1596: `936`,
    1597: `938`,
    1598: `938`,
    1599: `939`,
    16: `2`,
    160: `22`,
    1600: `939`,
    1601: `940`,
    1602: `941`,
    1603: `942`,
    1604: `942`,
    1605: `942`,
    1606: `943`,
    1607: `943`,
    1608: `944`,
    1609: `945`,
    161: `22`,
    1610: `945`,
    1611: `946`,
    1612: `946`,
    1613: `946`,
    1614: `946`,
    1615: `946`,
    1616: `946`,
    1617: `947`,
    1618: `947`,
    1619: `948`,
    162: `22`,
    1620: `949`,
    1621: `950`,
    1622: `952`,
    1623: `952`,
    1624: `953`,
    1625: `953`,
    1626: `953`,
    1627: `954`,
    1628: `954`,
    1629: `955`,
    163: `23`,
    1630: `955`,
    1631: `956`,
    1632: `957`,
    1633: `958`,
    1634: `958`,
    1635: `959`,
    1636: `959`,
    1637: `960`,
    1638: `961`,
    1639: `961`,
    164: `23`,
    1640: `962`,
    1641: `962`,
    1642: `963`,
    1643: `964`,
    1644: `965`,
    1645: `969`,
    1646: `969`,
    1647: `971`,
    1648: `971`,
    1649: `972`,
    165: `23`,
    1650: `972`,
    1651: `972`,
    1652: `973`,
    1653: `973`,
    1654: `973`,
    1655: `975`,
    1656: `975`,
    1657: `976`,
    1658: `976`,
    1659: `977`,
    166: `23`,
    1660: `978`,
    1661: `979`,
    1662: `979`,
    1663: `979`,
    1664: `980`,
    1665: `980`,
    1666: `981`,
    1667: `982`,
    1668: `983`,
    1669: `983`,
    167: `23`,
    1670: `984`,
    1671: `984`,
    1672: `985`,
    1673: `985`,
    1674: `986`,
    1675: `987`,
    1676: `987`,
    1677: `988`,
    1678: `988`,
    1679: `988`,
    168: `23`,
    1680: `988`,
    1681: `988`,
    1682: `988`,
    1683: `989`,
    1684: `989`,
    1685: `990`,
    1686: `991`,
    1687: `992`,
    1688: `992`,
    1689: `993`,
    169: `23`,
    1690: `993`,
    1691: `993`,
    1692: `994`,
    1693: `995`,
    1694: `995`,
    1695: `996`,
    1696: `997`,
    1697: `998`,
    1698: `1000`,
    1699: `1000`,
    17: `2`,
    170: `23`,
    1700: `1001`,
    1701: `1001`,
    1702: `1001`,
    1703: `1002`,
    1704: `1002`,
    1705: `1003`,
    1706: `1003`,
    1707: `1004`,
    1708: `1005`,
    1709: `1006`,
    171: `23`,
    1710: `1006`,
    1711: `1007`,
    1712: `1007`,
    1713: `1008`,
    1714: `1009`,
    1715: `1012`,
    1716: `1012`,
    1717: `1013`,
    1718: `1014`,
    1719: `1015`,
    172: `23`,
    1720: `1015`,
    1721: `1016`,
    1722: `1016`,
    1723: `1017`,
    1724: `1018`,
    1725: `1019`,
    1726: `1019`,
    1727: `1020`,
    1728: `1020`,
    1729: `1021`,
    173: `23`,
    1730: `1022`,
    1731: `1023`,
    1732: `1023`,
    1733: `1024`,
    1734: `1025`,
    1735: `1026`,
    1736: `1027`,
    1737: `1027`,
    1738: `1028`,
    1739: `1029`,
    174: `23`,
    1740: `1030`,
    1741: `1031`,
    1742: `1032`,
    1743: `1032`,
    1744: `1033`,
    1745: `1033`,
    1746: `1034`,
    1747: `1035`,
    1748: `1036`,
    1749: `1037`,
    175: `23`,
    1750: `1038`,
    1751: `1038`,
    1752: `1039`,
    1753: `1040`,
    1754: `1041`,
    1755: `1042`,
    1756: `1042`,
    1757: `1043`,
    1758: `1044`,
    1759: `1045`,
    176: `23`,
    1760: `1046`,
    1761: `1047`,
    1762: `1047`,
    1763: `1048`,
    1764: `1049`,
    1765: `1050`,
    1766: `1051`,
    1767: `1052`,
    1768: `1052`,
    1769: `1053`,
    177: `23`,
    1770: `1053`,
    1771: `1054`,
    1772: `1055`,
    1773: `1056`,
    1774: `1056`,
    1775: `1057`,
    1776: `1058`,
    1777: `1059`,
    1778: `1060`,
    1779: `1061`,
    178: `23`,
    1780: `1061`,
    1781: `1062`,
    1782: `1062`,
    1783: `1063`,
    1784: `1064`,
    1785: `1065`,
    1786: `1066`,
    1787: `1066`,
    1788: `1067`,
    1789: `1067`,
    179: `23`,
    1790: `1068`,
    1791: `1068`,
    1792: `1069`,
    1793: `1069`,
    1794: `1070`,
    1795: `1070`,
    1796: `1071`,
    1797: `1071`,
    1798: `1072`,
    1799: `1072`,
    18: `2`,
    180: `23`,
    1800: `1073`,
    1801: `1073`,
    1802: `1074`,
    1803: `1074`,
    1804: `1075`,
    1805: `1075`,
    1806: `1076`,
    1807: `1076`,
    1808: `1077`,
    1809: `1077`,
    181: `23`,
    1810: `1078`,
    1811: `1078`,
    1812: `1078`,
    1813: `1080`,
    1814: `1080`,
    1815: `1081`,
    1816: `1081`,
    1817: `1082`,
    1818: `1083`,
    1819: `1084`,
    182: `23`,
    1820: `1084`,
    1821: `1084`,
    1822: `1085`,
    1823: `1085`,
    1824: `1086`,
    1825: `1087`,
    1826: `1087`,
    1827: `1088`,
    1828: `1088`,
    1829: `1088`,
    183: `23`,
    1830: `1088`,
    1831: `1088`,
    1832: `1088`,
    1833: `1089`,
    1834: `1089`,
    1835: `1090`,
    1836: `1091`,
    1837: `1092`,
    1838: `1094`,
    1839: `1094`,
    184: `23`,
    1840: `1095`,
    1841: `1095`,
    1842: `1095`,
    1843: `1096`,
    1844: `1096`,
    1845: `1097`,
    1846: `1097`,
    1847: `1098`,
    1848: `1099`,
    1849: `1100`,
    185: `23`,
    1850: `1100`,
    1851: `1101`,
    1852: `1101`,
    1853: `1102`,
    1854: `1103`,
    1855: `1103`,
    1856: `1104`,
    1857: `1104`,
    1858: `1105`,
    1859: `1106`,
    186: `23`,
    1860: `1107`,
    1861: `1111`,
    1862: `1111`,
    1863: `1113`,
    1864: `1113`,
    1865: `1114`,
    1866: `1114`,
    1867: `1114`,
    1868: `1115`,
    1869: `1115`,
    187: `23`,
    1870: `1115`,
    1871: `1117`,
    1872: `1118`,
    1873: `1118`,
    1874: `1119`,
    1875: `1120`,
    1876: `1122`,
    1877: `1123`,
    1878: `1123`,
    1879: `1123`,
    188: `23`,
    1880: `1124`,
    1881: `1124`,
    1882: `1125`,
    1883: `1126`,
    1884: `1127`,
    1885: `1128`,
    1886: `1128`,
    1887: `1129`,
    1888: `1130`,
    1889: `1130`,
    189: `23`,
    1890: `1130`,
    1891: `1131`,
    1892: `1131`,
    1893: `1132`,
    1894: `1133`,
    1895: `1133`,
    1896: `1134`,
    1897: `1135`,
    1898: `1135`,
    1899: `1136`,
    19: `2`,
    190: `23`,
    1900: `1137`,
    1901: `1137`,
    1902: `1138`,
    1903: `1139`,
    1904: `1139`,
    1905: `1140`,
    1906: `1141`,
    1907: `1141`,
    1908: `1141`,
    1909: `1142`,
    191: `23`,
    1910: `1143`,
    1911: `1143`,
    1912: `1144`,
    1913: `1145`,
    1914: `1145`,
    1915: `1146`,
    1916: `1147`,
    1917: `1147`,
    1918: `1148`,
    1919: `1149`,
    192: `23`,
    1920: `1149`,
    1921: `1150`,
    1922: `1151`,
    1923: `1151`,
    1924: `1152`,
    1925: `1153`,
    1926: `1153`,
    1927: `1154`,
    1928: `1155`,
    1929: `1155`,
    193: `23`,
    1930: `1156`,
    1931: `1157`,
    1932: `1157`,
    1933: `1158`,
    1934: `1159`,
    1935: `1159`,
    1936: `1160`,
    1937: `1161`,
    1938: `1161`,
    1939: `1162`,
    194: `23`,
    1940: `1163`,
    1941: `1163`,
    1942: `1164`,
    1943: `1165`,
    1944: `1165`,
    1945: `1166`,
    1946: `1167`,
    1947: `1167`,
    1948: `1168`,
    1949: `1169`,
    195: `23`,
    1950: `1169`,
    1951: `1170`,
    1952: `1171`,
    1953: `1171`,
    1954: `1172`,
    1955: `1173`,
    1956: `1173`,
    1957: `1174`,
    1958: `1175`,
    1959: `1175`,
    196: `23`,
    1960: `1176`,
    1961: `1176`,
    1962: `1177`,
    1963: `1178`,
    1964: `1178`,
    1965: `1179`,
    1966: `1179`,
    1967: `1180`,
    1968: `1181`,
    1969: `1182`,
    197: `23`,
    1970: `1182`,
    1971: `1183`,
    1972: `1183`,
    1973: `1184`,
    1974: `1184`,
    1975: `1185`,
    1976: `1186`,
    1977: `1186`,
    1978: `1187`,
    1979: `1187`,
    198: `23`,
    1980: `1187`,
    1981: `1187`,
    1982: `1187`,
    1983: `1187`,
    1984: `1188`,
    1985: `1188`,
    1986: `1189`,
    1987: `1190`,
    1988: `1191`,
    1989: `1191`,
    199: `25`,
    1990: `1192`,
    1991: `1193`,
    1992: `1194`,
    1993: `1196`,
    1994: `1196`,
    1995: `1197`,
    1996: `1197`,
    1997: `1197`,
    1998: `1198`,
    1999: `1198`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1199`,
    2001: `1199`,
    2002: `1200`,
    2003: `1201`,
    2004: `1204`,
    2005: `1204`,
    2006: `1205`,
    2007: `1206`,
    2008: `1207`,
    2009: `1207`,
    201: `27`,
    2010: `1207`,
    2011: `1208`,
    2012: `1208`,
    2013: `1209`,
    2014: `1210`,
    2015: `1211`,
    2016: `1211`,
    2017: `1212`,
    2018: `1213`,
    2019: `1214`,
    202: `28`,
    2020: `1214`,
    2021: `1215`,
    2022: `1215`,
    2023: `1216`,
    2024: `1216`,
    2025: `1217`,
    2026: `1217`,
    2027: `1218`,
    2028: `1218`,
    2029: `1218`,
    203: `28`,
    2030: `1220`,
    2031: `1220`,
    2032: `1220`,
    2033: `1221`,
    2034: `1221`,
    2035: `1221`,
    2036: `1221`,
    2037: `1223`,
    2038: `1223`,
    2039: `1224`,
    204: `29`,
    2040: `1225`,
    2041: `1225`,
    2042: `1226`,
    2043: `1226`,
    2044: `1226`,
    2045: `1227`,
    2046: `1227`,
    2047: `1228`,
    2048: `1228`,
    2049: `1228`,
    205: `29`,
    2050: `1230`,
    2051: `1230`,
    2052: `1230`,
    2053: `1231`,
    2054: `1231`,
    2055: `1231`,
    2056: `1232`,
    2057: `1232`,
    2058: `1233`,
    2059: `1233`,
    206: `30`,
    2060: `1233`,
    2061: `1235`,
    2062: `1235`,
    2063: `1235`,
    2064: `1236`,
    2065: `1236`,
    2066: `1236`,
    2067: `1237`,
    2068: `1237`,
    2069: `1238`,
    207: `31`,
    2070: `1238`,
    2071: `1238`,
    2072: `1240`,
    2073: `1240`,
    2074: `1240`,
    2075: `1241`,
    2076: `1241`,
    2077: `1241`,
    2078: `1242`,
    2079: `1242`,
    208: `32`,
    2080: `1243`,
    2081: `1243`,
    2082: `1243`,
    2083: `1245`,
    2084: `1245`,
    2085: `1245`,
    2086: `1246`,
    2087: `1246`,
    2088: `1246`,
    2089: `1247`,
    209: `32`,
    2090: `1247`,
    2091: `1248`,
    2092: `1248`,
    2093: `1248`,
    2094: `1250`,
    2095: `1250`,
    2096: `1250`,
    2097: `1251`,
    2098: `1251`,
    2099: `1251`,
    21: `2`,
    210: `33`,
    2100: `1252`,
    2101: `1252`,
    2102: `1253`,
    2103: `1253`,
    2104: `1253`,
    2105: `1255`,
    2106: `1255`,
    2107: `1255`,
    2108: `1256`,
    2109: `1256`,
    211: `33`,
    2110: `1256`,
    2111: `1257`,
    2112: `1257`,
    2113: `1258`,
    2114: `1258`,
    2115: `1258`,
    2116: `1260`,
    2117: `1260`,
    2118: `1260`,
    2119: `1261`,
    212: `34`,
    2120: `1261`,
    2121: `1261`,
    2122: `1262`,
    2123: `1262`,
    2124: `1263`,
    2125: `1263`,
    2126: `1263`,
    2127: `1265`,
    2128: `1265`,
    2129: `1265`,
    213: `34`,
    2130: `1266`,
    2131: `1266`,
    2132: `1266`,
    2133: `1267`,
    2134: `1267`,
    2135: `1268`,
    2136: `1268`,
    2137: `1268`,
    2138: `1270`,
    2139: `1270`,
    214: `35`,
    2140: `1270`,
    2141: `1271`,
    2142: `1271`,
    2143: `1271`,
    2144: `1272`,
    2145: `1272`,
    2146: `1273`,
    2147: `1273`,
    2148: `1273`,
    2149: `1275`,
    215: `36`,
    2150: `1275`,
    2151: `1275`,
    2152: `1276`,
    2153: `1276`,
    2154: `1276`,
    2155: `1277`,
    2156: `1277`,
    2157: `1278`,
    2158: `1278`,
    2159: `1278`,
    216: `36`,
    2160: `1280`,
    2161: `1280`,
    2162: `1280`,
    2163: `1281`,
    2164: `1281`,
    2165: `1281`,
    2166: `1282`,
    2167: `1282`,
    2168: `1283`,
    2169: `1283`,
    217: `37`,
    2170: `1283`,
    2171: `1285`,
    2172: `1285`,
    2173: `1285`,
    2174: `1286`,
    2175: `1286`,
    2176: `1286`,
    2177: `1287`,
    2178: `1287`,
    2179: `1288`,
    218: `37`,
    2180: `1288`,
    2181: `1288`,
    2182: `1290`,
    2183: `1290`,
    2184: `1290`,
    2185: `1291`,
    2186: `1291`,
    2187: `1291`,
    2188: `1292`,
    2189: `1292`,
    219: `37`,
    2190: `1293`,
    2191: `1293`,
    2192: `1293`,
    2193: `1295`,
    2194: `1295`,
    2195: `1295`,
    2196: `1296`,
    2197: `1296`,
    2198: `1296`,
    2199: `1297`,
    22: `2`,
    220: `37`,
    2200: `1297`,
    2201: `1298`,
    2202: `1298`,
    2203: `1298`,
    2204: `1300`,
    2205: `1300`,
    2206: `1300`,
    2207: `1301`,
    2208: `1301`,
    2209: `1301`,
    221: `37`,
    2210: `1302`,
    2211: `1302`,
    2212: `1303`,
    2213: `1303`,
    2214: `1303`,
    2215: `1305`,
    2216: `1305`,
    2217: `1305`,
    2218: `1306`,
    2219: `1306`,
    222: `37`,
    2220: `1306`,
    2221: `1307`,
    2222: `1307`,
    2223: `1308`,
    2224: `1308`,
    2225: `1308`,
    2226: `1310`,
    2227: `1311`,
    2228: `1311`,
    2229: `1312`,
    223: `38`,
    2230: `1313`,
    2231: `1314`,
    2232: `1314`,
    2233: `1315`,
    2234: `1315`,
    2235: `1316`,
    2236: `1317`,
    2237: `1318`,
    2238: `1319`,
    2239: `1319`,
    224: `38`,
    2240: `1320`,
    2241: `1321`,
    2242: `1322`,
    2243: `1323`,
    2244: `1323`,
    2245: `1324`,
    2246: `1325`,
    2247: `1326`,
    2248: `1326`,
    2249: `1326`,
    225: `39`,
    2250: `1327`,
    2251: `1327`,
    2252: `1327`,
    2253: `1328`,
    2254: `1329`,
    2255: `1330`,
    2256: `1331`,
    2257: `1331`,
    2258: `1331`,
    2259: `1333`,
    226: `40`,
    2260: `1333`,
    2261: `1334`,
    2262: `1335`,
    2263: `1336`,
    2264: `1338`,
    2265: `1338`,
    2266: `1338`,
    2267: `1340`,
    2268: `1340`,
    2269: `1341`,
    227: `41`,
    2270: `1341`,
    2271: `1342`,
    2272: `1342`,
    2273: `1342`,
    2274: `1344`,
    2275: `1344`,
    2276: `1345`,
    2277: `1346`,
    2278: `1347`,
    2279: `1347`,
    228: `41`,
    2280: `1348`,
    2281: `1348`,
    2282: `1349`,
    2283: `1349`,
    2284: `1350`,
    2285: `1350`,
    2286: `1350`,
    2287: `1352`,
    2288: `1352`,
    2289: `1353`,
    229: `42`,
    2290: `1353`,
    2291: `1354`,
    2292: `1355`,
    2293: `1355`,
    2294: `1356`,
    2295: `1358`,
    2296: `1358`,
    2297: `1359`,
    2298: `1359`,
    2299: `1360`,
    23: `2`,
    230: `43`,
    2300: `1360`,
    2301: `1361`,
    2302: `1361`,
    2303: `1362`,
    2304: `1363`,
    2305: `1364`,
    2306: `1364`,
    2307: `1364`,
    2308: `1365`,
    2309: `1365`,
    231: `44`,
    2310: `1365`,
    2311: `1367`,
    2312: `1367`,
    2313: `1368`,
    2314: `1369`,
    2315: `1369`,
    2316: `1370`,
    2317: `1370`,
    2318: `1371`,
    2319: `1372`,
    232: `46`,
    2320: `1372`,
    2321: `1373`,
    2322: `1373`,
    2323: `1374`,
    2324: `1375`,
    2325: `1375`,
    2326: `1376`,
    2327: `1376`,
    2328: `1377`,
    2329: `1378`,
    233: `46`,
    2330: `1379`,
    2331: `1380`,
    2332: `1381`,
    2333: `1382`,
    2334: `1382`,
    2335: `1383`,
    2336: `1383`,
    2337: `1384`,
    2338: `1385`,
    2339: `1385`,
    234: `47`,
    2340: `1386`,
    2341: `1386`,
    2342: `1387`,
    2343: `1388`,
    2344: `1388`,
    2345: `1389`,
    2346: `1389`,
    2347: `1390`,
    2348: `1391`,
    2349: `1392`,
    235: `47`,
    2350: `1393`,
    2351: `1394`,
    2352: `1395`,
    2353: `1395`,
    2354: `1396`,
    2355: `1396`,
    2356: `1396`,
    2357: `1397`,
    2358: `1397`,
    2359: `1398`,
    236: `47`,
    2360: `1399`,
    2361: `1400`,
    2362: `1400`,
    2363: `1401`,
    2364: `1401`,
    2365: `1402`,
    2366: `1402`,
    2367: `1403`,
    2368: `1403`,
    2369: `1404`,
    237: `48`,
    2370: `1404`,
    2371: `1405`,
    2372: `1405`,
    2373: `1405`,
    2374: `1407`,
    2375: `1407`,
    2376: `1408`,
    2377: `1408`,
    2378: `1409`,
    2379: `1409`,
    238: `48`,
    2380: `1410`,
    2381: `1411`,
    2382: `1412`,
    2383: `1412`,
    2384: `1412`,
    2385: `1413`,
    2386: `1413`,
    2387: `1414`,
    2388: `1414`,
    2389: `1415`,
    239: `49`,
    2390: `1416`,
    2391: `1416`,
    2392: `1418`,
    2393: `1418`,
    2394: `1419`,
    2395: `1419`,
    2396: `1420`,
    2397: `1421`,
    2398: `1422`,
    2399: `1422`,
    24: `2`,
    240: `49`,
    2400: `1423`,
    2401: `1424`,
    2402: `1424`,
    2403: `1425`,
    2404: `1426`,
    2405: `1427`,
    2406: `1427`,
    2407: `1428`,
    2408: `1429`,
    2409: `1430`,
    241: `49`,
    2410: `1430`,
    2411: `1431`,
    2412: `1432`,
    2413: `1432`,
    2414: `1432`,
    2415: `1433`,
    2416: `1434`,
    2417: `1434`,
    2418: `1435`,
    2419: `1436`,
    242: `52`,
    2420: `1437`,
    2421: `1437`,
    2422: `1438`,
    2423: `1439`,
    2424: `1440`,
    2425: `1440`,
    2426: `1441`,
    2427: `1442`,
    2428: `1443`,
    2429: `1443`,
    243: `52`,
    2430: `1444`,
    2431: `1445`,
    2432: `1446`,
    2433: `1446`,
    2434: `1447`,
    2435: `1448`,
    2436: `1449`,
    2437: `1449`,
    2438: `1450`,
    2439: `1451`,
    244: `53`,
    2440: `1452`,
    2441: `1452`,
    2442: `1453`,
    2443: `1454`,
    2444: `1455`,
    2445: `1455`,
    2446: `1456`,
    2447: `1457`,
    2448: `1458`,
    2449: `1458`,
    245: `53`,
    2450: `1459`,
    2451: `1459`,
    2452: `1460`,
    2453: `1460`,
    2454: `1460`,
    2455: `1462`,
    2456: `1462`,
    2457: `1463`,
    2458: `1463`,
    2459: `1463`,
    246: `54`,
    2460: `1464`,
    2461: `1464`,
    2462: `1465`,
    2463: `1465`,
    2464: `1466`,
    2465: `1467`,
    2466: `1467`,
    2467: `1469`,
    2468: `1469`,
    2469: `1470`,
    247: `55`,
    2470: `1470`,
    2471: `1471`,
    2472: `1472`,
    2473: `1473`,
    2474: `1473`,
    2475: `1474`,
    2476: `1475`,
    2477: `1475`,
    2478: `1476`,
    2479: `1477`,
    248: `55`,
    2480: `1478`,
    2481: `1478`,
    2482: `1479`,
    2483: `1480`,
    2484: `1481`,
    2485: `1481`,
    2486: `1482`,
    2487: `1483`,
    2488: `1483`,
    2489: `1483`,
    249: `57`,
    2490: `1484`,
    2491: `1485`,
    2492: `1485`,
    2493: `1486`,
    2494: `1487`,
    2495: `1488`,
    2496: `1488`,
    2497: `1489`,
    2498: `1490`,
    2499: `1491`,
    25: `2`,
    250: `57`,
    2500: `1491`,
    2501: `1492`,
    2502: `1493`,
    2503: `1494`,
    2504: `1494`,
    2505: `1495`,
    2506: `1496`,
    2507: `1497`,
    2508: `1497`,
    2509: `1498`,
    251: `58`,
    2510: `1499`,
    2511: `1500`,
    2512: `1500`,
    2513: `1501`,
    2514: `1502`,
    2515: `1503`,
    2516: `1503`,
    2517: `1504`,
    2518: `1505`,
    2519: `1506`,
    252: `58`,
    2520: `1506`,
    2521: `1507`,
    2522: `1508`,
    2523: `1509`,
    2524: `1509`,
    2525: `1510`,
    2526: `1511`,
    2527: `1512`,
    2528: `1512`,
    2529: `1513`,
    253: `59`,
    2530: `1513`,
    2531: `1514`,
    2532: `1514`,
    2533: `1514`,
    2534: `1516`,
    2535: `1516`,
    2536: `1517`,
    2537: `1518`,
    2538: `1519`,
    2539: `1519`,
    254: `60`,
    2540: `1520`,
    2541: `1520`,
    2542: `1521`,
    2543: `1522`,
    2544: `1523`,
    2545: `1523`,
    2546: `1524`,
    2547: `1524`,
    2548: `1525`,
    2549: `1526`,
    255: `61`,
    2550: `1527`,
    2551: `1527`,
    2552: `1527`,
    2553: `1529`,
    2554: `1529`,
    2555: `1530`,
    2556: `1530`,
    2557: `1531`,
    2558: `1532`,
    2559: `1533`,
    256: `61`,
    2560: `1533`,
    2561: `1534`,
    2562: `1535`,
    2563: `1535`,
    2564: `1536`,
    2565: `1537`,
    2566: `1538`,
    2567: `1538`,
    2568: `1539`,
    2569: `1540`,
    257: `62`,
    2570: `1541`,
    2571: `1541`,
    2572: `1542`,
    2573: `1543`,
    2574: `1543`,
    2575: `1543`,
    2576: `1544`,
    2577: `1545`,
    2578: `1545`,
    2579: `1546`,
    258: `63`,
    2580: `1547`,
    2581: `1548`,
    2582: `1548`,
    2583: `1549`,
    2584: `1550`,
    2585: `1551`,
    2586: `1551`,
    2587: `1552`,
    2588: `1553`,
    2589: `1554`,
    259: `64`,
    2590: `1554`,
    2591: `1555`,
    2592: `1556`,
    2593: `1557`,
    2594: `1557`,
    2595: `1558`,
    2596: `1559`,
    2597: `1560`,
    2598: `1560`,
    2599: `1561`,
    26: `2`,
    260: `64`,
    2600: `1562`,
    2601: `1563`,
    2602: `1563`,
    2603: `1564`,
    2604: `1565`,
    2605: `1566`,
    2606: `1566`,
    2607: `1567`,
    2608: `1568`,
    2609: `1569`,
    261: `65`,
    2610: `1569`,
    2611: `1570`,
    2612: `1570`,
    2613: `1571`,
    2614: `1571`,
    2615: `1571`,
    2616: `1573`,
    2617: `1573`,
    2618: `1574`,
    2619: `1574`,
    262: `66`,
    2620: `1575`,
    2621: `1576`,
    2622: `1576`,
    2623: `1577`,
    2624: `1578`,
    2625: `1579`,
    2626: `1580`,
    2627: `1580`,
    2628: `1580`,
    2629: `1582`,
    263: `67`,
    2630: `1582`,
    2631: `1583`,
    2632: `1583`,
    2633: `1584`,
    2634: `1585`,
    2635: `1586`,
    2636: `1586`,
    2637: `1587`,
    2638: `1588`,
    2639: `1588`,
    264: `68`,
    2640: `1589`,
    2641: `1590`,
    2642: `1591`,
    2643: `1591`,
    2644: `1592`,
    2645: `1593`,
    2646: `1594`,
    2647: `1594`,
    2648: `1595`,
    2649: `1596`,
    265: `68`,
    2650: `1596`,
    2651: `1596`,
    2652: `1597`,
    2653: `1598`,
    2654: `1598`,
    2655: `1599`,
    2656: `1600`,
    2657: `1601`,
    2658: `1601`,
    2659: `1602`,
    266: `70`,
    2660: `1603`,
    2661: `1604`,
    2662: `1604`,
    2663: `1605`,
    2664: `1606`,
    2665: `1607`,
    2666: `1607`,
    2667: `1608`,
    2668: `1609`,
    2669: `1610`,
    267: `70`,
    2670: `1610`,
    2671: `1611`,
    2672: `1612`,
    2673: `1613`,
    2674: `1613`,
    2675: `1614`,
    2676: `1615`,
    2677: `1616`,
    2678: `1616`,
    2679: `1617`,
    268: `71`,
    2680: `1618`,
    2681: `1619`,
    2682: `1619`,
    2683: `1620`,
    2684: `1621`,
    2685: `1622`,
    2686: `1622`,
    2687: `1623`,
    2688: `1624`,
    2689: `1625`,
    269: `71`,
    2690: `1625`,
    2691: `1626`,
    2692: `1626`,
    2693: `1627`,
    2694: `1627`,
    2695: `1627`,
    2696: `1629`,
    2697: `1629`,
    2698: `1630`,
    2699: `1630`,
    27: `2`,
    270: `72`,
    2700: `1631`,
    2701: `1632`,
    2702: `1632`,
    2703: `1633`,
    2704: `1633`,
    2705: `1634`,
    2706: `1635`,
    2707: `1636`,
    2708: `1636`,
    2709: `1636`,
    271: `73`,
    2710: `1637`,
    2711: `1637`,
    2712: `1638`,
    2713: `1638`,
    2714: `1639`,
    2715: `1640`,
    2716: `1640`,
    2717: `1642`,
    2718: `1642`,
    2719: `1643`,
    272: `73`,
    2720: `1643`,
    2721: `1644`,
    2722: `1645`,
    2723: `1646`,
    2724: `1646`,
    2725: `1647`,
    2726: `1648`,
    2727: `1648`,
    2728: `1649`,
    2729: `1650`,
    273: `74`,
    2730: `1651`,
    2731: `1651`,
    2732: `1652`,
    2733: `1653`,
    2734: `1654`,
    2735: `1654`,
    2736: `1655`,
    2737: `1656`,
    2738: `1656`,
    2739: `1656`,
    274: `74`,
    2740: `1657`,
    2741: `1658`,
    2742: `1658`,
    2743: `1659`,
    2744: `1660`,
    2745: `1661`,
    2746: `1661`,
    2747: `1662`,
    2748: `1663`,
    2749: `1664`,
    275: `74`,
    2750: `1664`,
    2751: `1665`,
    2752: `1666`,
    2753: `1667`,
    2754: `1667`,
    2755: `1668`,
    2756: `1669`,
    2757: `1670`,
    2758: `1670`,
    2759: `1671`,
    276: `75`,
    2760: `1672`,
    2761: `1673`,
    2762: `1673`,
    2763: `1674`,
    2764: `1675`,
    2765: `1676`,
    2766: `1676`,
    2767: `1677`,
    2768: `1678`,
    2769: `1679`,
    277: `76`,
    2770: `1679`,
    2771: `1680`,
    2772: `1681`,
    2773: `1682`,
    2774: `1682`,
    2775: `1683`,
    2776: `1684`,
    2777: `1685`,
    2778: `1685`,
    2779: `1686`,
    278: `77`,
    2780: `1686`,
    2781: `1687`,
    2782: `1687`,
    2783: `1687`,
    2784: `1690`,
    2785: `1690`,
    2786: `1691`,
    2787: `1691`,
    2788: `1692`,
    2789: `1693`,
    279: `78`,
    2790: `1694`,
    2791: `1694`,
    2792: `1695`,
    2793: `1696`,
    2794: `1696`,
    2795: `1697`,
    2796: `1698`,
    2797: `1699`,
    2798: `1699`,
    2799: `1700`,
    28: `2`,
    280: `78`,
    2800: `1701`,
    2801: `1702`,
    2802: `1702`,
    2803: `1703`,
    2804: `1704`,
    2805: `1704`,
    2806: `1704`,
    2807: `1705`,
    2808: `1706`,
    2809: `1706`,
    281: `78`,
    2810: `1707`,
    2811: `1708`,
    2812: `1709`,
    2813: `1709`,
    2814: `1710`,
    2815: `1711`,
    2816: `1712`,
    2817: `1712`,
    2818: `1713`,
    2819: `1714`,
    282: `79`,
    2820: `1715`,
    2821: `1715`,
    2822: `1716`,
    2823: `1717`,
    2824: `1718`,
    2825: `1718`,
    2826: `1719`,
    2827: `1720`,
    2828: `1721`,
    2829: `1721`,
    283: `80`,
    2830: `1722`,
    2831: `1723`,
    2832: `1724`,
    2833: `1724`,
    2834: `1725`,
    2835: `1726`,
    2836: `1727`,
    2837: `1727`,
    2838: `1728`,
    2839: `1729`,
    284: `81`,
    2840: `1730`,
    2841: `1730`,
    2842: `1731`,
    2843: `1732`,
    2844: `1733`,
    2845: `1733`,
    2846: `1734`,
    2847: `1734`,
    2848: `1735`,
    2849: `1735`,
    285: `81`,
    2850: `1735`,
    2851: `1737`,
    2852: `1737`,
    2853: `1738`,
    2854: `1739`,
    2855: `1740`,
    2856: `1740`,
    2857: `1740`,
    2858: `1741`,
    2859: `1741`,
    286: `82`,
    2860: `1742`,
    2861: `1743`,
    2862: `1744`,
    2863: `1744`,
    2864: `1745`,
    2865: `1745`,
    2866: `1746`,
    2867: `1746`,
    2868: `1747`,
    2869: `1747`,
    287: `83`,
    2870: `1748`,
    2871: `1748`,
    2872: `1749`,
    2873: `1749`,
    2874: `1749`,
    2875: `1751`,
    2876: `1751`,
    2877: `1752`,
    2878: `1752`,
    2879: `1753`,
    288: `83`,
    2880: `1753`,
    2881: `1754`,
    2882: `1754`,
    2883: `1755`,
    2884: `1755`,
    2885: `1755`,
    2886: `1757`,
    2887: `1758`,
    2888: `1758`,
    2889: `1759`,
    289: `84`,
    2890: `1760`,
    2891: `1760`,
    2892: `1761`,
    2893: `1761`,
    2894: `1762`,
    2895: `1762`,
    2896: `1763`,
    2897: `1764`,
    2898: `1766`,
    2899: `1766`,
    29: `2`,
    290: `85`,
    2900: `1767`,
    2901: `1767`,
    2902: `1768`,
    2903: `1768`,
    2904: `1768`,
    2905: `1770`,
    2906: `1771`,
    2907: `1773`,
    2908: `1774`,
    2909: `1775`,
    291: `86`,
    2910: `1776`,
    2911: `1776`,
    2912: `1777`,
    2913: `1777`,
    2914: `1778`,
    2915: `1778`,
    2916: `1778`,
    2917: `1779`,
    2918: `1781`,
    2919: `1782`,
    292: `87`,
    2920: `1783`,
    2921: `1783`,
    2922: `1783`,
    2923: `1784`,
    2924: `1785`,
    2925: `1785`,
    2926: `1786`,
    2927: `1786`,
    2928: `1786`,
    2929: `1787`,
    293: `87`,
    2930: `1789`,
    2931: `1790`,
    2932: `1790`,
    2933: `1791`,
    2934: `1793`,
    2935: `1794`,
    2936: `1795`,
    2937: `1796`,
    2938: `1797`,
    2939: `1797`,
    294: `88`,
    2940: `1798`,
    2941: `1799`,
    2942: `1800`,
    2943: `1801`,
    2944: `1803`,
    2945: `1804`,
    2946: `1804`,
    2947: `1804`,
    2948: `1807`,
    2949: `1807`,
    295: `89`,
    2950: `1808`,
    2951: `1808`,
    2952: `1809`,
    2953: `1810`,
    2954: `1811`,
    2955: `1812`,
    2956: `1812`,
    2957: `1813`,
    2958: `1814`,
    2959: `1814`,
    296: `90`,
    2960: `1815`,
    2961: `1815`,
    2962: `1816`,
    2963: `1816`,
    2964: `1817`,
    2965: `1818`,
    2966: `1819`,
    2967: `1819`,
    2968: `1820`,
    2969: `1821`,
    297: `92`,
    2970: `1822`,
    2971: `1823`,
    2972: `1823`,
    2973: `1824`,
    2974: `1825`,
    2975: `1826`,
    2976: `1828`,
    2977: `1829`,
    2978: `1829`,
    2979: `1829`,
    298: `92`,
    2980: `1830`,
    2981: `1830`,
    2982: `1831`,
    2983: `1832`,
    2984: `1833`,
    2985: `1834`,
    2986: `1834`,
    2987: `1835`,
    2988: `1836`,
    2989: `1836`,
    299: `92`,
    2990: `1836`,
    2991: `1837`,
    2992: `1837`,
    2993: `1838`,
    2994: `1839`,
    2995: `1839`,
    2996: `1840`,
    2997: `1841`,
    2998: `1841`,
    2999: `1842`,
    3: `2`,
    30: `2`,
    300: `94`,
    3000: `1843`,
    3001: `1843`,
    3002: `1844`,
    3003: `1845`,
    3004: `1845`,
    3005: `1846`,
    3006: `1847`,
    3007: `1847`,
    3008: `1847`,
    3009: `1848`,
    301: `94`,
    3010: `1849`,
    3011: `1849`,
    3012: `1850`,
    3013: `1851`,
    3014: `1851`,
    3015: `1852`,
    3016: `1853`,
    3017: `1853`,
    3018: `1854`,
    3019: `1855`,
    302: `95`,
    3020: `1855`,
    3021: `1856`,
    3022: `1857`,
    3023: `1857`,
    3024: `1858`,
    3025: `1859`,
    3026: `1859`,
    3027: `1860`,
    3028: `1861`,
    3029: `1861`,
    303: `95`,
    3030: `1862`,
    3031: `1863`,
    3032: `1863`,
    3033: `1864`,
    3034: `1865`,
    3035: `1865`,
    3036: `1866`,
    3037: `1867`,
    3038: `1867`,
    3039: `1868`,
    304: `95`,
    3040: `1869`,
    3041: `1869`,
    3042: `1870`,
    3043: `1871`,
    3044: `1871`,
    3045: `1872`,
    3046: `1873`,
    3047: `1873`,
    3048: `1874`,
    3049: `1874`,
    305: `97`,
    3050: `1875`,
    3051: `1876`,
    3052: `1876`,
    3053: `1877`,
    3054: `1879`,
    3055: `1880`,
    3056: `1880`,
    3057: `1880`,
    3058: `1881`,
    3059: `1881`,
    306: `97`,
    3060: `1882`,
    3061: `1883`,
    3062: `1884`,
    3063: `1885`,
    3064: `1885`,
    3065: `1886`,
    3066: `1886`,
    3067: `1887`,
    3068: `1888`,
    3069: `1888`,
    307: `97`,
    3070: `1889`,
    3071: `1891`,
    3072: `1891`,
    3073: `1892`,
    3074: `1892`,
    3075: `1893`,
    3076: `1894`,
    3077: `1895`,
    3078: `1895`,
    3079: `1895`,
    308: `97`,
    3080: `1896`,
    3081: `1896`,
    3082: `1896`,
    3083: `1898`,
    3084: `1899`,
    3085: `1899`,
    3086: `1899`,
    3087: `1900`,
    3088: `1900`,
    3089: `1901`,
    309: `97`,
    3090: `1902`,
    3091: `1903`,
    3092: `1904`,
    3093: `1904`,
    3094: `1905`,
    3095: `1906`,
    3096: `1906`,
    3097: `1906`,
    3098: `1907`,
    3099: `1907`,
    31: `2`,
    310: `97`,
    3100: `1908`,
    3101: `1909`,
    3102: `1909`,
    3103: `1910`,
    3104: `1911`,
    3105: `1911`,
    3106: `1912`,
    3107: `1913`,
    3108: `1913`,
    3109: `1914`,
    311: `98`,
    3110: `1915`,
    3111: `1915`,
    3112: `1916`,
    3113: `1917`,
    3114: `1917`,
    3115: `1918`,
    3116: `1919`,
    3117: `1919`,
    3118: `1920`,
    3119: `1921`,
    312: `98`,
    3120: `1921`,
    3121: `1922`,
    3122: `1923`,
    3123: `1923`,
    3124: `1924`,
    3125: `1925`,
    3126: `1925`,
    3127: `1926`,
    3128: `1927`,
    3129: `1927`,
    313: `99`,
    3130: `1928`,
    3131: `1928`,
    3132: `1929`,
    3133: `1930`,
    3134: `1930`,
    3135: `1931`,
    3136: `1933`,
    3137: `1934`,
    3138: `1934`,
    3139: `1934`,
    314: `100`,
    3140: `1935`,
    3141: `1935`,
    3142: `1936`,
    3143: `1937`,
    3144: `1938`,
    3145: `1939`,
    3146: `1939`,
    3147: `1940`,
    3148: `1941`,
    3149: `1941`,
    315: `102`,
    3150: `1941`,
    3151: `1942`,
    3152: `1942`,
    3153: `1943`,
    3154: `1944`,
    3155: `1944`,
    3156: `1945`,
    3157: `1946`,
    3158: `1946`,
    3159: `1947`,
    316: `103`,
    3160: `1948`,
    3161: `1948`,
    3162: `1949`,
    3163: `1950`,
    3164: `1950`,
    3165: `1951`,
    3166: `1952`,
    3167: `1952`,
    3168: `1953`,
    3169: `1954`,
    317: `105`,
    3170: `1954`,
    3171: `1955`,
    3172: `1956`,
    3173: `1956`,
    3174: `1957`,
    3175: `1958`,
    3176: `1958`,
    3177: `1959`,
    3178: `1959`,
    3179: `1960`,
    318: `105`,
    3180: `1961`,
    3181: `1961`,
    3182: `1962`,
    3183: `1964`,
    3184: `1965`,
    3185: `1965`,
    3186: `1965`,
    3187: `1966`,
    3188: `1966`,
    3189: `1967`,
    319: `106`,
    3190: `1968`,
    3191: `1969`,
    3192: `1970`,
    3193: `1970`,
    3194: `1971`,
    3195: `1972`,
    3196: `1972`,
    3197: `1972`,
    3198: `1973`,
    3199: `1973`,
    32: `2`,
    320: `106`,
    3200: `1974`,
    3201: `1975`,
    3202: `1975`,
    3203: `1976`,
    3204: `1977`,
    3205: `1977`,
    3206: `1978`,
    3207: `1979`,
    3208: `1979`,
    3209: `1980`,
    321: `107`,
    3210: `1981`,
    3211: `1981`,
    3212: `1982`,
    3213: `1983`,
    3214: `1983`,
    3215: `1983`,
    3216: `1984`,
    3217: `1985`,
    3218: `1985`,
    3219: `1986`,
    322: `108`,
    3220: `1987`,
    3221: `1987`,
    3222: `1988`,
    3223: `1989`,
    3224: `1989`,
    3225: `1990`,
    3226: `1991`,
    3227: `1991`,
    3228: `1992`,
    3229: `1993`,
    323: `108`,
    3230: `1993`,
    3231: `1994`,
    3232: `1995`,
    3233: `1995`,
    3234: `1996`,
    3235: `1997`,
    3236: `1997`,
    3237: `1998`,
    3238: `1999`,
    3239: `1999`,
    324: `109`,
    3240: `2000`,
    3241: `2001`,
    3242: `2001`,
    3243: `2002`,
    3244: `2003`,
    3245: `2003`,
    3246: `2004`,
    3247: `2005`,
    3248: `2005`,
    3249: `2006`,
    325: `110`,
    3250: `2007`,
    3251: `2007`,
    3252: `2008`,
    3253: `2009`,
    3254: `2009`,
    3255: `2010`,
    3256: `2011`,
    3257: `2011`,
    3258: `2012`,
    3259: `2013`,
    326: `111`,
    3260: `2013`,
    3261: `2014`,
    3262: `2015`,
    3263: `2015`,
    3264: `2016`,
    3265: `2017`,
    3266: `2017`,
    3267: `2018`,
    3268: `2018`,
    3269: `2019`,
    327: `111`,
    3270: `2020`,
    3271: `2020`,
    3272: `2021`,
    3273: `2023`,
    3274: `2024`,
    3275: `2024`,
    3276: `2024`,
    3277: `2025`,
    3278: `2025`,
    3279: `2026`,
    328: `111`,
    3280: `2027`,
    3281: `2028`,
    3282: `2029`,
    3283: `2029`,
    3284: `2030`,
    3285: `2031`,
    3286: `2031`,
    3287: `2031`,
    3288: `2032`,
    3289: `2032`,
    329: `112`,
    3290: `2033`,
    3291: `2034`,
    3292: `2034`,
    3293: `2035`,
    3294: `2036`,
    3295: `2036`,
    3296: `2037`,
    3297: `2038`,
    3298: `2038`,
    3299: `2039`,
    33: `2`,
    330: `112`,
    3300: `2040`,
    3301: `2040`,
    3302: `2041`,
    3303: `2042`,
    3304: `2042`,
    3305: `2042`,
    3306: `2043`,
    3307: `2044`,
    3308: `2044`,
    3309: `2045`,
    331: `113`,
    3310: `2046`,
    3311: `2046`,
    3312: `2047`,
    3313: `2048`,
    3314: `2048`,
    3315: `2049`,
    3316: `2050`,
    3317: `2050`,
    3318: `2051`,
    3319: `2052`,
    332: `114`,
    3320: `2052`,
    3321: `2053`,
    3322: `2054`,
    3323: `2054`,
    3324: `2055`,
    3325: `2056`,
    3326: `2056`,
    3327: `2057`,
    3328: `2058`,
    3329: `2058`,
    333: `114`,
    3330: `2059`,
    3331: `2060`,
    3332: `2060`,
    3333: `2061`,
    3334: `2062`,
    3335: `2062`,
    3336: `2063`,
    3337: `2064`,
    3338: `2064`,
    3339: `2065`,
    334: `115`,
    3340: `2066`,
    3341: `2066`,
    3342: `2067`,
    3343: `2068`,
    3344: `2068`,
    3345: `2069`,
    3346: `2070`,
    3347: `2070`,
    3348: `2071`,
    3349: `2072`,
    335: `115`,
    3350: `2072`,
    3351: `2073`,
    3352: `2073`,
    3353: `2074`,
    3354: `2075`,
    3355: `2075`,
    3356: `2076`,
    3357: `2078`,
    3358: `2079`,
    3359: `2079`,
    336: `115`,
    3360: `2080`,
    337: `115`,
    338: `115`,
    339: `115`,
    34: `2`,
    340: `116`,
    341: `116`,
    342: `117`,
    343: `118`,
    344: `119`,
    345: `121`,
    346: `121`,
    347: `122`,
    348: `122`,
    349: `122`,
    35: `2`,
    350: `123`,
    351: `123`,
    352: `124`,
    353: `124`,
    354: `125`,
    355: `126`,
    356: `127`,
    357: `127`,
    358: `128`,
    359: `128`,
    36: `2`,
    360: `129`,
    361: `130`,
    362: `131`,
    363: `131`,
    364: `132`,
    365: `132`,
    366: `132`,
    367: `135`,
    368: `136`,
    369: `137`,
    37: `2`,
    370: `137`,
    371: `138`,
    372: `138`,
    373: `139`,
    374: `139`,
    375: `140`,
    376: `141`,
    377: `141`,
    378: `142`,
    379: `142`,
    38: `2`,
    380: `143`,
    381: `143`,
    382: `144`,
    383: `144`,
    384: `146`,
    385: `146`,
    386: `147`,
    387: `147`,
    388: `148`,
    389: `149`,
    39: `2`,
    390: `149`,
    391: `150`,
    392: `150`,
    393: `151`,
    394: `152`,
    395: `153`,
    396: `153`,
    397: `153`,
    398: `154`,
    399: `154`,
    4: `2`,
    40: `2`,
    400: `155`,
    401: `155`,
    402: `156`,
    403: `157`,
    404: `158`,
    405: `158`,
    406: `159`,
    407: `159`,
    408: `160`,
    409: `161`,
    41: `2`,
    410: `161`,
    411: `163`,
    412: `163`,
    413: `164`,
    414: `164`,
    415: `165`,
    416: `166`,
    417: `167`,
    418: `167`,
    419: `168`,
    42: `2`,
    420: `169`,
    421: `169`,
    422: `170`,
    423: `171`,
    424: `172`,
    425: `172`,
    426: `173`,
    427: `174`,
    428: `175`,
    429: `175`,
    43: `2`,
    430: `176`,
    431: `177`,
    432: `178`,
    433: `178`,
    434: `179`,
    435: `180`,
    436: `181`,
    437: `181`,
    438: `182`,
    439: `183`,
    44: `2`,
    440: `184`,
    441: `184`,
    442: `185`,
    443: `186`,
    444: `187`,
    445: `187`,
    446: `188`,
    447: `188`,
    448: `189`,
    449: `189`,
    45: `2`,
    450: `189`,
    451: `191`,
    452: `191`,
    453: `192`,
    454: `192`,
    455: `193`,
    456: `194`,
    457: `195`,
    458: `195`,
    459: `195`,
    46: `2`,
    460: `196`,
    461: `196`,
    462: `197`,
    463: `198`,
    464: `199`,
    465: `199`,
    466: `200`,
    467: `200`,
    468: `201`,
    469: `201`,
    47: `2`,
    470: `202`,
    471: `203`,
    472: `203`,
    473: `204`,
    474: `204`,
    475: `204`,
    476: `204`,
    477: `204`,
    478: `204`,
    479: `205`,
    48: `2`,
    480: `205`,
    481: `206`,
    482: `207`,
    483: `208`,
    484: `208`,
    485: `209`,
    486: `210`,
    487: `211`,
    488: `213`,
    489: `213`,
    49: `2`,
    490: `214`,
    491: `214`,
    492: `214`,
    493: `215`,
    494: `215`,
    495: `216`,
    496: `216`,
    497: `217`,
    498: `218`,
    499: `219`,
    5: `2`,
    50: `2`,
    500: `219`,
    501: `220`,
    502: `220`,
    503: `221`,
    504: `222`,
    505: `225`,
    506: `225`,
    507: `226`,
    508: `227`,
    509: `228`,
    51: `4`,
    510: `229`,
    511: `229`,
    512: `230`,
    513: `230`,
    514: `230`,
    515: `231`,
    516: `231`,
    517: `232`,
    518: `233`,
    519: `234`,
    52: `4`,
    520: `234`,
    521: `236`,
    522: `237`,
    523: `237`,
    524: `238`,
    525: `239`,
    526: `240`,
    527: `240`,
    528: `241`,
    529: `242`,
    53: `5`,
    530: `243`,
    531: `244`,
    532: `244`,
    533: `245`,
    534: `246`,
    535: `246`,
    536: `247`,
    537: `248`,
    538: `249`,
    539: `250`,
    54: `5`,
    540: `251`,
    541: `251`,
    542: `252`,
    543: `252`,
    544: `253`,
    545: `254`,
    546: `255`,
    547: `256`,
    548: `256`,
    549: `257`,
    55: `5`,
    550: `257`,
    551: `258`,
    552: `258`,
    553: `259`,
    554: `259`,
    555: `260`,
    556: `260`,
    557: `261`,
    558: `261`,
    559: `262`,
    56: `6`,
    560: `262`,
    561: `264`,
    562: `264`,
    563: `265`,
    564: `266`,
    565: `267`,
    566: `268`,
    567: `268`,
    568: `269`,
    569: `269`,
    57: `7`,
    570: `270`,
    571: `271`,
    572: `272`,
    573: `273`,
    574: `273`,
    575: `273`,
    576: `274`,
    577: `274`,
    578: `275`,
    579: `276`,
    58: `8`,
    580: `277`,
    581: `277`,
    582: `277`,
    583: `279`,
    584: `279`,
    585: `280`,
    586: `280`,
    587: `281`,
    588: `282`,
    589: `283`,
    59: `9`,
    590: `283`,
    591: `284`,
    592: `285`,
    593: `285`,
    594: `286`,
    595: `287`,
    596: `288`,
    597: `288`,
    598: `289`,
    599: `290`,
    6: `2`,
    60: `10`,
    600: `291`,
    601: `291`,
    602: `292`,
    603: `293`,
    604: `293`,
    605: `293`,
    606: `294`,
    607: `295`,
    608: `295`,
    609: `296`,
    61: `11`,
    610: `297`,
    611: `298`,
    612: `298`,
    613: `299`,
    614: `300`,
    615: `301`,
    616: `301`,
    617: `302`,
    618: `303`,
    619: `304`,
    62: `11`,
    620: `304`,
    621: `305`,
    622: `306`,
    623: `307`,
    624: `307`,
    625: `308`,
    626: `309`,
    627: `310`,
    628: `310`,
    629: `311`,
    63: `12`,
    630: `312`,
    631: `313`,
    632: `313`,
    633: `314`,
    634: `315`,
    635: `316`,
    636: `316`,
    637: `317`,
    638: `318`,
    639: `319`,
    64: `12`,
    640: `319`,
    641: `320`,
    642: `321`,
    643: `322`,
    644: `323`,
    645: `323`,
    646: `324`,
    647: `324`,
    648: `324`,
    649: `326`,
    65: `13`,
    650: `326`,
    651: `327`,
    652: `327`,
    653: `328`,
    654: `329`,
    655: `330`,
    656: `330`,
    657: `330`,
    658: `331`,
    659: `331`,
    66: `14`,
    660: `332`,
    661: `333`,
    662: `333`,
    663: `334`,
    664: `334`,
    665: `334`,
    666: `334`,
    667: `334`,
    668: `334`,
    669: `335`,
    67: `14`,
    670: `335`,
    671: `336`,
    672: `337`,
    673: `338`,
    674: `340`,
    675: `340`,
    676: `341`,
    677: `341`,
    678: `341`,
    679: `342`,
    68: `15`,
    680: `342`,
    681: `343`,
    682: `343`,
    683: `344`,
    684: `345`,
    685: `346`,
    686: `346`,
    687: `347`,
    688: `347`,
    689: `348`,
    69: `16`,
    690: `349`,
    691: `349`,
    692: `350`,
    693: `350`,
    694: `351`,
    695: `352`,
    696: `353`,
    697: `357`,
    698: `357`,
    699: `359`,
    7: `2`,
    70: `17`,
    700: `359`,
    701: `360`,
    702: `360`,
    703: `360`,
    704: `362`,
    705: `362`,
    706: `363`,
    707: `363`,
    708: `364`,
    709: `365`,
    71: `18`,
    710: `367`,
    711: `367`,
    712: `367`,
    713: `369`,
    714: `370`,
    715: `370`,
    716: `371`,
    717: `371`,
    718: `372`,
    719: `372`,
    72: `19`,
    720: `372`,
    721: `373`,
    722: `373`,
    723: `373`,
    724: `375`,
    725: `375`,
    726: `376`,
    727: `376`,
    728: `377`,
    729: `378`,
    73: `21`,
    730: `379`,
    731: `379`,
    732: `379`,
    733: `380`,
    734: `380`,
    735: `381`,
    736: `382`,
    737: `383`,
    738: `383`,
    739: `384`,
    74: `21`,
    740: `384`,
    741: `385`,
    742: `385`,
    743: `386`,
    744: `387`,
    745: `387`,
    746: `388`,
    747: `388`,
    748: `388`,
    749: `388`,
    75: `21`,
    750: `388`,
    751: `388`,
    752: `389`,
    753: `389`,
    754: `390`,
    755: `391`,
    756: `392`,
    757: `392`,
    758: `393`,
    759: `394`,
    76: `21`,
    760: `395`,
    761: `397`,
    762: `397`,
    763: `398`,
    764: `398`,
    765: `398`,
    766: `399`,
    767: `399`,
    768: `400`,
    769: `400`,
    77: `21`,
    770: `401`,
    771: `402`,
    772: `403`,
    773: `403`,
    774: `404`,
    775: `404`,
    776: `405`,
    777: `406`,
    778: `409`,
    779: `409`,
    78: `21`,
    780: `410`,
    781: `411`,
    782: `412`,
    783: `412`,
    784: `413`,
    785: `414`,
    786: `415`,
    787: `415`,
    788: `416`,
    789: `417`,
    79: `21`,
    790: `418`,
    791: `419`,
    792: `419`,
    793: `420`,
    794: `421`,
    795: `422`,
    796: `422`,
    797: `423`,
    798: `424`,
    799: `424`,
    8: `2`,
    80: `21`,
    800: `425`,
    801: `426`,
    802: `427`,
    803: `428`,
    804: `429`,
    805: `429`,
    806: `430`,
    807: `430`,
    808: `431`,
    809: `432`,
    81: `21`,
    810: `433`,
    811: `434`,
    812: `434`,
    813: `435`,
    814: `435`,
    815: `436`,
    816: `436`,
    817: `437`,
    818: `437`,
    819: `438`,
    82: `21`,
    820: `438`,
    821: `439`,
    822: `439`,
    823: `439`,
    824: `441`,
    825: `441`,
    826: `442`,
    827: `442`,
    828: `443`,
    829: `444`,
    83: `21`,
    830: `445`,
    831: `445`,
    832: `445`,
    833: `446`,
    834: `446`,
    835: `447`,
    836: `448`,
    837: `448`,
    838: `449`,
    839: `449`,
    84: `21`,
    840: `449`,
    841: `449`,
    842: `449`,
    843: `449`,
    844: `450`,
    845: `450`,
    846: `451`,
    847: `452`,
    848: `453`,
    849: `455`,
    85: `21`,
    850: `455`,
    851: `456`,
    852: `456`,
    853: `456`,
    854: `457`,
    855: `457`,
    856: `458`,
    857: `458`,
    858: `459`,
    859: `460`,
    86: `21`,
    860: `461`,
    861: `461`,
    862: `462`,
    863: `462`,
    864: `463`,
    865: `464`,
    866: `464`,
    867: `465`,
    868: `465`,
    869: `466`,
    87: `21`,
    870: `467`,
    871: `468`,
    872: `472`,
    873: `472`,
    874: `474`,
    875: `474`,
    876: `475`,
    877: `475`,
    878: `475`,
    879: `476`,
    88: `21`,
    880: `476`,
    881: `476`,
    882: `478`,
    883: `478`,
    884: `479`,
    885: `479`,
    886: `480`,
    887: `481`,
    888: `483`,
    889: `484`,
    89: `21`,
    890: `484`,
    891: `484`,
    892: `485`,
    893: `485`,
    894: `486`,
    895: `487`,
    896: `488`,
    897: `489`,
    898: `489`,
    899: `490`,
    9: `2`,
    90: `21`,
    900: `491`,
    901: `491`,
    902: `491`,
    903: `492`,
    904: `492`,
    905: `493`,
    906: `494`,
    907: `494`,
    908: `495`,
    909: `496`,
    91: `21`,
    910: `496`,
    911: `497`,
    912: `498`,
    913: `498`,
    914: `499`,
    915: `500`,
    916: `500`,
    917: `501`,
    918: `502`,
    919: `502`,
    92: `21`,
    920: `502`,
    921: `503`,
    922: `504`,
    923: `504`,
    924: `505`,
    925: `506`,
    926: `506`,
    927: `507`,
    928: `508`,
    929: `508`,
    93: `21`,
    930: `509`,
    931: `510`,
    932: `510`,
    933: `511`,
    934: `512`,
    935: `512`,
    936: `513`,
    937: `514`,
    938: `514`,
    939: `515`,
    94: `21`,
    940: `516`,
    941: `516`,
    942: `517`,
    943: `518`,
    944: `518`,
    945: `519`,
    946: `520`,
    947: `520`,
    948: `521`,
    949: `522`,
    95: `21`,
    950: `522`,
    951: `523`,
    952: `524`,
    953: `524`,
    954: `525`,
    955: `526`,
    956: `526`,
    957: `527`,
    958: `528`,
    959: `528`,
    96: `21`,
    960: `529`,
    961: `529`,
    962: `530`,
    963: `531`,
    964: `531`,
    965: `532`,
    966: `532`,
    967: `533`,
    968: `534`,
    969: `534`,
    97: `21`,
    970: `535`,
    971: `535`,
    972: `535`,
    973: `535`,
    974: `535`,
    975: `535`,
    976: `536`,
    977: `536`,
    978: `537`,
    979: `538`,
    98: `21`,
    980: `539`,
    981: `541`,
    982: `541`,
    983: `542`,
    984: `542`,
    985: `542`,
    986: `543`,
    987: `543`,
    988: `544`,
    989: `544`,
    99: `21`,
    990: `545`,
    991: `546`,
    992: `549`,
    993: `550`,
    994: `551`,
    995: `551`,
    996: `552`,
    997: `552`,
    998: `553`,
    999: `553`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 161,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v1565","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e10","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e11","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e12","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e13","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e14","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e15","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e16","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e17","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e18","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1568","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v1589","type":"tuple"}],"name":"_reachp_10","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1592","type":"tuple"}],"name":"_reachp_11","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v1595","type":"tuple"}],"name":"_reachp_12","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1598","type":"tuple"}],"name":"_reachp_13","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1601","type":"tuple"}],"name":"_reachp_14","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1604","type":"tuple"}],"name":"_reachp_15","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v1607","type":"tuple"}],"name":"_reachp_16","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1610","type":"tuple"}],"name":"_reachp_17","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1613","type":"tuple"}],"name":"_reachp_18","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1571","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T11","name":"v1574","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1577","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T14","name":"v1580","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1583","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v1586","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080604052604051620044f0380380620044f08339810160408190526200002691620001e9565b600080805543600355604080516020810190915290815262000049828262000051565b5050620003b8565b600454620000659060ff1615600762000185565b6040805133815283516020808301919091528401518183015290517f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f9181900360600190a18151620000c8901580620000c057508251600154145b600862000185565b6020820151620000dc903414600962000185565b6200010a604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3381526020808401519082015262000124436014620001af565b604082810191825260016000819055439055805183516001600160a01b03166020808301919091528401519181019190915290516060820152608001604051602081830303815290604052600290816200017f9190620002ca565b50505050565b81620001ab5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600082620001be838262000396565b9150811015620001cd57600080fd5b92915050565b634e487b7160e01b600052604160045260246000fd5b600060408284031215620001fc57600080fd5b604080519081016001600160401b0381118282101715620002215762000221620001d3565b604052825181526020928301519281019290925250919050565b600181811c908216806200025057607f821691505b6020821081036200027157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c557600081815260208120601f850160051c81016020861015620002a05750805b601f850160051c820191505b81811015620002c157828155600101620002ac565b5050505b505050565b81516001600160401b03811115620002e657620002e6620001d3565b620002fe81620002f784546200023b565b8462000277565b602080601f8311600181146200033657600084156200031d5750858301515b600019600386901b1c1916600185901b178555620002c1565b600085815260208120601f198616915b82811015620003675788860151825594840194600190910190840162000346565b5085821015620003865787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620001cd57634e487b7160e01b600052601160045260246000fd5b61412880620003c86000396000f3fe6080604052600436106100e55760003560e01c8063048fbfca146100ee57806309e682bd146101165780631a8c77a2146101295780631e93b0f11461013c5780632f1323021461015b5780633082ad2f1461016e57806330dd5d081461018157806335669dd11461019457806356f203c5146101a7578063573b8510146101ba5780635e3fd3c6146101cd5780636b1674ad146101e05780636e4ccfe7146101f35780636e8c2d7614610206578063832307571461021957806397a853181461022e578063ab53f2c614610241578063b1b7669714610264578063f5a239bc1461027757005b366100ec57005b005b6101016100fc36600461360d565b61028a565b60405190151581526020015b60405180910390f35b610101610124366004613631565b6102b2565b61010161013736600461360d565b6102d4565b34801561014857600080fd5b506003545b60405190815260200161010d565b610101610169366004613654565b6102f6565b61010161017c36600461360d565b610318565b61010161018f366004613654565b61033a565b6101016101a2366004613654565b61035c565b6101016101b5366004613654565b61037e565b6101016101c8366004613654565b6103a0565b6101016101db366004613654565b6103c2565b6101016101ee366004613654565b6103e4565b610101610201366004613631565b610406565b610101610214366004613654565b610428565b34801561022557600080fd5b5060015461014d565b61010161023c36600461360d565b61044a565b34801561024d57600080fd5b5061025661046c565b60405161010d929190613666565b610101610272366004613654565b610509565b610101610285366004613654565b61052b565b600061029461343b565b6102ac6102a636859003850185613764565b8261054d565b50919050565b60006102bc61343b565b6102ac6102ce3685900385018561380d565b826107eb565b60006102de61343b565b6102ac6102f036859003850185613764565b82610ab0565b600061030061343b565b6102ac61031236859003850185613829565b82610d2e565b600061032261343b565b6102ac61033436859003850185613764565b82610ef3565b600061034461343b565b6102ac61035636859003850185613829565b82611177565b600061036661343b565b6102ac61037836859003850185613829565b82611323565b600061038861343b565b6102ac61039a36859003850185613829565b82611542565b60006103aa61343b565b6102ac6103bc36859003850185613829565b826116f0565b60006103cc61343b565b6102ac6103de36859003850185613829565b8261189a565b60006103ee61343b565b6102ac61040036859003850185613829565b82611a9e565b600061041061343b565b6102ac6104223685900385018561380d565b82611c48565b600061043261343b565b6102ac61044436859003850185613829565b82611f16565b600061045461343b565b6102ac61046636859003850185613764565b826120c0565b6000606060005460028080546104819061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546104ad9061386a565b80156104fa5780601f106104cf576101008083540402835291602001916104fa565b820191906000526020600020905b8154815290600101906020018083116104dd57829003601f168201915b50505050509050915091509091565b600061051361343b565b6102ac61052536859003850185613829565b826123b1565b600061053561343b565b6102ac61054736859003850185613829565b826125bc565b6040805180820190915260008082526020820152610571600b60005414600f612730565b6000600280546105809061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546105ac9061386a565b80156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b50505050508060200190518101906106119190613985565b6004549091506106269060ff16156010612730565b7f60a927a803d82db9bc2b937443d9c3c0255c9a6dbcecd20808977781a6cb94c533856040516106579291906139af565b60405180910390a1835161067a90158061067357508451600154145b6011612730565b61068c81610180015143106012612730565b61069834156013612730565b80516106b0906001600160a01b031633146014612730565b6020840151600114808352156106da576106d08161012001516001612759565b60208301526106e6565b61012081015160208301525b6106ee61344d565b81516001600160a01b0390811682526020808401518184015260408085015190921691830191909152606080840151908301526080808401519083015260a08084015115159083015260c08084015190830152600160e08084018290528401516101008085019190915284015161012084015284820151610140840152908601511061077b57600161077e565b60005b61016082015261014082015183516107b991906107b257600a8760200151106107a857600a612759565b8660200151612759565b600b612759565b61018082015260016101a0820152436101c08201526101608201516101e08201526107e4818561277a565b5050505050565b6107fb6005600054146047612730565b60006002805461080a9061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546108369061386a565b80156108835780601f1061085857610100808354040283529160200191610883565b820191906000526020600020905b81548152906001019060200180831161086657829003601f168201915b505050505080602001905181019061089b91906139d5565b6004549091506108b09060ff16156048612730565b7f03bed868a4e5740c3b9ad3749eb2622bf697e66bb923e3bfba52d025f3c9e85133846040516108e1929190613a72565b60405180910390a182516109049015806108fd57508351600154145b6049612730565b6109168160c00151431015604a612730565b6109278160e001514310604b612730565b6109333415604c612730565b805161094b906001600160a01b03163314604d612730565b6109ac60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152606080850151908401526080808501519084015260a0808501519084015285015160c083015284015160e0820152610a0b436014612759565b610100820152600760005543600155604051610a9390829060200181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290816107e49190613af1565b604080516020810190915260008152610acf600d60005414601b612730565b600060028054610ade9061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0a9061386a565b8015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b5050505050806020019051810190610b6f9190613c76565b600454909150610b849060ff1615601c612730565b7ff74b4fc3ef76df69b8b273307c4bfc2cd3051f1a77bb79114b91b728ff6c8cd03385604051610bb59291906139af565b60405180910390a18351610bd8901580610bd157508451600154145b601d612730565b610bea816101a001514310601e612730565b610bf63415601f612730565b6040810151610c11906001600160a01b031633146020612730565b60208401516001148252610c2361344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301511515908201528251610c9490610c7a576000610c7d565b60015b8360a00151610c8d576000612759565b6001612759565b60c08083019190915282015160e0808301919091528201518351610cca91906107b257600a8760200151106107a857600a612759565b61010080830191909152600161012080840191909152908301516101408084019190915290830151610160808401919091529083015161018080840191909152908301516101a0830152436101c08301528201516101e08201526107e4818561277a565b610d3e600760005414605a612730565b600060028054610d4d9061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d799061386a565b8015610dc65780601f10610d9b57610100808354040283529160200191610dc6565b820191906000526020600020905b815481529060010190602001808311610da957829003601f168201915b5050505050806020019051810190610dde9190613c93565b600454909150610df39060ff1615605b612730565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4013384604051610e24929190613d1c565b60405180910390a18251610e47901580610e4057508351600154145b605c612730565b610e5a816101000151431015605d612730565b610e663415605e612730565b6040810151610e9a906001600160a01b03163314610e905781516001600160a01b03163314610e93565b60015b605f612730565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ed7573d6000803e3d6000fd5b5060008080556001819055610eee906002906134de565b505050565b6040805180820190915260008082526020820152610f176011600054146031612730565b600060028054610f269061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054610f529061386a565b8015610f9f5780601f10610f7457610100808354040283529160200191610f9f565b820191906000526020600020905b815481529060010190602001808311610f8257829003601f168201915b5050505050806020019051810190610fb79190613e07565b600454909150610fcc9060ff16156032612730565b7f0de5e19c7afa8dc77bd04b1bc15ccd466004d2c8c57ee1dfad2a28f45fb70e913385604051610ffd9291906139af565b60405180910390a1835161102090158061101957508451600154145b6033612730565b611032816101c0015143106034612730565b61103e34156035612730565b6040810151611059906001600160a01b031633146036612730565b602084015160011480835215611082576110788160c001516001612759565b602083015261108d565b60c081015160208301525b61109561344d565b81516001600160a01b0390811682526020808401518184015260408085015190921691830191909152606080840151908301526080808401519083015260a08084015115159083015283015160c0820152600160e080830191909152820151835161111291906107b257600a8760200151106107a857600a612759565b61010080830191909152820151610120808301919091528201516101408083019190915282015161016080830191909152820151610180808301919091528201516101a080830191909152436101c08301528201516101e08201526107e4818561277a565b611187600560005414604e612730565b6000600280546111969061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546111c29061386a565b801561120f5780601f106111e45761010080835404028352916020019161120f565b820191906000526020600020905b8154815290600101906020018083116111f257829003601f168201915b505050505080602001905181019061122791906139d5565b60045490915061123c9060ff1615604f612730565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c1249338460405161126d929190613d1c565b60405180910390a1825161129090158061128957508351600154145b6050612730565b6112a28160e001514310156051612730565b6112ae34156052612730565b60408101516112e2906001600160a01b031633146112d85781516001600160a01b031633146112db565b60015b6053612730565b80604001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610ed7573d6000803e3d6000fd5b611333601060005414602c612730565b6000600280546113429061386a565b80601f016020809104026020016040519081016040528092919081815260200182805461136e9061386a565b80156113bb5780601f10611390576101008083540402835291602001916113bb565b820191906000526020600020905b81548152906001019060200180831161139e57829003601f168201915b50505050508060200190518101906113d39190613e07565b6004549091506113e89060ff1615602d612730565b7f526c969c97ad04009ecfacb4c7fb24226acdff88754c45ef82a156bc05c48d2d3384604051611419929190613d1c565b60405180910390a1825161143c90158061143557508351600154145b602e612730565b6114483415602f612730565b6040810151611463906001600160a01b031633146030612730565b61146b61344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08083015115159082015260c08201516114c190600161323f565b60c082015260e080830151908201526101008201516114e190600a61323f565b61010082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a08083015190820152436101c0808301919091528201516101e082015261153c818461277a565b50505050565b611552600b600054146015612730565b6000600280546115619061386a565b80601f016020809104026020016040519081016040528092919081815260200182805461158d9061386a565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b50505050508060200190518101906115f29190613985565b6004549091506116079060ff16156016612730565b7f17098f0655850dfa1338a65de498098de16ab6fe3764c2b19655009127f1a27b3384604051611638929190613d1c565b60405180910390a1825161165b90158061165457508351600154145b6017612730565b61166e8161018001514310156018612730565b61167a34156019612730565b60408101516116ae906001600160a01b031633146116a45781516001600160a01b031633146116a7565b60015b601a612730565b80604001516001600160a01b03166108fc8261016001519081150290604051600060405180830381858888f19350505050158015610ed7573d6000803e3d6000fd5b60408051602081019091526000815261170f600160005414600a612730565b60006002805461171e9061386a565b80601f016020809104026020016040519081016040528092919081815260200182805461174a9061386a565b80156117975780601f1061176c57610100808354040283529160200191611797565b820191906000526020600020905b81548152906001019060200180831161177a57829003601f168201915b50505050508060200190518101906117af9190613e24565b6004549091506117c49060ff1615600b612730565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159633856040516117f5929190613d1c565b60405180910390a1835161181890158061181157508451600154145b600c612730565b61182981604001514310600d612730565b61183a8160200151624c4b40612759565b80835261184a903414600e612730565b61185261351b565b81516001600160a01b03168152602080830180519183019190915233604083015260006060830181905260808301524360a08301525183510160c08201526107e4818561325a565b6118aa600f600054146027612730565b6000600280546118b99061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546118e59061386a565b80156119325780601f1061190757610100808354040283529160200191611932565b820191906000526020600020905b81548152906001019060200180831161191557829003601f168201915b505050505080602001905181019061194a9190613985565b60045490915061195f9060ff16156028612730565b7f7ea98f491a84a8dc01057e52c430686be768402b572d15b74e8d39603c735ccb3384604051611990929190613d1c565b60405180910390a182516119b39015806119ac57508351600154145b6029612730565b6119bf3415602a612730565b60408101516119da906001600160a01b03163314602b612730565b6119e261344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08083015115159082015260c08083015190820152600060e08083018290528301516101008084019190915283015161012080840191909152830151610140808401919091526101608084019290925283015161018080840191909152908301516101a0830152436101c08301528201516101e082015261153c818461277a565b611aae6011600054146037612730565b600060028054611abd9061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054611ae99061386a565b8015611b365780601f10611b0b57610100808354040283529160200191611b36565b820191906000526020600020905b815481529060010190602001808311611b1957829003601f168201915b5050505050806020019051810190611b4e9190613e07565b600454909150611b639060ff16156038612730565b7f7aba397a799a67e7f992fa9017fe997903aa977320123c86e716c7e272bc4a233384604051611b94929190613d1c565b60405180910390a18251611bb7901580611bb057508351600154145b6039612730565b611bca816101c00151431015603a612730565b611bd63415603b612730565b6040810151611c0a906001600160a01b03163314611c005781516001600160a01b03163314611c03565b60015b603c612730565b80516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ed7573d6000803e3d6000fd5b6040805160608101825260008082526020820181905291810191909152611c756007600054146054612730565b600060028054611c849061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb09061386a565b8015611cfd5780601f10611cd257610100808354040283529160200191611cfd565b820191906000526020600020905b815481529060010190602001808311611ce057829003601f168201915b5050505050806020019051810190611d159190613c93565b600454909150611d2a9060ff16156055612730565b7f31cab6478d4349a0069cd9b301657b46acb2e8cfb2d3b0ec54df3aed1d07903d3385604051611d5b929190613a72565b60405180910390a18351611d7e901580611d7757508451600154145b6056612730565b611d9081610100015143106057612730565b611d9c34156058612730565b6040810151611db7906001600160a01b031633146059612730565b60c08101516001908114835260e08201518114602084015260408086015190911490830152611de461344d565b81516001600160a01b0390811682526020808401519083015260408084015190911681830152606080840151908301526080808401519083015283018051151560a0830152600060c0830152600160e083015251611e5957600a856040015110611e4f57600a611e5c565b8460400151611e5c565b600b5b61010082015260006101208201528251611e8e90611e7b576000611e7e565b60015b8460200151610c8d576000612759565b61014082015260016101608201528251611eec90611ec357600a8360c0015110611eb957600a611ec6565b8260c00151611ec6565b600b5b84602001516107b257600a8460e0015110611ee257600a612759565b8360e00151612759565b61018082015260006101a0820152436101c082015260a08201516101e08201526107e4818561277a565b611f26600d600054146021612730565b600060028054611f359061386a565b80601f0160208091040260200160405190810160405280929190818152602001828054611f619061386a565b8015611fae5780601f10611f8357610100808354040283529160200191611fae565b820191906000526020600020905b815481529060010190602001808311611f9157829003601f168201915b5050505050806020019051810190611fc69190613c76565b600454909150611fdb9060ff16156022612730565b7f197a1223e6056294c484296f76894c5f965c1e2c0cfca74253dd431195529472338460405161200c929190613d1c565b60405180910390a1825161202f90158061202857508351600154145b6023612730565b612042816101a001514310156024612730565b61204e34156025612730565b6040810151612082906001600160a01b031633146120785781516001600160a01b0316331461207b565b60015b6026612730565b80516101808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ed7573d6000803e3d6000fd5b6120d0600a600054146060612730565b6000600280546120df9061386a565b80601f016020809104026020016040519081016040528092919081815260200182805461210b9061386a565b80156121585780601f1061212d57610100808354040283529160200191612158565b820191906000526020600020905b81548152906001019060200180831161213b57829003601f168201915b50505050508060200190518101906121709190613e07565b6004549091506121859060ff16156061612730565b7ffdea4e18b47105c1e27c84b5722ce69ce6d9b4351b639f2bd8c4401c1f40250b33846040516121b69291906139af565b60405180910390a182516121d99015806121d257508351600154145b6062612730565b6121e534156063612730565b80516121fd906001600160a01b031633146064612730565b60018360200151036122e35761221161344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08083015115159082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014082015161229290600161323f565b61014082015261016080830151908201526101808201516122b490600a61323f565b6101808201526101a08083015190820152436101c0808301919091528201516101e082015261153c818461277a565b6122eb61344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08083015115159082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014082015161236c90600161323f565b610140820152610160808301519082015261018080830151908201526101a08083015190820152436101c0808301919091528201516101e082015261153c818461277a565b6123c1601360005414603d612730565b6000600280546123d09061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546123fc9061386a565b80156124495780601f1061241e57610100808354040283529160200191612449565b820191906000526020600020905b81548152906001019060200180831161242c57829003601f168201915b50505050508060200190518101906124619190613c76565b6004549091506124769060ff1615603e612730565b7f491bf96c9ec5ff1d70102cbb3e21ba3cdaf29e323415eab3f6634a141d989c5e33846040516124a7929190613d1c565b60405180910390a182516124ca9015806124c357508351600154145b603f612730565b6124d634156040612730565b60408101516124f1906001600160a01b031633146041612730565b6124f961344d565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08083015115159082015260c08083015190820152600060e08083019190915282015161010080830191909152820151610120808301919091528201516101408083019190915282015161016080830191909152820151610180808301919091528201516101a080830191909152436101c08301528201516101e082015261153c818461277a565b6125cc6001600054146042612730565b6000600280546125db9061386a565b80601f01602080910402602001604051908101604052809291908181526020018280546126079061386a565b80156126545780601f1061262957610100808354040283529160200191612654565b820191906000526020600020905b81548152906001019060200180831161263757829003601f168201915b505050505080602001905181019061266c9190613e24565b6004549091506126819060ff16156043612730565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a33846040516126b2929190613d1c565b60405180910390a182516126d59015806126ce57508351600154145b6044612730565b6126e781604001514310156045612730565b6126f334156046612730565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ed7573d6000803e3d6000fd5b816127555760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6000826127668382613e9a565b915081101561277457600080fd5b92915050565b60408051808201909152600080825260208201526101608301516001148082526127ab5760018360e00151146127ae565b60015b156130675761014083015115612885576127c661356a565b83516001600160a01b0390811682526020808601518184015260408087015190921682840152606080870151908401526080808701519084015260a08087015115159084015260c0808701519084015260e08087015190840152610100808701519084015261012080870151908401526101408087015190840152610160808701519084015261018080870151908401526101a080870151908401526101e08601516101c0840152600a600055436001559051610a9391839101613f5f565b805161289257600061289c565b6015836101800151105b156129df57612920604051806101a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b83516001600160a01b0390811682526020808601519083015260408086015190911690820152606080850151908201526080808501519082015260a08085015115159082015260c080850151908201526101008085015160e083015261012080860151918301919091526101408086015191830191909152610180850151908201526101e08401516101608201526101c08401516129bf906014612759565b610180820152600b60005543600155604051610a9390829060200161400a565b610120830151612b3c57612a6f604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b83516001600160a01b0390811682526020808601519083015260408086015190911690820152606080850151908201526080808501519082015260a08085015115159082015260e08085015160c0830152610100808601519183019190915261014080860151918301919091526101608086015161012084015261018080870151928401929092526101a0860151908301526101e0850151908201526101c0840151612b1c906014612759565b6101a0820152600d60005543600155604051610a939082906020016140c0565b6101a083015115612b4e576000612b58565b6015836101800151145b612b6a57601583610180015111612b6d565b60015b15612ca457612bf1604051806101a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b83516001600160a01b0390811682526020808601518184015260408087015190921682840152606080870151908401526080808701519084015260a08087015115159084015260c080870151908401526101008087015160e08501526101208088015191850191909152610140808801519185019190915261018080880151918501919091526101a08701516101608501526101e087015190840152600f600055436001559051610a939183910161400a565b601583610100015111612cb8576000612cc1565b60008360c00151115b15612d8d57612cce61356a565b83516001600160a01b0390811682526020808601518184015260408087015190921682840152606080870151908401526080808701519084015260a08087015115159084015260c0808701519084015260e08087015190840152610100808701519084015261012080870151908401526101408087015190840152610160808701519084015261018080870151908401526101a080870151908401526101e08601516101c08401526010600055436001559051610a9391839101613f5f565b82610180015183610100015110612da5576000612daf565b6015836101000151105b15612f1e57612e41604051806101e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b83516001600160a01b0390811682526020808601519083015260408086015190911690820152606080850151908201526080808501519082015260a08085015115159082015260c080850151908201526101008085015160e083015261012080860151918301919091526101408086015191830191909152610160808601519183019190915261018080860151918301919091526101a080860151918301919091526101e0850151908201526101c0840151612efe906014612759565b6101c0820152601160005543600155604051610a93908290602001613f5f565b612fa4604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b83516001600160a01b0390811682526020808601518184015260408087015190921682840152606080870151908401526080808701519084015260a08087015115159084015260c080870151908401526101008087015160e085015261012080880151918501919091526101408088015191850191909152610160808801519185019190915261018080880151918501919091526101a080880151918501919091526101e0870151908401526013600055436001559051610a93918391016140c0565b60158361018001511161309a5760168361010001511061308857600061309d565b8261018001518361010001511161309d565b60015b6130e9576016836101800151106130b55760006130d7565b826101000151836101800151116130d4576015836101000151116130d7565b60015b6130e25760026130ec565b60006130ec565b60015b60208201819052613164576130ff61351b565b83516001600160a01b039081168252602080860151908301526040808601519091169082015260608085015190820152608084015161313f906001612759565b60808201526101c084015160a08201526101e084015160c082015261153c818461325a565b60018160200151036131dd5761317861351b565b83516001600160a01b039081168252602080860151908301526040808601519091169082015260608401516131ae906001612759565b6060820152608080850151908201526101c084015160a08201526101e084015160c082015261153c818461325a565b6131e561351b565b83516001600160a01b039081168252602080860151908301526040808601519091169082015260608085015190820152608080850151908201526101c084015160a08201526101e084015160c082015261153c818461325a565b60008261324c83826140cf565b915081111561277457600080fd5b604080516020810190915260008152600383608001511061327c576000613285565b60038360600151105b156133a3576132998360a001516002612759565b81526040805161010081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c0808b018a815260e08c019a909a528e516001600160a01b039081168c52988f0151909752998d0151909616909352908a0151905288015190915286015190925282519091528151613324906014612759565b60e0820152600560005543600155604051610a9390829060200160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b82606001518360800151116133bc5782604001516133bf565b82515b6001600160a01b03166108fc6133e66133dd6002876020015161340e565b624c4b40612759565b6040518115909202916000818181858888f19350505050158015610ed7573d6000803e3d6000fd5b60008115806134325750828261342481836140e2565b925061343090836140f9565b145b61277457600080fd5b60408051602081019091526000815290565b60405180610200016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5080546134ea9061386a565b6000825580601f106134fa575050565b601f01602090049060005260206000209081019061351891906135f4565b50565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b604051806101e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b8082111561360957600081556001016135f5565b5090565b6000604082840312156102ac57600080fd5b6000606082840312156102ac57600080fd5b60006060828403121561364357600080fd5b61364d838361361f565b9392505050565b6000602082840312156102ac57600080fd5b82815260006020604081840152835180604085015260005b8181101561369a5785810183015185820160600152820161367e565b506000606082860101526060601f19601f830116850101925050509392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101a081016001600160401b03811182821017156136f5576136f56136bc565b60405290565b6040516101c081016001600160401b03811182821017156136f5576136f56136bc565b60405161012081016001600160401b03811182821017156136f5576136f56136bc565b6040516101e081016001600160401b03811182821017156136f5576136f56136bc565b60006040828403121561377657600080fd5b604080519081016001600160401b0381118282101715613798576137986136bc565b604052823581526020928301359281019290925250919050565b6000606082840312156137c457600080fd5b604051606081016001600160401b03811182821017156137e6576137e66136bc565b80604052508091508235815260208301356020820152604083013560408201525092915050565b60006060828403121561381f57600080fd5b61364d83836137b2565b60006020828403121561383b57600080fd5b604051602081016001600160401b038111828210171561385d5761385d6136bc565b6040529135825250919050565b600181811c9082168061387e57607f821691505b6020821081036102ac57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146138b557600080fd5b919050565b805180151581146138b557600080fd5b60006101a082840312156138dd57600080fd5b6138e56136d2565b90506138f08261389e565b8152602082015160208201526139086040830161389e565b6040820152606082015160608201526080820151608082015261392d60a083016138ba565b60a082015260c0828101519082015260e0808301519082015261010080830151908201526101208083015190820152610140808301519082015261016080830151908201526101809182015191810191909152919050565b60006101a0828403121561399857600080fd5b61364d83836138ca565b6001600160a01b03169052565b6001600160a01b0392909216825280516020808401919091520151604082015260600190565b60006101008083850312156139e957600080fd5b604051908101906001600160401b0382118183101715613a0b57613a0b6136bc565b81604052613a188461389e565b815260208401516020820152613a306040850161389e565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161364d60208301848051825260208082015190830152604090810151910152565b601f821115610eee57600081815260208120601f850160051c81016020861015613aca5750805b601f850160051c820191505b81811015613ae957828155600101613ad6565b505050505050565b81516001600160401b03811115613b0a57613b0a6136bc565b613b1e81613b18845461386a565b84613aa3565b602080601f831160018114613b535760008415613b3b5750858301515b600019600386901b1c1916600185901b178555613ae9565b600085815260208120601f198616915b82811015613b8257888601518255948401946001909101908401613b63565b5085821015613ba05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006101c08284031215613bc357600080fd5b613bcb6136fb565b9050613bd68261389e565b815260208201516020820152613bee6040830161389e565b60408201526060820151606082015260808201516080820152613c1360a083016138ba565b60a082015260c0828101519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a09182015191810191909152919050565b60006101c08284031215613c8957600080fd5b61364d8383613bb0565b60006101208284031215613ca657600080fd5b613cae61371e565b613cb78361389e565b815260208301516020820152613ccf6040840161389e565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b0392909216825251602082015260400190565b60006101e08284031215613d4957600080fd5b613d51613741565b9050613d5c8261389e565b815260208201516020820152613d746040830161389e565b60408201526060820151606082015260808201516080820152613d9960a083016138ba565b60a082015260c0828101519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c09182015191810191909152919050565b60006101e08284031215613e1a57600080fd5b61364d8383613d36565b600060608284031215613e3657600080fd5b604051606081016001600160401b0381118282101715613e5857613e586136bc565b604052613e648361389e565b815260208301516020820152604083015160408201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561277457612774613e84565b613eb88282516139a2565b602081015160208301526040810151613ed460408401826139a2565b50606081015160608301526080810151608083015260a0810151613efc60a084018215159052565b5060c0818101519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a080820151908301526101c090810151910152565b6101e081016127748284613ead565b613f798282516139a2565b602081015160208301526040810151613f9560408401826139a2565b50606081015160608301526080810151608083015260a0810151613fbd60a084018215159052565b5060c0818101519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018090810151910152565b6101a081016127748284613f6e565b6140248282516139a2565b60208101516020830152604081015161404060408401826139a2565b50606081015160608301526080810151608083015260a081015161406860a084018215159052565b5060c0818101519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6101c081016127748284614019565b8181038181111561277457612774613e84565b808202811582820484141761277457612774613e84565b60008261411657634e487b7160e01b600052601260045260246000fd5b50049056fea164736f6c6343000811000a`,
  BytecodeLen: 17648,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:310:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:103:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:122:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:123:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:137:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:156:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:178:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:188:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:204:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:211:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:227:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:237:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:246:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:252:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:263:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Dealer": Dealer,
  "Player": Player
  };
export const _APIs = {
  };
