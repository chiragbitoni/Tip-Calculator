let btn=document.getElementById('btn');

 btn.addEventListener('click',function(){
    let billAmount = document.getElementById('bill-amount').value;
    
    // Validate Bill Amount 

    if(billAmount<0){
        alert("Bill cannot be Negative")
        document.getElementById("container").reset();
        return;
    } 
    else if(billAmount==0){
        alert("Cheers! No need to pay Bill")
    }

    let tipPercentage = document.getElementById('tip-percentage').value;

    // Validate Tip Percentage

    if(tipPercentage<0){
        alert("Tip Percentage cannot be less than 0")
        return;
    }
    let totalPerson = document.getElementById('total-person').value;

    //  Validate Number of Persons
    
    if(totalPerson<=0)
    {
        alert("There Must be a Person")
        return;
    }
    else if(totalPerson%1!=0){
        alert("Person Cannot be in fractions")
        return;
    }
    let tipAmountPerPerson = document.getElementById('tip-amount-per-person').value = (billAmount/100)*tipPercentage/totalPerson;
    let totalBillPerPerson = document.getElementById('total-bill-per-person').value = (billAmount/totalPerson)+tipAmountPerPerson;
 }) 
