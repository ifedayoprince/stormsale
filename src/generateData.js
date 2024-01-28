const {faker} = require('@faker-js/faker')
const fs = require("fs")

let stats = ["paid", "refund", "unpaid"]
let platform = ["Book Bazar", "Artisan Aisle", "Toy Troop", "XStore"]
let entries = 10;
let out = []

for (let i = 0; i < entries; i++) {
    out.push({
        name: faker.person.fullName(),
        amount: Math.floor(Math.random() * 10000),
        date: faker.date.anytime().toISOString(),
        status: stats[Math.floor(Math.random() * stats.length)],
        platform: platform[Math.floor(Math.random() * platform.length)],
        avatar: `https://i.pravatar.cc/500?img=${Math.floor(Math.random() * 70)}`
    })
}

fs.writeFile("app/_data/orders.json", JSON.stringify(out), ()=>{})