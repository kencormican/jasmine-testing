function whatCanIDrink(age) {
    if(age < 0){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    else if (0 < age && age < 14) {
            return "Drink Toddy";
        }
    
    else if (14 < age &&  age < 18) {
            return "Drink Coke";
        }
    else if (18 < age &&  age < 21) {
            return "Drink Beer";
        }
    else if (21 < age &&  age < 130) {
            return "Drink Whiskey";
        }
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}
