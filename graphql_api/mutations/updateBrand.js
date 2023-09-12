import { util } from "@aws-appsync/utils"

export function request(ctx) {
    // if (!ctx.identity || !ctx.identity.username) {
    //     throw new Error("L'utente non è autenticato.");
    // }
    return {
        operation: "UpdateItem",
        key: {
            "PK": util.dynamodb.toDynamoDB("Brand"),
            "SK": util.dynamodb.toDynamoDB(ctx.args.SK)
        },
        update: {
            expression: "SET LastModified = :Date",
            expressionValues: {
                ":Date": util.dynamodb.toDynamoDB(util.time.nowISO8601()),
            }
        }
    }
}

export function response(ctx) {
    return ctx.result;
}