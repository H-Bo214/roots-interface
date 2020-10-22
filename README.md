### Working model for the data needed and sent between FE and BE.
* Get a Recipe
 ```
 {
  id: 'string',
  recipeName: 'string',
  recipeAuthor: 'string',
  description: 'sting', /* option to be empty*/
  instructions: 'string',
  ingredients: [
    {
      name: 'sting',
      unit: 'sting', /* option to be empty*/
      measurement: 0,
    },
    {
      name: 'sting',
      unit: 'sting', /* option to be empty*/
      measurement: 0,
    },
  ]
 } 
 ```

* Get a CookBook
```
{
  name: 'string'
  id: 'string'
  author: {
    userId: 'string',
    userName: 'string'
  }
  members: [
    {
      userId: 'string',
      userName: 'string',
    },
    {
      userId: 'string',
      userName: 'string',
    },
  ],
  recipes: [
    {
      recipeId: 'string',
      recipeName: 'string'
    },
    {
      recipeId: 'string',
      recipeName: 'string'
    },
  ]
}
```

* Get a Users Owned Books
```
[
  {
    bookId: 'string',
    bookName: 'string'
  },
  {
    bookId: 'string',
    bookName: 'string'
  }
]
```

* Submit a Recipe
 ```
 {
  recipeName: 'string',
  recipeAuthor: 'string',
  description: 'sting', /* option to be empty*/
  instructions: 'string',
  ingredients: [
    {
      name: 'sting',
      unit: 'sting', /* option to be empty*/
      measurement: 0,
    },
    {
      name: 'sting',
      unit: 'sting', /* option to be empty*/
      measurement: 0,
    },
  ]
 }
 ```

*  Add a CookBook
```
{
  name: 'string'
  author: {
    userId: 'string',
    userName: 'string'
  }
  members: [
    {
      userId: 'string',
      userName: 'string',
    },
    {
      userId: 'string',
      userName: 'string',
    },
  ],
  recipes: [
    {
      recipeId: 'string',
      recipeName: 'string'
    },
    {
      recipeId: 'string',
      recipeName: 'string'
    },
  ]
}
```

#### Future data interations
* Get CookBook Users
* Get Users List
* Add a User to a Cookbook
* Get Books User is a member of

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

