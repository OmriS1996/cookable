# Server needed?

Yes. Not for the basic MVP but for future features like personal user managment and recipe sharing and feedback.

# Mobile vs Web

Mobile first, it has all the advantages for the porpuse of this app, as something intended mostly for young adult use, also has more monitization and scale possibilities.

# Programing language

Probably React Native, mostly because it's the only one I know, but also widely used and should be easily translated for different platforms.

# Database?

MVP will use local storage, but for the future, especially once a server will be needed, will need to choose between SQL or Mongo?
Will need a deeper thought after closing in on the data structure.

# Data structure

Best solution for the future will probably be to follow similar rules of grocery shopping websites and Smart Fridges systems, assuming they already did similar researches and for the purpose of integrating with their system in the futures.

```json
{
    category: {
        id: number,
        name: string,
        description: string,

    },
    measureType: {
        id: number,
        measureName: string
    },
    ingredient: {
        id: number,
        name: string,
        categoryId: number,
        measureTypeId: number,
    },
    myStock: [{
        ingredientId: number
        amount: number
    }],
    recipes: {
        recipeId: number,
        imageURL: string,
        name: string,
        description: string,
        keyword: [string],
        ingredients: [{
            ingredientId: number
            amount: number
        }]
    }
}

```
