const data = {
    question:"",
        questionType:"",
        correctAnswer:"",
        choices: {
          choiceOne:"",
          choiceTwo:"",
          choiceThree:""
        },
        explanation: ""
  }
  
  const isEmptyProperty = []

  // check each object property if they have empty string.
  for (const [key, value] of Object.entries(data)) {
  // if property is an object then check its property also if they have empty string.
    if(typeof value === "object"){ 
      object = value
      for (const [key, value] of Object.entries(object)) {
        if(value === ""){
          isEmptyProperty.push(true)
        }else{
          isEmptyProperty.push(false)
        }
      } 
    }else{
      if(value === ""){
        isEmptyProperty.push(true)
      }else{
        isEmptyProperty.push(false)
      }
    }
  }
  
  console.log(isEmptyProperty)