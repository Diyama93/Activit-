class User{
    constructor(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    afficher(){
        
        console.log("Nom : " + this.nom + ", prénom: " + this.prenom);
    }

}