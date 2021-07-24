/* じゃんけんの手は 0: グー, 1: チョキ, 2: パー */
function rsp(playerselect) {
    var result;
    var playerselectHand;
    var comselectHand;
    var resultstring;
    var random = Math.random();
    var comselect = Math.floor(random * 3);
    console.log(comselect);
    console.log(playerselect);

    /* プレイヤーの勝ち負けは 0: 負け, 1: 勝ち, 2: あいこ */
    if (playerselect == comselect) {
        result = 2;
    } else {
        if (playerselect == 0) {
            if (comselect == 1) {
                result = 1;
            } else {
                result = 0;
            }
        } else if (playerselect == 1) {
            if (comselect == 0) {
                result = 0;
            } else {

                result = 1;
            }
        } else {
            if (comselect == 0) {
                result = 1;
            } else {
                result = 0;
            }
        }
    }
    console.log(result);

    if (playerselect == 0) {
        playerselectHand = "グー";
    } else if (playerselect == 1) {
        playerselectHand = "チョキ";
    } else {
        playerselectHand = "パー";
    }

    if (comselect == 0) {
        comselectHand = "グー";
    } else if (comselect == 1) {
        comselectHand = "チョキ";
    } else {
        comselectHand = "パー";
    }

    if (result == 0) {
        resultstring = "負け";
    } else if (result == 1) {
        resultstring = "勝ち";
    } else {
        resultstring = "あいこ";
    }

    document.getElementById('player').innerHTML = "あなたの手は " + playerselectHand + "、";
    document.getElementById('computer').innerHTML = "コンピューターは " + comselectHand + "なので";
    document.getElementById('result').innerHTML = "あなたが " + resultstring + " です。";

}
