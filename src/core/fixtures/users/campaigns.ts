import barinakMelegiHeps from "../data/heps/barinakMelegi";
import barinakMelegiTrend from "../data/trend/barinakMelegi";

export default [
    {
        name: "Barınak Meleği",
        id: 111,
        categories: [
            {
                name: "Electronics",
                id: 1111,
                items: barinakMelegiHeps.filter((each, idx) => idx < 7),
            },
            {
                name: "Books",
                id: 2222,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Health Care",
                id: 3333,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 10 && idx < 17),
            },
            {
                name: "Feed",
                id: 4444,
                items: barinakMelegiHeps.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Haytap",
        id: 222,
        categories: [
            {
                name: "Cat Socks",
                id: 11111,
                items: barinakMelegiTrend.filter((each, idx) => idx < 7),
            },
            {
                name: "Dog Toys",
                id: 22222,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Electronics",
                id: 33333,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Furniture",
                id: 44444,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
    {
        name: "Kızılay",
        id: 333,
        categories: [
            {
                name: "Books",
                id: 111111,
                items: barinakMelegiTrend.filter((each, idx) => idx < 7),
            },
            {
                name: "Baby Care",
                id: 222222,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 6 && idx < 10),
            },
            {
                name: "Home and Kitchen",
                id: 333333,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 10 && idx < 16),
            },
            {
                name: "Luggage",
                id: 444444,
                items: barinakMelegiTrend.filter((each, idx) => idx >= 16 && idx <= 20),
            },
        ],
    },
];
