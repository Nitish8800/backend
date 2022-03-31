const express = require("express");

const app = express()
app.use("/",async(req,res)=>{
    try{


return res.send({data:
    [{
        "_id": {
          "$oid": "621496bea97f711a407002cb"
        },
        "locations": [
          {
            "$oid": "62148dd9a97f711a407002c0"
          },
          {
            "$oid": "6214abe8a97f711a407002d4"
          }
        ],
        "model": "Hero NYX- Electric",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/Activa_3G-min_2.png?1519738389",
        "pricePerHour": 20,
        "bookedSlots": [
          {
            "location": {
              "$oid": "62148dd9a97f711a407002c0"
            },
            "pickupTime": {
              "$date": "2022-02-24T05:42:57.434Z"
            },
            "dropoffTime": {
              "$date": "2022-02-26T06:00:00Z"
            },
            "_id": {
              "$oid": "6217233403a8e988aa6489ec"
            }
          },
          {
            "location": {
              "$oid": "62148dd9a97f711a407002c0"
            },
            "pickupTime": {
              "$date": "2022-02-27T19:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-03-01T18:30:00Z"
            },
            "_id": {
              "$oid": "621b44810e318739d8f12f59"
            }
          }
        ],
        "updatedAt": {
          "$date": "2022-02-27T09:29:37.717Z"
        }
      },{
        "_id": {
          "$oid": "6214b06573098dc6dcf507dd"
        },
        "model": "Honda Activa 4G",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/121/medium/Activa_48-min_2.png?1592300804",
        "locations": [
          {
            "$oid": "6214af328bbe709b810d2be4"
          }
        ],
        "pricePerHour": 18,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214af328bbe709b810d2be4"
            },
            "pickupTime": {
              "$date": "2022-02-25T06:30:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-26T07:00:00Z"
            },
            "_id": {
              "$oid": "6217233403a8e988aa6489ee"
            }
          },
          {
            "location": {
              "$oid": "6214af328bbe709b810d2be4"
            },
            "pickupTime": {
              "$date": "2022-02-26T14:30:00.327Z"
            },
            "dropoffTime": {
              "$date": "2022-02-26T16:00:00.560Z"
            },
            "_id": {
              "$oid": "621a434057de295bc67ad4db"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:44:05.856Z"
        },
        "updatedAt": {
          "$date": "2022-02-26T15:12:00.889Z"
        }
      },{
        "_id": {
          "$oid": "6214b10673098dc6dcf507e1"
        },
        "model": "Honda Activa 5G",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566",
        "locations": [
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          }
        ],
        "pricePerHour": 19,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214af468bbe709b810d2be6"
            },
            "pickupTime": {
              "$date": "2022-02-26T11:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T11:00:00Z"
            },
            "_id": {
              "$oid": "6217623674d40c630b607b22"
            }
          },
          {
            "location": {
              "$oid": "6214af188bbe709b810d2be0"
            },
            "pickupTime": {
              "$date": "2022-02-26T04:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T06:30:00Z"
            },
            "_id": {
              "$oid": "62187283762b6b589b3364ca"
            }
          },
          {
            "location": {
              "$oid": "6214af328bbe709b810d2be4"
            },
            "pickupTime": {
              "$date": "2022-02-26T04:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T06:30:00Z"
            },
            "_id": {
              "$oid": "621872ab762b6b589b3364d7"
            }
          },
          {
            "location": {
              "$oid": "6214aece8bbe709b810d2bdc"
            },
            "pickupTime": {
              "$date": "2022-02-16T07:30:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T07:30:00Z"
            },
            "_id": {
              "$oid": "621878e9762b6b589b336531"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:46:46.736Z"
        },
        "updatedAt": {
          "$date": "2022-02-25T06:36:25.871Z"
        }
      },{
        "_id": {
          "$oid": "6214b16073098dc6dcf507e3"
        },
        "model": "Yamaha Fascino",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/026/medium/Fascino-min_2.png?1519738927",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          }
        ],
        "pricePerHour": 25,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214aece8bbe709b810d2bdc"
            },
            "pickupTime": {
              "$date": "2022-02-25T13:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T13:00:00Z"
            },
            "_id": {
              "$oid": "6218df57a441403776ec7f58"
            }
          },
          {
            "location": {
              "$oid": "6214af188bbe709b810d2be0"
            },
            "pickupTime": {
              "$date": "2022-02-16T07:30:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T09:00:00Z"
            },
            "_id": {
              "$oid": "6219d84ff8709d57ac77048c"
            }
          },
          {
            "location": {
              "$oid": "6214af328bbe709b810d2be4"
            },
            "pickupTime": {
              "$date": "2022-02-18T14:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T14:30:00Z"
            },
            "_id": {
              "$oid": "621a2e6457de295bc67ad3b0"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:48:16.124Z"
        },
        "updatedAt": {
          "$date": "2022-02-26T13:43:00.326Z"
        }
      },{
        "_id": {
          "$oid": "6214b1a273098dc6dcf507e5"
        },
        "model": "Honda Dio",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/Dio-min_2.png?1519738819",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 22,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214af188bbe709b810d2be0"
            },
            "pickupTime": {
              "$date": "2022-02-13T10:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-26T10:30:00Z"
            },
            "_id": {
              "$oid": "621b4ed7d451bf7c2ad64199"
            }
          },
          {
            "location": {
              "$oid": "6214aece8bbe709b810d2bdc"
            },
            "pickupTime": {
              "$date": "2022-02-15T10:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T11:00:00Z"
            },
            "_id": {
              "$oid": "621b4f61d451bf7c2ad641ba"
            }
          },
          {
            "location": {
              "$oid": "6214af468bbe709b810d2be6"
            },
            "pickupTime": {
              "$date": "2022-02-15T11:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-03-14T10:00:00Z"
            },
            "_id": {
              "$oid": "621b5211d451bf7c2ad641d3"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:49:22.273Z"
        },
        "updatedAt": {
          "$date": "2022-02-27T10:27:29.664Z"
        }
      },{
        "_id": {
          "$oid": "6214b1c173098dc6dcf507e7"
        },
        "model": "Ather 450",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/261/medium/Ather-image.png?1564130320",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 13,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214af328bbe709b810d2be4"
            },
            "pickupTime": {
              "$date": "2022-02-14T10:30:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-28T11:30:00Z"
            },
            "_id": {
              "$oid": "621b5569d451bf7c2ad641ed"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:49:53.010Z"
        },
        "updatedAt": {
          "$date": "2022-02-27T10:41:45.962Z"
        }
      },{
        "_id": {
          "$oid": "6214b1e673098dc6dcf507e9"
        },
        "model": "Aprilia SR 125",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/234/medium/aprilia-125.png?1534399128",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 26,
        "bookedSlots": [],
        "createdAt": {
          "$date": "2022-02-22T09:50:30.357Z"
        },
        "updatedAt": {
          "$date": "2022-02-22T09:50:30.357Z"
        }
      },{
        "_id": {
          "$oid": "6214b20873098dc6dcf507eb"
        },
        "model": "Royal Enfield Himalayan",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/014/medium/Himalayan_RE-min_2.png?1519739226",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 35,
        "bookedSlots": [],
        "createdAt": {
          "$date": "2022-02-22T09:51:04.991Z"
        },
        "updatedAt": {
          "$date": "2022-02-22T09:51:04.991Z"
        }
      },{
        "_id": {
          "$oid": "6214b22473098dc6dcf507ed"
        },
        "model": "Honda CB Hornet 160",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/151/medium/Honda-hornet.png?1510999625",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 31,
        "bookedSlots": [],
        "createdAt": {
          "$date": "2022-02-22T09:51:32.615Z"
        },
        "updatedAt": {
          "$date": "2022-02-22T09:51:32.615Z"
        }
      },{
        "_id": {
          "$oid": "6214b24273098dc6dcf507ef"
        },
        "model": "Bajaj Pulsar 150 Neon (BS6)",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/295/medium/pulsar_new.png?1644502023",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 30,
        "bookedSlots": [],
        "createdAt": {
          "$date": "2022-02-22T09:52:02.730Z"
        },
        "updatedAt": {
          "$date": "2022-02-22T09:52:02.730Z"
        }
      },{
        "_id": {
          "$oid": "6214b26373098dc6dcf507f1"
        },
        "model": "TVS Apache RTR 180",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/073/medium/Apache_RTR_180_White.png?1584076087",
        "locations": [
          {
            "$oid": "6214aece8bbe709b810d2bdc"
          },
          {
            "$oid": "6214af188bbe709b810d2be0"
          },
          {
            "$oid": "6214af328bbe709b810d2be4"
          },
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 33,
        "bookedSlots": [],
        "createdAt": {
          "$date": "2022-02-22T09:52:35.611Z"
        },
        "updatedAt": {
          "$date": "2022-02-22T09:52:35.611Z"
        }
      },{
        "_id": {
          "$oid": "6214b2a573098dc6dcf507f3"
        },
        "model": "Royal Enfield Meteor Supernova 350",
        "imageUrl": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/281/medium/WhatsApp_Image_2021-01-28_at_4.29.52_PM.jpeg?1611833012",
        "locations": [
          {
            "$oid": "6214af468bbe709b810d2be6"
          }
        ],
        "pricePerHour": 43,
        "bookedSlots": [
          {
            "location": {
              "$oid": "6214af468bbe709b810d2be6"
            },
            "pickupTime": {
              "$date": "2022-02-22T20:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-23T20:00:00Z"
            },
            "_id": {
              "$oid": "621502cc5e2a8340d177ab08"
            }
          },
          {
            "location": {
              "$oid": "6214af468bbe709b810d2be6"
            },
            "pickupTime": {
              "$date": "2022-02-23T21:00:00Z"
            },
            "dropoffTime": {
              "$date": "2022-02-24T20:00:00Z"
            },
            "_id": {
              "$oid": "621503b75e2a8340d177ab10"
            }
          },
          {
            "location": {
              "$oid": "6214af468bbe709b810d2be6"
            },
            "pickupTime": {
              "$date": "2022-03-01T04:30:00Z"
            },
            "dropoffTime": {
              "$date": "2022-03-05T04:30:00Z"
            },
            "_id": {
              "$oid": "621b2750aaaa619a1c99e4c5"
            }
          }
        ],
        "createdAt": {
          "$date": "2022-02-22T09:53:41.665Z"
        },
        "updatedAt": {
          "$date": "2022-02-27T07:25:03.999Z"
        }
      }]
})

    }catch(err){
        console.log(err)
    }
})

const port = process.env.PORT || 7000
app.listen(port,()=>{
   try {
    console.log(`server is running on the port : ${port} `)   




   } catch (error) {
       console.log(error)
   }
})


