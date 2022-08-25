import barinakMelegiHeps from "../data/heps/barinakMelegi";
import barinakMelegiTrend from "../data/trend/barinakMelegi";

export default [
    {
        name: "Barınak Meleği",
        id: Math.random(),
        categories: [
            {
                name: "Pet Supplies",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx < 7),
            },
            {
                name: "Grooming",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Health Care",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 10 && idx < 17),
            },
            {
                name: "Feeding and Watering Supplies",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Haytap",
        id: Math.random(),
        categories: [
            {
                name: "Cat Socks",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx < 7),
            },
            {
                name: "Dog Toys",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Collars, Harnesses & Leashes",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Training & Behavior Aids",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Kızılay",
        id: Math.random(),
        categories: [
            {
                name: "Feeding and Watering Supplies",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx < 7),
            },
            {
                name: "Collars, Harnesses & Leashes",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Cat Toys",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Grooming",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
];
