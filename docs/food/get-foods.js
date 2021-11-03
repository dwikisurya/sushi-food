module.exports = {
    // method of operation
    get: {
      tags: ["Food CRUD"], // operation's tag.
      summary: "Get all the Foods",
      description: "Get all the Foods", // operation's desc.
      operationId: "getFoods", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Food were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Food", // Todo model
              },
            },
          },
        },

        404:{
          description: "Food not found", // response desc
          content:{
            //content-type
            "application/json":{
              schema:{
                $ref: "#/components/schemas/Error"
              }
            }
          }
        }
      },
    },
  };