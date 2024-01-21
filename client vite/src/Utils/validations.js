const validations = (stateForm) => {
    const errors = {}

    if(stateForm.name.trim().length === 0){
        errors.name = 'A name is requirerd'
    }else if(!/^[a-zA-Z ]+$/.test(stateForm.name)){
        errors.name = 'The name cannot contain special characters or numbers'   
    }else if(stateForm.name.length > 20){
        errors.name = 'Cannot contain more than 20 characters'
    }

    //devuelve la cadena sin espacios en blanco al principio y al final.
    if (stateForm.image.trim().length === 0) {
        errors.image = "Image URL required";
    } else if (!/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(stateForm.image)) {
        errors.image = "The URL entered is not a valid image URL";
    }


    if(stateForm.defense.trim().length === 0){
        errors.defense = 'A defense is required'
    }else if(stateForm.defense <= 0 || stateForm.defense > 255){
        errors.defense = 'Tiene que ser mayor a 0 y menor a 255'
    }


    if(stateForm.attack.trim().length === 0){
        errors.attack = 'A atttack is required'
    }else if(stateForm.attack <= 0 || stateForm.attack > 255){
        errors.attack = 'Tiene que ser mayor a 0 y menor a 255'
    }


    if(stateForm.hp.trim().length === 0){
        errors.hp = 'A hp is required'
    }else if(stateForm.hp <= 0 || stateForm.hp > 255){
        errors.hp = 'Tiene que ser mayor a 0 y menor a 255'
    }

    if(stateForm.speed.trim().length === 0){
        errors.speed = 'A speed is required'
    }else if(stateForm.speed <= 0 || stateForm.speed > 255){
        errors.speed = 'Tiene que ser mayor a 0 y menor a 255'
    }


    if(stateForm.height.trim().length === 0){
        errors.height = 'A atttack is required'
    }else if(stateForm.height <= 0 || stateForm.height > 255){
        errors.height = 'Tiene que ser mayor a 0 y menor a 255'
    }


    if(stateForm.weight.trim().length === 0){ 
        errors.weight = 'A weight is required'
    }else if(stateForm.height <= 0 || stateForm.weight > 255){
        errors.weight = 'Tiene que ser mayor a 0 y menor a 255'
    }


    // if(stateForm.types.length === 0){
    //     errors.types = 'At least one type is required'
    // }
    if(stateForm.types === null){
        errors.types = 'At least one type is required'
    }

    return errors

}


export default validations;
