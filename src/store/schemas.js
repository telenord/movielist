import { Schema, schema, arrayOf } from 'normalizr';

 const movieSchema = new schema.Entity('movie');
 const movieListSchema = new schema.Entity('movieList');
 const genreSchema = new schema.Entity('genre');
 const companySchema = new schema.Entity('company');

// movieListSchema.define({
//   movies: [movieSchema]
// });
//
// movieSchema.define({
//   id: Number,
//   adult: Boolean,
//   backdrop_path: String,
//   production_companies:  [ companySchema ],
//   status: String,
//   genres: [ genreSchema ],
//   title: String,
//   overview: String,
// });
//
// genreSchema.define({
//   id: Number,
//   name: String
// });
//
// companySchema.define({
//   id: Number,
//   logo_path: String,
//   name: String,
//   origin_country: String
// });

export { movieSchema, movieListSchema, genreSchema, companySchema };
