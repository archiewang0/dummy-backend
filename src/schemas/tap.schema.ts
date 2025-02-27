import { boolean, object, string, number, TypeOf } from "zod";
import { GenericSchema } from "./generic.schema";

export class TapSchema extends GenericSchema {
    /*
    public static prime = object({
        mobile: this.require_mobile,
        prime: string({
            required_error: "Prime is required",
        }).max(71, "Prime is too long - should be max 71 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative"),
        currency: string().optional().default("TWD"),
        order_number: string({
            required_error: "Order number is required",
        }).max(50, "Order number is too long - should be max 50 chars"),
        transaction_id: string({
            required_error: "Transaction id is required",
        }).max(40, "Transaction id is too long - should be max 40 chars"),
    });
    */

    public static prime = object({
        merchant_id: string({
            required_error: "Merchant id is required",
        }).max(16, "Merchant id is too long - should be max 16 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative"),
        currency: string().optional().default("TWD"),
        order_number: string({
            required_error: "Order number is required",
        }).max(50, "Order number is too long - should be max 50 chars"),
        bank_transaction_id: string({
            required_error: "Bank transaction id is required",
        }).max(40, "Bank transaction id is too long - should be max 40 chars"),
        details: string({
            required_error: "Details is required",
        }).max(100, "Details is too long - should be max 100 chars"),
        cardholder: object({
            phone_number: string({
                required_error: "Phone number is required",
            }).max(16, "Phone number ismer too long - should be max 16 chars"),
            name: string().optional().nullable().default(""),
            email: string().optional().nullable().default(""),
            member_id: string({
                required_error: "Member id is required",
            }).max(21, "Member id is too long - should be max 21 chars"),
        }),
        three_domain_secure: boolean().optional().nullable().default(false),
        result_url: string().optional().nullable().default(""),
        remember: boolean().optional().nullable().default(false)
    });

    public static finger = object({
        member_id: string({
            required_error: "Member id is required",
        }).max(21, "Member id is too long - should be max 21 chars"),
        payment_method: string().optional().default("direct_pay"),
        secret: object({
            token: string({
                required_error: "Token is required",
            }).max(67, "Token is too long - should be max 67 chars"),
            key: string({
                required_error: "Key is required",
            }).max(64, "Key is too long - should be max 64 chars"),
        }),
        currency: string().optional().default("TWD"),
        finger_info: object({
            bin_code: string({
                required_error: "Bin code is required",
            }).max(6, "Bin code is too long - should be max 6 chars"),
            last_four: string({
                required_error: "Last four is required",
            }).max(4, "Last four is too long - should be max 4 chars"),
            issuer: string({
                required_error: "Issuer is required",
            }).max(50, "Issuer is too long - should be max 50 chars"),
            issuer_zh_tw: string({
                required_error: "Issuer zh tw is required",
            }).max(50, "Issuer zh tw is too long - should be max 50 chars"),
            bank_id: string({
                required_error: "Bank id is required",
            }).max(4, "Bank id is too long - should be max 4 chars"),
            funding: number({
                required_error: "Funding is required",
            }),
            type: number({
                required_error: "Type is required",
            }),
            level: string({
                required_error: "Level is required",
            }).max(50, "Level is too long - should be max 50 chars"),
            country: string({
                required_error: "Country is required",
            }).max(50, "Country is too long - should be max 50 chars"),
            country_code: string({
                required_error: "Country code is required",
            }).max(2, "Country code is too long - should be max 2 chars"),
            expiry_date: string({
                required_error: "Expiry date is required",
            }).max(6, "Expiry date is too long - should be max 4 chars"),
        }),
        finger_id: string({
            required_error: "Finger id is required",
        }).max(50, "Finger id is too long - should be max 50 chars")
    });

    public static authorize = object({
        mobile: this.require_mobile,
        prime: string({
            required_error: "Prime is required",
        }).max(71, "Prime is too long - should be max 71 chars"),
        currency: string().optional().default("TWD"),
        member_id: string({
            required_error: "Member id is required",
        }).length(21, "Member id should be equal 21 chars"),
        frontend_url: string().optional()
    });

    public static repay = object({
        mobile: this.require_mobile,
        member_id: string({
            required_error: "Member id is required",
        }).length(21, "Member id should be equal 21 chars"),
        order_number: string({
            required_error: "Order number is required",
        }).max(50, "Order number is too long - should be max 50 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative"),
        currency: string().optional().default("TWD"),
        prime: string({
            required_error: "Prime is required",
        }).max(71, "Prime is too long - should be max 71 chars"),
        details: string({
            required_error: "Details is required",
        }).max(100, "Details is too long - should be max 100 chars")
    });

    public static record = object({
        id: string({
            required_error: "Id is required",
        }).max(21, "Id is too long - should be max 21 chars"),
        rec_trade_id: string({
            required_error: "Rec trade id is required",
        }).max(40, "Rec trade id is too long - should be max 40 chars")
    });

    public static refundRequest = object({
        rec_trade_id: string({
            required_error: "Rec trade id is required",
        }).max(20, "Rec trade id is too long - should be max 20 chars"),
        bank_refund_id: string({
            required_error: "Bank refund id is required",
        }).max(20, "Bank refund id is too long - should be max 20 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative"),
        secret: object({
            token: string({
                required_error: "Token is required",
            }).max(67, "Token is too long - should be max 67 chars"),
            key: string({
                required_error: "Key is required",
            }).max(64, "Key is too long - should be max 64 chars"),
        })
    });

    public static refund = object({
        rec_trade_id: string({
            required_error: "Rec trade id is required",
        }).max(20, "Rec trade id is too long - should be max 20 chars"),
        bank_refund_id: string({
            required_error: "Bank refund id is required",
        }).max(20, "Bank refund id is too long - should be max 20 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative")
    });

    public static tap = object({
        finger_id: string({
            required_error: "Finger id is required",
        }).max(21, "Finger id is too long - should be max 21 chars"),
        member_id: string({
            required_error: "Member id is required",
        }).max(21, "Member id is too long - should be max 21 chars"),
        order_number: string({
            required_error: "Order number is required",
        }).max(50, "Order number is too long - should be max 50 chars"),
        amount: number({
            required_error: "Amount is required",
        }).nonnegative("Amount must be non-negative"),
        currency: string().optional().default("TWD"),
        details: string({
            required_error: "Details is required",
        }).max(100, "Details is too long - should be max 100 chars")
    });

    public static tapValidator = object({
        body: this.tap
    });

    public static authorizeValidator = object({
        body: this.authorize
    });

    public static repayValidator = object({
        body: this.repay
    });
}

export type TTapPrime = TypeOf<typeof TapSchema.prime>;