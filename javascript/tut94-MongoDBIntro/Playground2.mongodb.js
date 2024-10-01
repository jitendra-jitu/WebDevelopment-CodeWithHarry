use('SigmaWebDevelop');

// Insert 20 dummy documents into the 'customers' collection
db.getCollection('customers').insertMany([
    {
        "name": "John Doe",
        "age": 29,
        "email": "john.doe1@example.com",
        "address": { "street": "123 Main St", "city": "New York", "zip": "10001" },
        "purchases": [
            { "item": "Laptop", "price": 1000, "date": new Date("2023-01-15T00:00:00Z") },
            { "item": "Phone", "price": 500, "date": new Date("2023-02-10T00:00:00Z") }
        ]
    },
    {
        "name": "Jane Smith",
        "age": 34,
        "email": "jane.smith2@example.com",
        "address": { "street": "456 Oak St", "city": "Los Angeles", "zip": "90001" },
        "purchases": [
            { "item": "Tablet", "price": 300, "date": new Date("2023-03-05T00:00:00Z") },
            { "item": "Camera", "price": 700, "date": new Date("2023-04-20T00:00:00Z") }
        ]
    },
    {
        "name": "Bob Johnson",
        "age": 42,
        "email": "bob.johnson3@example.com",
        "address": { "street": "789 Pine St", "city": "Chicago", "zip": "60601" },
        "purchases": [
            { "item": "TV", "price": 1200, "date": new Date("2023-05-30T00:00:00Z") },
            { "item": "Headphones", "price": 150, "date": new Date("2023-06-10T00:00:00Z") }
        ]
    },
    {
        "name": "Alice Brown",
        "age": 25,
        "email": "alice.brown4@example.com",
        "address": { "street": "101 Maple St", "city": "Seattle", "zip": "98101" },
        "purchases": [
            { "item": "Book", "price": 20, "date": new Date("2023-07-15T00:00:00Z") },
            { "item": "Coffee Maker", "price": 80, "date": new Date("2023-08-01T00:00:00Z") }
        ]
    },
    {
        "name": "Chris Evans",
        "age": 38,
        "email": "chris.evans5@example.com",
        "address": { "street": "102 Cedar St", "city": "Boston", "zip": "02101" },
        "purchases": [
            { "item": "Watch", "price": 250, "date": new Date("2023-08-15T00:00:00Z") },
            { "item": "Shoes", "price": 120, "date": new Date("2023-09-01T00:00:00Z") }
        ]
    },
    // Add more dummy records to reach 20
    {
        "name": "Diana Prince",
        "age": 30,
        "email": "diana.prince6@example.com",
        "address": { "street": "105 Liberty St", "city": "Metropolis", "zip": "12345" },
        "purchases": [
            { "item": "Laptop", "price": 1200, "date": new Date("2023-07-12T00:00:00Z") },
            { "item": "Tablet", "price": 600, "date": new Date("2023-08-05T00:00:00Z") }
        ]
    },
    {
        "name": "Peter Parker",
        "age": 22,
        "email": "peter.parker7@example.com",
        "address": { "street": "111 Hero St", "city": "Queens", "zip": "11375" },
        "purchases": [
            { "item": "Camera", "price": 800, "date": new Date("2023-01-11T00:00:00Z") },
            { "item": "Phone", "price": 600, "date": new Date("2023-02-20T00:00:00Z") }
        ]
    },
    {
        "name": "Bruce Wayne",
        "age": 40,
        "email": "bruce.wayne8@example.com",
        "address": { "street": "108 Wayne St", "city": "Gotham", "zip": "10010" },
        "purchases": [
            { "item": "Car", "price": 60000, "date": new Date("2023-03-20T00:00:00Z") },
            { "item": "Suit", "price": 5000, "date": new Date("2023-04-25T00:00:00Z") }
        ]
    },
    {
        "name": "Clark Kent",
        "age": 35,
        "email": "clark.kent9@example.com",
        "address": { "street": "202 Krypton St", "city": "Metropolis", "zip": "12346" },
        "purchases": [
            { "item": "Glasses", "price": 200, "date": new Date("2023-05-05T00:00:00Z") },
            { "item": "Shirt", "price": 50, "date": new Date("2023-05-12T00:00:00Z") }
        ]
    },
    {
        "name": "Tony Stark",
        "age": 45,
        "email": "tony.stark10@example.com",
        "address": { "street": "300 Stark Tower", "city": "New York", "zip": "10011" },
        "purchases": [
            { "item": "Suit", "price": 10000, "date": new Date("2023-06-05T00:00:00Z") },
            { "item": "Watch", "price": 3000, "date": new Date("2023-07-15T00:00:00Z") }
        ]
    },
    {
        "name": "Natasha Romanoff",
        "age": 32,
        "email": "natasha.romanoff11@example.com",
        "address": { "street": "301 Widow St", "city": "New York", "zip": "10012" },
        "purchases": [
            { "item": "Knife", "price": 200, "date": new Date("2023-01-25T00:00:00Z") },
            { "item": "Gadget", "price": 300, "date": new Date("2023-02-01T00:00:00Z") }
        ]
    },
    {
        "name": "Steve Rogers",
        "age": 39,
        "email": "steve.rogers12@example.com",
        "address": { "street": "202 Shield St", "city": "Brooklyn", "zip": "11201" },
        "purchases": [
            { "item": "Shield", "price": 1000, "date": new Date("2023-03-11T00:00:00Z") },
            { "item": "Boots", "price": 200, "date": new Date("2023-03-15T00:00:00Z") }
        ]
    },
    {
        "name": "Wanda Maximoff",
        "age": 28,
        "email": "wanda.maximoff13@example.com",
        "address": { "street": "203 Scarlet St", "city": "Sokovia", "zip": "99999" },
        "purchases": [
            { "item": "Book", "price": 30, "date": new Date("2023-06-10T00:00:00Z") },
            { "item": "Jacket", "price": 150, "date": new Date("2023-07-01T00:00:00Z") }
        ]
    },
    {
        "name": "T'Challa",
        "age": 38,
        "email": "tchalla14@example.com",
        "address": { "street": "404 Wakanda St", "city": "Wakanda", "zip": "10101" },
        "purchases": [
            { "item": "Suit", "price": 8000, "date": new Date("2023-03-01T00:00:00Z") },
            { "item": "Ring", "price": 2000, "date": new Date("2023-03-10T00:00:00Z") }
        ]
    },
    {
        "name": "Stephen Strange",
        "age": 40,
        "email": "stephen.strange15@example.com",
        "address": { "street": "405 Sanctum St", "city": "New York", "zip": "10013" },
        "purchases": [
            { "item": "Cloak", "price": 5000, "date": new Date("2023-01-12T00:00:00Z") },
            { "item": "Amulet", "price": 3000, "date": new Date("2023-02-22T00:00:00Z") }
        ]
    },
    {
        "name": "Scott Lang",
        "age": 32,
        "email": "scott.lang16@example.com",
        "address": { "street": "407 Ant St", "city": "San Francisco", "zip": "94105" },
        "purchases": [
            { "item": "Suit", "price": 6000, "date": new Date("2023-04-12T00:00:00Z") },
            { "item": "Watch", "price": 300, "date": new Date("2023-05-05T00:00:00Z") }
        ]
    },
    {
        "name": "Hope Van Dyne",
        "age": 33,
        "email": "hope.vandyne17@example.com",
        "address": { "street": "408 Wasp St", "city": "San Francisco", "zip": "94105" },
        "purchases": [
            { "item": "Bracelet", "price": 150, "date": new Date("2023-06-15T00:00:00Z") },
            { "item": "Shoes", "price": 90, "date": new Date("2023-07-05T00:00:00Z") }
        ]
    },
    {
        "name": "Thor Odinson",
        "age": 1500,
        "email": "thor.odinson18@example.com",
        "address": { "street": "500 Asgard St", "city": "Asgard", "zip": "00001" },
        "purchases": [
            { "item": "Hammer", "price": 20000, "date": new Date("2023-08-10T00:00:00Z") },
            { "item": "Axe", "price": 15000, "date": new Date("2023-08-20T00:00:00Z") }
        ]
    },
    {
        "name": "Bruce Banner",
        "age": 42,
        "email": "bruce.banner19@example.com",
        "address": { "street": "601 Green St", "city": "New York", "zip": "10014" },
        "purchases": [
            { "item": "Glasses", "price": 200, "date": new Date("2023-02-11T00:00:00Z") },
            { "item": "Book", "price": 50, "date": new Date("2023-03-05T00:00:00Z") }
        ]
    }
]);

console.log("Inserted 20 dummy documents into the 'customers' collection.");
