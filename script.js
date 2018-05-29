pAusgabe = document.getElementById("ausgabe");
pTag = document.getElementById("studente");
button = document.getElementById("button");
pTagForEach = document.getElementById("studenteForEach");
document.getElementById("vorname");
student1 = new studentPrototype("ahmet", "ulas", "ahmet-ulas@live.at", "2343");
student2 = new studentPrototype(
  "al",
  "ekiz",
  "alihan-ekiz@hotmail.com",
  "3424"
);
student3 = new studentPrototype(
  "hasan",
  "bayraktar",
  "hasso-bayr@live.at",
  "5344"
);

function studentPrototype(vorname, nachname, email, studentennr) {
  this.vorname = vorname;
  this.nachname = nachname;
  this.email = email;
  this.studentennr = studentennr;

  this.checkName = function() {
    if (this.vorname.length > 3 || this.nachname.length > 3) {
      console.log("ok");
    } else {
      alert("Student " + this.studentennr + " Vor- oder Nachname falsch.");
    }
  };
  this.checkName();
}

pAusgabe.innerHTML +=
  student1.vorname +
  "<br />" +
  student1.nachname +
  "<br />" +
  student1.email +
  "<br />" +
  student1.studentennr +
  "<br/><br/>";

var schule = new Array(student1, student2, student3);

schule.push(new studentPrototype("aga", "aga", "sefe", "2432"));

for (var item in schule) {
  pTag.innerHTML +=
    schule[item].vorname +
    "<br/>" +
    schule[item].nachname +
    "<br/>" +
    schule[item].email +
    "<br/>" +
    schule[item].studentennr +
    "<br/><br/>";
}

schule.forEach(element => {
  console.log(element.vorname + element.nachname);
  pTagForEach.innerHTML +=
    element.vorname +
    "<br /> " +
    element.nachname +
    "<br />" +
    element.email +
    "<br/>" +
    element.studentennr +
    "<br/><br/>";
});
