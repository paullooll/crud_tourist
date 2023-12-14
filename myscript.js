var idV, nameV, locationV, addressV, descriptionV, imageurlV;

function readFom() {
  idV = document.getElementById("id").value;
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  locationV = document.getElementById("location").value;
  descriptionV = document.getElementById("description").value;
  imageurlV = document.getElementById("imageurl").value;
  console.log(idV, nameV, addressV, locationV,descriptionV, imageurlV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("spot/" + idV)
    .set({
      id: idV,
      name: nameV,
      address: addressV,
      location: locationV,
      description: descriptionV,
      imageurl: imageurlV,
    });

  alert("Data Inserted");
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("location").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageurl").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("spot/" + idV)
    .on("value", function (snap) {
      document.getElementById("id").value = snap.val().id;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("location").value = snap.val().location;
      document.getElementById("description").value = snap.val().description;
      document.getElementById("imageurl").value = snap.val().imageurl;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("spot/" + idV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      address: addressV,
      location: locationV,
      description: descriptionV,
      imageurl: imageurlV,
    });
  alert("Data Update");
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("location").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageurl").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("spot/" + idV)
    .remove();
  alert("Data Deleted");
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("location").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageurl").value = "";
  
};
