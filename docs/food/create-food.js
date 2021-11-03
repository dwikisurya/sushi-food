module.exports = {
    // method of operation
    post: {
      tags: ["Food CRUD"], // operation's tag.
      summary: "Create a new Food",
      description: "Create a new Food", // operation's desc.
      operationId: "postFood", // unique operation id.
      requestBody: 
          {
              description: "Create a new Food",
              required: true,
              content:{
                  "application/json":{
                      schema:{
                         $ref: "#/components/schemas/FoodInput"
                      }
                  } 
              }
          },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Food were created", // response desc.
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
          description: "Food not created", // response desc
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