module.exports = {
    // method of operation
    delete: {
      tags: ["Categories CRUD"], // operation's tag.
      summary: "Delete Categories By id",
      description: "Delete Categories By id", // operation's desc.
      operationId: "deleteCategories", // unique operation id.
      parameters: [
        {
          name: "id", // name of the param
          in: "path", // location of the param
          required: true, // Mandatory param
          description: "A single Categories id", // param desc.
        },
      ], // expected params.
      // expected responses
      responses: {
        // response code
        303: {
          description: "Categories deleted.", // response desc.
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
          description: "Categories ID not found", // response desc
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