
  switch(name)
  {
    case 'nom':
        if(value.length==0)
        {
          errors.nom='Ce champ est obligatoire.';
        }
        else
        {
          errors.nom=valide+'';
        }
  
        if(value.length<3)
        {
          errors.nom='Veuillez fournir au moins 3 caractères.';
        }
        else
        {
          errors.nom=valide+'';
        }
        break;
        case 'prenom':
          if(value.length==0)
        {
          errors.prenom='Ce champ est obligatoire.';
        }
        else
        {
          errors.prenom=valide+'';
        }
  
        if(value.length<3)
        {
          errors.prenom='Veuillez fournir au moins 3 caractères.';
        }
        else
        {
          errors.prenom=valide+'';
        }
        break;  
  
        case 'email':
        errors.email = validEmailRegex.test(value)?  'Veuillez fournir une adresse électronique valide.':valide+'';
        break; 
        case 'num_tel':
          errors.num_tel = value.length < 8 || value.length > 8 ? 'Veuillez fournir  8 caractères.' :valide+'';
          break;
        case 'mot_de_passe': 
        errors.mot_de_passe = value.length < 8 || value.length > 8 ? 'Veuillez fournir  8 caractères.' :valide+'';
       // errors.mot_de_passe = value.length > 8 ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
        break;
        case 'cin': 
        errors.cin = value.length < 8 || value.length > 8 ? 'Veuillez fournir 8 caractères.' :valide+'';
     //   errors.cin = ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
        break;
        case 'date_de_naissance': 
        errors.date_de_naissance = value.length ==0? 'Ce champ est obligatoire.' :valide+'';
        
        break;
      default:
        break; 
       
  }