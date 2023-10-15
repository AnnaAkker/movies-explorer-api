const mongoose = require('mongoose');

const { urlRegex } = require('../regex/regex');

const movieSchema = new mongoose.Schema({

  country: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Ошибка валидации URL адреса',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Ошибка валидации URL адреса',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Ошибка валидации URL адреса',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле ввода должно быть заполнено'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
