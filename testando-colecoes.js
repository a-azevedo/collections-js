var myUsers = new Map();
myUsers.set("Luiz", "admin");
myUsers.set("Pedro", "guest");
myUsers.set("Becker", "admin");
myUsers.size; // 3
myUsers.get("Trycatch"); // undefined
myUsers.has("Foreach"); // false
myUsers.delete("While");
myUsers.has("Do"); // false

for (var [key, value] of myUsers) {
    console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

function getAdmin(myUsers) {
    for (var [key, value] of myUsers) {
        if(value == admin){
            console.log(key + " is " + value);
        }
        
    }
}
getAdmin();
myUsers.clear();
myUsers.size; // 0