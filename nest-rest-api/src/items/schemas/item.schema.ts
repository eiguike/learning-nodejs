import * as moongose from 'mongoose';

export const ItemSchema = new moongose.Schema({
  name: String,
  qty: Number,
  description: String
});
