import { util } from "@aws-appsync/utils";

export function request(ctx) {
    // if (!ctx.identity || !ctx.identity.username) {
    //     throw new Error("L'utente non è autenticato.");
    // }
    return {
        operation: "Query",
        query: {
            expression: "PK = :PK",
            expressionValues: {
                ":PK": util.dynamodb.toDynamoDB("Brand")
            }
        }
    }
}

export function response(ctx) {
    return ctx.result.items;
}