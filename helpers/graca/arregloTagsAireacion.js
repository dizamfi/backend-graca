// const arregloTagsPS039_TA039_TA = () => {
//   const tableros = {
//     // #*********************** TA ***********************************
//     TA039: [
//       { name: "TA039_2.Inputs", offset: 52, type: "DWord", count: 2 },
//       { name: "TA039_2.Outputs", offset: 54, type: "Word", count: 1 },
//       { name: "TA039_2.Num_Air_On", offset: 55, type: "Int", count: 1 },
//       { name: "TA039_2.Horas_Trab_Act", offset: 56, type: "Real", count: 2 },
//       { name: "TA039_2.Horas_Trab_Guar", offset: 58, type: "Real", count: 2 },
//       {
//         name: "TA039_2.Horas_Trab_Act_Dia",
//         offset: 60,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA039_2.Horas_Trab_Guar_Dia",
//         offset: 62,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA039_2.Stat_Comm", offset: 64, type: "Bool", count: 1 },
//       { name: "TA039_2.Desactiva", offset: 64, type: "Bool", count: 1 },
//     ],
//   };

//   return tableros;
// };

const arregloTagsPS039_TA039 = () => {
  const tableros = {
    TA039: [
      // #*********************** TCP ***********************************
      { name: "TCP039_1.Inputs", offset: 0, type: "DWord", count: 2 },
      { name: "TCP039_1.Outputs", offset: 2, type: "Word", count: 2 },
      { name: "TCP039_1.Horas_Trab_Act", offset: 3, type: "Real", count: 2 },
      { name: "TCP039_1.Horas_Trab_Guar", offset: 5, type: "Real", count: 2 },
      { name: "TCP039_1.Horas_Trab_Act_Dia", offset: 7, type: "Real", count: 2 },
      {
        name: "TCP039_1.Horas_Trab_Guar_Dia",
        offset: 9,
        type: "Real",
        count: 2,
      },
      { name: "TCP039_1.Stat_Comm_MB", offset: 11, type: "Bool", count: 1 },
      { name: "TCP039_1.Stat_Comm", offset: 11, type: "Bool", count: 1 },
      { name: "TCP039_1.V_Avg", offset: 12, type: "Real", count: 2 },
      { name: "TCP039_1.I_Tot", offset: 14, type: "Real", count: 2 },
      { name: "TCP039_1.P_Tot", offset: 16, type: "Real", count: 2 },
      { name: "TCP039_1.PF_Avg", offset: 18, type: "Real", count: 2 },
      { name: "TCP039_1.V_12", offset: 20, type: "Real", count: 2 },
      { name: "TCP039_1.V_23", offset: 22, type: "Real", count: 2 },
      { name: "TCP039_1.V_31", offset: 24, type: "Real", count: 2 },
      { name: "TCP039_1.VLL_Avg", offset: 26, type: "Real", count: 2 },
      { name: "TCP039_1.THDV_tot", offset: 28, type: "Real", count: 2 },
      { name: "TCP039_1.THDI_tot", offset: 30, type: "Real", count: 2 },
      { name: "TCP039_1.V_1", offset: 32, type: "Real", count: 2 },
      { name: "TCP039_1.I_1", offset: 34, type: "Real", count: 2 },
      { name: "TCP039_1.V_2", offset: 36, type: "Real", count: 2 },
      { name: "TCP039_1.I_2", offset: 38, type: "Real", count: 2 },
      { name: "TCP039_1.V_3", offset: 40, type: "Real", count: 2 },
      { name: "TCP039_1.I_3", offset: 42, type: "Real", count: 2 },
      { name: "TCP039_1.Alarm1", offset: 44, type: "DWord", count: 2 },
      { name: "TCP039_1.Alarm2", offset: 46, type: "DWord", count: 2 },
      { name: "TCP039_1.T1_Imp_Act_Index", offset: 48, type: "Real", count: 2 },
      { name: "TCP039_1.Num_Air_On", offset: 50, type: "Int", count: 1 },
      { name: "TCP039_1.Desactiva", offset: 51, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA039_2.Inputs", offset: 52, type: "DWord", count: 2 },
      { name: "TA039_2.Outputs", offset: 54, type: "Word", count: 1 },
      { name: "TA039_2.Num_Air_On", offset: 55, type: "Int", count: 1 },
      { name: "TA039_2.Horas_Trab_Act", offset: 56, type: "Real", count: 2 },
      { name: "TA039_2.Horas_Trab_Guar", offset: 58, type: "Real", count: 2 },
      {
        name: "TA039_2.Horas_Trab_Act_Dia",
        offset: 60,
        type: "Real",
        count: 2,
      },
      {
        name: "TA039_2.Horas_Trab_Guar_Dia",
        offset: 62,
        type: "Real",
        count: 2,
      },
      { name: "TA039_2.Stat_Comm", offset: 64, type: "Bool", count: 1 },
      { name: "TA039_2.Desactiva", offset: 64, type: "Bool", count: 1 },
      // #*********************** TCP ***********************************
      { name: "TCP039_3.Inputs", offset: 65, type: "DWord", count: 2 },
      { name: "TCP039_3.Outputs", offset: 67, type: "Word", count: 1 },
      { name: "TCP039_3.Horas_Trab_Act", offset: 68, type: "Real", count: 2 },
      { name: "TCP039_3.Horas_Trab_Guar", offset: 70, type: "Real", count: 2 },
      {
        name: "TCP039_3.Horas_Trab_Act_Dia",
        offset: 72,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP039_3.Horas_Trab_Guar_Dia",
        offset: 74,
        type: "Real",
        count: 2,
      },
      { name: "TCP039_3.Stat_Comm_MB", offset: 76, type: "Bool", count: 1 },
      { name: "TCP039_3.Stat_Comm", offset: 76, type: "Bool", count: 1 },
      { name: "TCP039_3.V_Avg", offset: 77, type: "Real", count: 2 },
      { name: "TCP039_3.I_Tot", offset: 79, type: "Real", count: 2 },
      { name: "TCP039_3.P_Tot", offset: 81, type: "Real", count: 2 },
      { name: "TCP039_3.PF_Avg", offset: 83, type: "Real", count: 2 },
      { name: "TCP039_3.V_12", offset: 85, type: "Real", count: 2 },
      { name: "TCP039_3.V_23", offset: 87, type: "Real", count: 2 },
      { name: "TCP039_3.V_31", offset: 89, type: "Real", count: 2 },
      { name: "TCP039_3.VLL_Avg", offset: 91, type: "Real", count: 2 },
      { name: "TCP039_3.THDV_tot", offset: 93, type: "Real", count: 2 },
      { name: "TCP039_3.THDI_tot", offset: 95, type: "Real", count: 2 },
      { name: "TCP039_3.V_1", offset: 97, type: "Real", count: 2 },
      { name: "TCP039_3.I_1", offset: 99, type: "Real", count: 2 },
      { name: "TCP039_3.V_2", offset: 101, type: "Real", count: 2 },
      { name: "TCP039_3.I_2", offset: 103, type: "Real", count: 2 },
      { name: "TCP039_3.V_3", offset: 105, type: "Real", count: 2 },
      { name: "TCP039_3.I_3", offset: 107, type: "Real", count: 2 },
      { name: "TCP039_3.Alarm1", offset: 109, type: "DWord", count: 2 },
      { name: "TCP039_3.Alarm2", offset: 111, type: "DWord", count: 2 },
      { name: "TCP039_3.T1_Imp_Act_Index", offset: 113, type: "Real", count: 2 },
      { name: "TCP039_3.Num_Air_On", offset: 115, type: "Int", count: 1 },
      { name: "TCP039_3.Desactiva", offset: 116, type: "Bool", count: 1 },
    ],
  };

  return tableros;
};

// const arregloTagsPS33B_TA33B_TA = () => {
//   const tableros = {
//     // #*********************** TA ***********************************
//     TA33B: [
//       { name: "TA33B_1.Inputs", offset: 117, type: "DWord", count: 2 },
//       { name: "TA33B_1.Outputs", offset: 119, type: "Word", count: 1 },
//       { name: "TA33B_1.Num_Air_On", offset: 120, type: "Int", count: 1 },
//       { name: "TA33B_1.Horas_Trab_Act", offset: 121, type: "Real", count: 2 },
//       { name: "TA33B_1.Horas_Trab_Guar", offset: 123, type: "Real", count: 2 },
//       {
//         name: "TA33B_1.Horas_Trab_Act_Dia",
//         offset: 125,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA33B_1.Horas_Trab_Guar_Dia",
//         offset: 127,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA33B_1.Stat_Comm", offset: 129, type: "Bool", count: 1 },
//       { name: "TA33B_1.Desactiva", offset: 129, type: "Bool", count: 1 },
//     ],
//   };

//   return tableros;
// };

const arregloTagsPS33B_TA33B = () => {
  const tableros = {
    
    TA33B: [
      // #*********************** TA ***********************************
      { name: "TA33B_1.Inputs", offset: 117, type: "DWord", count: 2 },
      { name: "TA33B_1.Outputs", offset: 119, type: "Word", count: 1 },
      { name: "TA33B_1.Num_Air_On", offset: 120, type: "Int", count: 1 },
      { name: "TA33B_1.Horas_Trab_Act", offset: 121, type: "Real", count: 2 },
      { name: "TA33B_1.Horas_Trab_Guar", offset: 123, type: "Real", count: 2 },
      {
        name: "TA33B_1.Horas_Trab_Act_Dia",
        offset: 125,
        type: "Real",
        count: 2,
      },
      {
        name: "TA33B_1.Horas_Trab_Guar_Dia",
        offset: 127,
        type: "Real",
        count: 2,
      },
      { name: "TA33B_1.Stat_Comm", offset: 129, type: "Bool", count: 1 },
      { name: "TA33B_1.Desactiva", offset: 129, type: "Bool", count: 1 },

      // #*********************** TCP ********************************

      { name: "TCP33B_2.Inputs", offset: 130, type: "DWord", count: 2 },
      { name: "TCP33B_2.Outputs", offset: 132, type: "Word", count: 1 },
      { name: "TCP33B_2.Horas_Trab_Act", offset: 133, type: "Real", count: 2 },
      { name: "TCP33B_2.Horas_Trab_Guar", offset: 135, type: "Real", count: 2 },
      {
        name: "TCP33B_2.Horas_Trab_Act_Dia",
        offset: 137,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP33B_2.Horas_Trab_Guar_Dia",
        offset: 139,
        type: "Real",
        count: 2,
      },
      { name: "TCP33B_2.Stat_Comm_MB", offset: 141, type: "Bool", count: 1 },
      { name: "TCP33B_2.Stat_Comm", offset: 141, type: "Bool", count: 1 },
      { name: "TCP33B_2.V_Avg", offset: 142, type: "Real", count: 2 },
      { name: "TCP33B_2.I_Tot", offset: 144, type: "Real", count: 2 },
      { name: "TCP33B_2.P_Tot", offset: 146, type: "Real", count: 2 },
      { name: "TCP33B_2.PF_Avg", offset: 148, type: "Real", count: 2 },
      { name: "TCP33B_2.V_12", offset: 150, type: "Real", count: 2 },
      { name: "TCP33B_2.V_23", offset: 152, type: "Real", count: 2 },
      { name: "TCP33B_2.V_31", offset: 154, type: "Real", count: 2 },
      { name: "TCP33B_2.VLL_Avg", offset: 156, type: "Real", count: 2 },
      { name: "TCP33B_2.THDV_tot", offset: 158, type: "Real", count: 2 },
      { name: "TCP33B_2.THDI_tot", offset: 160, type: "Real", count: 2 },
      { name: "TCP33B_2.V_1", offset: 162, type: "Real", count: 2 },
      { name: "TCP33B_2.I_1", offset: 164, type: "Real", count: 2 },
      { name: "TCP33B_2.V_2", offset: 166, type: "Real", count: 2 },
      { name: "TCP33B_2.I_2", offset: 168, type: "Real", count: 2 },
      { name: "TCP33B_2.V_3", offset: 170, type: "Real", count: 2 },
      { name: "TCP33B_2.I_3", offset: 172, type: "Real", count: 2 },
      { name: "TCP33B_2.Alarm1", offset: 174, type: "DWord", count: 2 },
      { name: "TCP33B_2.Alarm2", offset: 176, type: "DWord", count: 2 },
      { name: "TCP33B_2.T1_Imp_Act_Index", offset: 178, type: "Real", count: 2 },
      { name: "TCP33B_2.Num_Air_On", offset: 180, type: "Int", count: 1 },
      { name: "TCP33B_2.Desactiva", offset: 181, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP33B_3.Inputs", offset: 182, type: "DWord", count: 2 },
      { name: "TCP33B_3.Outputs", offset: 184, type: "Word", count: 1 },
      { name: "TCP33B_3.Horas_Trab_Act", offset: 185, type: "Real", count: 2 },
      { name: "TCP33B_3.Horas_Trab_Guar", offset: 187, type: "Real", count: 2 },
      {
        name: "TCP33B_3.Horas_Trab_Act_Dia",
        offset: 189,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP33B_3.Horas_Trab_Guar_Dia",
        offset: 191,
        type: "Real",
        count: 2,
      },
      { name: "TCP33B_3.Stat_Comm_MB", offset: 193, type: "Bool", count: 1 },
      { name: "TCP33B_3.Stat_Comm", offset: 193, type: "Bool", count: 1 },
      { name: "TCP33B_3.V_Avg", offset: 194, type: "Real", count: 2 },
      { name: "TCP33B_3.I_Tot", offset: 196, type: "Real", count: 2 },
      { name: "TCP33B_3.P_Tot", offset: 198, type: "Real", count: 2 },
      { name: "TCP33B_3.PF_Avg", offset: 200, type: "Real", count: 2 },
      { name: "TCP33B_3.V_12", offset: 202, type: "Real", count: 2 },
      { name: "TCP33B_3.V_23", offset: 204, type: "Real", count: 2 },
      { name: "TCP33B_3.V_31", offset: 206, type: "Real", count: 2 },
      { name: "TCP33B_3.VLL_Avg", offset: 208, type: "Real", count: 2 },
      { name: "TCP33B_3.THDV_tot", offset: 210, type: "Real", count: 2 },
      { name: "TCP33B_3.THDI_tot", offset: 212, type: "Real", count: 2 },
      { name: "TCP33B_3.V_1", offset: 214, type: "Real", count: 2 },
      { name: "TCP33B_3.I_1", offset: 216, type: "Real", count: 2 },
      { name: "TCP33B_3.V_2", offset: 218, type: "Real", count: 2 },
      { name: "TCP33B_3.I_2", offset: 220, type: "Real", count: 2 },
      { name: "TCP33B_3.V_3", offset: 222, type: "Real", count: 2 },
      { name: "TCP33B_3.I_3", offset: 224, type: "Real", count: 2 },
      { name: "TCP33B_3.Alarm1", offset: 226, type: "DWord", count: 2 },
      { name: "TCP33B_3.Alarm2", offset: 228, type: "DWord", count: 2 },
      { name: "TCP33B_3.T1_Imp_Act_Index", offset: 230, type: "Real", count: 2 },
      { name: "TCP33B_3.Num_Air_On", offset: 232, type: "Int", count: 1 },
      { name: "TCP33B_3.Desactiva", offset: 233, type: "Bool", count: 1 },
    ],
  };

  return tableros;
};

// const arregloTagsPS33A_TA33A_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA33A: [
//       { name: "TA33A_2.Inputs", offset: 286, type: "DWord", count: 2 },
//       { name: "TA33A_2.Outputs", offset: 288, type: "Word", count: 1 },
//       { name: "TA33A_2.Num_Air_On", offset: 289, type: "Int", count: 1 },
//       { name: "TA33A_2.Horas_Trab_Act", offset: 290, type: "Real", count: 2 },
//       { name: "TA33A_2.Horas_Trab_Guar", offset: 292, type: "Real", count: 2 },
//       {
//         name: "TA33A_2.Horas_Trab_Act_Dia",
//         offset: 294,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA33A_2.Horas_Trab_Guar_Dia",
//         offset: 296,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA33A_2.Stat_Comm", offset: 298, type: "Bool", count: 1 },
//       { name: "TA33A_2.Desactiva", offset: 298, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS33A_TA33A = () => {
  const piscinas = {
    TA33A: [
      // #*********************** TCP ********************************
      { name: "TCP33A_1.Inputs", offset: 234, type: "DWord", count: 2 },
      { name: "TCP33A_1.Outputs", offset: 236, type: "Word", count: 1 },
      { name: "TCP33A_1.Horas_Trab_Act", offset: 237, type: "Real", count: 2 },
      { name: "TCP33A_1.Horas_Trab_Guar", offset: 239, type: "Real", count: 2 },
      {
        name: "TCP33A_1.Horas_Trab_Act_Dia",
        offset: 241,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP33A_1.Horas_Trab_Guar_Dia",
        offset: 243,
        type: "Real",
        count: 2,
      },
      { name: "TCP33A_1.Stat_Comm_MB", offset: 245, type: "Bool", count: 1 },
      { name: "TCP33A_1.Stat_Comm", offset: 245, type: "Bool", count: 1 },
      { name: "TCP33A_1.V_Avg", offset: 246, type: "Real", count: 2 },
      { name: "TCP33A_1.I_Tot", offset: 248, type: "Real", count: 2 },
      { name: "TCP33A_1.P_Tot", offset: 250, type: "Real", count: 2 },
      { name: "TCP33A_1.PF_Avg", offset: 252, type: "Real", count: 2 },
      { name: "TCP33A_1.V_12", offset: 254, type: "Real", count: 2 },
      { name: "TCP33A_1.V_23", offset: 256, type: "Real", count: 2 },
      { name: "TCP33A_1.V_31", offset: 258, type: "Real", count: 2 },
      { name: "TCP33A_1.VLL_Avg", offset: 260, type: "Real", count: 2 },
      { name: "TCP33A_1.THDV_tot", offset: 262, type: "Real", count: 2 },
      { name: "TCP33A_1.THDI_tot", offset: 264, type: "Real", count: 2 },
      { name: "TCP33A_1.V_1", offset: 266, type: "Real", count: 2 },
      { name: "TCP33A_1.I_1", offset: 268, type: "Real", count: 2 },
      { name: "TCP33A_1.V_2", offset: 270, type: "Real", count: 2 },
      { name: "TCP33A_1.I_2", offset: 272, type: "Real", count: 2 },
      { name: "TCP33A_1.V_3", offset: 274, type: "Real", count: 2 },
      { name: "TCP33A_1.I_3", offset: 276, type: "Real", count: 2 },
      { name: "TCP33A_1.Alarm1", offset: 278, type: "DWord", count: 2 },
      { name: "TCP33A_1.Alarm2", offset: 280, type: "DWord", count: 2 },
      { name: "TCP33A_1.T1_Imp_Act_Index", offset: 282, type: "Real", count: 2 },
      { name: "TCP33A_1.Num_Air_On", offset: 284, type: "Int", count: 1 },
      { name: "TCP33A_1.Desactiva", offset: 285, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA33A_2.Inputs", offset: 286, type: "DWord", count: 2 },
      { name: "TA33A_2.Outputs", offset: 288, type: "Word", count: 1 },
      { name: "TA33A_2.Num_Air_On", offset: 289, type: "Int", count: 1 },
      { name: "TA33A_2.Horas_Trab_Act", offset: 290, type: "Real", count: 2 },
      { name: "TA33A_2.Horas_Trab_Guar", offset: 292, type: "Real", count: 2 },
      {
        name: "TA33A_2.Horas_Trab_Act_Dia",
        offset: 294,
        type: "Real",
        count: 2,
      },
      {
        name: "TA33A_2.Horas_Trab_Guar_Dia",
        offset: 296,
        type: "Real",
        count: 2,
      },
      { name: "TA33A_2.Stat_Comm", offset: 298, type: "Bool", count: 1 },
      { name: "TA33A_2.Desactiva", offset: 298, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP33A_3.Inputs", offset: 299, type: "DWord", count: 2 },
      { name: "TCP33A_3.Outputs", offset: 301, type: "Word", count: 1 },
      { name: "TCP33A_3.Horas_Trab_Act", offset: 302, type: "Real", count: 2 },
      { name: "TCP33A_3.Horas_Trab_Guar", offset: 304, type: "Real", count: 2 },
      {
        name: "TCP33A_3.Horas_Trab_Act_Dia",
        offset: 306,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP33A_3.Horas_Trab_Guar_Dia",
        offset: 308,
        type: "Real",
        count: 2,
      },
      { name: "TCP33A_3.Stat_Comm_MB", offset: 310, type: "Bool", count: 1 },
      { name: "TCP33A_3.Stat_Comm", offset: 310, type: "Bool", count: 1 },
      { name: "TCP33A_3.V_Avg", offset: 311, type: "Real", count: 2 },
      { name: "TCP33A_3.I_Tot", offset: 313, type: "Real", count: 2 },
      { name: "TCP33A_3.P_Tot", offset: 315, type: "Real", count: 2 },
      { name: "TCP33A_3.PF_Avg", offset: 317, type: "Real", count: 2 },
      { name: "TCP33A_3.V_12", offset: 319, type: "Real", count: 2 },
      { name: "TCP33A_3.V_23", offset: 321, type: "Real", count: 2 },
      { name: "TCP33A_3.V_31", offset: 323, type: "Real", count: 2 },
      { name: "TCP33A_3.VLL_Avg", offset: 325, type: "Real", count: 2 },
      { name: "TCP33A_3.THDV_tot", offset: 327, type: "Real", count: 2 },
      { name: "TCP33A_3.THDI_tot", offset: 329, type: "Real", count: 2 },
      { name: "TCP33A_3.V_1", offset: 331, type: "Real", count: 2 },
      { name: "TCP33A_3.I_1", offset: 333, type: "Real", count: 2 },
      { name: "TCP33A_3.V_2", offset: 335, type: "Real", count: 2 },
      { name: "TCP33A_3.I_2", offset: 337, type: "Real", count: 2 },
      { name: "TCP33A_3.V_3", offset: 339, type: "Real", count: 2 },
      { name: "TCP33A_3.I_3", offset: 341, type: "Real", count: 2 },
      { name: "TCP33A_3.Alarm1", offset: 343, type: "DWord", count: 2 },
      { name: "TCP33A_3.Alarm2", offset: 345, type: "DWord", count: 2 },
      { name: "TCP33A_3.T1_Imp_Act_Index", offset: 347, type: "Real", count: 2 },
      { name: "TCP33A_3.Num_Air_On", offset: 349, type: "Int", count: 1 },
      { name: "TCP33A_3.Desactiva", offset: 350, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS032_TA032_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA032: [
//       { name: "TA032_2.Inputs", offset: 403, type: "DWord", count: 2 },
//       { name: "TA032_2.Outputs", offset: 405, type: "Word", count: 1 },
//       { name: "TA032_2.Num_Air_On", offset: 406, type: "Int", count: 1 },
//       { name: "TA032_2.Horas_Trab_Act", offset: 407, type: "Real", count: 2 },
//       { name: "TA032_2.Horas_Trab_Guar", offset: 409, type: "Real", count: 2 },
//       {
//         name: "TA032_2.Horas_Trab_Act_Dia",
//         offset: 411,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA032_2.Horas_Trab_Guar_Dia",
//         offset: 413,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA032_2.Stat_Comm", offset: 415, type: "Bool", count: 1 },
//       { name: "TA032_2.Desactiva", offset: 415, type: "Bool", count: 1 },

//       { name: "TA032_4.Inputs", offset: 468, type: "DWord", count: 2 },
//       { name: "TA032_4.Outputs", offset: 470, type: "Word", count: 1 },
//       { name: "TA032_4.Num_Air_On", offset: 471, type: "Int", count: 1 },
//       { name: "TA032_4.Horas_Trab_Act", offset: 472, type: "Real", count: 2 },
//       { name: "TA032_4.Horas_Trab_Guar", offset: 474, type: "Real", count: 2 },
//       {
//         name: "TA032_4.Horas_Trab_Act_Dia",
//         offset: 476,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA032_4.Horas_Trab_Guar_Dia",
//         offset: 478,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA032_4.Stat_Comm", offset: 480, type: "Bool", count: 1 },
//       { name: "TA032_4.Desactiva", offset: 480, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS032_TA032 = () => {
  const piscinas = {
    
    TA032: [
      // #*********************** TCP ********************************
      { name: "TCP032_1.Inputs", offset: 351, type: "DWord", count: 2 },
      { name: "TCP032_1.Outputs", offset: 353, type: "Word", count: 1 },
      { name: "TCP032_1.Horas_Trab_Act", offset: 354, type: "Real", count: 2 },
      { name: "TCP032_1.Horas_Trab_Guar", offset: 356, type: "Real", count: 2 },
      {
        name: "TCP032_1.Horas_Trab_Act_Dia",
        offset: 358,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP032_1.Horas_Trab_Guar_Dia",
        offset: 360,
        type: "Real",
        count: 2,
      },
      { name: "TCP032_1.Stat_Comm_MB", offset: 362, type: "Bool", count: 1 },
      { name: "TCP032_1.Stat_Comm", offset: 362, type: "Bool", count: 1 },
      { name: "TCP032_1.V_Avg", offset: 363, type: "Real", count: 2 },
      { name: "TCP032_1.I_Tot", offset: 365, type: "Real", count: 2 },
      { name: "TCP032_1.P_Tot", offset: 367, type: "Real", count: 2 },
      { name: "TCP032_1.PF_Avg", offset: 369, type: "Real", count: 2 },
      { name: "TCP032_1.V_12", offset: 371, type: "Real", count: 2 },
      { name: "TCP032_1.V_23", offset: 373, type: "Real", count: 2 },
      { name: "TCP032_1.V_31", offset: 375, type: "Real", count: 2 },
      { name: "TCP032_1.VLL_Avg", offset: 377, type: "Real", count: 2 },
      { name: "TCP032_1.THDV_tot", offset: 379, type: "Real", count: 2 },
      { name: "TCP032_1.THDI_tot", offset: 381, type: "Real", count: 2 },
      { name: "TCP032_1.V_1", offset: 383, type: "Real", count: 2 },
      { name: "TCP032_1.I_1", offset: 385, type: "Real", count: 2 },
      { name: "TCP032_1.V_2", offset: 387, type: "Real", count: 2 },
      { name: "TCP032_1.I_2", offset: 389, type: "Real", count: 2 },
      { name: "TCP032_1.V_3", offset: 391, type: "Real", count: 2 },
      { name: "TCP032_1.I_3", offset: 393, type: "Real", count: 2 },
      { name: "TCP032_1.Alarm1", offset: 395, type: "DWord", count: 2 },
      { name: "TCP032_1.Alarm2", offset: 397, type: "DWord", count: 2 },
      { name: "TCP032_1.T1_Imp_Act_Index", offset: 399, type: "Real", count: 2 },
      { name: "TCP032_1.Num_Air_On", offset: 401, type: "Int", count: 1 },
      { name: "TCP032_1.Desactiva", offset: 402, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA032_2.Inputs", offset: 403, type: "DWord", count: 2 },
      { name: "TA032_2.Outputs", offset: 405, type: "Word", count: 1 },
      { name: "TA032_2.Num_Air_On", offset: 406, type: "Int", count: 1 },
      { name: "TA032_2.Horas_Trab_Act", offset: 407, type: "Real", count: 2 },
      { name: "TA032_2.Horas_Trab_Guar", offset: 409, type: "Real", count: 2 },
      {
        name: "TA032_2.Horas_Trab_Act_Dia",
        offset: 411,
        type: "Real",
        count: 2,
      },
      {
        name: "TA032_2.Horas_Trab_Guar_Dia",
        offset: 413,
        type: "Real",
        count: 2,
      },
      { name: "TA032_2.Stat_Comm", offset: 415, type: "Bool", count: 1 },
      { name: "TA032_2.Desactiva", offset: 415, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP032_3.Inputs", offset: 416, type: "DWord", count: 2 },
      { name: "TCP032_3.Outputs", offset: 418, type: "Word", count: 1 },
      { name: "TCP032_3.Horas_Trab_Act", offset: 419, type: "Real", count: 2 },
      { name: "TCP032_3.Horas_Trab_Guar", offset: 421, type: "Real", count: 2 },
      {
        name: "TCP032_3.Horas_Trab_Act_Dia",
        offset: 423,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP032_3.Horas_Trab_Guar_Dia",
        offset: 425,
        type: "Real",
        count: 2,
      },
      { name: "TCP032_3.Stat_Comm_MB", offset: 427, type: "Bool", count: 1 },
      { name: "TCP032_3.Stat_Comm", offset: 427, type: "Bool", count: 1 },
      { name: "TCP032_3.V_Avg", offset: 428, type: "Real", count: 2 },
      { name: "TCP032_3.I_Tot", offset: 430, type: "Real", count: 2 },
      { name: "TCP032_3.P_Tot", offset: 432, type: "Real", count: 2 },
      { name: "TCP032_3.PF_Avg", offset: 434, type: "Real", count: 2 },
      { name: "TCP032_3.V_12", offset: 436, type: "Real", count: 2 },
      { name: "TCP032_3.V_23", offset: 438, type: "Real", count: 2 },
      { name: "TCP032_3.V_31", offset: 440, type: "Real", count: 2 },
      { name: "TCP032_3.VLL_Avg", offset: 442, type: "Real", count: 2 },
      { name: "TCP032_3.THDV_tot", offset: 444, type: "Real", count: 2 },
      { name: "TCP032_3.THDI_tot", offset: 446, type: "Real", count: 2 },
      { name: "TCP032_3.V_1", offset: 448, type: "Real", count: 2 },
      { name: "TCP032_3.I_1", offset: 450, type: "Real", count: 2 },
      { name: "TCP032_3.V_2", offset: 452, type: "Real", count: 2 },
      { name: "TCP032_3.I_2", offset: 454, type: "Real", count: 2 },
      { name: "TCP032_3.V_3", offset: 456, type: "Real", count: 2 },
      { name: "TCP032_3.I_3", offset: 458, type: "Real", count: 2 },
      { name: "TCP032_3.Alarm1", offset: 460, type: "DWord", count: 2 },
      { name: "TCP032_3.Alarm2", offset: 462, type: "DWord", count: 2 },
      { name: "TCP032_3.T1_Imp_Act_Index", offset: 464, type: "Real", count: 2 },
      { name: "TCP032_3.Num_Air_On", offset: 466, type: "Int", count: 1 },
      { name: "TCP032_3.Desactiva", offset: 467, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA032_4.Inputs", offset: 468, type: "DWord", count: 2 },
      { name: "TA032_4.Outputs", offset: 470, type: "Word", count: 1 },
      { name: "TA032_4.Num_Air_On", offset: 471, type: "Int", count: 1 },
      { name: "TA032_4.Horas_Trab_Act", offset: 472, type: "Real", count: 2 },
      { name: "TA032_4.Horas_Trab_Guar", offset: 474, type: "Real", count: 2 },
      {
        name: "TA032_4.Horas_Trab_Act_Dia",
        offset: 476,
        type: "Real",
        count: 2,
      },
      {
        name: "TA032_4.Horas_Trab_Guar_Dia",
        offset: 478,
        type: "Real",
        count: 2,
      },
      { name: "TA032_4.Stat_Comm", offset: 480, type: "Bool", count: 1 },
      { name: "TA032_4.Desactiva", offset: 480, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};


const arregloTagsPS031_TA031 = () => {
  const piscinas = {
    TA031: [
      // #*********************** TCP ********************************
      { name: "TCP031_1.Inputs", offset: 481, type: "DWord", count: 2 },
      { name: "TCP031_1.Outputs", offset: 483, type: "Word", count: 1 },
      { name: "TCP031_1.Horas_Trab_Act", offset: 484, type: "Real", count: 2 },
      { name: "TCP031_1.Horas_Trab_Guar", offset: 486, type: "Real", count: 2 },
      {
        name: "TCP031_1.Horas_Trab_Act_Dia",
        offset: 488,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP031_1.Horas_Trab_Guar_Dia",
        offset: 490,
        type: "Real",
        count: 2,
      },
      { name: "TCP031_1.Stat_Comm_MB", offset: 492, type: "Bool", count: 1 },
      { name: "TCP031_1.Stat_Comm", offset: 492, type: "Bool", count: 1 },
      { name: "TCP031_1.V_Avg", offset: 493, type: "Real", count: 2 },
      { name: "TCP031_1.I_Tot", offset: 495, type: "Real", count: 2 },
      { name: "TCP031_1.P_Tot", offset: 497, type: "Real", count: 2 },
      { name: "TCP031_1.PF_Avg", offset: 499, type: "Real", count: 2 },
      { name: "TCP031_1.V_12", offset: 501, type: "Real", count: 2 },
      { name: "TCP031_1.V_23", offset: 503, type: "Real", count: 2 },
      { name: "TCP031_1.V_31", offset: 505, type: "Real", count: 2 },
      { name: "TCP031_1.VLL_Avg", offset: 507, type: "Real", count: 2 },
      { name: "TCP031_1.THDV_tot", offset: 509, type: "Real", count: 2 },
      { name: "TCP031_1.THDI_tot", offset: 511, type: "Real", count: 2 },
      { name: "TCP031_1.V_1", offset: 513, type: "Real", count: 2 },
      { name: "TCP031_1.I_1", offset: 515, type: "Real", count: 2 },
      { name: "TCP031_1.V_2", offset: 517, type: "Real", count: 2 },
      { name: "TCP031_1.I_2", offset: 519, type: "Real", count: 2 },
      { name: "TCP031_1.V_3", offset: 521, type: "Real", count: 2 },
      { name: "TCP031_1.I_3", offset: 523, type: "Real", count: 2 },
      { name: "TCP031_1.Alarm1", offset: 525, type: "DWord", count: 2 },
      { name: "TCP031_1.Alarm2", offset: 527, type: "DWord", count: 2 },
      { name: "TCP031_1.T1_Imp_Act_Index", offset: 529, type: "Real", count: 2 },
      { name: "TCP031_1.Num_Air_On", offset: 531, type: "Int", count: 1 },
      { name: "TCP031_1.Desactiva", offset: 532, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA031_2.Inputs", offset: 533, type: "DWord", count: 2 },
      { name: "TA031_2.Outputs", offset: 535, type: "Word", count: 1 },
      { name: "TA031_2.Num_Air_On", offset: 536, type: "Int", count: 1 },
      { name: "TA031_2.Horas_Trab_Act", offset: 537, type: "Real", count: 2 },
      { name: "TA031_2.Horas_Trab_Guar", offset: 539, type: "Real", count: 2 },
      {
        name: "TA031_2.Horas_Trab_Act_Dia",
        offset: 541,
        type: "Real",
        count: 2,
      },
      {
        name: "TA031_2.Horas_Trab_Guar_Dia",
        offset: 543,
        type: "Real",
        count: 2,
      },
      { name: "TA031_2.Stat_Comm", offset: 545, type: "Bool", count: 1 },
      { name: "TA031_2.Desactiva", offset: 545, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP031_3.Inputs", offset: 546, type: "DWord", count: 2 },
      { name: "TCP031_3.Outputs", offset: 548, type: "Word", count: 1 },
      { name: "TCP031_3.Horas_Trab_Act", offset: 549, type: "Real", count: 2 },
      { name: "TCP031_3.Horas_Trab_Guar", offset: 551, type: "Real", count: 2 },
      {
        name: "TCP031_3.Horas_Trab_Act_Dia",
        offset: 553,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP031_3.Horas_Trab_Guar_Dia",
        offset: 555,
        type: "Real",
        count: 2,
      },
      { name: "TCP031_3.Stat_Comm_MB", offset: 557, type: "Bool", count: 1 },
      { name: "TCP031_3.Stat_Comm", offset: 557, type: "Bool", count: 1 },
      { name: "TCP031_3.V_Avg", offset: 558, type: "Real", count: 2 },
      { name: "TCP031_3.I_Tot", offset: 560, type: "Real", count: 2 },
      { name: "TCP031_3.P_Tot", offset: 562, type: "Real", count: 2 },
      { name: "TCP031_3.PF_Avg", offset: 564, type: "Real", count: 2 },
      { name: "TCP031_3.V_12", offset: 566, type: "Real", count: 2 },
      { name: "TCP031_3.V_23", offset: 568, type: "Real", count: 2 },
      { name: "TCP031_3.V_31", offset: 570, type: "Real", count: 2 },
      { name: "TCP031_3.VLL_Avg", offset: 572, type: "Real", count: 2 },
      { name: "TCP031_3.THDV_tot", offset: 574, type: "Real", count: 2 },
      { name: "TCP031_3.THDI_tot", offset: 576, type: "Real", count: 2 },
      { name: "TCP031_3.V_1", offset: 578, type: "Real", count: 2 },
      { name: "TCP031_3.I_1", offset: 580, type: "Real", count: 2 },
      { name: "TCP031_3.V_2", offset: 582, type: "Real", count: 2 },
      { name: "TCP031_3.I_2", offset: 584, type: "Real", count: 2 },
      { name: "TCP031_3.V_3", offset: 586, type: "Real", count: 2 },
      { name: "TCP031_3.I_3", offset: 588, type: "Real", count: 2 },
      { name: "TCP031_3.Alarm1", offset: 590, type: "DWord", count: 2 },
      { name: "TCP031_3.Alarm2", offset: 592, type: "DWord", count: 2 },
      { name: "TCP031_3.T1_Imp_Act_Index", offset: 594, type: "Real", count: 2 },
      { name: "TCP031_3.Num_Air_On", offset: 596, type: "Int", count: 1 },
      { name: "TCP031_3.Desactiva", offset: 597, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA031_4.Inputs", offset: 598, type: "DWord", count: 2 },
      { name: "TA031_4.Outputs", offset: 600, type: "Word", count: 1 },
      { name: "TA031_4.Num_Air_On", offset: 601, type: "Int", count: 1 },
      { name: "TA031_4.Horas_Trab_Act", offset: 602, type: "Real", count: 2 },
      { name: "TA031_4.Horas_Trab_Guar", offset: 604, type: "Real", count: 2 },
      {
        name: "TA031_4.Horas_Trab_Act_Dia",
        offset: 606,
        type: "Real",
        count: 2,
      },
      {
        name: "TA031_4.Horas_Trab_Guar_Dia",
        offset: 608,
        type: "Real",
        count: 2,
      },
      { name: "TA031_4.Stat_Comm", offset: 610, type: "Bool", count: 1 },
      { name: "TA031_4.Desactiva", offset: 610, type: "Bool", count: 1 },


    ],
  };

  return piscinas;
};

// const arregloTagsPS030_TA030_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA030: [
//       { name: "TA030_2.Inputs", offset: 663, type: "DWord", count: 2 },
//       { name: "TA030_2.Outputs", offset: 665, type: "Word", count: 1 },
//       { name: "TA030_2.Num_Air_On", offset: 666, type: "Int", count: 1 },
//       { name: "TA030_2.Horas_Trab_Act", offset: 667, type: "Real", count: 2 },
//       { name: "TA030_2.Horas_Trab_Guar", offset: 669, type: "Real", count: 2 },
//       {
//         name: "TA030_2.Horas_Trab_Act_Dia",
//         offset: 671,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA030_2.Horas_Trab_Guar_Dia",
//         offset: 673,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA030_2.Stat_Comm", offset: 675, type: "Bool", count: 1 },
//       { name: "TA030_2.Desactiva", offset: 675, type: "Bool", count: 1 },



//       { name: "TA030_3.Inputs", offset: 676, type: "DWord", count: 2 },
//       { name: "TA030_3.Outputs", offset: 678, type: "Word", count: 1 },
//       { name: "TA030_3.Num_Air_On", offset: 679, type: "Int", count: 1 },
//       { name: "TA030_3.Horas_Trab_Act", offset: 680, type: "Real", count: 2 },
//       { name: "TA030_3.Horas_Trab_Guar", offset: 682, type: "Real", count: 2 },
//       {
//         name: "TA030_3.Horas_Trab_Act_Dia",
//         offset: 684,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA030_3.Horas_Trab_Guar_Dia",
//         offset: 686,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA030_3.Stat_Comm", offset: 688, type: "Bool", count: 1 },
//       { name: "TA030_3.Desactiva", offset: 688, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS030_TA030 = () => {
  const piscinas = {
    TA030: [
      // #*********************** TCP ********************************
      { name: "TCP030_1.Inputs", offset: 611, type: "DWord", count: 2 },
      { name: "TCP030_1.Outputs", offset: 613, type: "Word", count: 1 },
      { name: "TCP030_1.Horas_Trab_Act", offset: 614, type: "Real", count: 2 },
      { name: "TCP030_1.Horas_Trab_Guar", offset: 616, type: "Real", count: 2 },
      {
        name: "TCP030_1.Horas_Trab_Act_Dia",
        offset: 618,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP030_1.Horas_Trab_Guar_Dia",
        offset: 620,
        type: "Real",
        count: 2,
      },
      { name: "TCP030_1.Stat_Comm_MB", offset: 622, type: "Bool", count: 1 },
      { name: "TCP030_1.Stat_Comm", offset: 622, type: "Bool", count: 1 },
      { name: "TCP030_1.V_Avg", offset: 623, type: "Real", count: 2 },
      { name: "TCP030_1.I_Tot", offset: 625, type: "Real", count: 2 },
      { name: "TCP030_1.P_Tot", offset: 627, type: "Real", count: 2 },
      { name: "TCP030_1.PF_Avg", offset: 629, type: "Real", count: 2 },
      { name: "TCP030_1.V_12", offset: 631, type: "Real", count: 2 },
      { name: "TCP030_1.V_23", offset: 633, type: "Real", count: 2 },
      { name: "TCP030_1.V_31", offset: 635, type: "Real", count: 2 },
      { name: "TCP030_1.VLL_Avg", offset: 637, type: "Real", count: 2 },
      { name: "TCP030_1.THDV_tot", offset: 639, type: "Real", count: 2 },
      { name: "TCP030_1.THDI_tot", offset: 641, type: "Real", count: 2 },
      { name: "TCP030_1.V_1", offset: 643, type: "Real", count: 2 },
      { name: "TCP030_1.I_1", offset: 645, type: "Real", count: 2 },
      { name: "TCP030_1.V_2", offset: 647, type: "Real", count: 2 },
      { name: "TCP030_1.I_2", offset: 649, type: "Real", count: 2 },
      { name: "TCP030_1.V_3", offset: 651, type: "Real", count: 2 },
      { name: "TCP030_1.I_3", offset: 653, type: "Real", count: 2 },
      { name: "TCP030_1.Alarm1", offset: 655, type: "DWord", count: 2 },
      { name: "TCP030_1.Alarm2", offset: 657, type: "DWord", count: 2 },
      { name: "TCP030_1.T1_Imp_Act_Index", offset: 659, type: "Real", count: 2 },
      { name: "TCP030_1.Num_Air_On", offset: 661, type: "Int", count: 1 },
      { name: "TCP030_1.Desactiva", offset: 662, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA030_2.Inputs", offset: 663, type: "DWord", count: 2 },
      { name: "TA030_2.Outputs", offset: 665, type: "Word", count: 1 },
      { name: "TA030_2.Num_Air_On", offset: 666, type: "Int", count: 1 },
      { name: "TA030_2.Horas_Trab_Act", offset: 667, type: "Real", count: 2 },
      { name: "TA030_2.Horas_Trab_Guar", offset: 669, type: "Real", count: 2 },
      {
        name: "TA030_2.Horas_Trab_Act_Dia",
        offset: 671,
        type: "Real",
        count: 2,
      },
      {
        name: "TA030_2.Horas_Trab_Guar_Dia",
        offset: 673,
        type: "Real",
        count: 2,
      },
      { name: "TA030_2.Stat_Comm", offset: 675, type: "Bool", count: 1 },
      { name: "TA030_2.Desactiva", offset: 675, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA030_3.Inputs", offset: 676, type: "DWord", count: 2 },
      { name: "TA030_3.Outputs", offset: 678, type: "Word", count: 1 },
      { name: "TA030_3.Num_Air_On", offset: 679, type: "Int", count: 1 },
      { name: "TA030_3.Horas_Trab_Act", offset: 680, type: "Real", count: 2 },
      { name: "TA030_3.Horas_Trab_Guar", offset: 682, type: "Real", count: 2 },
      {
        name: "TA030_3.Horas_Trab_Act_Dia",
        offset: 684,
        type: "Real",
        count: 2,
      },
      {
        name: "TA030_3.Horas_Trab_Guar_Dia",
        offset: 686,
        type: "Real",
        count: 2,
      },
      { name: "TA030_3.Stat_Comm", offset: 688, type: "Bool", count: 1 },
      { name: "TA030_3.Desactiva", offset: 688, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS029_TA029 = () => {
  const piscinas = {
    TA029: [
      // #*********************** TA ***********************************
      { name: "TA029_1.Inputs", offset: 689, type: "DWord", count: 2 },
      { name: "TA029_1.Outputs", offset: 691, type: "Word", count: 1 },
      { name: "TA029_1.Num_Air_On", offset: 692, type: "Int", count: 1 },
      { name: "TA029_1.Horas_Trab_Act", offset: 693, type: "Real", count: 2 },
      { name: "TA029_1.Horas_Trab_Guar", offset: 695, type: "Real", count: 2 },
      {
        name: "TA029_1.Horas_Trab_Act_Dia",
        offset: 697,
        type: "Real",
        count: 2,
      },
      {
        name: "TA029_1.Horas_Trab_Guar_Dia",
        offset: 699,
        type: "Real",
        count: 2,
      },
      { name: "TA029_1.Stat_Comm", offset: 701, type: "Bool", count: 1 },
      { name: "TA029_1.Desactiva", offset: 701, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA029_2.Inputs", offset: 702, type: "DWord", count: 2 },
      { name: "TA029_2.Outputs", offset: 704, type: "Word", count: 1 },
      { name: "TA029_2.Num_Air_On", offset: 705, type: "Int", count: 1 },
      { name: "TA029_2.Horas_Trab_Act", offset: 706, type: "Real", count: 2 },
      { name: "TA029_2.Horas_Trab_Guar", offset: 708, type: "Real", count: 2 },
      {
        name: "TA029_2.Horas_Trab_Act_Dia",
        offset: 710,
        type: "Real",
        count: 2,
      },
      {
        name: "TA029_2.Horas_Trab_Guar_Dia",
        offset: 712,
        type: "Real",
        count: 2,
      },
      { name: "TA029_2.Stat_Comm", offset: 714, type: "Bool", count: 1 },
      { name: "TA029_2.Desactiva", offset: 714, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS028_TA028_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA028: [
//       { name: "TA028_3.Inputs", offset: 819, type: "DWord", count: 2 },
//       { name: "TA028_3.Outputs", offset: 821, type: "Word", count: 1 },
//       { name: "TA028_3.Num_Air_On", offset: 822, type: "Int", count: 1 },
//       { name: "TA028_3.Horas_Trab_Act", offset: 823, type: "Real", count: 2 },
//       { name: "TA028_3.Horas_Trab_Guar", offset: 825, type: "Real", count: 2 },
//       {
//         name: "TA028_3.Horas_Trab_Act_Dia",
//         offset: 827,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA028_3.Horas_Trab_Guar_Dia",
//         offset: 829,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA028_3.Stat_Comm", offset: 831, type: "Bool", count: 1 },
//       { name: "TA028_3.Desactiva", offset: 831, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS028_TA028 = () => {
  const piscinas = {
    
    TA028: [
      // #*********************** TCP ********************************
      { name: "TCP028_1.Inputs", offset: 715, type: "DWord", count: 2 },
      { name: "TCP028_1.Outputs", offset: 717, type: "Word", count: 1 },
      { name: "TCP028_1.Horas_Trab_Act", offset: 718, type: "Real", count: 2 },
      { name: "TCP028_1.Horas_Trab_Guar", offset: 720, type: "Real", count: 2 },
      {
        name: "TCP028_1.Horas_Trab_Act_Dia",
        offset: 722,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP028_1.Horas_Trab_Guar_Dia",
        offset: 724,
        type: "Real",
        count: 2,
      },
      { name: "TCP028_1.Stat_Comm_MB", offset: 726, type: "Bool", count: 1 },
      { name: "TCP028_1.Stat_Comm", offset: 726, type: "Bool", count: 1 },
      { name: "TCP028_1.V_Avg", offset: 727, type: "Real", count: 2 },
      { name: "TCP028_1.I_Tot", offset: 729, type: "Real", count: 2 },
      { name: "TCP028_1.P_Tot", offset: 731, type: "Real", count: 2 },
      { name: "TCP028_1.PF_Avg", offset: 733, type: "Real", count: 2 },
      { name: "TCP028_1.V_12", offset: 735, type: "Real", count: 2 },
      { name: "TCP028_1.V_23", offset: 737, type: "Real", count: 2 },
      { name: "TCP028_1.V_31", offset: 739, type: "Real", count: 2 },
      { name: "TCP028_1.VLL_Avg", offset: 741, type: "Real", count: 2 },
      { name: "TCP028_1.THDV_tot", offset: 743, type: "Real", count: 2 },
      { name: "TCP028_1.THDI_tot", offset: 745, type: "Real", count: 2 },
      { name: "TCP028_1.V_1", offset: 747, type: "Real", count: 2 },
      { name: "TCP028_1.I_1", offset: 749, type: "Real", count: 2 },
      { name: "TCP028_1.V_2", offset: 751, type: "Real", count: 2 },
      { name: "TCP028_1.I_2", offset: 753, type: "Real", count: 2 },
      { name: "TCP028_1.V_3", offset: 755, type: "Real", count: 2 },
      { name: "TCP028_1.I_3", offset: 757, type: "Real", count: 2 },
      { name: "TCP028_1.Alarm1", offset: 759, type: "DWord", count: 2 },
      { name: "TCP028_1.Alarm2", offset: 761, type: "DWord", count: 2 },
      { name: "TCP028_1.T1_Imp_Act_Index", offset: 763, type: "Real", count: 2 },
      { name: "TCP028_1.Num_Air_On", offset: 765, type: "Int", count: 1 },
      { name: "TCP028_1.Desactiva", offset: 766, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP028_2.Inputs", offset: 767, type: "DWord", count: 2 },
      { name: "TCP028_2.Outputs", offset: 769, type: "Word", count: 1 },
      { name: "TCP028_2.Horas_Trab_Act", offset: 770, type: "Real", count: 2 },
      { name: "TCP028_2.Horas_Trab_Guar", offset: 772, type: "Real", count: 2 },
      {
        name: "TCP028_2.Horas_Trab_Act_Dia",
        offset: 774,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP028_2.Horas_Trab_Guar_Dia",
        offset: 776,
        type: "Real",
        count: 2,
      },
      { name: "TCP028_2.Stat_Comm_MB", offset: 778, type: "Bool", count: 1 },
      { name: "TCP028_2.Stat_Comm", offset: 779, type: "Bool", count: 1 },
      { name: "TCP028_2.V_Avg", offset: 779, type: "Real", count: 2 },
      { name: "TCP028_2.I_Tot", offset: 781, type: "Real", count: 2 },
      { name: "TCP028_2.P_Tot", offset: 783, type: "Real", count: 2 },
      { name: "TCP028_2.PF_Avg", offset: 785, type: "Real", count: 2 },
      { name: "TCP028_2.V_12", offset: 787, type: "Real", count: 2 },
      { name: "TCP028_2.V_23", offset: 789, type: "Real", count: 2 },
      { name: "TCP028_2.V_31", offset: 791, type: "Real", count: 2 },
      { name: "TCP028_2.VLL_Avg", offset: 793, type: "Real", count: 2 },
      { name: "TCP028_2.THDV_tot", offset: 795, type: "Real", count: 2 },
      { name: "TCP028_2.THDI_tot", offset: 797, type: "Real", count: 2 },
      { name: "TCP028_2.V_1", offset: 799, type: "Real", count: 2 },
      { name: "TCP028_2.I_1", offset: 801, type: "Real", count: 2 },
      { name: "TCP028_2.V_2", offset: 803, type: "Real", count: 2 },
      { name: "TCP028_2.I_2", offset: 805, type: "Real", count: 2 },
      { name: "TCP028_2.V_3", offset: 807, type: "Real", count: 2 },
      { name: "TCP028_2.I_3", offset: 809, type: "Real", count: 2 },
      { name: "TCP028_2.Alarm1", offset: 811, type: "DWord", count: 2 },
      { name: "TCP028_2.Alarm2", offset: 813, type: "DWord", count: 2 },
      { name: "TCP028_2.T1_Imp_Act_Index", offset: 815, type: "Real", count: 2 },
      { name: "TCP028_2.Num_Air_On", offset: 817, type: "Int", count: 1 },
      { name: "TCP028_2.Desactiva", offset: 818, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA028_3.Inputs", offset: 819, type: "DWord", count: 2 },
      { name: "TA028_3.Outputs", offset: 821, type: "Word", count: 1 },
      { name: "TA028_3.Num_Air_On", offset: 822, type: "Int", count: 1 },
      { name: "TA028_3.Horas_Trab_Act", offset: 823, type: "Real", count: 2 },
      { name: "TA028_3.Horas_Trab_Guar", offset: 825, type: "Real", count: 2 },
      {
        name: "TA028_3.Horas_Trab_Act_Dia",
        offset: 827,
        type: "Real",
        count: 2,
      },
      {
        name: "TA028_3.Horas_Trab_Guar_Dia",
        offset: 829,
        type: "Real",
        count: 2,
      },
      { name: "TA028_3.Stat_Comm", offset: 831, type: "Bool", count: 1 },
      { name: "TA028_3.Desactiva", offset: 831, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS027_TA027 = () => {
  const piscinas = {
    TA027: [
      // #*********************** TA ***********************************
      { name: "TA027_1.Inputs", offset: 832, type: "DWord", count: 2 },
      { name: "TA027_1.Outputs", offset: 834, type: "Word", count: 1 },
      { name: "TA027_1.Num_Air_On", offset: 835, type: "Int", count: 1 },
      { name: "TA027_1.Horas_Trab_Act", offset: 836, type: "Real", count: 2 },
      { name: "TA027_1.Horas_Trab_Guar", offset: 838, type: "Real", count: 2 },
      {
        name: "TA027_1.Horas_Trab_Act_Dia",
        offset: 840,
        type: "Real",
        count: 2,
      },
      {
        name: "TA027_1.Horas_Trab_Guar_Dia",
        offset: 842,
        type: "Real",
        count: 2,
      },
      { name: "TA027_1.Stat_Comm", offset: 844, type: "Bool", count: 1 },
      { name: "TA027_1.Desactiva", offset: 844, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA027_2.Inputs", offset: 845, type: "DWord", count: 2 },
      { name: "TA027_2.Outputs", offset: 847, type: "Word", count: 1 },
      { name: "TA027_2.Num_Air_On", offset: 848, type: "Int", count: 1 },
      { name: "TA027_2.Horas_Trab_Act", offset: 849, type: "Real", count: 2 },
      { name: "TA027_2.Horas_Trab_Guar", offset: 851, type: "Real", count: 2 },
      {
        name: "TA027_2.Horas_Trab_Act_Dia",
        offset: 853,
        type: "Real",
        count: 2,
      },
      {
        name: "TA027_2.Horas_Trab_Guar_Dia",
        offset: 855,
        type: "Real",
        count: 2,
      },
      { name: "TA027_2.Stat_Comm", offset: 857, type: "Bool", count: 1 },
      { name: "TA027_2.Desactiva", offset: 857, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS026_TA026 = () => {
  const piscinas = {
    TA026: [
      // #*********************** TCP ********************************
      { name: "TCP026_1.Inputs", offset: 858, type: "DWord", count: 2 },
      { name: "TCP026_1.Outputs", offset: 860, type: "Word", count: 1 },
      { name: "TCP026_1.Horas_Trab_Act", offset: 861, type: "Real", count: 2 },
      { name: "TCP026_1.Horas_Trab_Guar", offset: 863, type: "Real", count: 2 },
      {
        name: "TCP026_1.Horas_Trab_Act_Dia",
        offset: 865,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP026_1.Horas_Trab_Guar_Dia",
        offset: 867,
        type: "Real",
        count: 2,
      },
      { name: "TCP026_1.Stat_Comm_MB", offset: 869, type: "Bool", count: 1 },
      { name: "TCP026_1.Stat_Comm", offset: 869, type: "Bool", count: 1 },
      { name: "TCP026_1.V_Avg", offset: 870, type: "Real", count: 2 },
      { name: "TCP026_1.I_Tot", offset: 872, type: "Real", count: 2 },
      { name: "TCP026_1.P_Tot", offset: 874, type: "Real", count: 2 },
      { name: "TCP026_1.PF_Avg", offset: 876, type: "Real", count: 2 },
      { name: "TCP026_1.V_12", offset: 878, type: "Real", count: 2 },
      { name: "TCP026_1.V_23", offset: 880, type: "Real", count: 2 },
      { name: "TCP026_1.V_31", offset: 882, type: "Real", count: 2 },
      { name: "TCP026_1.VLL_Avg", offset: 884, type: "Real", count: 2 },
      { name: "TCP026_1.THDV_tot", offset: 886, type: "Real", count: 2 },
      { name: "TCP026_1.THDI_tot", offset: 888, type: "Real", count: 2 },
      { name: "TCP026_1.V_1", offset: 890, type: "Real", count: 2 },
      { name: "TCP026_1.I_1", offset: 892, type: "Real", count: 2 },
      { name: "TCP026_1.V_2", offset: 894, type: "Real", count: 2 },
      { name: "TCP026_1.I_2", offset: 896, type: "Real", count: 2 },
      { name: "TCP026_1.V_3", offset: 898, type: "Real", count: 2 },
      { name: "TCP026_1.I_3", offset: 900, type: "Real", count: 2 },
      { name: "TCP026_1.Alarm1", offset: 902, type: "DWord", count: 2 },
      { name: "TCP026_1.Alarm2", offset: 904, type: "DWord", count: 2 },
      { name: "TCP026_1.T1_Imp_Act_Index", offset: 906, type: "Real", count: 2 },
      { name: "TCP026_1.Num_Air_On", offset: 908, type: "Int", count: 1 },
      { name: "TCP026_1.Desactiva", offset: 909, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP026_2.Inputs", offset: 910, type: "DWord", count: 2 },
      { name: "TCP026_2.Outputs", offset: 912, type: "Word", count: 1 },
      { name: "TCP026_2.Horas_Trab_Act", offset: 913, type: "Real", count: 2 },
      { name: "TCP026_2.Horas_Trab_Guar", offset: 915, type: "Real", count: 2 },
      {
        name: "TCP026_2.Horas_Trab_Act_Dia",
        offset: 917,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP026_2.Horas_Trab_Guar_Dia",
        offset: 919,
        type: "Real",
        count: 2,
      },
      { name: "TCP026_2.Stat_Comm_MB", offset: 921, type: "Bool", count: 1 },
      { name: "TCP026_2.Stat_Comm", offset: 921, type: "Bool", count: 1 },
      { name: "TCP026_2.V_Avg", offset: 922, type: "Real", count: 2 },
      { name: "TCP026_2.I_Tot", offset: 924, type: "Real", count: 2 },
      { name: "TCP026_2.P_Tot", offset: 926, type: "Real", count: 2 },
      { name: "TCP026_2.PF_Avg", offset: 928, type: "Real", count: 2 },
      { name: "TCP026_2.V_12", offset: 930, type: "Real", count: 2 },
      { name: "TCP026_2.V_23", offset: 932, type: "Real", count: 2 },
      { name: "TCP026_2.V_31", offset: 934, type: "Real", count: 2 },
      { name: "TCP026_2.VLL_Avg", offset: 936, type: "Real", count: 2 },
      { name: "TCP026_2.THDV_tot", offset: 938, type: "Real", count: 2 },
      { name: "TCP026_2.THDI_tot", offset: 940, type: "Real", count: 2 },
      { name: "TCP026_2.V_1", offset: 942, type: "Real", count: 2 },
      { name: "TCP026_2.I_1", offset: 944, type: "Real", count: 2 },
      { name: "TCP026_2.V_2", offset: 946, type: "Real", count: 2 },
      { name: "TCP026_2.I_2", offset: 948, type: "Real", count: 2 },
      { name: "TCP026_2.V_3", offset: 950, type: "Real", count: 2 },
      { name: "TCP026_2.I_3", offset: 952, type: "Real", count: 2 },
      { name: "TCP026_2.Alarm1", offset: 954, type: "DWord", count: 2 },
      { name: "TCP026_2.Alarm2", offset: 956, type: "DWord", count: 2 },
      { name: "TCP026_2.T1_Imp_Act_Index", offset: 958, type: "Real", count: 2 },
      { name: "TCP026_2.Num_Air_On", offset: 960, type: "Int", count: 1 },
      { name: "TCP026_2.Desactiva", offset: 961, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP026_3.Inputs", offset: 962, type: "DWord", count: 2 },
      { name: "TCP026_3.Outputs", offset: 964, type: "Word", count: 1 },
      { name: "TCP026_3.Horas_Trab_Act", offset: 965, type: "Real", count: 2 },
      { name: "TCP026_3.Horas_Trab_Guar", offset: 967, type: "Real", count: 2 },
      {
        name: "TCP026_3.Horas_Trab_Act_Dia",
        offset: 969,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP026_3.Horas_Trab_Guar_Dia",
        offset: 971,
        type: "Real",
        count: 2,
      },
      { name: "TCP026_3.Stat_Comm_MB", offset: 973, type: "Bool", count: 1 },
      { name: "TCP026_3.Stat_Comm", offset: 973, type: "Bool", count: 1 },
      { name: "TCP026_3.V_Avg", offset: 974, type: "Real", count: 2 },
      { name: "TCP026_3.I_Tot", offset: 976, type: "Real", count: 2 },
      { name: "TCP026_3.P_Tot", offset: 978, type: "Real", count: 2 },
      { name: "TCP026_3.PF_Avg", offset: 980, type: "Real", count: 2 },
      { name: "TCP026_3.V_12", offset: 982, type: "Real", count: 2 },
      { name: "TCP026_3.V_23", offset: 984, type: "Real", count: 2 },
      { name: "TCP026_3.V_31", offset: 986, type: "Real", count: 2 },
      { name: "TCP026_3.VLL_Avg", offset: 988, type: "Real", count: 2 },
      { name: "TCP026_3.THDV_tot", offset: 990, type: "Real", count: 2 },
      { name: "TCP026_3.THDI_tot", offset: 992, type: "Real", count: 2 },
      { name: "TCP026_3.V_1", offset: 994, type: "Real", count: 2 },
      { name: "TCP026_3.I_1", offset: 996, type: "Real", count: 2 },
      { name: "TCP026_3.V_2", offset: 998, type: "Real", count: 2 },
      { name: "TCP026_3.I_2", offset: 1000, type: "Real", count: 2 },
      { name: "TCP026_3.V_3", offset: 1002, type: "Real", count: 2 },
      { name: "TCP026_3.I_3", offset: 1004, type: "Real", count: 2 },
      { name: "TCP026_3.Alarm1", offset: 1006, type: "DWord", count: 2 },
      { name: "TCP026_3.Alarm2", offset: 1008, type: "DWord", count: 2 },
      {
        name: "TCP026_3.T1_Imp_Act_Index",
        offset: 1010,
        type: "Real",
        count: 2,
      },
      { name: "TCP026_3.Num_Air_On", offset: 1012, type: "Int", count: 1 },
      { name: "TCP026_3.Desactiva", offset: 1013, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS024_TA024_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA024: [
//       { name: "TA024_3.Inputs", offset: 1118, type: "DWord", count: 2 },
//       { name: "TA024_3.Outputs", offset: 1120, type: "Word", count: 1 },
//       { name: "TA024_3.Num_Air_On", offset: 1121, type: "Int", count: 1 },
//       { name: "TA024_3.Horas_Trab_Act", offset: 1122, type: "Real", count: 2 },
//       { name: "TA024_3.Horas_Trab_Guar", offset: 1124, type: "Real", count: 2 },
//       {
//         name: "TA024_3.Horas_Trab_Act_Dia",
//         offset: 1126,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA024_3.Horas_Trab_Guar_Dia",
//         offset: 1128,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA024_3.Stat_Comm", offset: 1130, type: "Bool", count: 1 },
//       { name: "TA024_3.Desactiva", offset: 1130, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS024_TA024 = () => {
  const piscinas = {
    TA024: [
      // #*********************** TCP ********************************
      { name: "TCP024_1.Inputs", offset: 1014, type: "DWord", count: 2 },
      { name: "TCP024_1.Outputs", offset: 1016, type: "Word", count: 1 },
      { name: "TCP024_1.Horas_Trab_Act", offset: 1017, type: "Real", count: 2 },
      { name: "TCP024_1.Horas_Trab_Guar", offset: 1019, type: "Real", count: 2 },
      {
        name: "TCP024_1.Horas_Trab_Act_Dia",
        offset: 1021,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP024_1.Horas_Trab_Guar_Dia",
        offset: 1023,
        type: "Real",
        count: 2,
      },
      { name: "TCP024_1.Stat_Comm_MB", offset: 1025, type: "Bool", count: 1 },
      { name: "TCP024_1.Stat_Comm", offset: 1025, type: "Bool", count: 1 },
      { name: "TCP024_1.V_Avg", offset: 1026, type: "Real", count: 2 },
      { name: "TCP024_1.I_Tot", offset: 1028, type: "Real", count: 2 },
      { name: "TCP024_1.P_Tot", offset: 1030, type: "Real", count: 2 },
      { name: "TCP024_1.PF_Avg", offset: 1032, type: "Real", count: 2 },
      { name: "TCP024_1.V_12", offset: 1034, type: "Real", count: 2 },
      { name: "TCP024_1.V_23", offset: 1036, type: "Real", count: 2 },
      { name: "TCP024_1.V_31", offset: 1038, type: "Real", count: 2 },
      { name: "TCP024_1.VLL_Avg", offset: 1040, type: "Real", count: 2 },
      { name: "TCP024_1.THDV_tot", offset: 1042, type: "Real", count: 2 },
      { name: "TCP024_1.THDI_tot", offset: 1044, type: "Real", count: 2 },
      { name: "TCP024_1.V_1", offset: 1046, type: "Real", count: 2 },
      { name: "TCP024_1.I_1", offset: 1048, type: "Real", count: 2 },
      { name: "TCP024_1.V_2", offset: 1050, type: "Real", count: 2 },
      { name: "TCP024_1.I_2", offset: 1052, type: "Real", count: 2 },
      { name: "TCP024_1.V_3", offset: 1054, type: "Real", count: 2 },
      { name: "TCP024_1.I_3", offset: 1056, type: "Real", count: 2 },
      { name: "TCP024_1.Alarm1", offset: 1058, type: "DWord", count: 2 },
      { name: "TCP024_1.Alarm2", offset: 1060, type: "DWord", count: 2 },
      {
        name: "TCP024_1.T1_Imp_Act_Index",
        offset: 1062,
        type: "Real",
        count: 2,
      },
      { name: "TCP024_1.Num_Air_On", offset: 1064, type: "Int", count: 1 },
      { name: "TCP024_1.Desactiva", offset: 1065, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP024_2.Inputs", offset: 1066, type: "DWord", count: 2 },
      { name: "TCP024_2.Outputs", offset: 1068, type: "Word", count: 1 },
      { name: "TCP024_2.Horas_Trab_Act", offset: 1069, type: "Real", count: 2 },
      { name: "TCP024_2.Horas_Trab_Guar", offset: 1071, type: "Real", count: 2 },
      {
        name: "TCP024_2.Horas_Trab_Act_Dia",
        offset: 1073,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP024_2.Horas_Trab_Guar_Dia",
        offset: 1075,
        type: "Real",
        count: 2,
      },
      { name: "TCP024_2.Stat_Comm_MB", offset: 1077, type: "Bool", count: 1 },
      { name: "TCP024_2.Stat_Comm", offset: 1077, type: "Bool", count: 1 },
      { name: "TCP024_2.V_Avg", offset: 1078, type: "Real", count: 2 },
      { name: "TCP024_2.I_Tot", offset: 1080, type: "Real", count: 2 },
      { name: "TCP024_2.P_Tot", offset: 1082, type: "Real", count: 2 },
      { name: "TCP024_2.PF_Avg", offset: 1084, type: "Real", count: 2 },
      { name: "TCP024_2.V_12", offset: 1086, type: "Real", count: 2 },
      { name: "TCP024_2.V_23", offset: 1088, type: "Real", count: 2 },
      { name: "TCP024_2.V_31", offset: 1090, type: "Real", count: 2 },
      { name: "TCP024_2.VLL_Avg", offset: 1092, type: "Real", count: 2 },
      { name: "TCP024_2.THDV_tot", offset: 1094, type: "Real", count: 2 },
      { name: "TCP024_2.THDI_tot", offset: 1096, type: "Real", count: 2 },
      { name: "TCP024_2.V_1", offset: 1098, type: "Real", count: 2 },
      { name: "TCP024_2.I_1", offset: 1100, type: "Real", count: 2 },
      { name: "TCP024_2.V_2", offset: 1102, type: "Real", count: 2 },
      { name: "TCP024_2.I_2", offset: 1104, type: "Real", count: 2 },
      { name: "TCP024_2.V_3", offset: 1106, type: "Real", count: 2 },
      { name: "TCP024_2.I_3", offset: 1108, type: "Real", count: 2 },
      { name: "TCP024_2.Alarm1", offset: 1110, type: "DWord", count: 2 },
      { name: "TCP024_2.Alarm2", offset: 1112, type: "DWord", count: 2 },
      {
        name: "TCP024_2.T1_Imp_Act_Index",
        offset: 1114,
        type: "Real",
        count: 2,
      },
      { name: "TCP024_2.Num_Air_On", offset: 1116, type: "Int", count: 1 },
      { name: "TCP024_2.Desactiva", offset: 1117, type: "Bool", count: 1 },
      // #*********************** TA ********************************
      { name: "TA024_3.Inputs", offset: 1118, type: "DWord", count: 2 },
      { name: "TA024_3.Outputs", offset: 1120, type: "Word", count: 1 },
      { name: "TA024_3.Num_Air_On", offset: 1121, type: "Int", count: 1 },
      { name: "TA024_3.Horas_Trab_Act", offset: 1122, type: "Real", count: 2 },
      { name: "TA024_3.Horas_Trab_Guar", offset: 1124, type: "Real", count: 2 },
      {
        name: "TA024_3.Horas_Trab_Act_Dia",
        offset: 1126,
        type: "Real",
        count: 2,
      },
      {
        name: "TA024_3.Horas_Trab_Guar_Dia",
        offset: 1128,
        type: "Real",
        count: 2,
      },
      { name: "TA024_3.Stat_Comm", offset: 1130, type: "Bool", count: 1 },
      { name: "TA024_3.Desactiva", offset: 1130, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS025_TA025 = () => {
  const piscinas = {
    TA025: [
      // #*********************** TA ***********************************
      { name: "TA025_1.Inputs", offset: 1131, type: "DWord", count: 2 },
      { name: "TA025_1.Outputs", offset: 1133, type: "Word", count: 1 },
      { name: "TA025_1.Num_Air_On", offset: 1134, type: "Int", count: 1 },
      { name: "TA025_1.Horas_Trab_Act", offset: 1135, type: "Real", count: 2 },
      { name: "TA025_1.Horas_Trab_Guar", offset: 1137, type: "Real", count: 2 },
      {
        name: "TA025_1.Horas_Trab_Act_Dia",
        offset: 1139,
        type: "Real",
        count: 2,
      },
      {
        name: "TA025_1.Horas_Trab_Guar_Dia",
        offset: 1141,
        type: "Real",
        count: 2,
      },
      { name: "TA025_1.Stat_Comm", offset: 1143, type: "Bool", count: 1 },
      { name: "TA025_1.Desactiva", offset: 1143, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA025_2.Inputs", offset: 1144, type: "DWord", count: 2 },
      { name: "TA025_2.Outputs", offset: 1146, type: "Word", count: 1 },
      { name: "TA025_2.Num_Air_On", offset: 1147, type: "Int", count: 1 },
      { name: "TA025_2.Horas_Trab_Act", offset: 1148, type: "Real", count: 2 },
      { name: "TA025_2.Horas_Trab_Guar", offset: 1150, type: "Real", count: 2 },
      {
        name: "TA025_2.Horas_Trab_Act_Dia",
        offset: 1152,
        type: "Real",
        count: 2,
      },
      {
        name: "TA025_2.Horas_Trab_Guar_Dia",
        offset: 1154,
        type: "Real",
        count: 2,
      },
      { name: "TA025_2.Stat_Comm", offset: 1156, type: "Bool", count: 1 },
      { name: "TA025_2.Desactiva", offset: 1156, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS22A_TA22A_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA22A: [
//       // #*********************** TA ***********************************
//       { name: "TA22A_1.Inputs", offset: 1157, type: "DWord", count: 2 },
//       { name: "TA22A_1.Outputs", offset: 1159, type: "Word", count: 1 },
//       { name: "TA22A_1.Num_Air_On", offset: 1160, type: "Int", count: 1 },
//       { name: "TA22A_1.Horas_Trab_Act", offset: 1161, type: "Real", count: 2 },
//       { name: "TA22A_1.Horas_Trab_Guar", offset: 1163, type: "Real", count: 2 },
//       {
//         name: "TA22A_1.Horas_Trab_Act_Dia",
//         offset: 1165,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA22A_1.Horas_Trab_Guar_Dia",
//         offset: 1167,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA22A_1.Stat_Comm", offset: 1169, type: "Bool", count: 1 },
//       { name: "TA22A_1.Desactiva", offset: 1169, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS22A_TA22A = () => {
  const piscinas = {
    TA22A: [
      // #*********************** TA ***********************************
      { name: "TA22A_1.Inputs", offset: 1157, type: "DWord", count: 2 },
      { name: "TA22A_1.Outputs", offset: 1159, type: "Word", count: 1 },
      { name: "TA22A_1.Num_Air_On", offset: 1160, type: "Int", count: 1 },
      { name: "TA22A_1.Horas_Trab_Act", offset: 1161, type: "Real", count: 2 },
      { name: "TA22A_1.Horas_Trab_Guar", offset: 1163, type: "Real", count: 2 },
      {
        name: "TA22A_1.Horas_Trab_Act_Dia",
        offset: 1165,
        type: "Real",
        count: 2,
      },
      {
        name: "TA22A_1.Horas_Trab_Guar_Dia",
        offset: 1167,
        type: "Real",
        count: 2,
      },
      { name: "TA22A_1.Stat_Comm", offset: 1169, type: "Bool", count: 1 },
      { name: "TA22A_1.Desactiva", offset: 1169, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP22A_2.Inputs", offset: 1170, type: "DWord", count: 2 },
      { name: "TCP22A_2.Outputs", offset: 1172, type: "Word", count: 1 },
      { name: "TCP22A_2.Horas_Trab_Act", offset: 1173, type: "Real", count: 2 },
      { name: "TCP22A_2.Horas_Trab_Guar", offset: 1175, type: "Real", count: 2 },
      {
        name: "TCP22A_2.Horas_Trab_Act_Dia",
        offset: 1177,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP22A_2.Horas_Trab_Guar_Dia",
        offset: 1179,
        type: "Real",
        count: 2,
      },
      { name: "TCP22A_2.Stat_Comm_MB", offset: 1181, type: "Bool", count: 1 },
      { name: "TCP22A_2.Stat_Comm", offset: 1181, type: "Bool", count: 1 },
      { name: "TCP22A_2.V_Avg", offset: 1182, type: "Real", count: 2 },
      { name: "TCP22A_2.I_Tot", offset: 1184, type: "Real", count: 2 },
      { name: "TCP22A_2.P_Tot", offset: 1186, type: "Real", count: 2 },
      { name: "TCP22A_2.PF_Avg", offset: 1188, type: "Real", count: 2 },
      { name: "TCP22A_2.V_12", offset: 1190, type: "Real", count: 2 },
      { name: "TCP22A_2.V_23", offset: 1192, type: "Real", count: 2 },
      { name: "TCP22A_2.V_31", offset: 1194, type: "Real", count: 2 },
      { name: "TCP22A_2.VLL_Avg", offset: 1196, type: "Real", count: 2 },
      { name: "TCP22A_2.THDV_tot", offset: 1198, type: "Real", count: 2 },
      { name: "TCP22A_2.THDI_tot", offset: 1200, type: "Real", count: 2 },
      { name: "TCP22A_2.V_1", offset: 1202, type: "Real", count: 2 },
      { name: "TCP22A_2.I_1", offset: 1204, type: "Real", count: 2 },
      { name: "TCP22A_2.V_2", offset: 1206, type: "Real", count: 2 },
      { name: "TCP22A_2.I_2", offset: 1208, type: "Real", count: 2 },
      { name: "TCP22A_2.V_3", offset: 1210, type: "Real", count: 2 },
      { name: "TCP22A_2.I_3", offset: 1212, type: "Real", count: 2 },
      { name: "TCP22A_2.Alarm1", offset: 1214, type: "DWord", count: 2 },
      { name: "TCP22A_2.Alarm2", offset: 1216, type: "DWord", count: 2 },
      {
        name: "TCP22A_2.T1_Imp_Act_Index",
        offset: 1218,
        type: "Real",
        count: 2,
      },
      { name: "TCP22A_2.Num_Air_On", offset: 1220, type: "Int", count: 1 },
      { name: "TCP22A_2.Desactiva", offset: 1221, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS22B_TA22B_TA = () => {
//   const piscinas = {
//     // #*********************** TA ***********************************
//     TA22B: [
//       // #*********************** TA ***********************************
//       { name: "TA22B_2.Inputs", offset: 1274, type: "DWord", count: 2 },
//       { name: "TA22B_2.Outputs", offset: 1276, type: "Word", count: 1 },
//       { name: "TA22B_2.Num_Air_On", offset: 1277, type: "Int", count: 1 },
//       { name: "TA22B_2.Horas_Trab_Act", offset: 1278, type: "Real", count: 2 },
//       { name: "TA22B_2.Horas_Trab_Guar", offset: 1280, type: "Real", count: 2 },
//       {
//         name: "TA22B_2.Horas_Trab_Act_Dia",
//         offset: 1282,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA22B_2.Horas_Trab_Guar_Dia",
//         offset: 1284,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA22B_2.Stat_Comm", offset: 1286, type: "Bool", count: 1 },
//       { name: "TA22B_2.Desactiva", offset: 1286, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS22B_TA22B = () => {
  const piscinas = {
    TA22B: [
      // #*********************** TCP ********************************
      { name: "TCP22B_1.Inputs", offset: 1222, type: "DWord", count: 2 },
      { name: "TCP22B_1.Outputs", offset: 1224, type: "Word", count: 1 },
      { name: "TCP22B_1.Horas_Trab_Act", offset: 1225, type: "Real", count: 2 },
      { name: "TCP22B_1.Horas_Trab_Guar", offset: 1227, type: "Real", count: 2 },
      {
        name: "TCP22B_1.Horas_Trab_Act_Dia",
        offset: 1229,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP22B_1.Horas_Trab_Guar_Dia",
        offset: 1231,
        type: "Real",
        count: 2,
      },
      { name: "TCP22B_1.Stat_Comm_MB", offset: 1233, type: "Bool", count: 1 },
      { name: "TCP22B_1.Stat_Comm", offset: 1233, type: "Bool", count: 1 },
      { name: "TCP22B_1.V_Avg", offset: 1234, type: "Real", count: 2 },
      { name: "TCP22B_1.I_Tot", offset: 1236, type: "Real", count: 2 },
      { name: "TCP22B_1.P_Tot", offset: 1238, type: "Real", count: 2 },
      { name: "TCP22B_1.PF_Avg", offset: 1240, type: "Real", count: 2 },
      { name: "TCP22B_1.V_12", offset: 1242, type: "Real", count: 2 },
      { name: "TCP22B_1.V_23", offset: 1244, type: "Real", count: 2 },
      { name: "TCP22B_1.V_31", offset: 1246, type: "Real", count: 2 },
      { name: "TCP22B_1.VLL_Avg", offset: 1248, type: "Real", count: 2 },
      { name: "TCP22B_1.THDV_tot", offset: 1250, type: "Real", count: 2 },
      { name: "TCP22B_1.THDI_tot", offset: 1252, type: "Real", count: 2 },
      { name: "TCP22B_1.V_1", offset: 1254, type: "Real", count: 2 },
      { name: "TCP22B_1.I_1", offset: 1256, type: "Real", count: 2 },
      { name: "TCP22B_1.V_2", offset: 1258, type: "Real", count: 2 },
      { name: "TCP22B_1.I_2", offset: 1260, type: "Real", count: 2 },
      { name: "TCP22B_1.V_3", offset: 1262, type: "Real", count: 2 },
      { name: "TCP22B_1.I_3", offset: 1264, type: "Real", count: 2 },
      { name: "TCP22B_1.Alarm1", offset: 1266, type: "DWord", count: 2 },
      { name: "TCP22B_1.Alarm2", offset: 1268, type: "DWord", count: 2 },
      {
        name: "TCP22B_1.T1_Imp_Act_Index",
        offset: 1270,
        type: "Real",
        count: 2,
      },
      { name: "TCP22B_1.Num_Air_On", offset: 1272, type: "Int", count: 1 },
      { name: "TCP22B_1.Desactiva", offset: 1273, type: "Bool", count: 1 },
       // #*********************** TA ***********************************
       { name: "TA22B_2.Inputs", offset: 1274, type: "DWord", count: 2 },
       { name: "TA22B_2.Outputs", offset: 1276, type: "Word", count: 1 },
       { name: "TA22B_2.Num_Air_On", offset: 1277, type: "Int", count: 1 },
       { name: "TA22B_2.Horas_Trab_Act", offset: 1278, type: "Real", count: 2 },
       { name: "TA22B_2.Horas_Trab_Guar", offset: 1280, type: "Real", count: 2 },
       {
         name: "TA22B_2.Horas_Trab_Act_Dia",
         offset: 1282,
         type: "Real",
         count: 2,
       },
       {
         name: "TA22B_2.Horas_Trab_Guar_Dia",
         offset: 1284,
         type: "Real",
         count: 2,
       },
       { name: "TA22B_2.Stat_Comm", offset: 1286, type: "Bool", count: 1 },
       { name: "TA22B_2.Desactiva", offset: 1286, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPC036_TA036 = () => {
  const piscinas = {
    TA036: [
      // #*********************** TCP ********************************
      { name: "TCP036_1.Inputs", offset: 1287, type: "DWord", count: 2 },
      { name: "TCP036_1.Outputs", offset: 1289, type: "Word", count: 1 },
      { name: "TCP036_1.Horas_Trab_Act", offset: 1290, type: "Real", count: 2 },
      { name: "TCP036_1.Horas_Trab_Guar", offset: 1292, type: "Real", count: 2 },
      {
        name: "TCP036_1.Horas_Trab_Act_Dia",
        offset: 1294,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP036_1.Horas_Trab_Guar_Dia",
        offset: 1296,
        type: "Real",
        count: 2,
      },
      { name: "TCP036_1.Stat_Comm_MB", offset: 1298, type: "Bool", count: 1 },
      { name: "TCP036_1.Stat_Comm", offset: 1298, type: "Bool", count: 1 },
      { name: "TCP036_1.V_Avg", offset: 1299, type: "Real", count: 2 },
      { name: "TCP036_1.I_Tot", offset: 1301, type: "Real", count: 2 },
      { name: "TCP036_1.P_Tot", offset: 1303, type: "Real", count: 2 },
      { name: "TCP036_1.PF_Avg", offset: 1305, type: "Real", count: 2 },
      { name: "TCP036_1.V_12", offset: 1307, type: "Real", count: 2 },
      { name: "TCP036_1.V_23", offset: 1309, type: "Real", count: 2 },
      { name: "TCP036_1.V_31", offset: 1311, type: "Real", count: 2 },
      { name: "TCP036_1.VLL_Avg", offset: 1313, type: "Real", count: 2 },
      { name: "TCP036_1.THDV_tot", offset: 1315, type: "Real", count: 2 },
      { name: "TCP036_1.THDI_tot", offset: 1317, type: "Real", count: 2 },
      { name: "TCP036_1.V_1", offset: 1319, type: "Real", count: 2 },
      { name: "TCP036_1.I_1", offset: 1321, type: "Real", count: 2 },
      { name: "TCP036_1.V_2", offset: 1323, type: "Real", count: 2 },
      { name: "TCP036_1.I_2", offset: 1325, type: "Real", count: 2 },
      { name: "TCP036_1.V_3", offset: 1327, type: "Real", count: 2 },
      { name: "TCP036_1.I_3", offset: 1329, type: "Real", count: 2 },
      { name: "TCP036_1.Alarm1", offset: 1331, type: "DWord", count: 2 },
      { name: "TCP036_1.Alarm2", offset: 1333, type: "DWord", count: 2 },
      {
        name: "TCP036_1.T1_Imp_Act_Index",
        offset: 1335,
        type: "Real",
        count: 2,
      },
      { name: "TCP036_1.Num_Air_On", offset: 1337, type: "Int", count: 1 },
      { name: "TCP036_1.Desactiva", offset: 1338, type: "Bool", count: 1 },
      // #*********************** TCP ********************************
      { name: "TCP036_2.Inputs", offset: 1339, type: "DWord", count: 2 },
      { name: "TCP036_2.Outputs", offset: 1341, type: "Word", count: 1 },
      { name: "TCP036_2.Horas_Trab_Act", offset: 1342, type: "Real", count: 2 },
      { name: "TCP036_2.Horas_Trab_Guar", offset: 1344, type: "Real", count: 2 },
      {
        name: "TCP036_2.Horas_Trab_Act_Dia",
        offset: 1346,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP036_2.Horas_Trab_Guar_Dia",
        offset: 1348,
        type: "Real",
        count: 2,
      },
      { name: "TCP036_2.Stat_Comm_MB", offset: 1350, type: "Bool", count: 1 },
      { name: "TCP036_2.Stat_Comm", offset: 1350, type: "Bool", count: 1 },
      { name: "TCP036_2.V_Avg", offset: 1351, type: "Real", count: 2 },
      { name: "TCP036_2.I_Tot", offset: 1353, type: "Real", count: 2 },
      { name: "TCP036_2.P_Tot", offset: 1355, type: "Real", count: 2 },
      { name: "TCP036_2.PF_Avg", offset: 1357, type: "Real", count: 2 },
      { name: "TCP036_2.V_12", offset: 1359, type: "Real", count: 2 },
      { name: "TCP036_2.V_23", offset: 1361, type: "Real", count: 2 },
      { name: "TCP036_2.V_31", offset: 1363, type: "Real", count: 2 },
      { name: "TCP036_2.VLL_Avg", offset: 1365, type: "Real", count: 2 },
      { name: "TCP036_2.THDV_tot", offset: 1367, type: "Real", count: 2 },
      { name: "TCP036_2.THDI_tot", offset: 1369, type: "Real", count: 2 },
      { name: "TCP036_2.V_1", offset: 1371, type: "Real", count: 2 },
      { name: "TCP036_2.I_1", offset: 1373, type: "Real", count: 2 },
      { name: "TCP036_2.V_2", offset: 1375, type: "Real", count: 2 },
      { name: "TCP036_2.I_2", offset: 1377, type: "Real", count: 2 },
      { name: "TCP036_2.V_3", offset: 1379, type: "Real", count: 2 },
      { name: "TCP036_2.I_3", offset: 1381, type: "Real", count: 2 },
      { name: "TCP036_2.Alarm1", offset: 1383, type: "DWord", count: 2 },
      { name: "TCP036_2.Alarm2", offset: 1385, type: "DWord", count: 2 },
      {
        name: "TCP036_2.T1_Imp_Act_Index",
        offset: 1387,
        type: "Real",
        count: 2,
      },
      { name: "TCP036_2.Num_Air_On", offset: 1389, type: "Int", count: 1 },
      { name: "TCP036_2.Desactiva", offset: 1390, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

// const arregloTagsPS035_TA035_TA = () => {
//   const piscinas = {
//     TA035: [
//       // #*********************** TA ***********************************
//       { name: "TA035_2.Inputs", offset: 1443, type: "DWord", count: 2 },
//       { name: "TA035_2.Outputs", offset: 1445, type: "Word", count: 1 },
//       { name: "TA035_2.Num_Air_On", offset: 1446, type: "Int", count: 1 },
//       { name: "TA035_2.Horas_Trab_Act", offset: 1447, type: "Real", count: 2 },
//       { name: "TA035_2.Horas_Trab_Guar", offset: 1449, type: "Real", count: 2 },
//       {
//         name: "TA035_2.Horas_Trab_Act_Dia",
//         offset: 1451,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA035_2.Horas_Trab_Guar_Dia",
//         offset: 1453,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA035_2.Stat_Comm", offset: 1455, type: "Bool", count: 1 },
//       { name: "TA035_2.Desactiva", offset: 1455, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS035_TA035 = () => {
  const piscinas = {
    TA035: [
      // #*********************** TCP ********************************
      { name: "TCP035_1.Inputs", offset: 1391, type: "DWord", count: 2 },
      { name: "TCP035_1.Outputs", offset: 1393, type: "Word", count: 1 },
      { name: "TCP035_1.Horas_Trab_Act", offset: 1394, type: "Real", count: 2 },
      { name: "TCP035_1.Horas_Trab_Guar", offset: 1396, type: "Real", count: 2 },
      {
        name: "TCP035_1.Horas_Trab_Act_Dia",
        offset: 1398,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP035_1.Horas_Trab_Guar_Dia",
        offset: 1400,
        type: "Real",
        count: 2,
      },
      { name: "TCP035_1.Stat_Comm_MB", offset: 1402, type: "Bool", count: 1 },
      { name: "TCP035_1.Stat_Comm", offset: 1402, type: "Bool", count: 1 },
      { name: "TCP035_1.V_Avg", offset: 1403, type: "Real", count: 2 },
      { name: "TCP035_1.I_Tot", offset: 1405, type: "Real", count: 2 },
      { name: "TCP035_1.P_Tot", offset: 1407, type: "Real", count: 2 },
      { name: "TCP035_1.PF_Avg", offset: 1409, type: "Real", count: 2 },
      { name: "TCP035_1.V_12", offset: 1411, type: "Real", count: 2 },
      { name: "TCP035_1.V_23", offset: 1413, type: "Real", count: 2 },
      { name: "TCP035_1.V_31", offset: 1415, type: "Real", count: 2 },
      { name: "TCP035_1.VLL_Avg", offset: 1417, type: "Real", count: 2 },
      { name: "TCP035_1.THDV_tot", offset: 1419, type: "Real", count: 2 },
      { name: "TCP035_1.THDI_tot", offset: 1421, type: "Real", count: 2 },
      { name: "TCP035_1.V_1", offset: 1423, type: "Real", count: 2 },
      { name: "TCP035_1.I_1", offset: 1425, type: "Real", count: 2 },
      { name: "TCP035_1.V_2", offset: 1427, type: "Real", count: 2 },
      { name: "TCP035_1.I_2", offset: 1429, type: "Real", count: 2 },
      { name: "TCP035_1.V_3", offset: 1431, type: "Real", count: 2 },
      { name: "TCP035_1.I_3", offset: 1433, type: "Real", count: 2 },
      { name: "TCP035_1.Alarm1", offset: 1435, type: "DWord", count: 2 },
      { name: "TCP035_1.Alarm2", offset: 1437, type: "DWord", count: 2 },
      {
        name: "TCP035_1.T1_Imp_Act_Index",
        offset: 1439,
        type: "Real",
        count: 2,
      },
      { name: "TCP035_1.Num_Air_On", offset: 1441, type: "Int", count: 1 },
      { name: "TCP035_1.Desactiva", offset: 1442, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA035_2.Inputs", offset: 1443, type: "DWord", count: 2 },
      { name: "TA035_2.Outputs", offset: 1445, type: "Word", count: 1 },
      { name: "TA035_2.Num_Air_On", offset: 1446, type: "Int", count: 1 },
      { name: "TA035_2.Horas_Trab_Act", offset: 1447, type: "Real", count: 2 },
      { name: "TA035_2.Horas_Trab_Guar", offset: 1449, type: "Real", count: 2 },
      {
        name: "TA035_2.Horas_Trab_Act_Dia",
        offset: 1451,
        type: "Real",
        count: 2,
      },
      {
        name: "TA035_2.Horas_Trab_Guar_Dia",
        offset: 1453,
        type: "Real",
        count: 2,
      },
      { name: "TA035_2.Stat_Comm", offset: 1455, type: "Bool", count: 1 },
      { name: "TA035_2.Desactiva", offset: 1455, type: "Bool", count: 1 },

    ],
  };

  return piscinas;
};

// const arregloTagsPS34B_TA34B_TA = () => {
//   const piscinas = { 
//     TA34B: [
//       // #*********************** TA ***********************************
//       { name: "TA34B_2.Inputs", offset: 1508, type: "DWord", count: 2 },
//       { name: "TA34B_2.Outputs", offset: 1510, type: "Word", count: 1 },
//       { name: "TA34B_2.Num_Air_On", offset: 1511, type: "Int", count: 1 },
//       { name: "TA34B_2.Horas_Trab_Act", offset: 1512, type: "Real", count: 2 },
//       { name: "TA34B_2.Horas_Trab_Guar", offset: 1514, type: "Real", count: 2 },
//       {
//         name: "TA34B_2.Horas_Trab_Act_Dia",
//         offset: 1516,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA34B_2.Horas_Trab_Guar_Dia",
//         offset: 1518,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA34B_2.Stat_Comm", offset: 1520, type: "Bool", count: 1 },
//       { name: "TA34B_2.Desactiva", offset: 1520, type: "Bool", count: 1 },

//       { name: "TA34B_3.Inputs", offset: 1521, type: "DWord", count: 2 },
//       { name: "TA34B_3.Outputs", offset: 1523, type: "Word", count: 1 },
//       { name: "TA34B_3.Num_Air_On", offset: 1524, type: "Int", count: 1 },
//       { name: "TA34B_3.Horas_Trab_Act", offset: 1525, type: "Real", count: 2 },
//       { name: "TA34B_3.Horas_Trab_Guar", offset: 1527, type: "Real", count: 2 },
//       {
//         name: "TA34B_3.Horas_Trab_Act_Dia",
//         offset: 1529,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA34B_3.Horas_Trab_Guar_Dia",
//         offset: 1531,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA34B_3.Stat_Comm", offset: 1533, type: "Bool", count: 1 },
//       { name: "TA34B_3.Desactiva", offset: 1533, type: "Bool", count: 1 },

//       { name: "TA34B_5.Inputs", offset: 1586, type: "DWord", count: 2 },
//       { name: "TA34B_5.Outputs", offset: 1588, type: "Word", count: 1 },
//       { name: "TA34B_5.Num_Air_On", offset: 1589, type: "Int", count: 1 },
//       { name: "TA34B_5.Horas_Trab_Act", offset: 1590, type: "Real", count: 2 },
//       { name: "TA34B_5.Horas_Trab_Guar", offset: 1592, type: "Real", count: 2 },
//       {
//         name: "TA34B_5.Horas_Trab_Act_Dia",
//         offset: 1594,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA34B_5.Horas_Trab_Guar_Dia",
//         offset: 1596,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA34B_5.Stat_Comm", offset: 1598, type: "Bool", count: 1 },
//       { name: "TA34B_5.Desactiva", offset: 1598, type: "Bool", count: 1 },

//       { name: "TA34B_6.Inputs", offset: 1599, type: "DWord", count: 2 },
//       { name: "TA34B_6.Outputs", offset: 1601, type: "Word", count: 1 },
//       { name: "TA34B_6.Num_Air_On", offset: 1602, type: "Int", count: 1 },
//       { name: "TA34B_6.Horas_Trab_Act", offset: 1603, type: "Real", count: 2 },
//       { name: "TA34B_6.Horas_Trab_Guar", offset: 1605, type: "Real", count: 2 },
//       {
//         name: "TA34B_6.Horas_Trab_Act_Dia",
//         offset: 1607,
//         type: "Real",
//         count: 2,
//       },
//       {
//         name: "TA34B_6.Horas_Trab_Guar_Dia",
//         offset: 1609,
//         type: "Real",
//         count: 2,
//       },
//       { name: "TA34B_6.Stat_Comm", offset: 1611, type: "Bool", count: 1 },
//       { name: "TA34B_6.Desactiva", offset: 1611, type: "Bool", count: 1 },
//     ],
//   };

//   return piscinas;
// };

const arregloTagsPS34B_TA34B = () => {
  const piscinas = {
    TA34B: [
       // #*********************** TCP ********************************
      { name: "TCP34B_1.Inputs", offset: 1456, type: "DWord", count: 2 },
      { name: "TCP34B_1.Outputs", offset: 1458, type: "Word", count: 1 },
      { name: "TCP34B_1.Horas_Trab_Act", offset: 1459, type: "Real", count: 2 },
      { name: "TCP34B_1.Horas_Trab_Guar", offset: 1461, type: "Real", count: 2 },
      {
        name: "TCP34B_1.Horas_Trab_Act_Dia",
        offset: 1463,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP34B_1.Horas_Trab_Guar_Dia",
        offset: 1465,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_1.Stat_Comm_MB", offset: 1467, type: "Bool", count: 1 },
      { name: "TCP34B_1.Stat_Comm", offset: 1467, type: "Bool", count: 1 },
      { name: "TCP34B_1.V_Avg", offset: 1468, type: "Real", count: 2 },
      { name: "TCP34B_1.I_Tot", offset: 1470, type: "Real", count: 2 },
      { name: "TCP34B_1.P_Tot", offset: 1472, type: "Real", count: 2 },
      { name: "TCP34B_1.PF_Avg", offset: 1474, type: "Real", count: 2 },
      { name: "TCP34B_1.V_12", offset: 1476, type: "Real", count: 2 },
      { name: "TCP34B_1.V_23", offset: 1478, type: "Real", count: 2 },
      { name: "TCP34B_1.V_31", offset: 1480, type: "Real", count: 2 },
      { name: "TCP34B_1.VLL_Avg", offset: 1482, type: "Real", count: 2 },
      { name: "TCP34B_1.THDV_tot", offset: 1484, type: "Real", count: 2 },
      { name: "TCP34B_1.THDI_tot", offset: 1486, type: "Real", count: 2 },
      { name: "TCP34B_1.V_1", offset: 1488, type: "Real", count: 2 },
      { name: "TCP34B_1.I_1", offset: 1490, type: "Real", count: 2 },
      { name: "TCP34B_1.V_2", offset: 1492, type: "Real", count: 2 },
      { name: "TCP34B_1.I_2", offset: 1494, type: "Real", count: 2 },
      { name: "TCP34B_1.V_3", offset: 1496, type: "Real", count: 2 },
      { name: "TCP34B_1.I_3", offset: 1498, type: "Real", count: 2 },
      { name: "TCP34B_1.Alarm1", offset: 1500, type: "DWord", count: 2 },
      { name: "TCP34B_1.Alarm2", offset: 1502, type: "DWord", count: 2 },
      {
        name: "TCP34B_1.T1_Imp_Act_Index",
        offset: 1504,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_1.Num_Air_On", offset: 1506, type: "Int", count: 1 },
      { name: "TCP34B_1.Desactiva", offset: 1507, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA34B_2.Inputs", offset: 1508, type: "DWord", count: 2 },
      { name: "TA34B_2.Outputs", offset: 1510, type: "Word", count: 1 },
      { name: "TA34B_2.Num_Air_On", offset: 1511, type: "Int", count: 1 },
      { name: "TA34B_2.Horas_Trab_Act", offset: 1512, type: "Real", count: 2 },
      { name: "TA34B_2.Horas_Trab_Guar", offset: 1514, type: "Real", count: 2 },
      {
        name: "TA34B_2.Horas_Trab_Act_Dia",
        offset: 1516,
        type: "Real",
        count: 2,
      },
      {
        name: "TA34B_2.Horas_Trab_Guar_Dia",
        offset: 1518,
        type: "Real",
        count: 2,
      },
      { name: "TA34B_2.Stat_Comm", offset: 1520, type: "Bool", count: 1 },
      { name: "TA34B_2.Desactiva", offset: 1520, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA34B_3.Inputs", offset: 1521, type: "DWord", count: 2 },
      { name: "TA34B_3.Outputs", offset: 1523, type: "Word", count: 1 },
      { name: "TA34B_3.Num_Air_On", offset: 1524, type: "Int", count: 1 },
      { name: "TA34B_3.Horas_Trab_Act", offset: 1525, type: "Real", count: 2 },
      { name: "TA34B_3.Horas_Trab_Guar", offset: 1527, type: "Real", count: 2 },
      {
        name: "TA34B_3.Horas_Trab_Act_Dia",
        offset: 1529,
        type: "Real",
        count: 2,
      },
      {
        name: "TA34B_3.Horas_Trab_Guar_Dia",
        offset: 1531,
        type: "Real",
        count: 2,
      },
      { name: "TA34B_3.Stat_Comm", offset: 1533, type: "Bool", count: 1 },
      { name: "TA34B_3.Desactiva", offset: 1533, type: "Bool", count: 1 },
      // #*********************** TCP ***********************************
      { name: "TCP34B_4.Inputs", offset: 1534, type: "DWord", count: 2 },
      { name: "TCP34B_4.Outputs", offset: 1536, type: "Word", count: 1 },
      { name: "TCP34B_4.Horas_Trab_Act", offset: 1537, type: "Real", count: 2 },
      { name: "TCP34B_4.Horas_Trab_Guar", offset: 1539, type: "Real", count: 2 },
      {
        name: "TCP34B_4.Horas_Trab_Act_Dia",
        offset: 1541,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP34B_4.Horas_Trab_Guar_Dia",
        offset: 1543,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_4.Stat_Comm_MB", offset: 1545, type: "Bool", count: 1 },
      { name: "TCP34B_4.Stat_Comm", offset: 1545, type: "Bool", count: 1 },
      { name: "TCP34B_4.V_Avg", offset: 1546, type: "Real", count: 2 },
      { name: "TCP34B_4.I_Tot", offset: 1548, type: "Real", count: 2 },
      { name: "TCP34B_4.P_Tot", offset: 1550, type: "Real", count: 2 },
      { name: "TCP34B_4.PF_Avg", offset: 1552, type: "Real", count: 2 },
      { name: "TCP34B_4.V_12", offset: 1554, type: "Real", count: 2 },
      { name: "TCP34B_4.V_23", offset: 1556, type: "Real", count: 2 },
      { name: "TCP34B_4.V_31", offset: 1558, type: "Real", count: 2 },
      { name: "TCP34B_4.VLL_Avg", offset: 1560, type: "Real", count: 2 },
      { name: "TCP34B_4.THDV_tot", offset: 1562, type: "Real", count: 2 },
      { name: "TCP34B_4.THDI_tot", offset: 1564, type: "Real", count: 2 },
      { name: "TCP34B_4.V_1", offset: 1566, type: "Real", count: 2 },
      { name: "TCP34B_4.I_1", offset: 1568, type: "Real", count: 2 },
      { name: "TCP34B_4.V_2", offset: 1570, type: "Real", count: 2 },
      { name: "TCP34B_4.I_2", offset: 1572, type: "Real", count: 2 },
      { name: "TCP34B_4.V_3", offset: 1574, type: "Real", count: 2 },
      { name: "TCP34B_4.I_3", offset: 1576, type: "Real", count: 2 },
      { name: "TCP34B_4.Alarm1", offset: 1578, type: "DWord", count: 2 },
      { name: "TCP34B_4.Alarm2", offset: 1580, type: "DWord", count: 2 },
      {
        name: "TCP34B_4.T1_Imp_Act_Index",
        offset: 1582,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_4.Num_Air_On", offset: 1584, type: "Int", count: 1 },
      { name: "TCP34B_4.Desactiva", offset: 1585, type: "Bool", count: 1 },
      // #*********************** TA ***********************************
      { name: "TA34B_5.Inputs", offset: 1586, type: "DWord", count: 2 },
      { name: "TA34B_5.Outputs", offset: 1588, type: "Word", count: 1 },
      { name: "TA34B_5.Num_Air_On", offset: 1589, type: "Int", count: 1 },
      { name: "TA34B_5.Horas_Trab_Act", offset: 1590, type: "Real", count: 2 },
      { name: "TA34B_5.Horas_Trab_Guar", offset: 1592, type: "Real", count: 2 },
      {
        name: "TA34B_5.Horas_Trab_Act_Dia",
        offset: 1594,
        type: "Real",
        count: 2,
      },
      {
        name: "TA34B_5.Horas_Trab_Guar_Dia",
        offset: 1596,
        type: "Real",
        count: 2,
      },
      { name: "TA34B_5.Stat_Comm", offset: 1598, type: "Bool", count: 1 },
      { name: "TA34B_5.Desactiva", offset: 1598, type: "Bool", count: 1 },

      { name: "TA34B_6.Inputs", offset: 1599, type: "DWord", count: 2 },
      { name: "TA34B_6.Outputs", offset: 1601, type: "Word", count: 1 },
      { name: "TA34B_6.Num_Air_On", offset: 1602, type: "Int", count: 1 },
      { name: "TA34B_6.Horas_Trab_Act", offset: 1603, type: "Real", count: 2 },
      { name: "TA34B_6.Horas_Trab_Guar", offset: 1605, type: "Real", count: 2 },
      {
        name: "TA34B_6.Horas_Trab_Act_Dia",
        offset: 1607,
        type: "Real",
        count: 2,
      },
      {
        name: "TA34B_6.Horas_Trab_Guar_Dia",
        offset: 1609,
        type: "Real",
        count: 2,
      },
      { name: "TA34B_6.Stat_Comm", offset: 1611, type: "Bool", count: 1 },
      { name: "TA34B_6.Desactiva", offset: 1611, type: "Bool", count: 1 },
      // #*********************** TCP ***********************************
      { name: "TCP34B_7.Inputs", offset: 1612, type: "DWord", count: 2 },
      { name: "TCP34B_7.Outputs", offset: 1614, type: "Word", count: 1 },
      { name: "TCP34B_7.Horas_Trab_Act", offset: 1615, type: "Real", count: 2 },
      { name: "TCP34B_7.Horas_Trab_Guar", offset: 1617, type: "Real", count: 2 },
      {
        name: "TCP34B_7.Horas_Trab_Act_Dia",
        offset: 1619,
        type: "Real",
        count: 2,
      },
      {
        name: "TCP34B_7.Horas_Trab_Guar_Dia",
        offset: 1621,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_7.Stat_Comm_MB", offset: 1623, type: "Bool", count: 1 },
      { name: "TCP34B_7.Stat_Comm", offset: 1623, type: "Bool", count: 1 },
      { name: "TCP34B_7.V_Avg", offset: 1624, type: "Real", count: 2 },
      { name: "TCP34B_7.I_Tot", offset: 1626, type: "Real", count: 2 },
      { name: "TCP34B_7.P_Tot", offset: 1628, type: "Real", count: 2 },
      { name: "TCP34B_7.PF_Avg", offset: 1630, type: "Real", count: 2 },
      { name: "TCP34B_7.V_12", offset: 1632, type: "Real", count: 2 },
      { name: "TCP34B_7.V_23", offset: 1634, type: "Real", count: 2 },
      { name: "TCP34B_7.V_31", offset: 1636, type: "Real", count: 2 },
      { name: "TCP34B_7.VLL_Avg", offset: 1638, type: "Real", count: 2 },
      { name: "TCP34B_7.THDV_tot", offset: 1640, type: "Real", count: 2 },
      { name: "TCP34B_7.THDI_tot", offset: 1642, type: "Real", count: 2 },
      { name: "TCP34B_7.V_1", offset: 1644, type: "Real", count: 2 },
      { name: "TCP34B_7.I_1", offset: 1646, type: "Real", count: 2 },
      { name: "TCP34B_7.V_2", offset: 1648, type: "Real", count: 2 },
      { name: "TCP34B_7.I_2", offset: 1650, type: "Real", count: 2 },
      { name: "TCP34B_7.V_3", offset: 1652, type: "Real", count: 2 },
      { name: "TCP34B_7.I_3", offset: 1654, type: "Real", count: 2 },
      { name: "TCP34B_7.Alarm1", offset: 1656, type: "DWord", count: 2 },
      { name: "TCP34B_7.Alarm2", offset: 1658, type: "DWord", count: 2 },
      {
        name: "TCP34B_7.T1_Imp_Act_Index",
        offset: 1660,
        type: "Real",
        count: 2,
      },
      { name: "TCP34B_7.Num_Air_On", offset: 1662, type: "Int", count: 1 },
      { name: "TCP34B_7.Desactiva", offset: 1663, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS039 = () => {
  const piscinas = {
    PS039: [
      { name: "Num_Auto", offset: 1664, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1665, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1666, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1667, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1669, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1671, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1673, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1675, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1675, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1675, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1676, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1678, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1680, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1682, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1684, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1686, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1688, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1690, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1692, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS33B = () => {
  const piscinas = {
    PS33B: [
      { name: "Num_Auto", offset: 1693, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1694, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1695, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1696, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1698, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1700, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1702, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1704, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1704, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1704, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1705, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1707, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1709, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1711, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1713, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1715, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1717, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1719, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1721, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS33A = () => {
  const piscinas = {
    PS33A: [
      { name: "Num_Auto", offset: 1722, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1723, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1724, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1725, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1727, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1729, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1731, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1733, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1733, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1733, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1734, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1736, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1738, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1740, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1742, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1744, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1746, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1748, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1750, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS032 = () => {
  const piscinas = {
    PS032: [
      { name: "Num_Auto", offset: 1751, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1752, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1753, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1754, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1756, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1758, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1760, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1762, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1762, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1762, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1763, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1765, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1767, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1769, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1771, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1773, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1775, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1777, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1779, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS031 = () => {
  const piscinas = {
    PS031: [
      { name: "Num_Auto", offset: 1780, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1781, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1782, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1783, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1785, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1787, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1789, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1791, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1791, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1791, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1792, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1794, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1796, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1798, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1800, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1802, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1804, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1806, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1808, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS030 = () => {
  const piscinas = {
    PS030: [
      { name: "Num_Auto", offset: 1809, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1810, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1811, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1812, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1814, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1816, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1818, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1820, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1820, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1820, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1821, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1823, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1825, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1827, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1829, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1831, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1833, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1835, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1837, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS029 = () => {
  const piscinas = {
    PS029: [
      { name: "Num_Auto", offset: 1838, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1839, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1840, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1841, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1843, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1845, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1847, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1849, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1849, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1849, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1850, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1852, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1854, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1856, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1858, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1860, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1862, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1864, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1866, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS028 = () => {
  const piscinas = {
    PS028: [
      { name: "Num_Auto", offset: 1867, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1868, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1869, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1870, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1872, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1874, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1876, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1878, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1878, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1878, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1879, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1881, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1883, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1885, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1887, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1889, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1891, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1893, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1895, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS027 = () => {
  const piscinas = {
    PS027: [
      { name: "Num_Auto", offset: 1896, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1897, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1898, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1899, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1901, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1903, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1905, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1907, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1907, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1907, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1908, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1910, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1912, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1914, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1916, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1918, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1920, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1922, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1924, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS026 = () => {
  const piscinas = {
    PS026: [
      { name: "Num_Auto", offset: 1925, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1926, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1927, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1928, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1930, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1932, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1934, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1936, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1936, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1936, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1937, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1939, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1941, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1943, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1945, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1947, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1949, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1951, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1953, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS025 = () => {
  const piscinas = {
    PS025: [
      { name: "Num_Auto", offset: 1954, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1955, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1956, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1957, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1959, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1961, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1963, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1965, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1965, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1965, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1966, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1968, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1970, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 1972, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 1974, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 1976, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 1978, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 1980, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 1982, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS024 = () => {
  const piscinas = {
    PS024: [
      { name: "Num_Auto", offset: 1983, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 1984, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 1985, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 1986, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 1988, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 1990, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 1992, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 1994, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 1994, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 1994, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 1995, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 1997, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 1999, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2001, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2003, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2005, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2007, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2009, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2011, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS22A = () => {
  const piscinas = {
    PS22A: [
      { name: "Num_Auto", offset: 2012, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 2013, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 2014, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 2015, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 2017, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 2019, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 2021, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 2023, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 2023, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 2023, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 2024, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 2026, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 2028, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2030, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2032, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2034, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2036, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2038, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2040, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS22B = () => {
  const piscinas = {
    PS22B: [
      { name: "Num_Auto", offset: 2041, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 2042, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 2043, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 2044, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 2046, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 2048, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 2050, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 2052, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 2052, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 2052, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 2053, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 2055, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 2057, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2059, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2061, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2063, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2065, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2067, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2069, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPC036 = () => {
  const piscinas = {
    PC036: [
      { name: "Num_Auto", offset: 2070, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 2071, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 2072, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 2073, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 2075, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 2077, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 2079, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 2081, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 2081, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 2081, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 2082, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 2084, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 2086, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2088, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2090, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2092, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2094, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2096, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2098, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS34B = () => {
  const piscinas = {
    PS34B: [
      { name: "Num_Auto", offset: 2099, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 2100, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 2101, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 2102, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 2104, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 2106, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 2108, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 2110, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 2110, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 2110, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 2111, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 2113, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 2115, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2117, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2119, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2121, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2123, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2125, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2127, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsPS035 = () => {
  const piscinas = {
    PS035: [
      { name: "Num_Auto", offset: 2128, type: "Int", count: 1 },
      { name: "Num_Air_On", offset: 2128, type: "Int", count: 1 },
      { name: "Algun_Air_On", offset: 2130, type: "Bool", count: 1 },
      { name: "Hora_Ini_1", offset: 2131, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2", offset: 2133, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1", offset: 2135, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2", offset: 2137, type: "Time_Of_Day", count: 2 },
      { name: "Alarm_Adver", offset: 2139, type: "Byte", count: 1 },
      { name: "Run_Rem", offset: 2139, type: "Byte", count: 1 },
      { name: "Bloq_Auto_Hora", offset: 2139, type: "Byte", count: 1 },
      { name: "Ener_Dia_Act", offset: 2140, type: "Real", count: 2 },
      { name: "Ener_Dia_Pass", offset: 2142, type: "Real", count: 2 },
      { name: "Ener_Total_Index", offset: 2144, type: "Real", count: 2 },
      { name: "Pot_Inst", offset: 2146, type: "Real", count: 2 },
      { name: "Horas_Trab_Sem_Pas", offset: 2148, type: "DInt", count: 2 },
      { name: "Horas_Trab_Sem_Act", offset: 2150, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Act", offset: 2152, type: "DInt", count: 2 },
      { name: "Horas_Trab_Dia_Pas", offset: 2154, type: "DInt", count: 2 },
      { name: "Sel_Horario", offset: 2156, type: "Bool", count: 1 },
    ],
  };

  return piscinas;
};

const arregloTagsGLOB = () => {
  const piscinas = {
    GLOB: [
      { name: "Hora_Ini_1_GLOB", offset: 2157, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Ini_2_GLOB", offset: 2159, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_1_GLOB", offset: 2161, type: "Time_Of_Day", count: 2 },
      { name: "Hora_Fin_2_GLOB", offset: 2163, type: "Time_Of_Day", count: 2 },
      { name: "Sel_Horario", offset: 2165, type: "Bool", count: 1 },
      { name: "Stat_Transf", offset: 2165, type: "Bool", count: 1 },
      { name: "Status_Gen", offset: 2165, type: "Bool", count: 1 },
      { name: "Dia_Corte", offset: 2172, type: "Int", count: 1 },
      { name: "Aviso_Fin_Dia", offset: 2173, type: "Bool", count: 1 },
      
    ],
  };

  return piscinas;
};

const arregloTagsInfoGeneralPS = () => {
  const piscinas = {
    PSInfoOnOff: [
      { name: "PS035.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS34B.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PC036.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS22B.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS22A.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS024.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS025.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS026.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS027.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS028.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS029.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS030.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS031.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS032.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS33A.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS33B.Algun_Air_On", offset: 2174, type: "Bool", count: 1 },
      { name: "PS039.Algun_Air_On", offset: 2175, type: "Bool", count: 1 },

      { name: "PS035.Num_Air_On", offset: 2176, type: "Int", count: 1 },
      { name: "PS34B.Num_Air_On", offset: 2177, type: "Int", count: 1 },
      { name: "PC036.Num_Air_On", offset: 2178, type: "Int", count: 1 },
      { name: "PS22B.Num_Air_On", offset: 2179, type: "Int", count: 1 },
      { name: "PS22A.Num_Air_On", offset: 2180, type: "Int", count: 1 },
      { name: "PS024.Num_Air_On", offset: 2181, type: "Int", count: 1 },
      { name: "PS025.Num_Air_On", offset: 2182, type: "Int", count: 1 },
      { name: "PS026.Num_Air_On", offset: 2183, type: "Int", count: 1 },
      { name: "PS027.Num_Air_On", offset: 2184, type: "Int", count: 1 },
      { name: "PS028.Num_Air_On", offset: 2185, type: "Int", count: 1 },
      { name: "PS029.Num_Air_On", offset: 2186, type: "Int", count: 1 },
      { name: "PS030.Num_Air_On", offset: 2187, type: "Int", count: 1 },
      { name: "PS031.Num_Air_On", offset: 2188, type: "Int", count: 1 },
      { name: "PS032.Num_Air_On", offset: 2189, type: "Int", count: 1 },
      { name: "PS33A.Num_Air_On", offset: 2190, type: "Int", count: 1 },
      { name: "PS33B.Num_Air_On", offset: 2191, type: "Int", count: 1 },
      { name: "PS039.Num_Air_On", offset: 2192, type: "Int", count: 1 },

      { name: "PS035.Alarm_Adver", offset: 2193, type: "Byte", count: 1 },
      { name: "PS34B.Alarm_Adver", offset: 2193, type: "Byte", count: 1 },
      { name: "PC036.Alarm_Adver", offset: 2194, type: "Byte", count: 1 },
      { name: "PS22B.Alarm_Adver", offset: 2194, type: "Byte", count: 1 },
      { name: "PS22A.Alarm_Adver", offset: 2195, type: "Byte", count: 1 },
      { name: "PS024.Alarm_Adver", offset: 2195, type: "Byte", count: 1 },
      { name: "PS025.Alarm_Adver", offset: 2196, type: "Byte", count: 1 },
      { name: "PS026.Alarm_Adver", offset: 2196, type: "Byte", count: 1 },
      { name: "PS027.Alarm_Adver", offset: 2197, type: "Byte", count: 1 },
      { name: "PS028.Alarm_Adver", offset: 2197, type: "Byte", count: 1 },
      { name: "PS029.Alarm_Adver", offset: 2198, type: "Byte", count: 1 },
      { name: "PS030.Alarm_Adver", offset: 2198, type: "Byte", count: 1 },
      { name: "PS031.Alarm_Adver", offset: 2199, type: "Byte", count: 1 },
      { name: "PS032.Alarm_Adver", offset: 2199, type: "Byte", count: 1 },
      { name: "PS33A.Alarm_Adver", offset: 2200, type: "Byte", count: 1 },
      { name: "PS33B.Alarm_Adver", offset: 2200, type: "Byte", count: 1 },
      { name: "PS039.Alarm_Adver", offset: 2201, type: "Byte", count: 1 },
    ],
  };

  return piscinas;
};

module.exports = {
  arregloTagsPS039_TA039,
  arregloTagsPS33B_TA33B,
  arregloTagsPS33A_TA33A,
  arregloTagsPS032_TA032,
  arregloTagsPS031_TA031,
  arregloTagsPS030_TA030,
  arregloTagsPS029_TA029,
  arregloTagsPS028_TA028,
  arregloTagsPS027_TA027,
  arregloTagsPS026_TA026,
  arregloTagsPS024_TA024,
  arregloTagsPS025_TA025,
  arregloTagsPS22A_TA22A,
  arregloTagsPS22B_TA22B,
  arregloTagsPC036_TA036,
  arregloTagsPS035_TA035,
  arregloTagsPS34B_TA34B,
  arregloTagsPS039,
  arregloTagsPS33B,
  arregloTagsPS33A,
  arregloTagsPS032,
  arregloTagsPS031,
  arregloTagsPS030,
  arregloTagsPS029,
  arregloTagsPS028,
  arregloTagsPS027,
  arregloTagsPS026,
  arregloTagsPS025,
  arregloTagsPS024,
  arregloTagsPS22A,
  arregloTagsPS22B,
  arregloTagsPC036,
  arregloTagsPS34B,
  arregloTagsPS035,
  arregloTagsGLOB,
  arregloTagsInfoGeneralPS
};
