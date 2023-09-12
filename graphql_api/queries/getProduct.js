import { util } from "@aws-appsync/utils";

export function request(ctx) {
    // if (!ctx.identity || !ctx.identity.username) {
    //     throw new Error("L'utente non è autenticato.");
    // }
    return {
        operation: "GetItem",
        key: {
            "PK": util.dynamodb.toDynamoDB("Product"),
            "SK": util.dynamodb.toDynamoDB(ctx.args.SK)
        }
    }
}

export function response(ctx) {
    return ctx.result;
}