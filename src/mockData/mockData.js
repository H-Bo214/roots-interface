// Get a recipe
export const mockRecipe = 
{
 id: '1',
 recipeName: 'Chicken Parm',
 recipeAuthor: 'Tyler the creator',
 description: 'Cillum amet aliqua aliquip consectetur sunt labore.', /* option to be empty*/
 instructions: 'Ea fugiat enim id eiusmod ullamco. Minim enim officia non in occaecat ea aute culpa aliquip eu. Incididunt consequat dolor reprehenderit adipisicing proident in enim mollit cupidatat aute. Incididunt velit nisi proident et amet nisi consectetur ad exercitation cillum ex cillum. Aute qui non ipsum fugiat officia aliquip do adipisicing anim proident. Veniam eiusmod reprehenderit et laboris aliqua elit anim proident velit commodo. Reprehenderit anim velit officia est est ad ut sit.',
 ingredients: [
   {
     name: 'Chicken',
     unit: '', /* option to be empty*/
     measurement: 1,
   },
   {
     name: 'Parmesan',
     unit: 'lb', /* option to be empty*/
     measurement: 1,
   },
 ]
} 

export const mockCookBook  =
{
  name: 'The Creator family cookbook',
  id: '10',
  author: {
    userId: '2',
    userName: 'Tyler'
  },
  // members: [
  //   {
  //     userId: 'string',
  //     userName: 'string',
  //   },
  //   {
  //     userId: 'string',
  //     userName: 'string',
  //   },
  // ],
  recipes: [
    {
      recipeId: '1',
      recipeName: 'Chicken Parm'
    },
    {
      recipeId: '2',
      recipeName: 'Vodka'
    },
  ]
}

export const mockUser = 
{
  name: 'Tyler',
  userId: '2',
  ownedBooks: [
    {
      bookId: '10',
      bookName: 'The Creator family cookbook'
    },
    {
      bookId: '3',
      bookName: 'Grandmas cookbook'
    }
  ]
}

