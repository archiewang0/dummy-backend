import { boolean, object, string, number, TypeOf } from "zod";
import { GenericSchema } from "./generic.schema";

// 定義每個欄位的限制, 長度,型別,
// schema 裡面定義的 zod 物件會到 service 以及 route 進行型別檢查的動作
// route 則是檢查 payload 的參數是否正常
// service 負責打api 以及寫入資料庫的地方
export class LinePaySchema extends GenericSchema {
    // prime 
    public static create =  object({
        message: string({
            required_error: "Merchant id is required",
        })
    });

    public static payByPrime = object({
        prime: string({
            required_error: "prime is required",
        })
    })

    public static cardBind = object({
        prime: string({
            required_error: "prime is required",
        }),
        customer_id: string({
            required_error: "customer_id is required",
        }),
        phone_number: string({
            required_error: "phone_number is required",
        }),
        name: string().optional(),
        email: string().optional()
    })

    public static payByToken = object({
        finger_id: string({
            required_error: "finger_id is require",
        }),
        amount: number({
            required_error: "amount is required",
        }),
        details: string().optional(),
        order_number: string({
            required_error: "order_number is require",
        })
    })

    public static completeBindCard = object({
        rec_trade_id: string({
            required_error: "recTradeId is require",
        }),
    })

    public static findFinger = object({
        rec_trade_id: string({
            required_error: 'rec_trade_id is required!'
        })
    })

    public static completeBindCardValidator = object({
        body: this.completeBindCard
    })

    public static payByTokenValidator = object({
        body: this.payByToken
    })    

    public static cardBindValidator = object({
        body: this.cardBind
    })

    public static linePayPrimeValidator = object({
        body: this.payByPrime
    })

    public static findFingerValidator = object({
        body: this.findFinger
    })
}
