use hotel_bookings;
db.dropdatabase();

db.bookings.insertMany([
    {
        name: "Bob E",
        email: "bob@hotmail.com",
        status: true
    },
    {
        name: "John E",
        email: "john@hotmail.com",
        status: false
    },
    {
        name: "Dave E",
        email: "dave@hotmail.com",
        status: false
    },
    {
        name: "Fred E",
        email: "fred@hotmail.com",
        status: true
    },
]);