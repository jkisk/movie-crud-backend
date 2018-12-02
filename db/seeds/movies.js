const tableName = 'movies'
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, title: 'Boyhood', director: 'Richard Linklater', year: 2014, rating: 5, poster: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiuqt3Lh_PeAhWkg-AKHQhfBCkQjRx6BAgBEAU&url=http%3A%2F%2Fgoogle.com%2Fsearch%3Ftbm%3Disch%26q%3DBoyhood&psig=AOvVaw0S6vQw9jFOZf-F2juRC7i-&ust=1543356086373367' },
        { id: 2, title: 'The Sound of Music', director: 'Robert Wise', year: 1965, rating: 3, poster: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjvsobAh_PeAhVhneAKHT0mDN8QjRx6BAgBEAU&url=http%3A%2F%2Fgoogle.com%2Fsearch%3Ftbm%3Disch%26q%3DThe%2BSound%2Bof%2BMusic&psig=AOvVaw25CgvdHrnLw4u8u4RAaB-4&ust=1543356061555151' },
        { id: 3, title: "Antonia's Line", director: 'Marleen Gorris', year: 1995, rating: 5, poster: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiBvtX2h_PeAhUPU98KHaKiDgwQjRx6BAgBEAU&url=http%3A%2F%2Fgoogle.com%2Fsearch%3Ftbm%3Disch%26q%3DAntonia%2527s%2BLine&psig=AOvVaw3ikrnZ8iE0FnnKqleVb3u8&ust=1543356176442260' },
      ]).then(() => {

        return knex.raw(`SELECT setval('${tableName}_id_seq', (SELECT MAX(id) FROM ${tableName}));`)
      })
    })
  }
