
  switch(name)
  {
  
    case 'nom':
    if(isMin(value,3)){errors.nom=valide+''}else{errors.nom="Veuillez fournir au moins 4 caractères.";}
    break; 
    case 'prenom':
    if(isMin(value,3)){errors.prenom=valide+''}else{errors.prenom="Veuillez fournir au moins 4 caractères.";}
    break; 
    case 'cin':
     if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){errors.cin=valide+''}
     else if(isNumber(value)==false){errors.cin="Veuillez fournir un numéro valide.";}
     else if(isMin(value,8)==false){errors.cin="Veuillez fournir au moins 8 caractères.";}
     else if(isMax(value,8)==false){errors.cin="Veuillez fournir au plus 8 caractères.";}
    break; 
    case 'date_de_naissance':
      if(isEmpty(value)){errors.date_de_naissance="Ce champ est obligatoire.";}
      else {errors.date_de_naissance=valide+'';}
     break; 
     case 'num_tel':
      if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){errors.num_tel=valide+''}
      else if(isNumber(value)==false){errors.num_tel="Veuillez fournir un numéro valide.";}
      else if(isMin(value,8)==false){errors.num_tel="Veuillez fournir au moins 8 caractères.";}
      else if(isMax(value,8)==false){errors.num_tel="Veuillez fournir au plus 8 caractères.";}
     break; 
     case 'email':
      if(isEmpty(value)){errors.email="Ce champ est obligatoire.";}
      else if(isEmail(value)==false){errors.email="Veuillez fournir une adresse électronique valide.";}
      else {errors.email=valide+'';}
     break;
     case 'mot_de_passe':
      if(isEmpty(value)){errors.mot_de_passe="Ce champ est obligatoire.";}
      else if(isValidationPassword(value)==false)
      {
        errors.mot_de_passe="";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère alphabétique minuscule <br> ";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère alphabétique majuscule <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère numérique <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins un caractère spécial <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir 8 caractères ou plus <br>";
    }
      else {errors.mot_de_passe=valide+'';}
     break;  
  }
