import barinakMelegiHeps from "../data/heps/barinakMelegi";
import barinakMelegiTrend from "../data/trend/barinakMelegi";

export default [
    {
        name: "Pet Supplies",
        id: Math.random(),
        categories: [
            {
                name: "Barınak Meleği",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx < 7),
            },
            {
                name: "Haytap",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Kızılay",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 10 && idx < 17),
            },
            {
                name: "AFAD",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Feeding and Watering Supplies",
        id: Math.random(),
        categories: [
            {
                name: "AFAD",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
            {
                name: "Cansuyu",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 3 && idx < 17),
            },
        ],
    },
];
