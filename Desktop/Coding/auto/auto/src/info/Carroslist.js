
import car_1_1 from './carros/car1/car1_1.jpeg'
import car_1_2 from './carros/car1/car1_2.jpeg'
import car_1_3 from './carros/car1/car1_3.jpeg'
import car_1_4 from './carros/car1/car1_4.jpeg'


import car_2_1 from './carros/car2/car2_1.jpeg'
import car_2_2 from './carros/car2/car2_2.jpeg'
import car_2_3 from './carros/car2/car2_3.jpeg'
import car_2_4 from './carros/car2/car2_4.jpeg'


import car_3_1 from './carros/car3/car3_1.jpeg'
import car_3_2 from './carros/car3/car3_2.jpeg'
import car_3_3 from './carros/car3/car3_3.jpeg'
import car_3_4 from './carros/car3/car3_4.jpeg'


import car_4_1 from './carros/car4/car4_1.jpeg'
import car_4_2 from './carros/car4/car4_2.jpeg'
import car_4_3 from './carros/car4/car4_3.jpeg'
import car_4_4 from './carros/car4/car4_4.jpeg'


import car_5_1 from './carros/car5/car5_1.jpeg'
import car_5_2 from './carros/car5/car5_2.jpeg'
import car_5_3 from './carros/car5/car5_3.jpeg'
import car_5_4 from './carros/car5/car5_4.jpeg'


import car_6_1 from './carros/car6/car6_1.jpeg'
import car_6_2 from './carros/car6/car6_2.jpeg'
import car_6_3 from './carros/car6/car6_3.jpeg'
import car_6_4 from './carros/car6/car6_4.jpeg'

//Pra colocar um carro como vendido, precisa colocar "sold:true"

const catalogue = [


    {
      id:1,
      name:'ECOSPORT XLT 2.0 AUTOMÁTICA',
      desc:`Completa, 
       Bancos em couro,
       Ar condicionado,
       Direção hidráulica,
       Travas e vidros elétricos, 
       Calçado de pneus, 
       Lataria e estofamento em ótimo estado.`,
      price:'R$210.900,00',
      year:'2012',
      imgs:[
        car_1_1, car_1_2, car_1_3, car_1_4,
      ],
      sold:false
    },


    {
      id:2,
      name:'HYUNDAI HB20 1.0 COMPLETO',
      desc:`ÚNICO DONO,
      Direção elétrica,
      Ar condicionado,
      Travas e vidros elétricos,
      Alarme,
      Lataria e estofamento em ótimo estado.
      
      Carro igual a novo!`,
      price:'R$210.900,00',
      year:'2018',
      imgs:[
        car_2_1, car_2_2, car_2_3, car_2_4,
      ]
    },


    {
      id:3,
      name:'CRUZE 1.8 AUTOMÁTICO',
      desc:`Bancos em couro, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Alarme, Quatro pneus novos, Lataria e estofamento em ótimo estado.`,
      price:'R$210.900,00',
      year:'2013',
      imgs:[
        car_3_1, car_3_2, car_3_3, car_3_4,
      ]
    },


    {
      id:4,
      name:'MONTANA 1.4 COMPLETA',
      desc:`2º dono, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Computador de bordo, Calçada de pneus, 4 amortecedores novos, Revisada`,
      price:'R$210.900,00',
      year:'2012',
      imgs:[
        car_4_1, car_4_2, car_4_3, car_4_4,
      ]
    },


    {
      id:5,
      name:'CHEVROLET CLASSIC 1.0',
      desc:`Completo, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Alarme, Rodas de liga leve, Calçado de pneus, Lataria e estofamento em ótimo estado. Revisado.`,
      price:'R$210.900,00',
      year:'2015',
      imgs:[
        car_5_1, car_5_2, car_5_3, car_5_4,
      ]
    },


    {
      id:6,
      name:'STRADA WORKING C.S. 1.4',
      desc:`Ar condicionado, Direção hidráulica, Travas e Vidros elétricos, Rodas de liga leve, Lataria e estofamento em bom estado. Revisada.`,
      price:'R$210.900,00',
      year:'2013',
      imgs:[
        car_6_1, car_6_2, car_6_3, car_6_4,
      ],
      sold:true,
    },


  ]

export default catalogue