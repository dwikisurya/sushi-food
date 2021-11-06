module.exports = {
    // method of operation
    delete: {
      tags: ["Food CRUD"], // operation's tag.
      summary: "Delete Food By id",
      description: "Delete Food By id", // operation's desc.
      operationId: "deleteFood", // unique operation id.
      parameters: [
        {
          name: "id", // name of the param
          in: "path", // location of the param
          required: true, // Mandatory param
          description: "A single food id", // param desc.
        },
      ], // expected params.
      // expected responses
      responses: {
        // response code
        303: {
          description: "Food deleted.", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Food", // Todo model
              },
            },
          },
        },

        500:{
          description: "Food ID not found", // response desc
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