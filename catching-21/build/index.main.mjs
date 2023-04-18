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
  const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
  stdlib.protect(ctc1, await interact.acceptWager(v542), {
    at: './index.rsh:89:25:application',
    fs: ['at ./index.rsh:88:14:application call to [unknown function] (defined at: ./index.rsh:88:18:function exp)'],
    msg: 'acceptWager',
    who: 'Dealer'
    });
  
  const v557 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
  
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
      
      const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
      const v563 = stdlib.add(v542, v561);
      sim_r.txns.push({
        amt: v561,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v564 = stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0');
      const v565 = stdlib.checkedBigNumberify('./index.rsh:97:27:decimal', stdlib.UInt_max, '0');
      const v566 = v559;
      const v573 = v563;
      
      if (await (async () => {
        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
        const v580 = v578 ? v579 : false;
        
        return v580;})()) {
        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        }
      else {
        
        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
      at: './index.rsh:75:29:application',
      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Dealer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v560, time: v559, didSend: v47, from: v558 } = txn2;
    const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
    const v563 = stdlib.add(v542, v561);
    ;
    let v564 = stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0');
    let v565 = stdlib.checkedBigNumberify('./index.rsh:97:27:decimal', stdlib.UInt_max, '0');
    let v566 = v559;
    let v573 = v563;
    
    let txn3 = txn2;
    while (await (async () => {
      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
      const v580 = v578 ? v579 : false;
      
      return v580;})()) {
      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
      await ctc.waitUntilTime(v587);
      stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
        at: './index.rsh:108:25:application',
        fs: ['at ./index.rsh:107:9:application call to [unknown function] (defined at: ./index.rsh:107:31:function exp)'],
        msg: 'seeTallys',
        who: 'Dealer'
        });
      stdlib.protect(ctc1, await interact.resetView(), {
        at: './index.rsh:109:25:application',
        fs: ['at ./index.rsh:107:9:application call to [unknown function] (defined at: ./index.rsh:107:31:function exp)'],
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
          fs: ['at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Dealer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:75:29:application',
          fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
          at: './index.rsh:118:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Dealer'
          });
        const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
        const v624 = stdlib.protect(ctc2, await interact.startGame(), {
          at: './index.rsh:124:53:application',
          fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
          msg: 'startGame',
          who: 'Dealer'
          });
        const v625 = v624[stdlib.checkedBigNumberify('./index.rsh:124:53:application', stdlib.UInt_max, '0')];
        const v626 = v624[stdlib.checkedBigNumberify('./index.rsh:124:53:application', stdlib.UInt_max, '1')];
        const v629 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:125:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
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
          pay: [stdlib.checkedBigNumberify('./index.rsh:133:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v633, v634], secs: v636, time: v635, didSend: v110, from: v632 } = txn5;
            
            ;
            
            const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
            const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
            const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
            const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v644;
            const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
            const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
            const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
            const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v648;
            const v650 = stdlib.safeAdd(v645, v649);
            const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
            const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
            const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
            const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v653;
            const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:147:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:152:decimal', stdlib.UInt_max, '0');
            const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:147:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:177:decimal', stdlib.UInt_max, '0');
            const v659 = stdlib.safeAdd(v656, v658);
            const v660 = stdlib.checkedBigNumberify('./index.rsh:147:181:decimal', stdlib.UInt_max, '0');
            const v661 = stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, '1');
            const v662 = v654;
            const v663 = stdlib.checkedBigNumberify('./index.rsh:147:187:decimal', stdlib.UInt_max, '0');
            const v664 = v659;
            const v665 = stdlib.checkedBigNumberify('./index.rsh:147:67:decimal', stdlib.UInt_max, '1');
            const v666 = v650;
            const v667 = stdlib.checkedBigNumberify('./index.rsh:147:184:decimal', stdlib.UInt_max, '0');
            const v668 = v635;
            const v675 = v573;
            
            if (await (async () => {
              const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
              const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
              const v682 = v680 ? true : v681;
              
              return v682;})()) {
              const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
              if (v683) {
                sim_r.isHalt = false;
                }
              else {
                const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                const v698 = v696 ? v697 : false;
                if (v698) {
                  const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                  if (v745) {
                    const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                    const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                    const v793 = v791 ? v792 : false;
                    const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                    const v795 = v793 ? true : v794;
                    if (v795) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                      const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                      const v802 = v800 ? v801 : false;
                      if (v802) {
                        sim_r.isHalt = false;
                        }
                      else {
                        const v809 = stdlib.lt(v662, v666);
                        const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                        const v811 = v809 ? v810 : false;
                        if (v811) {
                          const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.isHalt = false;
                          }}}}}}}
            else {
              
              const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
              const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
              const v865 = stdlib.gt(v662, v666);
              const v866 = v864 ? v865 : false;
              const v867 = v863 ? true : v866;
              const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
              const v869 = stdlib.gt(v666, v662);
              const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
              const v871 = v869 ? true : v870;
              const v872 = v868 ? v871 : false;
              const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
              
              const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
              if (v877) {
                const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                    const v580 = v578 ? v579 : false;
                    
                    return v580;})()) {
                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                    sim_r.isHalt = false;
                    }
                  else {
                    
                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                if (v879) {
                  const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                      const v580 = v578 ? v579 : false;
                      
                      return v580;})()) {
                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                      sim_r.isHalt = false;
                      }
                    else {
                      
                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                      const v580 = v578 ? v579 : false;
                      
                      return v580;})()) {
                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                      sim_r.isHalt = false;
                      }
                    else {
                      
                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
            fs: ['at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Dealer'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:75:29:application',
            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
            at: './index.rsh:133:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Dealer'
            });
          stdlib.protect(ctc1, await interact.updateCards(v610), {
            at: './index.rsh:141:27:application',
            fs: ['at ./index.rsh:140:16:application call to [unknown function] (defined at: ./index.rsh:140:20:function exp)'],
            msg: 'updateCards',
            who: 'Dealer'
            });
          
          const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v644;
          const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v648;
          const v650 = stdlib.safeAdd(v645, v649);
          const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v653;
          const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:147:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:152:decimal', stdlib.UInt_max, '0');
          const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:147:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:177:decimal', stdlib.UInt_max, '0');
          const v659 = stdlib.safeAdd(v656, v658);
          let v660 = stdlib.checkedBigNumberify('./index.rsh:147:181:decimal', stdlib.UInt_max, '0');
          let v661 = stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, '1');
          let v662 = v654;
          let v663 = stdlib.checkedBigNumberify('./index.rsh:147:187:decimal', stdlib.UInt_max, '0');
          let v664 = v659;
          let v665 = stdlib.checkedBigNumberify('./index.rsh:147:67:decimal', stdlib.UInt_max, '1');
          let v666 = v650;
          let v667 = stdlib.checkedBigNumberify('./index.rsh:147:184:decimal', stdlib.UInt_max, '0');
          let v668 = v635;
          let v675 = v573;
          
          let txn6 = txn5;
          while (await (async () => {
            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
            const v682 = v680 ? true : v681;
            
            return v682;})()) {
            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
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
                at: './index.rsh:162:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Dealer'
                });
              const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:165:24:decimal', stdlib.UInt_max, '1'));
              if (v692) {
                const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:166:35:decimal', stdlib.UInt_max, '10'));
                const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:166:47:decimal', stdlib.UInt_max, '1'));
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
                const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:170:28:decimal', stdlib.UInt_max, '1'));
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
              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
              const v698 = v696 ? v697 : false;
              if (v698) {
                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
                    fs: ['at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Dealer'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:75:29:application',
                    fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                    at: './index.rsh:184:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Dealer'
                    });
                  stdlib.protect(ctc1, await interact.updateCards(v711), {
                    at: './index.rsh:189:31:application',
                    fs: ['at ./index.rsh:188:20:application call to [unknown function] (defined at: ./index.rsh:188:24:function exp)'],
                    msg: 'updateCards',
                    who: 'Dealer'
                    });
                  
                  const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:195:60:decimal', stdlib.UInt_max, '1'));
                  const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:195:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:195:68:decimal', stdlib.UInt_max, '1');
                  const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                  const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                  const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                  const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v721;
                  const v723 = stdlib.safeAdd(v666, v722);
                  let v725;
                  if (v719) {
                    const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:195:131:decimal', stdlib.UInt_max, '1'));
                    v725 = v726;
                    }
                  else {
                    v725 = v664;
                    }
                  const cv660 = v660;
                  const cv661 = stdlib.checkedBigNumberify('./index.rsh:195:72:decimal', stdlib.UInt_max, '1');
                  const cv662 = v662;
                  const cv663 = v663;
                  const cv664 = v725;
                  const cv665 = v718;
                  const cv666 = v723;
                  const cv667 = stdlib.checkedBigNumberify('./index.rsh:195:106:decimal', stdlib.UInt_max, '1');
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
                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                if (v745) {
                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                  const txn7 = await (ctc.sendrecv({
                    args: [v541, v542, v558, v564, v565, v651, v661, v662, v664, v665, v666, v667, v675, v752, v625],
                    evt_cnt: 1,
                    funcNum: 12,
                    lct: v668,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn7) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v757], secs: v759, time: v758, didSend: v240, from: v756 } = txn7;
                      
                      ;
                      const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                      const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                      const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                      const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v765;
                      const v767 = stdlib.safeAdd(v662, v766);
                      const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:217:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:81:decimal', stdlib.UInt_max, '0');
                      const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:217:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:106:decimal', stdlib.UInt_max, '0');
                      const v772 = stdlib.safeAdd(v769, v771);
                      const cv660 = v772;
                      const cv661 = v661;
                      const cv662 = v767;
                      const cv663 = stdlib.checkedBigNumberify('./index.rsh:217:59:decimal', stdlib.UInt_max, '1');
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
                          const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                          const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                          const v682 = v680 ? true : v681;
                          
                          return v682;})()) {
                          const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                          if (v683) {
                            sim_r.isHalt = false;
                            }
                          else {
                            const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                            const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                            const v698 = v696 ? v697 : false;
                            if (v698) {
                              const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                              if (v745) {
                                const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                                const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                                const v793 = v791 ? v792 : false;
                                const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                                const v795 = v793 ? true : v794;
                                if (v795) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                  const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                  const v802 = v800 ? v801 : false;
                                  if (v802) {
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v809 = stdlib.lt(v662, v666);
                                    const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                    const v811 = v809 ? v810 : false;
                                    if (v811) {
                                      const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      sim_r.isHalt = false;
                                      }}}}}}}
                        else {
                          
                          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                          const v865 = stdlib.gt(v662, v666);
                          const v866 = v864 ? v865 : false;
                          const v867 = v863 ? true : v866;
                          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                          const v869 = stdlib.gt(v666, v662);
                          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                          const v871 = v869 ? true : v870;
                          const v872 = v868 ? v871 : false;
                          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                          
                          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                          if (v877) {
                            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                            if (v879) {
                              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                      fs: ['at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:75:29:application',
                      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                      at: './index.rsh:207:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                    const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                    const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                    const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v765;
                    const v767 = stdlib.safeAdd(v662, v766);
                    const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:217:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:81:decimal', stdlib.UInt_max, '0');
                    const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:217:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:106:decimal', stdlib.UInt_max, '0');
                    const v772 = stdlib.safeAdd(v769, v771);
                    const cv660 = v772;
                    const cv661 = v661;
                    const cv662 = v767;
                    const cv663 = stdlib.checkedBigNumberify('./index.rsh:217:59:decimal', stdlib.UInt_max, '1');
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
                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                  const v793 = v791 ? v792 : false;
                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                  const v795 = v793 ? true : v794;
                  if (v795) {
                    const txn7 = await (ctc.sendrecv({
                      args: [v541, v542, v558, v564, v565, v651, v660, v662, v663, v664, v666, v667, v675],
                      evt_cnt: 0,
                      funcNum: 14,
                      lct: v668,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('./index.rsh:225:18:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn7) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v798, time: v797, didSend: v298, from: v796 } = txn7;
                        
                        ;
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:228:32:decimal', stdlib.UInt_max, '0');
                        const cv662 = v662;
                        const cv663 = v663;
                        const cv664 = v664;
                        const cv665 = stdlib.checkedBigNumberify('./index.rsh:228:29:decimal', stdlib.UInt_max, '0');
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
                            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                            const v682 = v680 ? true : v681;
                            
                            return v682;})()) {
                            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                            if (v683) {
                              sim_r.isHalt = false;
                              }
                            else {
                              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                              const v698 = v696 ? v697 : false;
                              if (v698) {
                                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                                if (v745) {
                                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                                  const v793 = v791 ? v792 : false;
                                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                                  const v795 = v793 ? true : v794;
                                  if (v795) {
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                    const v802 = v800 ? v801 : false;
                                    if (v802) {
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v809 = stdlib.lt(v662, v666);
                                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                      const v811 = v809 ? v810 : false;
                                      if (v811) {
                                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        sim_r.isHalt = false;
                                        }}}}}}}
                          else {
                            
                            const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                            const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                            const v865 = stdlib.gt(v662, v666);
                            const v866 = v864 ? v865 : false;
                            const v867 = v863 ? true : v866;
                            const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                            const v869 = stdlib.gt(v666, v662);
                            const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                            const v871 = v869 ? true : v870;
                            const v872 = v868 ? v871 : false;
                            const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                            
                            const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                            if (v877) {
                              const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                                  const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                  const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                  const v580 = v578 ? v579 : false;
                                  
                                  return v580;})()) {
                                  const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                  const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  
                                  const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                  const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                              const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                              if (v879) {
                                const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                      at: './index.rsh:225:18:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Dealer'
                      });
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:228:32:decimal', stdlib.UInt_max, '0');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v664;
                    const cv665 = stdlib.checkedBigNumberify('./index.rsh:228:29:decimal', stdlib.UInt_max, '0');
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
                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                    const v802 = v800 ? v801 : false;
                    if (v802) {
                      const txn7 = await (ctc.sendrecv({
                        args: [v541, v542, v558, v564, v565, v651, v660, v661, v662, v663, v664, v665, v666, v667, v675],
                        evt_cnt: 0,
                        funcNum: 15,
                        lct: v668,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('./index.rsh:235:20:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn7) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v805, time: v804, didSend: v306, from: v803 } = txn7;
                          
                          ;
                          const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:238:37:decimal', stdlib.UInt_max, '10'));
                          const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:238:49:decimal', stdlib.UInt_max, '1'));
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
                              const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                              const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                              const v682 = v680 ? true : v681;
                              
                              return v682;})()) {
                              const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                              if (v683) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                                const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                                const v698 = v696 ? v697 : false;
                                if (v698) {
                                  const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                                  if (v745) {
                                    const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                                    const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                                    const v793 = v791 ? v792 : false;
                                    const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                                    const v795 = v793 ? true : v794;
                                    if (v795) {
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                      const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                      const v802 = v800 ? v801 : false;
                                      if (v802) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v809 = stdlib.lt(v662, v666);
                                        const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                        const v811 = v809 ? v810 : false;
                                        if (v811) {
                                          const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          sim_r.isHalt = false;
                                          }}}}}}}
                            else {
                              
                              const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                              const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                              const v865 = stdlib.gt(v662, v666);
                              const v866 = v864 ? v865 : false;
                              const v867 = v863 ? true : v866;
                              const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                              const v869 = stdlib.gt(v666, v662);
                              const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                              const v871 = v869 ? true : v870;
                              const v872 = v868 ? v871 : false;
                              const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                              const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                              
                              const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                              if (v877) {
                                const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                                    const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                    const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                    const v580 = v578 ? v579 : false;
                                    
                                    return v580;})()) {
                                    const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                    const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    
                                    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                                if (v879) {
                                  const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                        at: './index.rsh:235:20:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Dealer'
                        });
                      const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:238:37:decimal', stdlib.UInt_max, '10'));
                      const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:238:49:decimal', stdlib.UInt_max, '1'));
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
                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                      const v811 = v809 ? v810 : false;
                      if (v811) {
                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                        const v822 = stdlib.protect(ctc0, await interact.autoCard(), {
                          at: './index.rsh:246:61:application',
                          fs: ['at ./index.rsh:244:28:application call to [unknown function] (defined at: ./index.rsh:244:32:function exp)'],
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
                          pay: [stdlib.checkedBigNumberify('./index.rsh:248:24:decimal', stdlib.UInt_max, '0'), []],
                          sim_p: (async (txn7) => {
                            const sim_r = { txns: [], mapRefs: [], maps: [] };
                            let sim_txn_ctr = stdlib.UInt_max;
                            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                            
                            
                            const {data: [v824], secs: v826, time: v825, didSend: v321, from: v823 } = txn7;
                            
                            ;
                            const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                            const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                            const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                            const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v832;
                            const v834 = stdlib.safeAdd(v662, v833);
                            let v836;
                            if (v830) {
                              const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:257:119:decimal', stdlib.UInt_max, '1'));
                              v836 = v837;
                              }
                            else {
                              v836 = v660;
                              }
                            const cv660 = v836;
                            const cv661 = stdlib.checkedBigNumberify('./index.rsh:257:61:decimal', stdlib.UInt_max, '1');
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
                                const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                                const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                                const v682 = v680 ? true : v681;
                                
                                return v682;})()) {
                                const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                                if (v683) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                                  const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                                  const v698 = v696 ? v697 : false;
                                  if (v698) {
                                    const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                                    if (v745) {
                                      const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                                      const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                                      const v793 = v791 ? v792 : false;
                                      const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                                      const v795 = v793 ? true : v794;
                                      if (v795) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                        const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                        const v802 = v800 ? v801 : false;
                                        if (v802) {
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          const v809 = stdlib.lt(v662, v666);
                                          const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                          const v811 = v809 ? v810 : false;
                                          if (v811) {
                                            const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                            sim_r.isHalt = false;
                                            }
                                          else {
                                            sim_r.isHalt = false;
                                            }}}}}}}
                              else {
                                
                                const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                                const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                                const v865 = stdlib.gt(v662, v666);
                                const v866 = v864 ? v865 : false;
                                const v867 = v863 ? true : v866;
                                const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                                const v869 = stdlib.gt(v666, v662);
                                const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                                const v871 = v869 ? true : v870;
                                const v872 = v868 ? v871 : false;
                                const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                                const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                                
                                const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                                if (v877) {
                                  const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                  const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                                  if (v879) {
                                    const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                            fs: ['at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'sender correct',
                            who: 'Dealer'
                            });
                          ;
                          stdlib.protect(ctc1, await interact.informTimeout(), {
                            at: './index.rsh:75:29:application',
                            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                            at: './index.rsh:248:24:dot',
                            fs: [],
                            msg: 'sender correct',
                            who: 'Dealer'
                            });
                          const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                          const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                          const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                          const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v832;
                          const v834 = stdlib.safeAdd(v662, v833);
                          let v836;
                          if (v830) {
                            const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:257:119:decimal', stdlib.UInt_max, '1'));
                            v836 = v837;
                            }
                          else {
                            v836 = v660;
                            }
                          const cv660 = v836;
                          const cv661 = stdlib.checkedBigNumberify('./index.rsh:257:61:decimal', stdlib.UInt_max, '1');
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
                          pay: [stdlib.checkedBigNumberify('./index.rsh:261:22:decimal', stdlib.UInt_max, '0'), []],
                          sim_p: (async (txn7) => {
                            const sim_r = { txns: [], mapRefs: [], maps: [] };
                            let sim_txn_ctr = stdlib.UInt_max;
                            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                            
                            
                            const {data: [], secs: v858, time: v857, didSend: v372, from: v856 } = txn7;
                            
                            ;
                            const cv660 = v660;
                            const cv661 = stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '0');
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
                                const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                                const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                                const v682 = v680 ? true : v681;
                                
                                return v682;})()) {
                                const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                                if (v683) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                                  const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                                  const v698 = v696 ? v697 : false;
                                  if (v698) {
                                    const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                                    if (v745) {
                                      const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                                      const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                                      const v793 = v791 ? v792 : false;
                                      const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                                      const v795 = v793 ? true : v794;
                                      if (v795) {
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                        const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                        const v802 = v800 ? v801 : false;
                                        if (v802) {
                                          sim_r.isHalt = false;
                                          }
                                        else {
                                          const v809 = stdlib.lt(v662, v666);
                                          const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                          const v811 = v809 ? v810 : false;
                                          if (v811) {
                                            const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                            sim_r.isHalt = false;
                                            }
                                          else {
                                            sim_r.isHalt = false;
                                            }}}}}}}
                              else {
                                
                                const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                                const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                                const v865 = stdlib.gt(v662, v666);
                                const v866 = v864 ? v865 : false;
                                const v867 = v863 ? true : v866;
                                const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                                const v869 = stdlib.gt(v666, v662);
                                const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                                const v871 = v869 ? true : v870;
                                const v872 = v868 ? v871 : false;
                                const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                                const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                                
                                const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                                if (v877) {
                                  const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                                      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                      const v580 = v578 ? v579 : false;
                                      
                                      return v580;})()) {
                                      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                      sim_r.isHalt = false;
                                      }
                                    else {
                                      
                                      const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                      const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                  const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                                  if (v879) {
                                    const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                        const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                        const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                        const v580 = v578 ? v579 : false;
                                        
                                        return v580;})()) {
                                        const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                        const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                        sim_r.isHalt = false;
                                        }
                                      else {
                                        
                                        const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                        const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                          at: './index.rsh:261:22:dot',
                          fs: [],
                          msg: 'sender correct',
                          who: 'Dealer'
                          });
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '0');
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
            at: './index.rsh:274:24:application',
            fs: ['at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:20:function exp)'],
            msg: 'showLast',
            who: 'Dealer'
            });
          
          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
          const v865 = stdlib.gt(v662, v666);
          const v866 = v864 ? v865 : false;
          const v867 = v863 ? true : v866;
          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
          const v869 = stdlib.gt(v666, v662);
          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
          const v871 = v869 ? true : v870;
          const v872 = v868 ? v871 : false;
          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
          stdlib.protect(ctc1, await interact.seeOutcome(v862, v666, v662, v565, v564), {
            at: './index.rsh:281:26:application',
            fs: ['at ./index.rsh:280:9:application call to [unknown function] (defined at: ./index.rsh:280:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Dealer'
            });
          
          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
          if (v877) {
            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
            if (v879) {
              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
      at: './index.rsh:302:23:application',
      fs: ['at ./index.rsh:301:7:application call to [unknown function] (defined at: ./index.rsh:301:29:function exp)'],
      msg: 'seeTallys',
      who: 'Dealer'
      });
    
    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
    lct: stdlib.checkedBigNumberify('./index.rsh:83:10:dot', stdlib.UInt_max, '0'),
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
      const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
  const v553 = stdlib.safeAdd(v543, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
      at: './index.rsh:75:29:application',
      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v560, time: v559, didSend: v47, from: v558 } = txn2;
    const v561 = stdlib.safeAdd(v542, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
    const v563 = stdlib.add(v542, v561);
    ;
    let v564 = stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0');
    let v565 = stdlib.checkedBigNumberify('./index.rsh:97:27:decimal', stdlib.UInt_max, '0');
    let v566 = v559;
    let v573 = v563;
    
    let txn3 = txn2;
    while (await (async () => {
      const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
      const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
      const v580 = v578 ? v579 : false;
      
      return v580;})()) {
      const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
      const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
      await ctc.waitUntilTime(v587);
      stdlib.protect(ctc1, await interact.seeTallys(v565, v564), {
        at: './index.rsh:108:25:application',
        fs: ['at ./index.rsh:107:9:application call to [unknown function] (defined at: ./index.rsh:107:31:function exp)'],
        msg: 'seeTallys',
        who: 'Player'
        });
      stdlib.protect(ctc1, await interact.resetView(), {
        at: './index.rsh:109:25:application',
        fs: ['at ./index.rsh:107:9:application call to [unknown function] (defined at: ./index.rsh:107:31:function exp)'],
        msg: 'resetView',
        who: 'Player'
        });
      
      const v603 = stdlib.protect(ctc2, await interact.startGame(), {
        at: './index.rsh:114:62:application',
        fs: ['at ./index.rsh:113:16:application call to [unknown function] (defined at: ./index.rsh:113:20:function exp)'],
        msg: 'startGame',
        who: 'Player'
        });
      const v604 = v603[stdlib.checkedBigNumberify('./index.rsh:114:62:application', stdlib.UInt_max, '0')];
      const v605 = v603[stdlib.checkedBigNumberify('./index.rsh:114:62:application', stdlib.UInt_max, '1')];
      
      const txn4 = await (ctc.sendrecv({
        args: [v541, v542, v558, v564, v565, v573, v587, v595, v604, v605],
        evt_cnt: 2,
        funcNum: 4,
        lct: v566,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v609, v610], secs: v612, time: v611, didSend: v91, from: v608 } = txn4;
          
          ;
          const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
          fs: ['at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:75:29:application',
          fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
          at: './index.rsh:118:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player'
          });
        const v620 = stdlib.safeAdd(v611, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
            fs: ['at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Player'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:75:29:application',
            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
            at: './index.rsh:133:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Player'
            });
          stdlib.protect(ctc1, await interact.updateCards(v634), {
            at: './index.rsh:138:27:application',
            fs: ['at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:20:function exp)'],
            msg: 'updateCards',
            who: 'Player'
            });
          
          const v642 = stdlib.eq(v609, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v643 = stdlib.lt(v609, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v644 = v643 ? v609 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v645 = v642 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v644;
          const v646 = stdlib.eq(v610, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v647 = stdlib.lt(v610, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v648 = v647 ? v610 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v649 = v646 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v648;
          const v650 = stdlib.safeAdd(v645, v649);
          const v651 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
          const v652 = stdlib.lt(v634, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
          const v653 = v652 ? v634 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
          const v654 = v651 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v653;
          const v656 = v642 ? stdlib.checkedBigNumberify('./index.rsh:147:148:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:152:decimal', stdlib.UInt_max, '0');
          const v658 = v646 ? stdlib.checkedBigNumberify('./index.rsh:147:173:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:147:177:decimal', stdlib.UInt_max, '0');
          const v659 = stdlib.safeAdd(v656, v658);
          let v660 = stdlib.checkedBigNumberify('./index.rsh:147:181:decimal', stdlib.UInt_max, '0');
          let v661 = stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, '1');
          let v662 = v654;
          let v663 = stdlib.checkedBigNumberify('./index.rsh:147:187:decimal', stdlib.UInt_max, '0');
          let v664 = v659;
          let v665 = stdlib.checkedBigNumberify('./index.rsh:147:67:decimal', stdlib.UInt_max, '1');
          let v666 = v650;
          let v667 = stdlib.checkedBigNumberify('./index.rsh:147:184:decimal', stdlib.UInt_max, '0');
          let v668 = v635;
          let v675 = v573;
          
          let txn6 = txn5;
          while (await (async () => {
            const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
            const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
            const v682 = v680 ? true : v681;
            
            return v682;})()) {
            const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
            if (v683) {
              const v686 = stdlib.protect(ctc0, await interact.getAceValue(v664, v666), {
                at: './index.rsh:158:59:application',
                fs: ['at ./index.rsh:157:20:application call to [unknown function] (defined at: ./index.rsh:157:24:function exp)'],
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
                pay: [stdlib.checkedBigNumberify('./index.rsh:162:16:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v688], secs: v690, time: v689, didSend: v165, from: v687 } = txn7;
                  
                  ;
                  const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:165:24:decimal', stdlib.UInt_max, '1'));
                  if (v692) {
                    const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:166:35:decimal', stdlib.UInt_max, '10'));
                    const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:166:47:decimal', stdlib.UInt_max, '1'));
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
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                    const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:170:28:decimal', stdlib.UInt_max, '1'));
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
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                at: './index.rsh:162:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Player'
                });
              const v692 = stdlib.eq(v688, stdlib.checkedBigNumberify('./index.rsh:165:24:decimal', stdlib.UInt_max, '1'));
              if (v692) {
                const v693 = stdlib.safeSub(v666, stdlib.checkedBigNumberify('./index.rsh:166:35:decimal', stdlib.UInt_max, '10'));
                const v694 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:166:47:decimal', stdlib.UInt_max, '1'));
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
                const v695 = stdlib.safeSub(v664, stdlib.checkedBigNumberify('./index.rsh:170:28:decimal', stdlib.UInt_max, '1'));
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
              const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
              const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
              const v698 = v696 ? v697 : false;
              if (v698) {
                const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                const v709 = stdlib.protect(ctc0, await interact.getCard(), {
                  at: './index.rsh:182:52:application',
                  fs: ['at ./index.rsh:181:20:application call to [unknown function] (defined at: ./index.rsh:181:24:function exp)'],
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
                  pay: [stdlib.checkedBigNumberify('./index.rsh:184:16:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn7) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v711], secs: v713, time: v712, didSend: v182, from: v710 } = txn7;
                    
                    ;
                    const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:195:60:decimal', stdlib.UInt_max, '1'));
                    const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:195:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:195:68:decimal', stdlib.UInt_max, '1');
                    const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                    const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                    const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                    const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v721;
                    const v723 = stdlib.safeAdd(v666, v722);
                    let v725;
                    if (v719) {
                      const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:195:131:decimal', stdlib.UInt_max, '1'));
                      v725 = v726;
                      }
                    else {
                      v725 = v664;
                      }
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:195:72:decimal', stdlib.UInt_max, '1');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v725;
                    const cv665 = v718;
                    const cv666 = v723;
                    const cv667 = stdlib.checkedBigNumberify('./index.rsh:195:106:decimal', stdlib.UInt_max, '1');
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
                        const v680 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '1'));
                        const v681 = stdlib.eq(v661, stdlib.checkedBigNumberify('./index.rsh:149:34:decimal', stdlib.UInt_max, '1'));
                        const v682 = v680 ? true : v681;
                        
                        return v682;})()) {
                        const v683 = stdlib.gt(v664, stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, '0'));
                        if (v683) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v696 = stdlib.eq(v665, stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, '1'));
                          const v697 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:174:31:decimal', stdlib.UInt_max, '21'));
                          const v698 = v696 ? v697 : false;
                          if (v698) {
                            const v705 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                            sim_r.isHalt = false;
                            }
                          else {
                            const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                            if (v745) {
                              const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                              const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                              const v793 = v791 ? v792 : false;
                              const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
                              const v795 = v793 ? true : v794;
                              if (v795) {
                                sim_r.isHalt = false;
                                }
                              else {
                                const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                                const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
                                const v802 = v800 ? v801 : false;
                                if (v802) {
                                  sim_r.isHalt = false;
                                  }
                                else {
                                  const v809 = stdlib.lt(v662, v666);
                                  const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                                  const v811 = v809 ? v810 : false;
                                  if (v811) {
                                    const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                    sim_r.isHalt = false;
                                    }
                                  else {
                                    sim_r.isHalt = false;
                                    }}}}}}}
                      else {
                        const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
                        const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
                        const v865 = stdlib.gt(v662, v666);
                        const v866 = v864 ? v865 : false;
                        const v867 = v863 ? true : v866;
                        const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
                        const v869 = stdlib.gt(v666, v662);
                        const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
                        const v871 = v869 ? true : v870;
                        const v872 = v868 ? v871 : false;
                        const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
                        
                        const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
                        if (v877) {
                          const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
                              const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                              const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                              const v580 = v578 ? v579 : false;
                              
                              return v580;})()) {
                              const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                              const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                              sim_r.isHalt = false;
                              }
                            else {
                              
                              const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                              const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                          const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
                          if (v879) {
                            const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                                const v578 = stdlib.lt(v565, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '3'));
                                const v579 = stdlib.lt(v564, stdlib.checkedBigNumberify('./index.rsh:99:32:decimal', stdlib.UInt_max, '3'));
                                const v580 = v578 ? v579 : false;
                                
                                return v580;})()) {
                                const v587 = stdlib.safeAdd(v566, stdlib.checkedBigNumberify('./index.rsh:103:23:decimal', stdlib.UInt_max, '2'));
                                const v595 = stdlib.safeAdd(v587, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
                                sim_r.isHalt = false;
                                }
                              else {
                                
                                const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
                                const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
                    fs: ['at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Player'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:75:29:application',
                    fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                    at: './index.rsh:184:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Player'
                    });
                  const v717 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:195:60:decimal', stdlib.UInt_max, '1'));
                  const v718 = v717 ? stdlib.checkedBigNumberify('./index.rsh:195:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:195:68:decimal', stdlib.UInt_max, '1');
                  const v719 = stdlib.eq(v711, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                  const v720 = stdlib.lt(v711, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                  const v721 = v720 ? v711 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                  const v722 = v719 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v721;
                  const v723 = stdlib.safeAdd(v666, v722);
                  let v725;
                  if (v719) {
                    const v726 = stdlib.safeAdd(v664, stdlib.checkedBigNumberify('./index.rsh:195:131:decimal', stdlib.UInt_max, '1'));
                    v725 = v726;
                    }
                  else {
                    v725 = v664;
                    }
                  const cv660 = v660;
                  const cv661 = stdlib.checkedBigNumberify('./index.rsh:195:72:decimal', stdlib.UInt_max, '1');
                  const cv662 = v662;
                  const cv663 = v663;
                  const cv664 = v725;
                  const cv665 = v718;
                  const cv666 = v723;
                  const cv667 = stdlib.checkedBigNumberify('./index.rsh:195:106:decimal', stdlib.UInt_max, '1');
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
                const v745 = stdlib.eq(v663, stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'));
                if (v745) {
                  const v752 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
                      fs: ['at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:75:29:application',
                      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                      at: './index.rsh:207:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    stdlib.protect(ctc1, await interact.showLast(v757), {
                      at: './index.rsh:212:28:application',
                      fs: ['at ./index.rsh:211:20:application call to [unknown function] (defined at: ./index.rsh:211:24:function exp)'],
                      msg: 'showLast',
                      who: 'Player'
                      });
                    
                    const v763 = stdlib.eq(v757, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                    const v764 = stdlib.lt(v757, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                    const v765 = v764 ? v757 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                    const v766 = v763 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v765;
                    const v767 = stdlib.safeAdd(v662, v766);
                    const v769 = v763 ? stdlib.checkedBigNumberify('./index.rsh:217:77:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:81:decimal', stdlib.UInt_max, '0');
                    const v771 = v651 ? stdlib.checkedBigNumberify('./index.rsh:217:102:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:217:106:decimal', stdlib.UInt_max, '0');
                    const v772 = stdlib.safeAdd(v769, v771);
                    const cv660 = v772;
                    const cv661 = v661;
                    const cv662 = v767;
                    const cv663 = stdlib.checkedBigNumberify('./index.rsh:217:59:decimal', stdlib.UInt_max, '1');
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
                  const v791 = stdlib.eq(v667, stdlib.checkedBigNumberify('./index.rsh:223:22:decimal', stdlib.UInt_max, '0'));
                  const v792 = stdlib.eq(v666, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '21'));
                  const v793 = v791 ? v792 : false;
                  const v794 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '21'));
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
                      at: './index.rsh:225:18:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Player'
                      });
                    const cv660 = v660;
                    const cv661 = stdlib.checkedBigNumberify('./index.rsh:228:32:decimal', stdlib.UInt_max, '0');
                    const cv662 = v662;
                    const cv663 = v663;
                    const cv664 = v664;
                    const cv665 = stdlib.checkedBigNumberify('./index.rsh:228:29:decimal', stdlib.UInt_max, '0');
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
                    const v800 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:233:21:decimal', stdlib.UInt_max, '21'));
                    const v801 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:233:35:decimal', stdlib.UInt_max, '0'));
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
                        at: './index.rsh:235:20:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Player'
                        });
                      const v807 = stdlib.safeSub(v662, stdlib.checkedBigNumberify('./index.rsh:238:37:decimal', stdlib.UInt_max, '10'));
                      const v808 = stdlib.safeSub(v660, stdlib.checkedBigNumberify('./index.rsh:238:49:decimal', stdlib.UInt_max, '1'));
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
                      const v810 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:242:41:decimal', stdlib.UInt_max, '21'));
                      const v811 = v809 ? v810 : false;
                      if (v811) {
                        const v818 = stdlib.safeAdd(v668, stdlib.checkedBigNumberify('./index.rsh:59:18:decimal', stdlib.UInt_max, '20'));
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
                            fs: ['at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                            msg: 'sender correct',
                            who: 'Player'
                            });
                          ;
                          stdlib.protect(ctc1, await interact.informTimeout(), {
                            at: './index.rsh:75:29:application',
                            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
                            at: './index.rsh:248:24:dot',
                            fs: [],
                            msg: 'sender correct',
                            who: 'Player'
                            });
                          stdlib.protect(ctc1, await interact.updateCards(v824), {
                            at: './index.rsh:253:39:application',
                            fs: ['at ./index.rsh:252:28:application call to [unknown function] (defined at: ./index.rsh:252:32:function exp)'],
                            msg: 'updateCards',
                            who: 'Player'
                            });
                          
                          const v830 = stdlib.eq(v824, stdlib.checkedBigNumberify('./index.rsh:58:32:decimal', stdlib.UInt_max, '1'));
                          const v831 = stdlib.lt(v824, stdlib.checkedBigNumberify('./index.rsh:58:46:decimal', stdlib.UInt_max, '10'));
                          const v832 = v831 ? v824 : stdlib.checkedBigNumberify('./index.rsh:58:55:decimal', stdlib.UInt_max, '10');
                          const v833 = v830 ? stdlib.checkedBigNumberify('./index.rsh:58:36:decimal', stdlib.UInt_max, '11') : v832;
                          const v834 = stdlib.safeAdd(v662, v833);
                          let v836;
                          if (v830) {
                            const v837 = stdlib.safeAdd(v660, stdlib.checkedBigNumberify('./index.rsh:257:119:decimal', stdlib.UInt_max, '1'));
                            v836 = v837;
                            }
                          else {
                            v836 = v660;
                            }
                          const cv660 = v836;
                          const cv661 = stdlib.checkedBigNumberify('./index.rsh:257:61:decimal', stdlib.UInt_max, '1');
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
                          at: './index.rsh:261:22:dot',
                          fs: [],
                          msg: 'sender correct',
                          who: 'Player'
                          });
                        const cv660 = v660;
                        const cv661 = stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '0');
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
          const v863 = stdlib.gt(v666, stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, '21'));
          const v864 = stdlib.lt(v662, stdlib.checkedBigNumberify('./index.rsh:24:33:decimal', stdlib.UInt_max, '22'));
          const v865 = stdlib.gt(v662, v666);
          const v866 = v864 ? v865 : false;
          const v867 = v863 ? true : v866;
          const v868 = stdlib.lt(v666, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '22'));
          const v869 = stdlib.gt(v666, v662);
          const v870 = stdlib.gt(v662, stdlib.checkedBigNumberify('./index.rsh:27:52:decimal', stdlib.UInt_max, '21'));
          const v871 = v869 ? true : v870;
          const v872 = v868 ? v871 : false;
          const v946 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v862 = v867 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v946;
          stdlib.protect(ctc1, await interact.seeOutcome(v862, v666, v662, v565, v564), {
            at: './index.rsh:281:26:application',
            fs: ['at ./index.rsh:280:9:application call to [unknown function] (defined at: ./index.rsh:280:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Player'
            });
          
          const v877 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
          if (v877) {
            const v878 = stdlib.safeAdd(v565, stdlib.checkedBigNumberify('./index.rsh:286:36:decimal', stdlib.UInt_max, '1'));
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
            const v879 = stdlib.eq(v862, stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '1'));
            if (v879) {
              const v880 = stdlib.safeAdd(v564, stdlib.checkedBigNumberify('./index.rsh:291:46:decimal', stdlib.UInt_max, '1'));
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
      at: './index.rsh:302:23:application',
      fs: ['at ./index.rsh:301:7:application call to [unknown function] (defined at: ./index.rsh:301:29:function exp)'],
      msg: 'seeTallys',
      who: 'Player'
      });
    
    const v921 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:306:13:decimal', stdlib.UInt_max, '2'), v542);
    const v922 = stdlib.safeAdd(v921, stdlib.checkedBigNumberify('./index.rsh:18:20:decimal', stdlib.UInt_max, '5000000'));
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
    1456: `84