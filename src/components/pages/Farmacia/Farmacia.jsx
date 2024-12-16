import React from 'react'
import "./Farmacia.css"

const Farmacia = () => {

  const medicamentos = [
    {
      id: 1,
      nombre: "Paracetamol",
      tipo: "Analgesico",
      dosis: "500mg",
      precio: 0.50,
      cantidad: 100,
      fechaVencimiento: "2025-12-01"
    },
    {
      id: 2,
      nombre: "Ibuprofeno",
      tipo: "Antiinflamatorio",
      dosis: "400mg",
      precio: 1.20,
      cantidad: 50,
      fechaVencimiento: "2026-03-15"
    },
    {
      id: 3,
      nombre: "Amoxicilina",
      tipo: "Antibiótico",
      dosis: "250mg",
      precio: 2.00,
      cantidad: 75,
      fechaVencimiento: "2025-09-10"
    },
    {
      id: 4,
      nombre: "Loratadina",
      tipo: "Antihistamínico",
      dosis: "10mg",
      precio: 0.80,
      cantidad: 200,
      fechaVencimiento: "2026-07-20"
    },
    {
      id: 5,
      nombre: "Salbutamol",
      tipo: "Broncodilatador",
      dosis: "100mcg",
      precio: 3.50,
      cantidad: 30,
      fechaVencimiento: "2024-11-01"
    },
    {
      id: 6,
      nombre: "Omeprazol",
      tipo: "Antiácido",
      dosis: "20mg",
      precio: 1.00,
      cantidad: 150,
      fechaVencimiento: "2025-05-12"
    },
    {
    id: 7,
    nombre: "Metformina",
    tipo: "Antidiabético",
    dosis: "850mg",
    precio: 0.90,
    cantidad: 120,
    fechaVencimiento: "2026-01-10"
  },
  {
    id: 8,
    nombre: "Enalapril",
    tipo: "Antihipertensivo",
    dosis: "10mg",
    precio: 0.70,
    cantidad: 80,
    fechaVencimiento: "2025-10-25"
  },
  {
    id: 9,
    nombre: "Clorfenamina",
    tipo: "Antihistamínico",
    dosis: "4mg",
    precio: 0.50,
    cantidad: 60,
    fechaVencimiento: "2026-05-15"
  },
  {
    id: 10,
    nombre: "Azitromicina",
    tipo: "Antibiótico",
    dosis: "500mg",
    precio: 3.00,
    cantidad: 40,
    fechaVencimiento: "2024-12-30"
  },
  {
    id: 11,
    nombre: "Diclofenaco",
    tipo: "Antiinflamatorio",
    dosis: "50mg",
    precio: 0.60,
    cantidad: 90,
    fechaVencimiento: "2025-06-18"
  },
  {
    id: 12,
    nombre: "Ranitidina",
    tipo: "Antiácido",
    dosis: "150mg",
    precio: 1.10,
    cantidad: 50,
    fechaVencimiento: "2026-02-22"
  },
  {
    id: 13,
    nombre: "Acetaminofén",
    tipo: "Analgesico",
    dosis: "650mg",
    precio: 0.40,
    cantidad: 200,
    fechaVencimiento: "2025-11-11"
  },
  {
    id: 14,
    nombre: "Furosemida",
    tipo: "Diurético",
    dosis: "40mg",
    precio: 0.55,
    cantidad: 75,
    fechaVencimiento: "2024-09-30"
  },
  {
    id: 15,
    nombre: "Prednisona",
    tipo: "Corticosteroide",
    dosis: "5mg",
    precio: 0.80,
    cantidad: 45,
    fechaVencimiento: "2026-08-01"
  },
  {
    id: 16,
    nombre: "Captopril",
    tipo: "Antihipertensivo",
    dosis: "25mg",
    precio: 0.65,
    cantidad: 100,
    fechaVencimiento: "2025-04-14"
  }
  ];

  return (
    <main>
      <section className='container-medicamentos'>
        {
          medicamentos.map(m => (
            <div className='item-medicamento' key={m.id}>
              <h3>{m.nombre}</h3>
              <h3>{m.tipo}</h3>
              <h3>{m.dosis}</h3>
              <h3>{m.precio}</h3>
              <h3>{m.cantidad}</h3>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Farmacia