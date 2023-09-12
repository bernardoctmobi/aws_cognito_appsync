import { util } from "@aws-appsync/utils";

export function request(ctx) {
    // if (!ctx.identity || !ctx.identity.username) {
    //     throw new Error("L'utente non è autenticato.");
    // }
    return {
        operation: "Query",
        query: {
            expression: "PK = :Product AND begins_with(SK, :Brand)",
            expressionValues: {
                ":Product": util.dynamodb.toDynamoDB("Product"),
                ":Brand": util.dynamodb.toDynamoDB(ctx.args.SK)
            }
        }
    }
}

export function response(ctx) {
    return ctx.result.items;
}