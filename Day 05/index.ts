//Question 13:
let transports: string[]= ['motorcycle', 'car', 'bicycle'];
transports.forEach(transport =>
    {console.log(`I would like to own a ${transport}`);
    }
);


//Question 14:
let guestList: string[]= ['hania', 'hadia', 'hiba'];
guestList.forEach(list =>
    {
        console.log(`Dear ${list}, you are invited at the dinner.`);
        
    }
);


//Question 15:
let unabletoAttend = 'hadia';
console.log(`${unabletoAttend}, can't make it to dinner.`);

//replace the guest:
let newGuest = 'haifa';
guestList[guestList.indexOf(unabletoAttend)]= newGuest;

//again new invitation:
guestList.forEach(list => 
    {
        console.log(`Dear ${list}, you are invited at the dinner.`);
        
    }
);
