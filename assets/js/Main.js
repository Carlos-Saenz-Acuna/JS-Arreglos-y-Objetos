const contenedor = document.getElementById("contendor")

const propiedadesVenta = [
  {
    id: "venta1",
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    id: "venta2",
    nombre: "Apartamento acojedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    id: "venta3",
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    id: "venta4",
    nombre: "Apartamento en providencia",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_716816-MLC76971527217_062024-F.webp",
    descripcion:
      "Apartamento exclusivo con vista directa al mar y acabados de lujo en cada rincón.",
    ubicacion: "Suecia 440, Los Leones, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    banos: 3,
    costo: "7.245",
    smoke: false,
    pets: false,
  },
  {
    id: "venta5",
    nombre: "Casa Condominio Mirado Pidra Roja",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_673876-MLC77974346722_082024-F.webp",
    descripcion:
      "Disfruta de un apartamento moderno con vista panorámica al océano y acceso a la playa.",
    ubicacion: "Mirado Pidra Roja",
    habitaciones: 3,
    banos: 3,
    costo: "12.200",
    smoke: true,
    pets: true,
  },
  {
    id: "venta6",
    nombre: "Departamenteos Altos de Idahue",
    src: "https://cl.habcdn.com/photos/business/medium/3459d93c7a09e985694c6c4d69f80a34-296190.jpg",
    descripcion:
      "Acogedora casa rústica rodeada de naturaleza, ideal para desconectar del bullicio de la ciudad.",
    ubicacion: "Altos de Idahue,
    habitaciones: 4,
    banos: 2,
    costo: "3.840",
    smoke: false,
    pets: true,
  },
];

const propiedadesArriendo = [
  {
    id: "arriendo1",
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    id: "arriendo2",
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    id: "arriendo3",
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    id: "arriendo4",
    nombre: "Apartamento Somma Asturias ",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_764662-MLC70845488419_082023-F.webp",
    descripcion:
      "Este apartamento está ubicado en el corazón de la ciudad, cerca de tiendas y restaurantes.",
    ubicacion: "Asturias 77, Metro Escuela Militar, Las Condes, RM (Metropolitana)",
    habitaciones: 2,
    banos: 2,
    costo: "977.760",
    smoke: false,
    pets: true,
  },
  {
    id: "arriendo5",
    nombre: "Departamento Vespucio Switch",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_642343-MLC78985773172_092024-F.webp",
    descripcion:
      "Impresionante loft en la azotea con vistas panorámicas de la ciudad y acabados de lujo.",
    ubicacion: "Av. Américo Vespucio Sur 345, Metro Escuela Militar, Las Condes, RM (Metropolitana)",
    habitaciones: 1,
    banos: 1,
    costo: "1.010.118",
    smoke: true,
    pets: true,
  },
  {
    id: "arriendo6",
    nombre: "Casa Condominio Las Brisas",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_942673-MLC74022779295_012024-F.webp",
    descripcion:
      "Hermosa casa unifamiliar con un jardín privado, ideal para una familia.",
    ubicacion: "Brisas de Chicureo",
    habitaciones: 4,
    banos: 4,
    costo: "4.500.000",
    smoke: false,
    pets: false,
  },
];

function propiedadesVenta(){
    for(let producto of propiedadesVenta){
        contenedor.innerHTML +=`
        
        `
    }
}
