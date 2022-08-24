import barinakMelegiHeps from "../data/heps/barinakMelegi";
import barinakMelegiTrend from "../data/trend/barinakMelegi";

export default [
    {
        name: "Pet Supplies",
        id: 111,
        categories: [
            {
                name: "Barınak Meleği",
                id: 1111,
                items: barinakMelegiHeps.filter((each, idx) => idx < 7),
            },
            {
                name: "Haytap",
                id: 2222,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Kızılay",
                id: 3333,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 10 && idx < 17),
            },
            {
                name: "AFAD",
                id: 4444,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Electronics",
        id: 222,
        categories: [
            {
                name: "AFAD",
                id: 44444,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
            {
                name: "Cansuyu",
                id: 3333,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 3 && idx < 17),
            },
        ],
    },
];
