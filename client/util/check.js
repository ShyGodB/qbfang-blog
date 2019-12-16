const handler = {};
const me = {};

handler.checkMainActiveIndex = (routeName) => {
    let activeIndex = "1";
    switch(routeName) {
        case "Index":
            activeIndex = "1";
            break;
        case "Operating":
            activeIndex = "2";
            break;
        case "Settle":
            activeIndex = "3";
            break;
        case "Data":
            activeIndex = "4";
            break;
        case "Setting":
            activeIndex = "5";
            break;
        default:
            break;
    }
    return activeIndex;
}

handler.checkSecondaryActiveIndex = (routeName, tab) => {
    let activeIndex = "1";
    switch(routeName) {
        case "Operating":
            activeIndex = me.checkOperating(tab);
            break;
        case "Settle":
            activeIndex = me.checkSettle(tab);
            break;
        case "Data":
            activeIndex = me.checkData(tab);
            break;
        case "Setting":
            activeIndex = me.checkSetting(tab);
            break;
        default:
            break;
    }
    return activeIndex;
}

me.checkOperating = (tab) => {
    let activeIndex = "1";
    switch(tab) {
        case "order":
            activeIndex = "1";
            break;
        case "user":
            activeIndex = "2";
            break;
        case "tech":
            activeIndex = "3";
            break;
        case "promote":
            activeIndex = "4";
            break;
        case "comment":
            activeIndex = "5";
            break;
        case "coupon":
            activeIndex = "6";
            break;
        case "project":
            activeIndex = "7";
            break;
        case "complaint":
            activeIndex = "8";
            break;
        case "techApply":
            activeIndex = "9";
            break;
        case "feedback":
            activeIndex = "10";
            break;
        case "review":
            activeIndex = "11";
            break;
        case "techTime":
            activeIndex = "12";
            break;
        case "alarm":
            activeIndex = "13";
            break;
        case "apply":
            activeIndex = "14";
            break;
        case "agent":
            activeIndex = "15";
            break;
        default:
            break;
    }
    return activeIndex;
}

me.checkSettle = (tab) => {
    let activeIndex = "1";
    switch(tab) {
        case "settlement":
            activeIndex = "1";
            break;
        case "cash":
            activeIndex = "2";
            break;
        case "techIncome":
            activeIndex = "3";
            break;
        case "account":
            activeIndex = "4";
            break;
        case "refund":
            activeIndex = "5";
            break;
        case "recharge":
            activeIndex = "6";
            break;
        default:
            break;
    }
    return activeIndex;
}

me.checkData = (tab) => {
    let activeIndex = "1";
    switch(tab) {
        case "generalSituation":
            activeIndex = "1";
            break;
        case "performanceAnalysis":
            activeIndex = "2";
            break;
        case "userAnalysis":
            activeIndex = "3";
            break;
        case "orderAnalysis":
            activeIndex = "4";
            break;
        case "techAnalysis":
            activeIndex = "5";
            break;
        case "pageTransform":
            activeIndex = "6";
            break;
        default:
            break;
    }
    return activeIndex;
}

me.checkSetting = (tab) => {
    let activeIndex = "1";
    switch(tab) {
        case "userList":
            activeIndex = "1";
            break;
        case "roleConfig":
            activeIndex = "2";
            break;
        case "menuConfig":
            activeIndex = "3";
            break;
        case "techMethod":
            activeIndex = "4";
            break;
        case "agentLevel":
            activeIndex = "5";
            break;
        case "timeManage":
            activeIndex = "6";
            break;
        case "announcement":
            activeIndex = "7";
            break;
        case "withdrawalTime":
            activeIndex = "8";
            break;
        case "advertisePush":
            activeIndex = "9";
            break;
        case "enterpriseManage":
            activeIndex = "10";
            break;
        default:
            break;
    }
    return activeIndex;
}


module.exports = handler;
