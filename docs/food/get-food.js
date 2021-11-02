module.exports = {
    // method of operation
    get: {
      tags: ["Food CRUD"], // operation's tag.
      description: "Get Food By id", // operation's desc.
      operationId: "getFood", // unique operation id.
      parameters: [
        {
          name: "id", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/Food.id", // data model of the param
          },
          required: true, // Mandatory param
          description: "A single food id", // param desc.
        },
      ], // expected params.
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