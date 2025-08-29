process.stdin.on('data', input => {
    let greeting=input.toString().trim();
    let message=" ";
  
    switch(greeting){
      case"HELLO":
        message="ENGLISH";
        break;
      case "MABUHAY":
        message="TAGALOG";
        break;
      case "HOLA":
        message="SPANISH";
        break;
      case "HALLO":
        message="GERMAN";
        break;
      case "BONJOUR":
        message="FRENCH";
        break;
      case "CIAO":
        message="ITALIAN";
        break;
      case "ZDRAVSTUJTE":
        message="RUSSIAN";
        break;
      default:
        message="UNKNOWN";
    }
  
    console.log(message);
    
    
    process.exit();
  });

  //created and submitted on aug 29, 2025