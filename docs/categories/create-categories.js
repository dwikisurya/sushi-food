module.exports = {
    // method of operation
    post: {
      tags: ["Categories CRUD"], // operation's tag.
      description: "Create new Categories", // operation's desc.
      operationId: "postCategories", // unique operation id.
      requestBody: 
          {
              description: "Create a new categories",
              required: true,
              content:{
                  "application/json":{
                      schema:{
                         $ref: "#/components/schemas/CategoriesInput"
                      }
                  } 
              }
          },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Categories were created", // response desc.
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
          description: "Categories not created", // response desc
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