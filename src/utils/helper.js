const randomVisitor = () => Math.floor(Math.random() * 100)

function checkTeen(calculateVisitor){
    calculateVisitor.toString()
    let firstdigit = calculateVisitor[0]
    let length = calculateVisitor.length
    if (length === 2){
        if (firstdigit === 1){
            return true
        }
    }
    return false
}


function suffixGen(calculateVisitor){
    let suffix = "th"
    if (!checkTeen(calculateVisitor)){
        let lastdigit = calculateVisitor%10
        switch(lastdigit){
            case 1:
                suffix= "st"
                break;
            case 2:
                suffix= "nd"
                break;
            case 3:
                suffix= "rd"
                break;
            default:
                break;
        }
    }
    return calculateVisitor + suffix
}

export const calculateVisitor = () => suffixGen(randomVisitor())
