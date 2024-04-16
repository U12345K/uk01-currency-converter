import inquirer from "inquirer"


const currency:any ={
    USD:1,
    AED:3.67,
    EUR:0.94,
    KWD:0.31,
    SAR:3.75,
    PKR:278.12,
}
let user_answer = await inquirer.prompt(
    [
        {
            name:`from`,
            message:`enter from currency`,
            type:`list`,
            choices:[`USD`,`AED`,`EUR`,`KWD`,`SAR`,`PKR`]
        },
        {
            name:`to`,
            message:`enter to currency`,
            type:`list`,
            choices:[`USD`,`AED`,`EUR`,`KWD`,`SAR`,`PKR`]
        },
        {
            name:`amount`,
            message:`ener your amount`,
            type:`number`
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);




