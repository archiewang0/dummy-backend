import swaggerJSDoc from "swagger-jsdoc";
import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import config from "./src/config";

export default function setupSwagger(app: Application): void {
    const options: swaggerJSDoc.Options = {
        swaggerDefinition: {
            openapi: "3.1.0",
            info: {
                title: "文件API標題",
                version: "1.0.0",
                description:
                    "金流支付API文件",
                license: {
                    name: "MIT",
                    url: "https://spdx.org/licenses/MIT.html",
                },
                contact: {
                    name: "LogRocket",
                    url: "https://logrocket.com",
                    email: "info@email.com",
                },
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
                schemas: {
                    LinepayAuthorize:{
                        type: "object",
                        required: ["finger_id", "amount", "order_number"],
                        description: "linepay 綁定信用卡驗證",
                        properties: {
                            finger_id: { type: "string", description: "finger_id信用卡的id, 行動支付的話是對應交易id" },
                            amount: { type: "number", description: "支付金額, 綁卡設定通設1元" },
                            details: { type: "string", description: "Details紀錄綁定行為" },
                            order_number: { type: "string", description: "訂單編號" },
                            frontend_url: {type: "string", description: "回到前端網址"},
                        },
                        example: {
                            finger_id: "db_finger_id_value",
                            amount: 1,
                            details: "db_details_value",
                            order_number: "linepay_authorize_order_number_value",
                            frontend_url: "https://k8s-rocker.saikah.com/home/C2307A014A0-1"
                        }
                    },
                    LinepayPayByTokenRequest: {
                        type: "object",
                        required: ["finger_id", "amount", "order_number"],
                        description: "綁定的linepay信用卡進行支付",
                        properties: {
                            finger_id: { type: "string", description: "依照id尋找TappingFinger的信用卡" },
                            amount: { type: "number", description: "Amount is required" },
                            details: { type: "string", description: "Details is optional" },
                            order_number: { type: "string", description: "order_number id is required" }
                        },
                        example: {
                            finger_id: "db_finger_id_value",
                            amount: 100,
                            details: "db_details_value",
                            order_number: "linepay_pay_by_token_order_number_value"
                        }
                    },
                    LinepayCompleteBindCardRequest: {
                        type: "object",
                        required: ["rec_trade_id"],
                        properties: {
                            rec_trade_id: {
                                type: "string",
                                description: "是抓取 LinepayAuthorize 的交易紀錄rec_trade_id作為id"
                            }
                        },
                        example: {
                            rec_trade_id: "rec_trade_id_value"
                        }
                    },
                    LinepayFindFingerRequest: {
                        type: "object",
                        required: ["rec_trade_id"],
                        description: "依rec_trade_id來尋找信用卡",
                        properties: {
                            rec_trade_id: {
                                type: "string",
                                description: "rec_trade_id is required "
                            }
                        },
                        example: {
                            rec_trade_id: "rec_trade_id_value"
                        }
                    },

                    Tap: {
                        type: "object",
                        required: ["finger_id" , "member_id" , 
                            "order_number" , "amount" , "details" ],
                        description: "使用綁定信用卡進行付款",
                        properties: {
                            finger_id: { 
                                type: "string",
                                maxLength: 21,
                            },
                            member_id: {
                                type: "string",
                                maxLength: 21,
                            },
                            order_number: {
                                type: "string",
                                maxLength: 50,
                            },
                            amount: {
                                type: "number",
                                minimum: 0,
                            },
                            currency: {
                                type: "string",
                                default: "TWD",
                            },
                            details: {
                                type: "string",
                                maxLength: 100,
                            },
                        },
                        example: {
                            finger_id: "finger_id_value",
                            member_id: "member_id_value",
                            order_number: "order_number_value",
                            amount: 100,
                            details: "details_value"
                        }
                    },
                    Authorize: {
                        type: "object",
                        properties: {
                            mobile: {
                                type: "string",
                            },
                            prime: {
                                type: "string",
                                maxLength: 71,
                            },
                            currency: {
                                type: "string",
                                default: "TWD",
                            },
                            member_id: {
                                type: "string",
                                maxLength: 21,
                            },
                            frontend_url: {
                                type: "string",
                            },
                        },
                        description: "驗證信用卡並且進行綁定",
                        requierd: [
                            "mobile",
                            "prime",
                            "member_id",
                        ],
                    },
                    Repay: {
                        type: "object",
                        properties: {
                            mobile: {
                                type: "string",
                            },
                            member_id: {
                                type: "string",
                                maxLength: 21,
                            },
                            order_number: {
                                type: "string",
                                maxLength: 50,
                            },
                            amount: {
                                type: "number",
                                minimum: 0,
                            },
                            currency: {
                                type: "string",
                                default: "TWD",
                            },
                            prime: {
                                type: "string",
                                maxLength: 71,
                            },
                            details: {
                                type: "string",
                                maxLength: 100,
                            },
                        },
                        requierd: [
                            "mobile",
                            "member_id",
                            "order_number",
                            "amount",
                            "prime",
                            "details",
                        ]
                    }
                },
            },
            servers: [
                {
                    url: "http://localhost:3050",
                    "description": "Development server",
                },
            ],
        },
        apis: [config.swaggerPath],
    };
    const specs = swaggerJSDoc(options);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    app.get("/api-docs-json", (req, res) => res.json(specs));
}