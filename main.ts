import inquirer from "inquirer";

let randomNumb: number = Math.floor(10000 + Math.random()* 90000)

let myBalance: number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter your name:",
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value.";
            }
        },
              
        {
             name: "courses",
             type: "list",
             message: "select the course to enrolled",
             choices: ["MS.OFFICE", "HTML", "CSS", "JAVASCRIPT", "PYTHON"]
            
        }
    ]
);

const tutionFee: {[key: string]: number} = {
    "MS.OFFICE": 2000,
    "HTML": 2500,
    "CSS": 3000,
    "JAVASCRIPT": 6000,
    "PYTHON": 10000
};

console.log(`\n Tution Fee: ${tutionFee[answer.courses]}/-\n`);
console.log(`\n current balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "select payment method",
            choices: ["Bank Acount" , "Easypaisa" , "Jazzcash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money:",
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter an amount"
                },
                
        }
    ]
);
console.log(`\n You select payment method: ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(`\n Congratulation you have successfully enrolled in ${answer.courses}\n`);

    let ans = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]

    }]
)
if(ans.select === "View Status"){
    console.log(`\n**Status**\n`);
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumb}`);
    console.log(`Courses: ${answer.courses}`);
    console.log(`Tution Fee:${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
    
} else{
    console.log("\n Exiting Student Management system");
    
}
    
}else{
    console.log("Invalid amout due to course\n");
    
}
