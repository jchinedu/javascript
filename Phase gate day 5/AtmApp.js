const prompt = require("prompt-sync")(); 
const Atm_App = function() { 
        let balance = Number(prompt("Enter your starting account balance (₦): "))
        if (balance < 100){
	 console.log("You must start with at least ₦100.")
	 return;
	}
	
      while (true) {
        console.log("\n=== welcome to SEMICOLON ATM ===")
        console.log("1. Withdraw")
        console.log("2. View Transaction Log")
        console.log("3. Exit")

        let choice = prompt("Choose an option: ")

        if (choice == '1'){ 
	let amount = Number(prompt("Enter withdrawal amount (₦): "))
	
  

            if (amount % 500 != 0){
                console.log("Withdrawal must be in multiples of ₦500 or ₦1000.");
                continue;
		}
            let withdrawal_fee = 100;
            let total_deduction = amount + withdrawal_fee;
            let max_withdrawable = balance * 0.9;

            if(amount > max_withdrawable){
                console.log("You cannot withdraw more than 90% of your balance).")
		}
            else if (balance - total_deduction < 100){
                console.log("Insufficient balance. At least ₦100 must remain in the account after withdrawal.")
		}
            else{
                 balance -= total_deduction
                console.log("\n--- TRANSACTION SUCCESSFUL ---")
                console.log("Amount Withdrawn ", amount)
                console.log("Withdrawal Fee ", withdrawal_fee)
                console.log("Remaining Balance ", balance)

                          
         if (choice == '3'){
		return;
	}
	
        }

}
}
}
console.log(Atm_App())
