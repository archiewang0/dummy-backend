declare const enum AcquirerNameEnum {
    TW_CATGAY = 'TW_CATGAY',            //國泰世華銀行
    TW_ESUN = 'TW_ESUN',                //玉山銀行
    TW_TAISHIN = 'TW_TAISHIN',          //台新銀行
    TW_CTBC = 'TW_CTBC',                //中國信託銀行
    TW_NEW_SINOPAC = 'TW_NEW_SINOPAC',  //永豐銀行
    TW_KAIGI = 'TW_KAIGI',              //凱基銀行
    TW_TCB = 'TW_TCB',                  //合作金庫銀行
    TW_FIRST = 'TW_FIRST',              //第一銀行
    TW_NCCC = 'TW_NCCC',                //財團法人聯合信用卡處理中心
    TW_SPGATEWAY = 'TW_SPGATEWAY',      //藍新金流	
    TW_FUBON = 'TW_FUBON',              //台北富邦銀行
    TW_SUNNY = 'TW_SUNNY',              //陽信銀行
    HK_BOC = 'HK_BOC',                  //中國銀行
    TW_UBOT = 'TW_UBOT',                //聯邦銀行
    MY_MOLPAY = 'MY_MOLPAY',            //RAZER PAY
    TW_CHB = 'TW_CHB',                  //彰化銀行
    US_GLOBAL_PAYMENTS = 'US_GLOBAL_PAYMENTS',  //環匯亞太
    TW_LINE_PAY = 'TW_LINE_PAY',        //LINE Pay
    TW_JKO_PAY = 'TW_JKO_PAY',          //JKOPAY
    TW_EASY_WALLET = 'TW_EASY_WALLET',  //悠遊付
    TW_ATOME = 'TW_ATOME',              //Atome
    TW_PI_WALLET = 'TW_PI_WALLET',      //Pi 錢包
    TW_PLUS_PAY = 'TW_PLUS_PAY',        //全盈支付
}


declare const enum PayInfoMethodEnum {
    CREDIT_CARD = 'CREDIT_CARD',                //信用卡
    BALANCE = 'BALANCE'  ,                      //一卡通 iPASS
    POINT = 'POINT',                            //LINE Point 全額折抵
    DISCOUNT = 'DISCOUNT',                      //LINE Pay 優惠券
}



declare const enum PaymentMethodEnum {
    direct_pay = 'direct_pay', 
    apple_pay = 'apple_pay',
    google_pay_token = 'google_pay_token',      //Google Pay Token 卡號
    google_pay_fpan = 'google_pay_fpan',        //Google Pay 原始卡號
    samsung_pay = 'samsung_pay',
    line_pay = 'line_pay',
    tsp_token = 'tsp_token',
    jko_pay = 'jko_pay',
    easy_wallet = 'easy_wallet',                //悠遊付
    atome = 'atome',
    pi_wallet = 'pi_wallet',                    //Pi 錢包
    plus_pay = 'plus_pay'                       //全盈支付
}

declare const enum RecordStatusEnum {
    ERROR = -1,                 //交易錯誤
    AUTH = 0  ,                 //銀行已授權交易，但尚未請款         
    OK = 1,                     //交易完成
    PARTIALREFUNDED = 2,        //部分退款     
    REFUNDED = 3,               //完全退款
    PENDING = 4,                //待付款
    CANCEL = 5,                 //取消交易
}