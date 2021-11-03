module.exports={
     components:{
         schemas:{   
           // Categories Food          
             Food:{
                 type: "object",
                 properties:{
                    id:{
                        type: "objectID",
                        description: "Auto Generated from mongodb",
                        example: "6180a4743bdd0334301c3a59"
                    },
                    name:{
                        type: "string",
                        description: "Nama makanan(sushi)",
                        example: "Baby Octopus"
                    }, 
                   description:{
                       type: "string",
                       description: "Deskripsi dari makanan",
                       example: "Beautiful barbecued baby octopuses with spicy marinade."
                   },
                   imgURL:{
                    type: "string",
                    description: "url img dari img.bb",
                    example: "https://ibb.co/5npcTrt"
                   }
                 }
             },

         // error model
        Error: {
            type: "object", //data type
            properties: {
              message: {
                type: "string", // data type
                description: "Error message", // desc
                example: "Not found", // example of an error message
              },
              internal_code: {
                type: "string", // data type
                description: "Error internal code", // desc
                example: "Invalid parameters", // example of an error internal code
              },
            },
          },

        // Categories Model
        Categories:{
          type: "object",
          properties:{
             id:{
                 type: "objectID",
                 description: "Auto Generated from mongodb",
                 example: "6181a4e79040370565aa3598"
             },
             nameCategories:{
                 type: "string",
                 description: "Nama Categories",
                 example: "Sashimi"
            }
          }
      },

      // Categories input model
              CategoriesInput: {
                type: "object", // data type
                properties: {
                  nameCategories: {
                    type: "string", // data type
                    description: "A name of a categories", // desc
                    example: "Sushi/Sashimi/Rice/Noodle", // example of a title
                  }
                },
              },
        
        // Food input model
        FoodInput: {
          type: "object", // data type
          properties: {
            idCategories: {
              type: "string", // data type
              description: "A name of a categories", // desc
              example: "6181a3139040370565aa3595/6181a4e79040370565aa3598", // example of a title
            },
            name:{
              type: "string",
              description: "The name for the food",
              example: "Yakiniku/Rice Bowl"
            },
            description:{
              type: "string",
              description: "A description for the food",
              example: "Delicious meat with egg yolk",
            },
            imgURL:{
              type: "base64",
              description: "base64 from an uploaded images form front end.",
              example: "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNcLVNbzwAEjDAGACcSA4kB6ARiAAAAAElFTkSuQmCC"
            },
          },
        },

        }

    }
}