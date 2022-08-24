import barinakMelegiHeps from "../data/heps/barinakMelegi";
import barinakMelegiTrend from "../data/trend/barinakMelegi";

export default [
    {
        name: "Barınak Meleği",
        id: Math.random(),
        categories: [
            {
                name: "Electronics",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx < 7),
            },
            {
                name: "Books",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Health Care",
                id: Math.random(),
                items: barinakMelegiHeps.filter((each, idx) => idx >= 10 && idx < 17),
            },
            {
                name: "Feed",
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
                name: "Electronics",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Furniture",
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
                name: "Books",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx < 7),
            },
            {
                name: "Baby Care",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Home and Kitchen",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Luggage",
                id: Math.random(),
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
];
