module.exports = {
    // method of operation
    get: {
      tags: ["Categories CRUD"], // operation's tag.
      summary: "Get all categories",
      description: "Get all categories", // operation's desc.
      operationId: "getCategoriess", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Categories were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Categories", // Todo model
              },
            },
          },
        },

        500:{
          description: "Categories not found", // response desc
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