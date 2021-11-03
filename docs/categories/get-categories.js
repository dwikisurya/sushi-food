module.exports = {
    // method of operation
    get: {
      tags: ["Categories CRUD"], // operation's tag.
      summary: "Get a categories by id",
      description: "Get a categories by id", // operation's desc.
      operationId: "getCategories", // unique operation id.
      parameters: [
        {
          name: "id", // name of the param
          in: "path", // location of the param
          required: true, // Mandatory param
          description: "A single categories id", // param desc.
        },
      ], // expected params.
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