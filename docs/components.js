module.exports={
     components:{
         schemas:{             
             Food:{
                 type: "object",
                 properties:{
                    id:{
                        type: "string",
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

            }

    }
}