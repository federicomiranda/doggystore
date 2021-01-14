const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB_yxyb_VNb38Ov0lP46ioNUkWd3zsXNPg",
  authDomain: "doggystore-7e5f7.firebaseapp.com",
  projectId: "doggystore-7e5f7",
});

var db = firebase.firestore();

var productos = [
  {
    "id": 1,
    "category": "camas",
    "title": "Moises WePets Classic Lunar",
    "description": "",
    "img": "244175.webp",
    "size": [
      "m"
    ],
    "price": 3630,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 2,
    "category": "camas",
    "title": "Cama Cocooning Andy Rectangular Beige",
    "description": "",
    "img": "248037-A.webp",
    "size": [
      "s",
      "m"
    ],
    "price": 6350,
    "outstanding": "",
    "discount": 15
  },
  {
    "id": 3,
    "category": "camas",
    "title": "Cama Cocooning Emir Redonda",
    "description": "",
    "img": "/src/assets/products/248039.webp",
    "size": "",
    "price": 4170,
    "outstanding": true,
    "discount": 15
  },
  {
    "id": 4,
    "category": "camas",
    "title": "Colchoneta WePets Proof Graffito",
    "description": "",
    "img": "244120.png",
    "size": [
      "s",
      "m",
      "l",
      "xl",
      "xxl"
    ],
    "price": 5590,
    "outstanding": "",
    "discount": 20
  },
  {
    "id": 5,
    "category": "camas",
    "title": "Moises WePets Palmeras",
    "description": "",
    "img": "244144.webp",
    "size": "",
    "price": 3400,
    "outstanding": "",
    "discount": 15
  },
  {
    "id": 6,
    "category": "camas",
    "title": "Cama Cocooning Jesse Impermeable",
    "description": "",
    "img": "248078.webp",
    "size": [
      "s"
    ],
    "price": 5900,
    "outstanding": "",
    "discount": 15
  },
  {
    "id": 7,
    "category": "camas",
    "title": "Cama Cocooning Andy Chocolate",
    "description": "",
    "img": "248074.webp",
    "size": [
      "s",
      "m"
    ],
    "price": 3610,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 8,
    "category": "camas",
    "title": "Cama Cocooning Eva Little Dome",
    "description": "",
    "img": "248073.webp",
    "size": [
      "xl"
    ],
    "price": 9000,
    "outstanding": "",
    "discount": 20
  },
  {
    "id": 9,
    "category": "comederos-y-bebederos",
    "title": "Comedero Plástico De Boca",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores tenetur facere nostrum autem rem mollitia sequi labore assumenda minima esse maxime debitis cum optio delectus, consequuntur reiciendis, tempora in.",
    "img": "211004-A.webp",
    "size": [
      "el más grande"
    ],
    "price": 450,
    "outstanding": true,
    "discount": ""
  },
  {
    "id": 10,
    "category": "comederos-y-bebederos",
    "title": "Comedero Doble Inoxidable Con Antideslizante Feed Me",
    "description": "",
    "img": "239276.webp",
    "size": "",
    "price": 1640,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 11,
    "category": "comederos-y-bebederos",
    "title": "Bebedero Inoxidable Antideslizante Nova",
    "description": "",
    "img": "249790.webp",
    "size": [
      "chico",
      "mediano",
      "grande",
      "extra grande"
    ],
    "price": 850,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 12,
    "category": "comederos-y-bebederos",
    "title": "Comedero Bebedero Animal Pet Doble De Acrilico Y Acero",
    "description": "",
    "img": "246219.webp",
    "size": "",
    "price": 3370,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 13,
    "category": "comederos-y-bebederos",
    "title": "Comedero de Altura Trixie Regulable",
    "description": "",
    "img": "243553.webp",
    "size": "",
    "price": 2850,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 14,
    "category": "comederos-y-bebederos",
    "title": "Comedero Bebedero Animal Pet De Acrilico Y Acero",
    "description": "",
    "img": "246202.webp",
    "size": [
      "chico",
      "mediano",
      "grande"
    ],
    "price": 3340,
    "outstanding": true,
    "discount": 30
  },
  {
    "id": 15,
    "category": "comederos-y-bebederos",
    "title": "Comedero Automatico Perro Millex Break",
    "description": "",
    "img": "238350.webp",
    "size": "",
    "price": 1870,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 16,
    "category": "comederos-y-bebederos",
    "title": "Comedero Peth Health Altura Variable",
    "description": "",
    "img": "255269.webp",
    "size": "",
    "price": 5540,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 17,
    "category": "comederos-y-bebederos",
    "title": "Comedero Millex Transparente",
    "description": "",
    "img": "233042.webp",
    "size": "",
    "price": 180,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 18,
    "category": "elementos-de-paseo",
    "title": "Collar Reflectivo Animal Pet Azul",
    "description": "",
    "img": "246265.webp",
    "size": [
      "s",
      "m"
    ],
    "price": 690,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 19,
    "category": "elementos-de-paseo",
    "title": "Correa Con Cinturon De Seguridad Amici",
    "description": "",
    "img": "218046.webp",
    "size": "",
    "price": 1040,
    "outstanding": "",
    "discount": 15
  },
  {
    "id": 20,
    "category": "elementos-de-paseo",
    "title": "Bolsitas Cancat Rollo - 10 Unid.",
    "description": "",
    "img": "221318.webp",
    "size": "",
    "price": 60,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 21,
    "category": "elementos-de-paseo",
    "title": "Arnes y Correa Amici Premium Amarillo",
    "description": "",
    "img": "218037.webp",
    "size": [
      "m"
    ],
    "price": 1150,
    "outstanding": "",
    "discount": 15
  },
  {
    "id": 22,
    "category": "elementos-de-paseo",
    "title": "Arnes Cocooning Joseph Gris Lima",
    "description": "",
    "img": "248059.webp",
    "size": [
      "s",
      "m",
      "l"
    ],
    "price": 3090,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 23,
    "category": "elementos-de-paseo",
    "title": "Arnes Ezydog Chest Plate Rojo",
    "description": "",
    "img": "241064.png",
    "size": [
      "xs",
      "s",
      "m",
      "l",
      "xl"
    ],
    "price": 3740,
    "outstanding": true,
    "discount": ""
  },
  {
    "id": 24,
    "category": "elementos-de-paseo",
    "title": "Arnes PetsPro Camuflado",
    "description": "",
    "img": "255257.webp",
    "size": [
      "s",
      "m"
    ],
    "price": 860,
    "outstanding": "",
    "discount": 30
  },
  {
    "id": 25,
    "category": "elementos-de-paseo",
    "title": "Pretal Millex Nylon Estampado Heavy",
    "description": "",
    "img": "239315.webp",
    "size": [
      "l"
    ],
    "price": 2660,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 26,
    "category": "juguetes",
    "title": "Pelota De Goma Deportes",
    "description": "",
    "img": "238916.webp",
    "size": "",
    "price": 110,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 27,
    "category": "juguetes",
    "title": "Pescado Mordillo Ice Cancat",
    "description": "",
    "img": "221188.webp",
    "size": "",
    "price": 980,
    "outstanding": "",
    "discount": 10
  },
  {
    "id": 28,
    "category": "juguetes",
    "title": "Peluche Plush Poop",
    "description": "",
    "img": "245090.webp",
    "size": "",
    "price": 730,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 29,
    "category": "juguetes",
    "title": "Dental Rugby",
    "description": "",
    "img": "221044.png",
    "size": "",
    "price": 1280,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 30,
    "category": "juguetes",
    "title": "Juguete Gigwi Huevo Vaiven Gallo",
    "description": "",
    "img": "228778.webp",
    "size": "",
    "price": 1430,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 31,
    "category": "juguetes",
    "title": "Juguete Rascals Dispensador Banana",
    "description": "",
    "img": "227249.webp",
    "size": "",
    "price": 1430,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 32,
    "category": "juguetes",
    "title": "Pelota JW Hol-Ee Roller",
    "description": "",
    "img": "217029.webp",
    "size": [
      "chico",
      "mediano",
      "grande"
    ],
    "price": 1430,
    "outstanding": "",
    "discount": 30
  },
  {
    "id": 33,
    "category": "juguetes",
    "title": "Dental Stick Con Soga",
    "description": "",
    "img": "221045.png",
    "size": "",
    "price": 1370,
    "outstanding": "",
    "discount": ""
  },
  {
    "id": 34,
    "category": "juguetes",
    "title": "Pelotas Kong Squeakair",
    "description": "",
    "img": "224295.webp",
    "size": "",
    "price": 920,
    "outstanding": "",
    "discount": 10
  },
  {
    "id": 35,
    "category": "juguetes",
    "title": "Peluche Petmate Puercoespin",
    "description": "",
    "img": "233023.webp",
    "size": "",
    "price": 1340,
    "outstanding": "",
    "discount": ""
  }
];

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      category: obj.category,
      title: obj.title,
      description: obj.description,
      img: obj.img,
      size: obj.size,
      price: obj.price,
      outstanding: obj.outstanding,
      discount: obj.discount,
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});
