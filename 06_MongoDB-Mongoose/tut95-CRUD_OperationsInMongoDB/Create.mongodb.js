//Switch database
use('CRUD')

console.log(db)


//creating Collection
// db.createCollection("courses")



// inserting data 
// db.courses.insertOne({

//     topic: "Data Visualization",
//     tools: "tabulea"

// }

// );




// insertMany 
db.courses.insertMany([
    {
        "topic": "Data Visualization",
        "tools": ["Tableau", "Power BI"],
        "timeNeeded": "3 months"
    },
    {
        "topic": "Cybersecurity",
        "tools": ["Wireshark", "Metasploit"],
        "timeNeeded": "4 months"
    },
    {
        "topic": "Artificial Intelligence",
        "tools": ["TensorFlow", "Keras"],
        "timeNeeded": "5 months"
    },
    {
        "topic": "Blockchain Development",
        "tools": ["Ethereum", "Hyperledger"],
        "timeNeeded": "6 months"
    },
    {
        "topic": "Internet of Things (IoT)",
        "tools": ["Raspberry Pi", "Arduino"],
        "timeNeeded": "3 months"
    },
    {
        "topic": "Augmented Reality (AR) and Virtual Reality (VR)",
        "tools": ["Unity", "ARKit"],
        "timeNeeded": "5 months"
    },
    {
        "topic": "Data Science",
        "tools": ["Python", "R"],
        "timeNeeded": "6 months"
    },
    {
        "topic": "Responsive Web Design",
        "tools": ["Bootstrap", "Tailwind CSS"],
        "timeNeeded": "2 months"
    }
]


);